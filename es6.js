/* 3. Use ES6 Class syntax */
class Desk {
   constructor(name) {
      this.name = name;
      this.x = 0;
      this.y = 0;
      this.color = "black";
   }

   mov(x, y) {
      this.x = x;
      this.y = y;
   }

   updateColor(new_color) {
      this.color = new_color;
   }

   displayinfo() {
      console.log(`Name: ${this.name}, Position: (${this.x}, ${this.y}), Color: ${this.color}`);
      /* console.log("Name: " + this.name + ", Position: (" + this.x + ", " + this.y + "), Color: " + this.color); */
   }
}
  
let desk1 = new Desk("oak desk");
let desk2 = new Desk("maple desk");
desk1.updateColor("brown");
desk1.displayinfo();
 