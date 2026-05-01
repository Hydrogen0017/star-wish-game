class PixelArt {
  static images = {};
  static imagesLoaded = false;
  static loadPromise = null;

  static async loadImages() {
    const imagePaths = {
      girlFace: 'img/faces/girl_face.png',
      boyFace: 'img/faces/boy_face.png',
      classroom: 'img/scenes/classroom.png',
      bedroom: 'img/scenes/bedroom.png',
      nightMarket: 'img/scenes/night_market.png',
      highSchool: 'img/scenes/high_school.png',
      university: 'img/scenes/university.png',
      trainStation: 'img/scenes/train_station.png',
      park: 'img/scenes/park.png',
      suzhouGarden: 'img/scenes/suzhou_garden.png',
      nanjing: 'img/scenes/nanjing.png',
      xuanwuLake: 'img/scenes/xuanwu_lake.png',
      bank: 'img/scenes/bank.png',
      home: 'img/scenes/home.png',
      diningTable: 'img/scenes/dining_table.png',
      graduation: 'img/scenes/graduation.png',
      summerRoom: 'img/scenes/summer_room.png',
      onlineClass: 'img/scenes/online_class.png',
      travelStart: 'img/scenes/travel_start.png',
      foodHotpot: 'img/scenes/food_hotpot.png',
      foodBbq: 'img/scenes/food_bbq.png',
      foodTea: 'img/scenes/food_tea.png',
      foodDessert: 'img/scenes/food_dessert.png',
      boyWorkplace: 'img/scenes/boy_workplace.png',
      giftShopping: 'img/scenes/gift_shopping.png',
      romanticEnding: 'img/scenes/romantic_ending.png',
      starJar: 'img/props/star_jar.png',
      drone: 'img/props/drone.png'
    };

    const promises = [];
    for (const [key, path] of Object.entries(imagePaths)) {
      const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.images[key] = img;
          resolve();
        };
        img.onerror = (e) => {
          console.warn(`Failed to load ${path}`, e);
          resolve();
        };
        img.src = path;
      });
      promises.push(promise);
    }

    await Promise.all(promises);
    this.imagesLoaded = true;
  }

  static drawGirl(ctx, x, y, scale = 3) {
    if (this.images.girlFace) {
      ctx.drawImage(this.images.girlFace, x - 50 * scale, y - 100 * scale, 100 * scale, 100 * scale);
    } else {
      ctx.fillStyle = '#ffb6c1';
      ctx.beginPath();
      ctx.arc(x, y - 60, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffc0cb';
      ctx.fillRect(x - 20, y - 35, 40, 70);
    }
  }

  static drawBoy(ctx, x, y, scale = 3) {
    if (this.images.boyFace) {
      ctx.drawImage(this.images.boyFace, x - 50 * scale, y - 100 * scale, 100 * scale, 100 * scale);
    } else {
      ctx.fillStyle = '#87ceeb';
      ctx.beginPath();
      ctx.arc(x, y - 60, 25, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#b0c4de';
      ctx.fillRect(x - 20, y - 35, 40, 70);
    }
  }

  static drawGirlLying(ctx, x, y, scale = 2) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 2);
    if (this.images.girlFace) {
      ctx.drawImage(this.images.girlFace, -50 * scale, -50 * scale, 100 * scale, 100 * scale);
    }
    ctx.restore();
  }

  static drawFace(ctx, speaker, x, y, size = 100) {
    let faceKey = null;
    if (speaker === '我' || speaker.includes('昕')) {
      faceKey = 'girlFace';
    } else if (speaker === '申玮玮' || speaker.includes('玮玮')) {
      faceKey = 'boyFace';
    }

    if (faceKey && this.images[faceKey]) {
      ctx.drawImage(this.images[faceKey], x, y, size, size);
    }
  }

  static drawBackground(ctx, imageKey) {
    if (this.images[imageKey]) {
      ctx.drawImage(this.images[imageKey], 0, 0, 960, 640);
    } else {
      const gradient = ctx.createLinearGradient(0, 0, 0, 640);
      gradient.addColorStop(0, '#e8f4fc');
      gradient.addColorStop(1, '#d4e8f5');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 960, 640);
    }
  }

  static drawClassroom(ctx) {
    this.drawBackground(ctx, 'classroom');
  }

  static drawBedroom(ctx) {
    this.drawBackground(ctx, 'bedroom');
  }

  static drawNightMarket(ctx) {
    this.drawBackground(ctx, 'nightMarket');
  }

  static drawHighSchool(ctx) {
    this.drawBackground(ctx, 'highSchool');
  }

  static drawUniversity(ctx) {
    this.drawBackground(ctx, 'university');
  }

  static drawTrainStation(ctx) {
    this.drawBackground(ctx, 'trainStation');
  }

  static drawPark(ctx) {
    this.drawBackground(ctx, 'park');
  }

  static drawSuzhou(ctx) {
    this.drawBackground(ctx, 'suzhouGarden');
  }

  static drawNanjing(ctx) {
    this.drawBackground(ctx, 'nanjing');
  }

  static drawXuanwuLake(ctx) {
    this.drawBackground(ctx, 'xuanwuLake');
  }

  static drawOffice(ctx) {
    this.drawBackground(ctx, 'bank');
  }

  static drawHome(ctx, isBoyHome = true) {
    this.drawBackground(ctx, 'home');
  }

  static drawDiningTable(ctx) {
    this.drawBackground(ctx, 'diningTable');
  }

  static drawSummerRoom(ctx) {
    this.drawBackground(ctx, 'summerRoom');
  }

  static drawOnlineClass(ctx) {
    this.drawBackground(ctx, 'onlineClass');
  }

  static drawTravelStart(ctx) {
    this.drawBackground(ctx, 'travelStart');
  }

  static drawBoyWorkplace(ctx) {
    if (this.images.boyWorkplace) {
      this.drawBackground(ctx, 'boyWorkplace');
    } else {
      ctx.fillStyle = '#f5f5f5';
      ctx.fillRect(0, 0, 960, 640);
      ctx.fillStyle = '#333';
      ctx.fillRect(300, 200, 360, 200);
      ctx.fillStyle = '#87ceeb';
      ctx.fillRect(320, 220, 320, 160);
    }
  }

  static drawGiftShopping(ctx) {
    if (this.images.giftShopping) {
      this.drawBackground(ctx, 'giftShopping');
    } else {
      ctx.fillStyle = '#fff5ee';
      ctx.fillRect(0, 0, 960, 640);
      ctx.fillStyle = '#8b4513';
      ctx.fillRect(200, 150, 560, 300);
      ctx.fillStyle = '#228b22';
      ctx.fillRect(250, 200, 100, 150);
      ctx.fillRect(450, 200, 100, 150);
    }
  }

  static drawRomanticEnding(ctx) {
    if (this.images.romanticEnding) {
      this.drawBackground(ctx, 'romanticEnding');
    } else {
      const gradient = ctx.createLinearGradient(0, 0, 0, 640);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(0.5, '#16213e');
      gradient.addColorStop(1, '#0f3460');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 960, 640);
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * 960;
        const y = Math.random() * 300;
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(x, y, Math.random() * 2 + 1, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = '#fff8dc';
      ctx.fillRect(280, 350, 400, 200);
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(350, 380, 15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(610, 380, 15, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawGraduation(ctx) {
    if (this.images.graduation) {
      this.drawBackground(ctx, 'graduation');
    } else {
      const gradient = ctx.createLinearGradient(0, 0, 0, 640);
      gradient.addColorStop(0, '#e3f2fd');
      gradient.addColorStop(1, '#bbdefb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 960, 640);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 52px Microsoft YaHei';
      ctx.textAlign = 'center';
      ctx.fillText('毕业快乐', 480, 300);
      ctx.font = '24px Microsoft YaHei';
      ctx.fillText('🎓 恭喜毕业！🎓', 480, 360);
    }
  }

  static drawFoodScene(ctx, foodIndex = 0, time = 0) {
    const foodImages = [
      this.images.foodHotpot,
      this.images.foodBbq,
      this.images.foodTea,
      this.images.foodDessert
    ];
    const img = foodImages[foodIndex % 4];
    if (img) {
      ctx.drawImage(img, 0, 0, 960, 640);
    } else {
      const colors = ['#ffebee', '#e8f5e9', '#fff3e0', '#f3e5f5'];
      ctx.fillStyle = colors[foodIndex % colors.length];
      ctx.fillRect(0, 0, 960, 640);
      ctx.fillStyle = '#795548';
      ctx.fillRect(200, 300, 560, 200);
    }
  }

  static drawPhoneChat(ctx, currentMessageIndex = 0, time = 0, messageOffset = 0) {
    ctx.fillStyle = '#1a1a2e';
    ctx.fillRect(0, 0, 960, 640);
    ctx.fillStyle = '#16213e';
    ctx.fillRect(280, 50, 400, 540);
    ctx.strokeStyle = '#4a6fa5';
    ctx.lineWidth = 3;
    ctx.strokeRect(280, 50, 400, 540);
    ctx.fillStyle = '#4a6fa5';
    ctx.fillRect(280, 50, 400, 60);
    
    if (this.images.boyFace) {
      ctx.save();
      ctx.translate(345, 80);
      ctx.scale(-1, 1);
      ctx.drawImage(this.images.boyFace, 0, 0, 144, 144, -25, -25, 50, 50);
      ctx.restore();
    }
    
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 18px Microsoft YaHei';
    ctx.textAlign = 'left';
    ctx.fillText('申玮玮', 360, 85);
    
    const messages = [
      { speaker: '申玮玮', text: '在吗？' },
      { speaker: '我', text: '在的，怎么了？' },
      { speaker: '申玮玮', text: '我喜欢你！从第一次见到你就喜欢上你了！' },
      { speaker: '申玮玮', text: '你愿意做我的女朋友吗？' },
      { speaker: '我', text: '申玮玮，我...' },
      { speaker: '我', text: '谢谢你的心意，但是我现在想以学习为重...' },
      { speaker: '申玮玮', text: '...我明白了。没关系，我会等你的。' }
    ];
    
    const actualIndex = messageOffset + currentMessageIndex;
    let y = 130;
    const maxVisible = actualIndex + 1;
    const visibleMessages = messages.slice(0, maxVisible);
    
    if (visibleMessages.length > 5) {
      const offset = (visibleMessages.length - 5) * 70;
      y = 130 - offset + (5 * 70);
    }
    
    visibleMessages.forEach((msg, idx) => {
      const isMe = msg.speaker === '我';
      const bubbleWidth = Math.min(ctx.measureText(msg.text).width + 30, 300);
      const bubbleHeight = 45;
      const bubbleX = isMe ? 680 - bubbleWidth - 10 : 295;
      const bubbleY = y + idx * 70;
      
      if (bubbleY < 120 || bubbleY > 550) return;
      
      ctx.fillStyle = isMe ? '#95ec69' : '#ffffff';
      ctx.beginPath();
      ctx.roundRect(bubbleX, bubbleY, bubbleWidth, bubbleHeight, 8);
      ctx.fill();
      
      if (!isMe) {
        ctx.fillStyle = '#95ec69';
        ctx.beginPath();
        ctx.moveTo(bubbleX - 8, bubbleY + 15);
        ctx.lineTo(bubbleX, bubbleY + 15);
        ctx.lineTo(bubbleX, bubbleY + 25);
        ctx.fill();
      } else {
        ctx.fillStyle = '#95ec69';
        ctx.beginPath();
        ctx.moveTo(bubbleX + bubbleWidth + 8, bubbleY + 15);
        ctx.lineTo(bubbleX + bubbleWidth, bubbleY + 15);
        ctx.lineTo(bubbleX + bubbleWidth, bubbleY + 25);
        ctx.fill();
      }
      
      ctx.fillStyle = isMe ? '#000' : '#000';
      ctx.font = '14px Microsoft YaHei';
      ctx.textAlign = 'left';
      
      const textX = bubbleX + 15;
      const textY = bubbleY + 28;
      ctx.fillText(msg.text, textX, textY, bubbleWidth - 20);
    });
  }

  static drawStarJar(ctx, x, y, scale = 1) {
    if (this.images.starJar) {
      ctx.drawImage(this.images.starJar, x - 50 * scale, y - 70 * scale, 100 * scale, 140 * scale);
    } else {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.beginPath();
      ctx.ellipse(x, y - 30 * scale, 25 * scale, 35 * scale, 0, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  static drawStar(ctx, x, y, size) {
    ctx.beginPath();
    for (let i = 0; i < 5; i++) {
      const angle = (i * 4 * Math.PI) / 5 - Math.PI / 2;
      const px = x + Math.cos(angle) * size;
      const py = y + Math.sin(angle) * size;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
  }

  static drawDrone(ctx, x, y, time) {
    if (this.images.drone) {
      ctx.drawImage(this.images.drone, x - 40, y - 30, 80, 60);
    } else {
      ctx.fillStyle = '#333';
      ctx.fillRect(x - 30, y, 60, 20);
    }
    if (this.images.starJar) {
      ctx.drawImage(this.images.starJar, x - 25, y + 60, 50, 70);
    }
  }
}

PixelArt.loadImages();
