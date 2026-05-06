class Chapters {
    static createChapter1(game) {
        return {
            id: 1,
            name: '第一章：初中时光',
            scenes: [
                {
                    name: '开学第一天',
                    dialogues: [
                        { speaker: '旁白', text: '这是初中一年级的第一天，阳光透过窗户洒进教室。' },
                        { speaker: '旁白', text: '新学期，新环境，一切都是那么新鲜。' }
                    ],
                    render(ctx) {
                        PixelArt.drawClassroom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(1);
                    }
                },
                {
                    name: '新同桌',
                    dialogues: [
                        { speaker: '老师', text: '同学们，今天有个新安排。你，坐到那边去。' },
                        { speaker: '我', text: '好的，老师。' },
                        { speaker: '他', text: '你好！我叫申玮玮。很高兴能和你做同桌！' },
                        { speaker: '我', text: '（心里默默记下了这个名字...申玮玮。）' }
                    ],
                    render(ctx) {
                        PixelArt.drawClassroom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(2);
                    }
                },
                {
                    name: '小学的缘分',
                    dialogues: [
                        { speaker: '申玮玮', text: '我感觉好像在哪里见过你...' },
                        { speaker: '我', text: '嗯？我也觉得有点眼熟。' },
                        { speaker: '申玮玮', text: '对了！你是不是小学在鹤翔小学念的？' },
                        { speaker: '我', text: '是啊！你也是吗？' },
                        { speaker: '申玮玮', text: '太棒了！原来我们小学就是校友了！这真是太有缘分了！' },
                        { speaker: '我', text: '是啊，真没想到初中还能再相遇。' },
                        { speaker: '旁白', text: '原来你们的缘分，早在多年前就已经种下了种子。' }
                    ],
                    render(ctx) {
                        PixelArt.drawClassroom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(3);
                        game.unlockChapter(2);
                        alert('第一章完成！第二章已解锁！🌸');
                    }
                }
            ]
        };
    }
    
    static createChapter2(game) {
        return {
            id: 2,
            name: '第二章：手机里的告白',
            scenes: [
                {
                    name: '周末的夜晚',
                    dialogues: [
                        { speaker: '旁白', text: '时间飞逝，转眼到了初二。' },
                        { speaker: '旁白', text: '一个周末的晚上，你像往常一样拿起了手机。' }
                    ],
                    render(ctx) {
                        PixelArt.drawBedroom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(4);
                    }
                },
                {
                    name: '手机告白',
                    dialogues: [
                        { speaker: '申玮玮', text: '在吗？' },
                        { speaker: '我', text: '在的，怎么了？' },
                        { speaker: '申玮玮', text: '我喜欢你！从第一次见到你就喜欢上你了！' },
                        { speaker: '申玮玮', text: '你愿意做我的女朋友吗？' }
                    ],
                    render(ctx, dialogueIndex) {
                        PixelArt.drawPhoneChat(ctx, dialogueIndex, 0, 0);
                    },
                    onComplete() {
                        game.unlockGalleryItem(5);
                    }
                },
                {
                    name: '学习为重',
                    dialogues: [
                        { speaker: '我', text: '申玮玮，我...' },
                        { speaker: '我', text: '谢谢你的心意，但是我现在想以学习为重...' },
                        { speaker: '申玮玮', text: '...我明白了。没关系，我会等你的。' }
                    ],
                    render(ctx, dialogueIndex) {
                        PixelArt.drawPhoneChat(ctx, dialogueIndex, 0, 4);
                    },
                    onComplete() {
                        game.unlockGalleryItem(6);
                    }
                },
                {
                    name: '默默陪伴',
                    dialogues: [
                        { speaker: '旁白', text: '虽然拒绝了，但你的心里，似乎有什么东西悄悄改变了。' },
                        { speaker: '旁白', text: '从那以后，申玮玮总是默默地在学习上帮助你。' },
                        { speaker: '申玮玮', text: '这道数学题我来教你吧！' },
                        { speaker: '我', text: '谢谢你，申玮玮。' },
                        { speaker: '申玮玮', text: '不客气！能帮到你我就很开心了。' }
                    ],
                    render(ctx) {
                        PixelArt.drawClassroom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(7);
                        game.unlockChapter(3);
                        alert('第二章完成！第三章已解锁！🌸');
                    }
                }
            ]
        };
    }
    
    static createChapter3(game) {
        return {
            id: 3,
            name: '第三章：幸运星的约定',
            scenes: [
                {
                    name: '暑假午后',
                    dialogues: [
                        { speaker: '旁白', text: '初一升初二的暑假，一个悠闲的午后。' },
                        { speaker: '闺蜜A', text: '暑假好无聊啊，我们找点事情做吧！' },
                        { speaker: '闺蜜B', text: '不如我们折幸运星，然后去夜市卖吧！' },
                        { speaker: '我', text: '好主意！听起来很有趣！' }
                    ],
                    render(ctx) {
                        PixelArt.drawSummerRoom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(8);
                    }
                },
                {
                    name: '折幸运星',
                    dialogues: [
                        { speaker: '旁白', text: '于是，你们三人开始了折幸运星的大作战。' },
                        { speaker: '闺蜜A', text: '要把满满的祝福都折进去哦！' },
                        { speaker: '闺蜜B', text: '希望买到的人都能得到幸福！' },
                        { speaker: '我', text: '嗯！我要折好多好多！' }
                    ],
                    render(ctx) {
                        PixelArt.drawSummerRoom(ctx);
                        PixelArt.drawStarJar(ctx, 480, 400, 1.5);
                    },
                    onComplete() {
                        game.unlockGalleryItem(9);
                    }
                },
                {
                    name: '热闹的夜市',
                    dialogues: [
                        { speaker: '闺蜜A', text: '哇，夜市好热闹啊！' },
                        { speaker: '闺蜜B', text: '我们的摊位就在这里了！' },
                        { speaker: '旁白', text: '灯笼高挂，夜市的气氛热闹非凡。你们的幸运星摊位开张了！' }
                    ],
                    render(ctx) {
                        PixelArt.drawNightMarket(ctx);
                        PixelArt.drawStarJar(ctx, 450, 420, 2);
                    },
                    onComplete() {
                        game.unlockGalleryItem(10);
                    }
                },
                {
                    name: '摆摊叫卖',
                    dialogues: [
                        { speaker: '我', text: '来看看漂亮的幸运星吧！每一颗都满载祝福！' },
                        { speaker: '顾客', text: '这些星星好漂亮啊！给我来一瓶！' },
                        { speaker: '闺蜜A', text: '谢谢惠顾！' }
                    ],
                    render(ctx) {
                        PixelArt.drawNightMarket(ctx);
                        PixelArt.drawStarJar(ctx, 450, 420, 2);
                        PixelArt.drawStarJar(ctx, 520, 420, 2);
                    },
                    onComplete() {
                        game.unlockGalleryItem(11);
                    }
                },
                {
                    name: '默默的守护',
                    dialogues: [
                        { speaker: '闺蜜A', text: '哎，你看那边，有个人一直站在那儿看着我们呢。' },
                        { speaker: '我', text: '嗯？...是申玮玮！' },
                        { speaker: '申玮玮', text: '嗨，你们好啊！生意怎么样？' },
                        { speaker: '我', text: '申玮玮，你怎么来了？' },
                        { speaker: '申玮玮', text: '我...就是来看看，怕你们忙不过来。' },
                        { speaker: '旁白', text: '其实，他已经在这里站了很久了，默默地守护着你们。' }
                    ],
                    render(ctx) {
                        PixelArt.drawNightMarket(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(12);
                    }
                },
                {
                    name: '三瓶幸运星',
                    dialogues: [
                        { speaker: '申玮玮', text: '那个...我想买三瓶幸运星。' },
                        { speaker: '我', text: '哎？三瓶？这么多吗？' },
                        { speaker: '申玮玮', text: '嗯！我要一瓶放在床头，一瓶放在书桌，一瓶...放在心里。' },
                        { speaker: '我', text: '...申玮玮，你真好。' },
                        { speaker: '申玮玮', text: '这是你亲手折的，对我来说是最珍贵的东西。' },
                        { speaker: '旁白', text: '他小心翼翼地接过三瓶幸运星，仿佛捧着整个世界。' }
                    ],
                    render(ctx) {
                        PixelArt.drawNightMarket(ctx);
                        PixelArt.drawStarJar(ctx, 400, 450, 1.5);
                        PixelArt.drawStarJar(ctx, 480, 450, 1.5);
                        PixelArt.drawStarJar(ctx, 560, 450, 1.5);
                    },
                    onComplete() {
                        game.unlockGalleryItem(13);
                        game.unlockChapter(4);
                        alert('第三章完成！第四章已解锁！🌸');
                    }
                }
            ]
        };
    }
    
    static createChapter4(game) {
        return {
            id: 4,
            name: '第四章：重逢在高中',
            scenes: [
                {
                    name: '中考结束',
                    dialogues: [
                        { speaker: '旁白', text: '时光飞逝，中考结束了。' },
                        { speaker: '旁白', text: '你们都如愿考上了同一所重点高中！' }
                    ],
                    render(ctx) {
                        PixelArt.drawGraduation(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(14);
                    }
                },
                {
                    name: '同一所高中',
                    dialogues: [
                        { speaker: '我', text: '申玮玮！你也在这所学校！' },
                        { speaker: '申玮玮', text: '是啊！太好了，我们又能在一起了！' },
                        { speaker: '我', text: '可惜我们被分到了不同的班级...' },
                        { speaker: '申玮玮', text: '没关系！下课我可以来找你！' },
                        { speaker: '旁白', text: '虽然不在同一个班级，但你们的距离，并没有因此而疏远。' }
                    ],
                    render(ctx) {
                        PixelArt.drawHighSchool(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(15);
                    }
                },
                {
                    name: '生日惊喜',
                    dialogues: [
                        { speaker: '旁白', text: '你的生日到了。申玮玮准备了一份特别的惊喜。' },
                        { speaker: '同学', text: '快看窗外！' },
                        { speaker: '我', text: '嗯？那是...无人机？' }
                    ],
                    render(ctx) {
                        PixelArt.drawHighSchool(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(16);
                    }
                },
                {
                    name: '无人机的礼物',
                    dialogues: [
                        { speaker: '旁白', text: '只见一架无人机缓缓飞来，上面挂着一个熟悉的瓶子！' },
                        { speaker: '我', text: '这是...那天我折的幸运星？！' },
                        { speaker: '申玮玮（远处）', text: '生日快乐！这是我最珍贵的宝物，现在送给你！' },
                        { speaker: '我', text: '申玮玮...这太惊喜了！你还一直留着...' },
                        { speaker: '旁白', text: '原来，他一直珍藏着那天买走的三瓶幸运星，在你生日这天，用特别的方式送还给你。' }
                    ],
                    render(ctx, dialogueIndex, time) {
                        PixelArt.drawHighSchool(ctx);
                        PixelArt.drawDrone(ctx, 400, 100 + Math.sin(time * 0.005) * 20, time);
                    },
                    onComplete() {
                        game.unlockGalleryItem(17);
                    }
                },
                {
                    name: '化学补习',
                    dialogues: [
                        { speaker: '我', text: '唉...化学好难啊...' },
                        { speaker: '申玮玮', text: '怎么了？遇到难题了吗？' },
                        { speaker: '我', text: '嗯，这部分我总是搞不懂。' },
                        { speaker: '申玮玮', text: '没关系！我来教你！我化学可是强项！' },
                        { speaker: '旁白', text: '于是，申玮玮开始耐心地给你补习化学。' },
                        { speaker: '申玮玮', text: '你看，这个反应式应该这样理解...' },
                        { speaker: '我', text: '哦！原来如此！谢谢你，申玮玮！' },
                        { speaker: '申玮玮', text: '能帮到你，我就很开心了。' }
                    ],
                    render(ctx) {
                        PixelArt.drawClassroom(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(18);
                        game.unlockChapter(5);
                        alert('第四章完成！第五章已解锁！🌸');
                    }
                }
            ]
        };
    }
    
    static createChapter5(game) {
        return {
            id: 5,
            name: '第五章：大学的甜蜜',
            scenes: [
                {
                    name: '高中毕业',
                    dialogues: [
                        { speaker: '旁白', text: '高中三年很快过去了。' },
                        { speaker: '旁白', text: '你们都考进了同一座城市的大学。' }
                    ],
                    render(ctx) {
                        PixelArt.drawGraduation(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(19);
                    }
                },
                {
                    name: '一起返校',
                    dialogues: [
                        { speaker: '申玮玮', text: '我来接你一起去学校吧！' },
                        { speaker: '我', text: '好啊！谢谢你！' },
                        { speaker: '旁白', text: '开学那天，申玮玮帮你提着行李，一路送你到学校。' }
                    ],
                    render(ctx) {
                        PixelArt.drawTrainStation(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(20);
                    }
                },
                {
                    name: '到达宿舍',
                    dialogues: [
                        { speaker: '申玮玮', text: '到了！这里就是你的宿舍了。' },
                        { speaker: '我', text: '谢谢你，申玮玮。今天真是麻烦你了。' },
                        { speaker: '申玮玮', text: '不麻烦！为了你，我愿意！' }
                    ],
                    render(ctx) {
                        PixelArt.drawUniversity(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(21);
                    }
                },
                {
                    name: '疫情网课',
                    dialogues: [
                        { speaker: '旁白', text: '大一下学期，疫情来袭，你们开始了上网课的日子。' },
                        { speaker: '申玮玮（视频）', text: '你那边听得清楚吗？' },
                        { speaker: '我', text: '嗯，很清楚！' },
                        { speaker: '申玮玮（视频）', text: '虽然不能见面，但每天这样视频，我也很开心。' },
                        { speaker: '我', text: '我也是...' },
                        { speaker: '旁白', text: '距离没有冲淡你们的感情，反而让彼此更加珍惜。' }
                    ],
                    render(ctx) {
                        PixelArt.drawOnlineClass(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(22);
                    }
                },
                {
                    name: '接受告白',
                    dialogues: [
                        { speaker: '旁白', text: '大一结束前，申玮玮再次向你告白了。' },
                        { speaker: '申玮玮', text: '我还是喜欢你。这一次，你愿意给我一个机会吗？' },
                        { speaker: '我', text: '申玮玮...' },
                        { speaker: '旁白', text: '想起这些年他的陪伴、付出和等待，你的心，终于动摇了。' },
                        { speaker: '我', text: '好...我愿意。' },
                        { speaker: '申玮玮', text: '真的吗？！太好了！' },
                        { speaker: '旁白', text: '就这样，你们正式成为了恋人。漫长的等待，终于开出了美丽的花。' }
                    ],
                    render(ctx) {
                        PixelArt.drawPark(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(23);
                    }
                },
                {
                    name: '甜蜜时光',
                    dialogues: [
                        { speaker: '旁白', text: '接下来的三年，是你们最甜蜜的时光。' },
                        { speaker: '申玮玮', text: '生日快乐！这是给你的礼物！' },
                        { speaker: '我', text: '谢谢你！我也有礼物给你，一周年快乐！' }
                    ],
                    render(ctx) {
                        PixelArt.drawUniversity(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(24);
                    }
                },
                {
                    name: '美食时光',
                    dialogues: [
                        { speaker: '申玮玮', text: '我们去吃好吃的吧！' },
                        { speaker: '我', text: '好啊！' },
                        { speaker: '旁白', text: '你们一起去了很多地方，品尝了很多美食。' },
                        { speaker: '旁白', text: '火锅、烧烤、奶茶、甜品...每一顿饭都充满了幸福的味道。' }
                    ],
                    render(ctx, dialogueIndex, time) {
                        PixelArt.drawFoodScene(ctx, Math.floor(time / 3000) % 4, time);
                    },
                    onComplete() {
                        game.unlockGalleryItem(25);
                    }
                },
                {
                    name: '考下证书',
                    dialogues: [
                        { speaker: '申玮玮', text: '加油！你一定能考到初会证书的！' },
                        { speaker: '我', text: '嗯！有你陪着我复习，我一定可以的！' },
                        { speaker: '旁白', text: '他陪着你考下了初会证书，分享着你成功的喜悦。' }
                    ],
                    render(ctx) {
                        PixelArt.drawUniversity(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(26);
                        game.unlockChapter(6);
                        alert('第五章完成！第六章已解锁！🌸');
                    }
                }
            ]
        };
    }
    
    static createChapter6(game) {
        return {
            id: 6,
            name: '第六章：研究生与求婚',
            scenes: [
                {
                    name: '远方的研究生',
                    dialogues: [
                        { speaker: '旁白', text: '大学毕业，你选择继续深造，去了很远的城市读研究生。' },
                        { speaker: '申玮玮', text: '到了那边要好好照顾自己。' },
                        { speaker: '我', text: '嗯，你也是。工作不要太辛苦了。' }
                    ],
                    render(ctx) {
                        PixelArt.drawTrainStation(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(27);
                    }
                },
                {
                    name: '异地恋',
                    dialogues: [
                        { speaker: '申玮玮', text: '我会努力工作的！等你毕业，我们就...' },
                        { speaker: '我', text: '就什么？' },
                        { speaker: '申玮玮', text: '没什么...到时候你就知道了。' },
                        { speaker: '旁白', text: '虽然相隔两地，但你们的感情，依然坚定。' }
                    ],
                    render(ctx) {
                        PixelArt.drawBoyWorkplace(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(28);
                    }
                },
                {
                    name: '研究生毕业',
                    dialogues: [
                        { speaker: '旁白', text: '两年后，你研究生毕业了。' },
                        { speaker: '申玮玮', text: '恭喜你毕业！我们来一场毕业旅行吧！' },
                        { speaker: '我', text: '好啊！去哪里？' },
                        { speaker: '申玮玮', text: '苏州和南京！' }
                    ],
                    render(ctx) {
                        PixelArt.drawTravelStart(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(29);
                    }
                },
                {
                    name: '苏州园林',
                    dialogues: [
                        { speaker: '旁白', text: '你们来到了苏州，欣赏美丽的江南园林。' },
                        { speaker: '申玮玮', text: '苏州的园林真漂亮！' },
                        { speaker: '我', text: '是啊，和你一起来，更漂亮了。' }
                    ],
                    render(ctx) {
                        PixelArt.drawSuzhou(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(30);
                    }
                },
                {
                    name: '南京之旅',
                    dialogues: [
                        { speaker: '申玮玮', text: '接下来我们去南京，我有个特别的地方想带你去。' },
                        { speaker: '我', text: '什么地方？' },
                        { speaker: '申玮玮', text: '到了就知道了！' }
                    ],
                    render(ctx) {
                        PixelArt.drawNanjing(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(31);
                    }
                },
                {
                    name: '玄武湖求婚',
                    dialogues: [
                        { speaker: '旁白', text: '南京玄武湖的游船上，夕阳西下，景色美得令人窒息。' },
                        { speaker: '申玮玮', text: '还记得我们第一次见面吗？' },
                        { speaker: '我', text: '当然记得。' },
                        { speaker: '申玮玮', text: '这一路走来，谢谢你愿意陪着我。' },
                        { speaker: '申玮玮', text: '你愿意嫁给我吗？' },
                        { speaker: '旁白', text: '夕阳的余晖洒在他的脸上，闪闪发光。' }
                    ],
                    render(ctx) {
                        PixelArt.drawXuanwuLake(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(32);
                    }
                },
                {
                    name: '继续相爱',
                    dialogues: [
                        { speaker: '我', text: '申玮玮...我...' },
                        { speaker: '旁白', text: '你有些茫然，对未来还有些不确定，于是...' },
                        { speaker: '我', text: '对不起...我还没准备好...' },
                        { speaker: '申玮玮', text: '没关系，我懂。我会继续等你的。' },
                        { speaker: '我', text: '申玮玮，你不生气吗？' },
                        { speaker: '申玮玮', text: '傻瓜，我怎么会生气呢。我爱你，所以我愿意等你准备好。' },
                        { speaker: '旁白', text: '求婚虽然被拒绝了，但你们的爱情，依然在继续。' },
                        { speaker: '申玮玮', text: '我们慢慢来，不着急。' },
                        { speaker: '我', text: '嗯，谢谢你，申玮玮。' }
                    ],
                    render(ctx) {
                        PixelArt.drawXuanwuLake(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(34);
                        game.unlockChapter(7);
                        alert('第六章完成！第七章已解锁！🌸');
                    }
                }
            ]
        };
    }
    
    static createChapter7(game) {
        return {
            id: 7,
            name: '第七章：见家长与未来',
            scenes: [
                {
                    name: '工作日常',
                    dialogues: [
                        { speaker: '旁白', text: '旅行结束后，你开始工作了。上班的日子虽然有些枯燥...' }
                    ],
                    render(ctx) {
                        PixelArt.drawOffice(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(35);
                    }
                },
                {
                    name: '惊喜投喂',
                    dialogues: [
                        { speaker: '同事', text: '你男朋友又来给你送东西了！' },
                        { speaker: '我', text: '哎？申玮玮？' },
                        { speaker: '申玮玮', text: '上班压力这么大，听说甜品可以让心情变好，所以我给你买了小蛋糕。' },
                        { speaker: '我', text: '谢谢你！你怎么来了？' },
                        { speaker: '申玮玮', text: '想你了，就来看看你。' },
                        { speaker: '旁白', text: '他总是不时给你惊喜，让平淡的日子充满甜蜜。' }
                    ],
                    render(ctx) {
                        PixelArt.drawOffice(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(36);
                    }
                },
                {
                    name: '去他家',
                    dialogues: [
                        { speaker: '旁白', text: '随着工作日渐稳定下来，见家长这件事也逐步提上日程。' },
                        { speaker: '申玮玮', text: '要不要去我家玩？我爸妈想见见你。' },
                        { speaker: '我', text: '啊？这么快...我有点紧张...' },
                        { speaker: '申玮玮', text: '别紧张，我爸妈人都很好的。' }
                    ],
                    render(ctx) {
                        PixelArt.drawPark(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(37);
                    }
                },
                {
                    name: '精心打扮',
                    dialogues: [
                        { speaker: '旁白', text: '那天，你精心打扮了一番，和申玮玮一起去挑选礼物。' },
                        { speaker: '我', text: '这个水果篮怎么样？还是这个茶叶？' },
                        { speaker: '申玮玮', text: '都很好！他们一定会喜欢的。' },
                        { speaker: '旁白', text: '挑选完礼物后，你们一起回到了申玮玮的家。' }
                    ],
                    render(ctx) {
                        PixelArt.drawGiftShopping(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(38);
                    }
                },
                {
                    name: '见他的父母',
                    dialogues: [
                        { speaker: '申妈妈', text: '你就是昕昕吧！快进来坐！' },
                        { speaker: '申爸爸', text: '常听玮玮提起你，今日一见，果然是个好姑娘！' },
                        { speaker: '我', text: '叔叔阿姨好！这是给你们的一点心意。' },
                        { speaker: '申妈妈', text: '哎呀，人来就好了，还带什么东西！' },
                        { speaker: '旁白', text: '申玮玮的父母做了一大桌好吃的菜热情地招待你。' }
                    ],
                    render(ctx) {
                        PixelArt.drawHome(ctx, true);
                    },
                    onComplete() {
                        game.unlockGalleryItem(39);
                    }
                },
                {
                    name: '一起吃饭',
                    dialogues: [
                        { speaker: '申爸爸', text: '来来来，多吃点！别客气！' },
                        { speaker: '申妈妈', text: '昕昕，尝尝这个红烧肉，可是玮玮爸爸的拿手菜！' },
                        { speaker: '我', text: '哇，真的很好吃！叔叔手艺太好了！' },
                        { speaker: '申玮玮', text: '我就说吧，我爸妈做饭可好吃了。' },
                        { speaker: '申妈妈', text: '以后要常来玩啊！' },
                        { speaker: '我', text: '嗯！谢谢阿姨！' },
                        { speaker: '旁白', text: '你能感受到他们是真心喜欢你的。你的心里，悄悄发生了一些改变。' }
                    ],
                    render(ctx) {
                        PixelArt.drawDiningTable(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(40);
                    }
                },
                {
                    name: '端午节回家',
                    dialogues: [
                        { speaker: '我', text: '申玮玮，今年端午节，要不要跟我一起回家？' },
                        { speaker: '申玮玮', text: '真的吗？！我太愿意了！' },
                        { speaker: '旁白', text: '这一年端午节，申玮玮跟着你回了家，见了你的父母。' }
                    ],
                    render(ctx) {
                        PixelArt.drawPark(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(41);
                    }
                },
                {
                    name: '见你的父母',
                    dialogues: [
                        { speaker: '爸爸', text: '小申是吧，来，坐！' },
                        { speaker: '妈妈', text: '这孩子真不错，稳重又懂事。' },
                        { speaker: '爸爸', text: '申玮玮是个好孩子，你们要好好的。' },
                        { speaker: '我', text: '嗯，我们会的。' },
                        { speaker: '旁白', text: '你的父母认可了申玮玮，给了你们最真挚的祝福。' }
                    ],
                    render(ctx) {
                        PixelArt.drawHome(ctx, false);
                    },
                    onComplete() {
                        game.unlockGalleryItem(42);
                    }
                },
                {
                    name: '永远幸福',
                    dialogues: [
                        { speaker: '旁白', text: '故事到这里就告一段落了，但我们的故事，还在继续。' },
                        { speaker: '申玮玮', text: '谢谢你，出现在我的生命里。' },
                        { speaker: '我', text: '申玮玮，也谢谢你，这么多年一直陪着我。' },
                        { speaker: '申玮玮', text: '未来的路，我们还要一起走。' },
                        { speaker: '我', text: '嗯！一起走！' },
                        { speaker: '旁白', text: '你们之间，还会发生很多很多的事，经历很多很多的考验。' },
                        { speaker: '旁白', text: '但我相信，你们也会体验很多很多的幸福。' },
                        { speaker: '旁白', text: '要一辈子幸福下去啊！🌸' },
                        { speaker: '全剧终', text: '从校服到婚纱，从同学到恋人，这六年，是我收到最珍贵的礼物。' }
                    ],
                    render(ctx) {
                        PixelArt.drawRomanticEnding(ctx);
                    },
                    onComplete() {
                        game.unlockGalleryItem(43);
                        game.engine.showEndingVideo();
                    }
                }
            ]
        };
    }
    
    static getAllChapters(game) {
        return [
            this.createChapter1(game),
            this.createChapter2(game),
            this.createChapter3(game),
            this.createChapter4(game),
            this.createChapter5(game),
            this.createChapter6(game),
            this.createChapter7(game)
        ];
    }
}
