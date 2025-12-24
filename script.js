class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.lastTime = 0;
    }

    update(deltaTime) {

    }

    draw(){
        this.ctx.clearRect(0,0,this.width,this.height);
    }

    animate(timeStamp){
        const deltaTime = timeStamp - this.lastTime;
        this.deltaTime = deltaTime;
        this.lastTime = timeStamp;

        this.update(deltaTime);
        this.draw();

        requestAnimationFrame(this.animate.bind(this));
    }

}