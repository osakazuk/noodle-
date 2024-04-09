// 画像読込のシーン
var loadScene = new Phaser.Scene("loadScene");

loadScene.preload = function() {
    // スタート画像
    this.load.image('gamestart', 'assets/images/gamestart.gif');
    // ゲームオーバー画像
    this.load.image('gameover', 'assets/images/gameover.png');
    
    this.load.image('naninu', 'assets/images/naninu.png');
      this.load.image('eigo01', 'assets/images/ENGLISH01.png');
     //教科をロード
     this.load.image('subject01','assets/images/subject01.png')
     this.load.image('subject02','assets/images/subject02.png')
     this.load.image('subject03','assets/images/subject03.png')
     this.load.image('subject04','assets/images/subject04.png')
     this.load.image('subject05','assets/images/subject05.png')
     //this.load.image('subject01','assets/images/subject01.png')
    this.load.image('fukidashi','assets/images/fukidasi.png')
    this.load.image('home','assets/images/homee.png')
    this.load.image('teacher','assets/images/teacher.png')
    this.load.image('start','assets/images/start.png')
    this.load.image('backa','assets/images/yajirushi.png')
    this.load.image('white','assets/images/white.png')
    this.load.image('nothing','assets/images/nothing.png')
    this.load.image('clear','assets/images/clear.png')
    //正誤判定のがぞう
    this.load.image('right','assets/images/spellCollect.png')
    this.load.image('wrong','assets/images/spellUncollect.png')
//枠を生成
this.load.image('empty','assets/images/empty.png')
this.load.image('collect','assets/images/Nice.png')
this.load.image('uncollect','assets/images/NO.png')
    
};

loadScene.create = function() {
    // 読み込み完了後にstartSceneを起動
    this.scene.start("startScene");
};
