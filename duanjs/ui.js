class use {
    constructor() {

    }
    showScreen(screenName) {
       let currentScreen = document.getElementById(screenName);
       currentScreen.style.display = 'block';
    }
    onStartBtnClick(callback){
        let startBtn = document.getElementById('startBtn');
        startBtn.addEventListener('click',callback);
    }
}