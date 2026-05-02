class GameEngine {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 960;
        this.canvas.height = 640;
        
        this.currentScene = null;
        this.dialogues = [];
        this.currentDialogueIndex = 0;
        this.isDialogueActive = false;
        
        this.gameState = {
            currentChapter: 1,
            currentScene: 0,
            unlockedChapters: [1],
            unlockedGallery: [],
            flags: {}
        };
        
        this.keys = {};
        this.lastTime = 0;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key] = true;
            if (e.key === 'Escape') {
                this.toggleMenu();
            }
            if (e.key === ' ' || e.key === 'Enter') {
                this.advanceDialogue();
            }
            if (e.key === 'ArrowLeft') {
                this.previousDialogue();
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.key] = false;
        });
        
        this.canvas.addEventListener('click', () => {
            this.advanceDialogue();
        });
        
        const prevBtn = document.getElementById('btn-prev-dialogue');
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.previousDialogue();
            });
        }
    }
    
    toggleMenu() {
        const menu = document.getElementById('menu-overlay');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }
    
    loadScene(scene) {
        this.currentScene = scene;
        this.dialogues = scene.dialogues || [];
        this.currentDialogueIndex = 0;
        
        if (this.dialogues.length > 0) {
            this.showDialogue();
        }
    }
    
    showDialogue() {
        this.isDialogueActive = true;
        const dialogueBox = document.getElementById('dialogue-box');
        const speaker = document.getElementById('dialogue-speaker');
        const text = document.getElementById('dialogue-text');
        const prevBtn = document.getElementById('btn-prev-dialogue');
        const faceCanvas = document.getElementById('dialogue-face');
        const faceCtx = faceCanvas.getContext('2d');
        const faceContainer = document.getElementById('dialogue-face-container');
        
        const dialogue = this.dialogues[this.currentDialogueIndex];
        speaker.textContent = dialogue.speaker || '';
        text.textContent = dialogue.text;
        
        const sp = dialogue.speaker || '';
        let faceImg = null;
        let flipFace = false;
        
        if (sp === '我' || sp.includes('昕') || sp.includes('女主')) {
            faceImg = PixelArt.images.girlFace;
        } else if (sp === '申玮玮' || sp.includes('玮玮') || sp.includes('男主')) {
            faceImg = PixelArt.images.boyFace;
            flipFace = true;
        } else if (sp.includes('昕宝爸爸') || sp === '昕爸' || (sp.includes('爸爸') && !sp.includes('申'))) {
            faceImg = PixelArt.images.gyxDadFace;
        } else if (sp.includes('昕宝妈妈') || sp === '昕妈' || (sp.includes('妈妈') && !sp.includes('申'))) {
            faceImg = PixelArt.images.gyxMomFace;
        } else if (sp.includes('老师') || sp.includes('教师')) {
            faceImg = PixelArt.images.teacherFace;
        } else if (sp.includes('申爸') || (sp.includes('申') && sp.includes('爸爸'))) {
            faceImg = PixelArt.images.sfwDadFace;
        } else if (sp.includes('申妈') || (sp.includes('申') && sp.includes('妈妈'))) {
            faceImg = PixelArt.images.sfwMomFace;
        }
        
        faceCtx.clearRect(0, 0, 144, 144);
        if (faceImg) {
          if (flipFace) {
            faceCtx.save();
            faceCtx.translate(144, 0);
            faceCtx.scale(-1, 1);
            faceCtx.drawImage(faceImg, 0, 0, 144, 144, 0, 0, 144, 144);
            faceCtx.restore();
          } else {
            faceCtx.drawImage(faceImg, 0, 0, 144, 144, 0, 0, 144, 144);
          }
          faceContainer.style.display = 'flex';
        } else {
          faceContainer.style.display = 'none';
        }
        
        if (prevBtn) {
            prevBtn.disabled = this.currentDialogueIndex === 0;
        }
        
        dialogueBox.classList.remove('hidden');
    }
    
    previousDialogue() {
        if (!this.isDialogueActive) return;
        if (this.currentDialogueIndex <= 0) return;
        
        this.currentDialogueIndex--;
        this.showDialogue();
    }
    
    advanceDialogue() {
        if (!this.isDialogueActive) return;
        
        this.currentDialogueIndex++;
        
        if (this.currentDialogueIndex >= this.dialogues.length) {
            this.endDialogue();
        } else {
            this.showDialogue();
        }
    }
    
    endDialogue() {
        this.isDialogueActive = false;
        document.getElementById('dialogue-box').classList.add('hidden');
        
        if (this.currentScene && this.currentScene.onComplete) {
            this.currentScene.onComplete();
        }
    }
    
    update(deltaTime) {
        if (this.currentScene && this.currentScene.update) {
            this.currentScene.update(deltaTime);
        }
    }
    
    render() {
        this.ctx.fillStyle = '#1a1a2e';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.currentScene && this.currentScene.render) {
            this.currentScene.render(this.ctx, this.currentDialogueIndex, 0);
        }
    }
    
    renderWithTime(time) {
        this.ctx.fillStyle = '#1a1a2e';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        if (this.currentScene && this.currentScene.render) {
            this.currentScene.render(this.ctx, this.currentDialogueIndex, time);
        }
    }
    
    gameLoop(timestamp) {
        const deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;
        
        this.update(deltaTime);
        this.render();
        
        requestAnimationFrame((t) => this.gameLoop(t));
    }
    
    start() {
        requestAnimationFrame((t) => this.gameLoop(t));
    }
    
    saveGame() {
        localStorage.setItem('loveRPG_save', JSON.stringify(this.gameState));
        alert('进度已保存！💾');
    }
    
    loadGame() {
        const save = localStorage.getItem('loveRPG_save');
        if (save) {
            this.gameState = JSON.parse(save);
            return true;
        }
        return false;
    }
    
    unlockChapter(chapter) {
        if (!this.gameState.unlockedChapters.includes(chapter)) {
            this.gameState.unlockedChapters.push(chapter);
        }
    }
    
    unlockGalleryItem(item) {
        if (!this.gameState.unlockedGallery.includes(item)) {
            this.gameState.unlockedGallery.push(item);
        }
    }
}
