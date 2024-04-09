// スタート画面のシーン
var startScene = new Phaser.Scene("startScene");

startScene.create = function () {
    this.start = this.add.image(400, 300, 'home');
   this.start.setDisplaySize(800,600);
    
    //開始ボタン
    this.push = this.add.image(400,400,'start')
    this.push.setInteractive({ useHandCursor: true });
    // キーをクリックするとゲームスタート
    this.push.on('pointerdown', 
    function(event) {
        this.scene.start('mainScene');
    }, this);
};
