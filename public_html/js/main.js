var mainScene = new Phaser.Scene("mainScene");

mainScene.create = function () {
    // 初期設定メソッド呼び出し
    this.config();

    this.cameras.main.setBackgroundColor("FFFFFF");

    mainScene.createJP();
    mainScene.createMA();
    mainScene.createENG();
    mainScene.createSC();
    mainScene.createSo();
    //先生とうじょう
    this.teacher = this.add.image(600,400,"teacher");
    this.teacher.setDisplaySize(120,110);
    this.fukidashi =this.add.image(400,410,"fukidashi");
   this.fukidashi.setDisplaySize(250,50)
    
    //先生のセリフ
    this.line = this.add.text(325,400,"今日も頑張ろう",{
        font : "20px Open Sans",
        fill : '#000000',
    });
    
    //答えるテキスト
    this.answer01 = this.add.text(300, 190, "   ", {
        font: "30px Open Sans",
        fill: "#000000",
    });

    this.answer02 = this.add.text(300, 250, "   ", {
        font: "30px Open Sans",
        fill: "#000000",
    });

    this.answer03 = this.add.text(300, 310, "   ", {
        font: "30px Open Sans",
        fill: "#000000",
    });

    this.answer04 = this.add.text(300, 370, "   ", {
        font: "30px Open Sans",
        fill: "#000000",
    });

    //普通に
    this.text = this.add.text(270, 10, "科目を選んでください", {
        font: "30px Open Sans",
        fill: "#000000",
        
    });

    this.problem = this.add.text(300, 90, "　　　", {
        font: "30px Open Sans",
        fill: "#000000",
    });
    //タイピングで売ったやつのテキスト
    this.typingText = this.add.text(300,300,"",{
        font : "30px Open Sans",
        fill : "#000000"
    })
    this.typingText.depth = 200;
    
    this.continue = this.add.text(580,500,"    ",{
        font : "13px Open Sans",
        fill : "#000000",
    });
    //スペルチェック
    this.check = this.add.text(400,490,"   ",{
        font : "15px Open Sans",
        fill : "#000000"
    });
    // var noAnswerText = function(){
    //    this.answer01.text = '     '
    //  this.answer02.text = '     '
    //    this.answer03.text = '     '
    //      this.answer04.text = '      '
    //}

    //バックボタン

    this.backImage = this.add.image(50, 20, "backa");
    this.backImage.setInteractive({ useHandCursor: true });

    //もしボタンが押されたら
    this.backImage.on(
        "pointerdown",
        function () {
            //ぼたんをけす
            //this.backImage.removeInteractive();
            //条件指定（第2画面から第一画面へ）

            // if(displayNumber == 2.
            //  this.text.text = "科目を選んでください"
            //テキスト削除

            //ボタン消去の関数
            //国語

            //数学

            //英語
            destroyAllEnglishImages();
            //理科

            //社会

            //国語のボタンを表示する関数を呼び出し
            this.createJP();
            //数学のボタンを表示する関数を呼び出し
            this.createMA();
            //英語のボタンを表示する関数を呼び出し
            this.createENG();
            //理科のボタンを表示する関数を呼び出し
            this.createSC();
            //社会のボタンを表示する関数を呼び出し
            this.createSo();
            this.angry();
            //先生
    this.teacher = this.add.image(600,400,"teacher");
    this.teacher.setDisplaySize(120,110);
    this.fukidashi =this.add.image(400,410,"fukidashi");
   this.fukidashi.setDisplaySize(250,50)
   mainScene.line.text = " 雨ニモマケズ";            //  }
        },
        this
    );

    //ここから国語
    //国語のボタン

    //  var firstDisplay = function(){
    //テキスト
};

mainScene.angry = function () {
    this.text.text = "    ";
    this.text.text = "科目を選んでください";
    this.problem.text = "      ";
};

mainScene.empty01 = function (b) {
    console.log("01", b);
    this.solve01Image = this.add.image(345, 210, "empty");
    this.solve01Image.setInteractive({ useHandCursor: true });

    //ボタンが押されたら
    this.solve01Image.on(
        "pointerdown",
        function () {
            //画像をチェンジ
            this.solve01Image.destroy();
            if (b) {
                this.solve01Image = this.add.image(345, 210, "collect");
                if(this.isReviewed == true)
                this.englishMissChoices.splice(this.englishWords1,1)
                console.log(this.englishMissChoices)
            } else {
                this.solve01Image = this.add.image(345, 210, "uncollect");
                this.englishMissChoices.push({
                    q: this.englishChoices[this.englishWords1].q,
                    a1: this.englishChoices[this.englishWords1].a1,
                    a2: this.englishChoices[this.englishWords1].a2,
                    a3: this.englishChoices[this.englishWords1].a3,
                    a4: this.englishChoices[this.englishWords1].a4,
                });;
                console.log(this.englishMissChoices);
            }
            // setInteractive() は removeInteractive() で削除が可能
            this.solve01Image.removeInteractive();
            this.solve02Image.removeInteractive();
            this.solve03Image.removeInteractive();
            this.solve04Image.removeInteractive();

            this.time.addEvent({
                delay: 2000,
                callback: this.f,
                args: this.isReviewed ? [this.englishMissChoices] : [this.englishChoices],
                loop: false,
                callbackScope: this,
            });
        },
        this
    );
};

mainScene.empty02 = function (b) {
    console.log("02", b);
    this.solve02Image = this.add.image(345, 270, "empty");
    this.solve02Image.setInteractive({ useHandCursor: true });

    //ボタンが押されたら
    this.solve02Image.on(
        "pointerdown",
        function () {
            //画像をチェンジ
            this.solve02Image.destroy();
            if (b) {
                this.solve02Image = this.add.image(345, 270, "collect");
                if(this.isReviewed == true){
                this.englishMissChoices.splice(this.englishWords1,1)
                console.log(this.englishMissChoices)
                }
            } else {
                this.solve02Image = this.add.image(345, 270, "uncollect");
                this.englishMissChoices.push({
                    q: this.englishChoices[this.englishWords1].q,
                    a1: this.englishChoices[this.englishWords1].a1,
                    a2: this.englishChoices[this.englishWords1].a2,
                    a3: this.englishChoices[this.englishWords1].a3,
                    a4: this.englishChoices[this.englishWords1].a4,
                });;
                console.log(this.englishMissChoices);
            }
            //他のはおせないようにする
            // setInteractive() は removeInteractive() で削除が可能
            this.solve01Image.removeInteractive();
            this.solve02Image.removeInteractive();
            this.solve03Image.removeInteractive();
            this.solve04Image.removeInteractive();

            this.time.addEvent({
                delay: 2000,
                callback: this.f,
                args: this.isReviewed ? [this.englishMissChoices] : [this.englishChoices],
                loop: false,
                callbackScope: this,
            });
        },
        this
    );
};
mainScene.empty03 = function (b) {
    console.log("03", b);
    this.solve03Image = this.add.image(345, 330, "empty");
    this.solve03Image.setInteractive({ useHandCursor: true });
    console.log(this.englishMissChoices)

    //ボタンが押されたら
    this.solve03Image.on(
        "pointerdown",
        function () {
            //    //画像をチェンジ
            this.solve03Image.destroy();
            if (b) {
                this.solve03Image = this.add.image(345, 330, "collect");
                if(this.isReviewed == true){
                console.log(this.englishMissChoices);
                this.englishMissChoices.splice(this.englishWords1,1)
                console.log(this.englishMissChoices)
                }
            } else {
                this.solve03Image = this.add.image(345, 330, "uncollect");
                this.englishMissChoices.push({
                    q: this.englishChoices[this.englishWords1].q,
                    a1: this.englishChoices[this.englishWords1].a1,
                    a2: this.englishChoices[this.englishWords1].a2,
                    a3: this.englishChoices[this.englishWords1].a3,
                    a4: this.englishChoices[this.englishWords1].a4,
                });
                console.log(this.englishMissChoices);
            }
            //他のはおせないようにする
            // setInteractive() は removeInteractive() で削除が可能
            this.solve01Image.removeInteractive();
            this.solve02Image.removeInteractive();
            this.solve03Image.removeInteractive();
            this.solve04Image.removeInteractive();

            this.time.addEvent({
                delay: 2000,
                callback: this.f,
                args: this.isReviewed ? [this.englishMissChoices] : [this.englishChoices],
                loop: false,
                callbackScope: this,
            });
        },
        this
    );
};

mainScene.empty04 = function (b) {
    this.solve04Image = this.add.image(345, 390, "empty");
    this.solve04Image.setInteractive({ useHandCursor: true });

    console.log("04", b);
    this.solve04Image.on(
        "pointerdown",
        function () {
            if (b) {
                //画像をチェンジ
                this.solve04Image = this.add.image(345, 390, "collect");
                console.log(this.englishMissChoices);
                if(this.isReviewed == true){
               this.englishMissChoices.splice(this.englishWords1,1)
               console.log(this.englishMissChoices)
                }
            } else {
                this.solve04Image = this.add.image(345, 390, "uncollect");
                this.englishMissChoices.push({
                    q: this.englishChoices[this.englishWords1].q,
                    a1: this.englishChoices[this.englishWords1].a1,
                    a2: this.englishChoices[this.englishWords1].a2,
                    a3: this.englishChoices[this.englishWords1].a3,
                    a4: this.englishChoices[this.englishWords1].a4,
                });
                console.log(this.englishMissChoices);
            }
            this.solve01Image.removeInteractive();
            this.solve02Image.removeInteractive();
            this.solve03Image.removeInteractive();
            this.solve04Image.removeInteractive();

            this.time.addEvent({
                delay: 2000,
                callback: this.f,
                args: this.isReviewed ? [this.englishMissChoices] : [this.englishChoices],
                loop: false,
                callbackScope: this,
            });
        },
        this
    );
};

//みすったやつのぼたん
mainScene.empty05 = function () {
    this.englishOldChoices = [];
    this.isReviewed = true;
    this.MissImage = this.add.image(650, 500, "clear");
    this.MissImage.setInteractive({ useHandCursor: true });
    this.MissImage.on(
        "pointerdown",
        function () {
            // this.mistake()
            this.f(this.englishMissChoices);
            this.white.destroy();
            this.MissImage.removeInteractive();
            this.MissImage.destroy();
            this.continue.text = "   "
            this.check.text = "   "
            this.solve06Image.destroy();
        },
        this
    );
};

//いろいろやる
mainScene.n = function(){
            this.continue.text = "   "
            this.check.text = " "
            this.solve06Image.destroy();
          //  this.check.destroy();
            this.englishMissChoices = [];
            window.addEventListener("keydown", this.push_keydown);
            this.englishMissOldChoices = []
            this.englishOldChoices = []
            this.spell(this.englishChoices);
} 

//スペリングチェックのボタン
mainScene.empty06 = function(){
     this.solve06Image = this.add.image(470, 500, "clear");
    this.solve06Image.setInteractive({ useHandCursor: true });
    this.solve06Image.on(
        "pointerdown",
        function (){
            
            if(this.englishMissChoices.length == 0){
           this.n();
            }
            if(this.englishMissChoices.length >= 1){
            alert("間違えた問題をやり直せなくなりますがいいですか");
            this.MissImage.removeInteractive();
            this.MissImage.destroy();
            this.n();
            }
            
        },this);
}
//けす
mainScene.g = function(){
    this.rightImage.destroy();
}
mainScene.h = function(){
    this.wrongImage.destroy();
}
//スペルチェックのボタン
mainScene.spellButton = function(choices){
    console.log(choices);
    console.log("やあ")
    this.nextSpellImage = this.add.image(650,500,"clear");
    this.nextSpellImage.depth = 250;
    this.nextSpellImage.setInteractive({useHandCursor : true});
    this.nextSpellImage.on(
        "pointerdown",
        function(){
    if(mainScene.typingText.text == choices[this.englishWords1].q){
    this.rightImage = this.add.image(300,195,'right');
    this.rightImage.depth = 210;
    this.rightImage.setDisplaySize(50,50)
    console.log("あってる")
    var typingCollect = 0;
    this.time.addEvent({
        delay : 2000,
        callback : this.spell,
        args : [choices] ,
        loop : false,
        callbackScope : this,
        
    })
    this.time.addEvent({
        delay : 2000,
        callback : this.g,
        loop : false,
        callbackScope : this,
        
    })
    
    
    }else {
      //  this.typingText.text = "";
        console.log("みすってる")
        this.wrongImage = this.add.image(300,195,'wrong');
        this.wrongImage.depth = 210;
        this.wrongImage.setDisplaySize(50,50)
        this.answer04.text = "答え: " + this.box[mainScene.englishWords1].q
         this.englishMissChoices.push({
                    q: choices[this.englishWords1].q,
                    a1: choices[this.englishWords1].a1,
                    a2: choices[this.englishWords1].a2,
                    a3: choices[this.englishWords1].a3,
                    a4: choices[this.englishWords1].a4,
                });
        this.time.addEvent({
        delay : 2000,
        callback : this.spell,
        
        args : [choices] ,
        loop : false,
        callbackScope : this,
        
    })
    this.time.addEvent({
        delay : 2000,
        callback : this.h,
        loop : false,
        callbackScope : this,
        
    })
    }
        },this)
}
mainScene.createJP = function () {
    //国語ボタン
    this.subject01Image = this.add.image(400, 100, "subject01");
    this.subject01Image.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.subject01Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            destroyAllSubjectImages();
            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayChoose001();
            //画面せってい
            // var displayNumber = 2.1; //this.display
        },
        this
    );
    //ここまで国語の関数にする
};
//ここから数学の関数
mainScene.createMA = function () {
    //数学のボタン
    this.subject02Image = this.add.image(400, 160, "subject02");
    this.subject02Image.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.subject02Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            destroyAllSubjectImages();

            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayChoose002();
            //画面せってい
            var displayNumber = 2.2; // dis
        },
        this
    );
    //ここまで数学の関数
};
//ここから英語の関数
mainScene.createENG = function () {
    //英語
    this.subject03Image = this.add.image(400, 220, "subject03");
    this.subject03Image.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.subject03Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            destroyAllSubjectImages();

            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayChoose003();
            //先生さようなら
            this.teacher.destroy();
            this.fukidashi.destroy();
            this.line.text = "   ";
        },
        this
    );
    //ここまで英語の関数
};
//ここから理科の関数
//りか
mainScene.createSC = function () {
    this.subject04Image = this.add.image(400, 280, "subject04");
    this.subject04Image.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.subject04Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            destroyAllSubjectImages();

            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayChoose004();

            var displayNumber = 2.4;
        },
        this
    );
    //ここまで理科の関数
};
//ここから社会の関数
mainScene.createSo = function () {
    //しゃかい
    this.subject05Image = this.add.image(400, 350, "subject05");
    this.subject05Image.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.subject05Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            destroyAllSubjectImages();

            //テキスト消す
            mainScene.text.text = "     ";
            //word001の呼び出し
            this.displayChoose005();

            var displayNumber = 2.5;
        },
        this
    );
    //ここより社会の関数
};

var destroyAllSubjectImages = function () {
    mainScene.subject01Image.destroy();
    mainScene.subject02Image.destroy();
    mainScene.subject03Image.destroy();
    mainScene.subject04Image.destroy();
    mainScene.subject05Image.destroy();
};
var destroyAllSolveImages = function () {
    mainScene.solve01Image.destroy();
    mainScene.solve02Image.destroy();
    mainScene.solve03Image.destroy();
    mainScene.solve04Image.destroy();
};

mainScene.update = function () {};

mainScene.config = function () {
    //英語の問題を解く場面
    this.englishChoices = [
        {
            q: "been",
            a1: "ある場所にいる",
            a2: "なにかをする",
            a3: "何かを持っている",
            a4: "何かを見る",
        },
        {
            q: "done",
            a1: "終わった",
            a2: "はじめる",
            a3: "スキップする",
            a4: "繰り返す",
        },
        { q: "do", a1: "する", a2: "みる", a3: "食べる", a4: "聞く" },
        { q: "good", a1: "良い", a2: "悪い", a3: "まあまあ", a4: "偉大な" },
    ];
    //もうでたやつ
    this.englishOldChoices = [];
    //ミスったやつ
    this.englishMissChoices = [];
    //みすったやつのでたやつ
    this.englishMissOldChoices = [];
    
    this.typingAnswer = [];
    
    // 復習モード
    this.isReviewed = false;
};

//国語
mainScene.displayChoose001 = function () {
    this.text.text = "国語";
    this.Japanese01 = this.add.image(400, 100, "word01");
    this.English01.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.Japanese01Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            this.Japanese01.destroy();
            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayAnswer001;
            this.f()
        },
        this
    );
};

//数学

mainScene.displayChoose002 = function () {
    this.text.text = "数学";
    this.Math01 = this.add.image(400, 100, "word01");
    this.Math01.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.Math01.on(
        "pointerdown",
        function () {
            //ボタン消す
            this.Math01.destroy();
            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayAnswer002;
            this.f;
        },
        this
    );
};

//英語

mainScene.displayChoose003 = function () {
    this.text.text = "英語";
    this.English01 = this.add.image(400, 100, "eigo01");
    this.English01.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.English01.on(
        "pointerdown",
        function () {
            //ボタン消す
            this.English01.destroy();
            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
             //this.displayProblem003();
            // this.fukidashi.destroy();
            
            this.f(this.englishChoices);
            
        },
        this
    );
};



mainScene.f = function (choices) {
    this.displayProblem003(choices);
    if (this.c == 1) {
        this.empty01(true);
        this.empty02(false);
        this.empty03(false);
        this.empty04(false);
    }
    if (this.c == 2) {
        this.empty01(false);
        this.empty02(true);
        this.empty03(false);
        this.empty04(false);
    }
    if (this.c == 3) {
        this.empty01(false);
        this.empty02(false);
        this.empty03(true);
        this.empty04(false);
    }
    if (this.c == 4) {
        this.empty01(false);
        this.empty02(false);
        this.empty03(false);
        this.empty04(true);
    }
};

var destroyAllEnglishImages = function () {

    mainScene.English01.destroy();

};

//理科

mainScene.displayChoose004 = function () {
    this.text.text = "理科";
    this.Science01 = this.add.image(400, 100, "word01");
    this.Science01.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.Science01Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            this.Science01.destroy();
            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayProblem004();
            
            this.f();
        },
        this
    );
};
//社会

mainScene.displayChoose005 = function () {
    this.text.text = "社会";
    this.Social01 = this.add.image(400, 100, "word01");
    this.Social01.setInteractive({ useHandCursor: true });
    //もしボタンが押されたら（01)
    this.Social01Image.on(
        "pointerdown",
        function () {
            //ボタン消す
            this.Social01.destroy();
            //テキスト消す
            this.text.text = "     ";
            //word001の呼び出し
            this.displayAnswer005();
            
            this.f();
        },
        this
    );
};

mainScene.displayProblem003 = function (choices) {
   console.log(choices)
   console.log(this.englishOldChoices)
  if(this.isReviewed == true){
    if (this.englishMissChoices.length == 0) {
        console.log("end")
    this.solve01Image.destroy;
    this.solve02Image.destroy;
    this.solve03Image.destroy;
    this.solve04Image.destroy;
        this.endroll();
        return;
    }
  }

   
   
    if(this.isReviewed == false){
    if (choices.length == this.englishOldChoices.length) {
    this.solve01Image.destroy;
    this.solve02Image.destroy;
    this.solve03Image.destroy;
    this.solve04Image.destroy;
        this.endroll();
        return;
    }
}

    this.englishWords1;

    while (true) {
        console.log('aa')
        this.englishWords1 = Phaser.Math.RND.between(
            0,
            choices.length - 1
        );
       
        //復習モードオフだったら
        //if(this.isReviewed == false){
        if (this.englishOldChoices.includes(this.englishWords1)) {
            continue;
        }
        else {
            break;
        }
          
    }
    

    //答え側
    this.displayAnswer(choices[this.englishWords1]);
    console.log(this.englishWords1);

    //問題がわ
    this.englishOldChoices.push(this.englishWords1);
    console.log(this.englishOldChoices);
    var problem = choices[this.englishWords1].q;

    //ミスした奴（仮
    //  this.englishMissChoices.push(englishWords1);
    console.log(this.englishMissChoices);

    this.problem.text = problem;
};



mainScene.displayAnswer = function (choice) {
    //ランダム
    var array1 = ["a1", "a2", "a3", "a4"];
    var array2 = Phaser.Utils.Array.Shuffle(array1);

    this.c = array2.indexOf("a1") + 1;
    console.log(this.choices)
    this.answer01.text = choice[array2[0]];
    this.answer02.text = choice[array2[1]];
    this.answer03.text = choice[array2[2]];
    this.answer04.text = choice[array2[3]];

    this.answer01.depth = 100;
    this.answer02.depth = 120;
    this.answer03.depth = 140;
    this.answer04.depth = 160;
};
//スペルチェック問題
this.typingNum = 0;
mainScene.spell = function(choices){
    //まるばつけす
　　 this.continue.text = '答え合わせをする';
　　 this.continue.depth = 300;
    //テキストを消す
    this.typingText.text = "";
    console.log(choices)
    //選択肢を消す
    this.solve01Image.destroy();
    this.solve02Image.destroy();
    this.solve03Image.destroy();
    this.solve04Image.destroy();
    //おわりのしょり
    if(choices.length == this.englishOldChoices.length){
        console.log("ぜんぶおわったよ")
        this.continue.text = '';
        mainScene.endroll();
        return;
    }
       //ひたすららんだむ
        
        while (true) {
        this.englishWords1 = Phaser.Math.RND.between(
            0,
            choices.length - 1
        );
          if (this.englishOldChoices.includes(this.englishWords1)) {
            continue;
        }
        else {
            break;
        }
        }
        console.log(this.englishWords1)
    //問題側
    this.englishOldChoices.push(this.englishWords1);
    console.log(this.englishOldChoices.length);
    console.log(choices.length)
    var problem = choices[this.englishWords1].a1;
    this.problem.text = problem;
    
    //答え側
    //どこまであっているかの判定
    this.typingCollect = 0;
    //おわるぼたん
    this.spellButton(choices);
    this.continue.text = '答え合わせをする';
    
    
    //文字の長さ
  //  window.addEventListener("keydown", push_keydown);
 //   console.log(choices[this.englishWords1].q);
      this.box = choices

}

mainScene.push_keydown=function (event){
    console.log(mainScene.box);
    console.log(mainScene.englishWords1)
    console.log(mainScene.box[mainScene.englishWords1]);
    var typingLength = mainScene.box[mainScene.englishWords1].q.length
    console.log(typingLength)
    
    var answerTyping = event.key;
    //テキストにする
    mainScene.typingText.text = mainScene.typingText.text + answerTyping;
    
    console.log(answerTyping)
    console.log(typingLength)
    console.log(this.typingNum)
   //あってるか確認
   console.log(mainScene.box[mainScene.englishWords1].q.charAt(this.typingNum))
    if(mainScene.box[mainScene.englishWords1].q.charAt(this.typingNum) == answerTyping){
        mainScene.typingCollect += 1;
        this.typingNum += 1;
        console.log(this.typingNum)
       //もう一回呼び出す
  //    push_keydown(event);
    }else{
    this.typingNum += 1;
    console.log(this.typingNum)
    //もう一回よび出す
  //  push_keydown(event);
    }
}

//問題を終えた後の処理
mainScene.endroll = function () {
    console.log("こんにちは")
    //選択肢を消す
    this.solve01Image.destroy();
    this.solve02Image.destroy();
    this.solve03Image.destroy();
    this.solve04Image.destroy();
    this.white = this.add.image(345, 210, "white");
    this.nothing = this.add.image(345, 210, "nothing");
    this.white.depth = 180;
    this.answer01.text = "    ";
    this.answer02.text = "    ";
    this.answer03.text = "    ";
    this.answer04.text = "    ";
    this.problem.text = "   ";
    this.problem.text = "Congratulations";
    this.problem.depth = 200;
    this.englishMissOldChoices = [];
    this.empty06();
    this.check.text = "スペル問題へ移る"
    this.empty06.depth = 300;
    this.check.depth = 350;
    //ここに間違ってるのがなかったら以下の処理をしないという文を書く
    if(this.englishMissChoices != 0){
    this.empty05();
    this.empty05.depth = 210;
    this.continue.text = '間違った問題を復習する';
    this.continue.depth = 250;
    }
};
