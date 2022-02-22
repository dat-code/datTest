class sound {
    constructor(fileName) {
        this.fileName = fileName;
        this.audio = new Audio('duanjs' + this.fileName);
    }
    start() {
               this.audio.play();
    }
    stop() {

    }
}