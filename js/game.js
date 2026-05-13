class Game {
    constructor() {
        window.game = this;
        this.engine = new GameEngine();
        this.chapters = Chapters.getAllChapters(this.engine);
        this.galleryItems = Gallery.getItems();
        
        this.currentChapterIndex = 0;
        this.currentSceneIndex = 0;
        this.gameTime = 0;
        
        this.setupEventListeners();
    }
    
    setupEventListeners() {
        document.getElementById('btn-start').addEventListener('click', () => this.startGame());
        document.getElementById('btn-continue').addEventListener('click', () => this.hideMenu());
        document.getElementById('btn-chapters').addEventListener('click', () => this.showChapterSelect());
        document.getElementById('btn-gallery').addEventListener('click', () => this.showGallery());
        document.getElementById('btn-save').addEventListener('click', () => this.saveGame());
        document.getElementById('btn-back-menu').addEventListener('click', () => this.backToMenuFromChapter());
        document.getElementById('btn-back-gallery').addEventListener('click', () => this.backToMenuFromGallery());
    }
    
    async startGame() {
        document.getElementById('title-screen').classList.add('hidden');
        this.currentChapterIndex = 0;
        this.currentSceneIndex = 0;
        this.engine.gameState.currentChapter = 1;

        await PixelArt.loadImages();

        this.playScene();
        this.engine.start();
    }
    
    async loadGame() {
        if (this.engine.loadGame()) {
            document.getElementById('title-screen').classList.add('hidden');
            this.currentChapterIndex = this.engine.gameState.currentChapter - 1;
            this.currentSceneIndex = this.engine.gameState.currentScene || 0;
            
            await PixelArt.loadImages();
            
            this.playScene();
            this.engine.start();
        } else {
            alert('没有找到存档！');
        }
    }
    
    getCurrentScene() {
        const chapter = this.chapters[this.currentChapterIndex];
        if (chapter && chapter.scenes[this.currentSceneIndex]) {
            return chapter.scenes[this.currentSceneIndex];
        }
        return null;
    }
    
    playScene() {
        const scene = this.getCurrentScene();
        if (scene) {
            const wrappedScene = this.wrapScene(scene);
            this.engine.loadScene(wrappedScene);
        }
    }
    
    wrapScene(scene) {
        const game = this;
        const originalOnComplete = scene.onComplete;
        
        return {
            ...scene,
            dialogues: scene.dialogues,
            render: scene.render,
            onComplete() {
                if (originalOnComplete) {
                    originalOnComplete.call(scene);
                }
                
                game.currentSceneIndex++;
                game.engine.gameState.currentScene = game.currentSceneIndex;
                
                const chapter = game.chapters[game.currentChapterIndex];
                
                if (game.currentSceneIndex >= chapter.scenes.length) {
                    if (game.currentChapterIndex < game.chapters.length - 1) {
                        game.currentChapterIndex++;
                        game.currentSceneIndex = 0;
                        game.engine.gameState.currentChapter = game.currentChapterIndex + 1;
                        game.engine.gameState.currentScene = 0;
                        
                        setTimeout(() => {
                            game.playScene();
                        }, 100);
                    }
                } else {
                    setTimeout(() => {
                        game.playScene();
                    }, 100);
                }
            }
        };
    }
    
    toggleMenu() {
        const menu = document.getElementById('menu-overlay');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }
    
    hideMenu() {
        document.getElementById('menu-overlay').classList.add('hidden');
    }
    
    showChapterSelect() {
        document.getElementById('menu-overlay').classList.add('hidden');
        document.getElementById('chapter-select').classList.remove('hidden');
        this.renderChapterList();
    }
    
    renderChapterList() {
        const list = document.getElementById('chapter-list');
        list.innerHTML = '';
        
        this.chapters.forEach((chapter, index) => {
            const unlocked = this.engine.gameState.unlockedChapters.includes(chapter.id);
            const item = document.createElement('div');
            item.className = `chapter-item ${unlocked ? '' : 'locked'}`;
            item.textContent = chapter.name;
            
            if (unlocked) {
                item.addEventListener('click', () => {
                    this.currentChapterIndex = index;
                    this.currentSceneIndex = 0;
                    this.engine.gameState.currentChapter = chapter.id;
                    this.engine.gameState.currentScene = 0;
                    document.getElementById('chapter-select').classList.add('hidden');
                    this.playScene();
                });
            }
            
            list.appendChild(item);
        });
    }
    
    backToMenuFromChapter() {
        document.getElementById('chapter-select').classList.add('hidden');
        document.getElementById('menu-overlay').classList.remove('hidden');
    }
    
    showGallery() {
        document.getElementById('menu-overlay').classList.add('hidden');
        document.getElementById('gallery').classList.remove('hidden');
        this.renderGalleryGrid();
    }
    
    renderGalleryGrid() {
        const grid = document.getElementById('gallery-grid');
        grid.innerHTML = '';
        
        this.galleryItems.forEach(item => {
            const unlocked = this.engine.gameState.unlockedGallery.includes(item.id);
            const div = document.createElement('div');
            div.className = `gallery-item ${unlocked ? '' : 'locked'}`;
            div.textContent = unlocked ? item.emoji : '🔒';
            div.title = unlocked ? `${item.name}: ${item.description}` : '未解锁';
            
            grid.appendChild(div);
        });
    }
    
    backToMenuFromGallery() {
        document.getElementById('gallery').classList.add('hidden');
        document.getElementById('menu-overlay').classList.remove('hidden');
    }
    
    saveGame() {
        this.engine.saveGame();
    }
}

const game = new Game();

const originalUpdate = game.engine.update.bind(game.engine);
game.engine.update = (deltaTime) => {
    game.gameTime += deltaTime;
    originalUpdate(deltaTime);
};

const originalRender = game.engine.render.bind(game.engine);
game.engine.render = () => {
    game.engine.renderWithTime(game.gameTime);
};
