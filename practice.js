class Desk {
    constructor(name) {
        this.name = name;
        this.x = 0;
        this. y = 0;
        this.color = "black";
    }

    mov(x,y) {
        this.x = x;
        this.y = y;
    }

    updateColor(new_color) {
        this.color = new_color;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Position: ${this.x}, ${this.y}, Color: ${this.color}`);
    }
}

let desk1 = new Desk("renz");
desk1.mov(1,8);
desk1.displayInfo();