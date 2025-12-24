class Player {
    constructor(game){
        this.game = game;
        this.width = 50;
        this.height = 50;

        this.x = 100;
        this.y = this.game.height - this.height;

        this.vy = 0;
        this.weight = 1;
    }

    onGround(){
        return this.y >= this.game.height - this.height;
    }

    draw(context){
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.y += this.vy;

        if(this.onGround()){
            this.vy = 0;
            this.y = this.game.height - this.height;
        }
        else{
            this.vy += this.weight;
        }
    }
}