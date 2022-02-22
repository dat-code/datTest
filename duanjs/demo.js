class altp {
    constructor() {
       this.ui = new use();
       this.ui.showScreen('welcome');
       this.ui.onStartBtnClick(()=> {
          console.log('clicked');
       });
       this.bgSound = new sound('acv.mp3');
       this.bgSound.start();
    }

    start() {

    }
}
var game = new altp();