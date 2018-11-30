// Enemies our player must avoid
//let default_x;
//let default_y;
class Enemy  
{
    //
    constructor(a,b) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
     
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.default_x = a;
        this.default_y = b;
        this.x = this.default_x;
        this.y = this.default_y;
        this.sprite = 'images/enemy-bug.png';
    }
    
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        if(this.x<500){

        console.log(this.x)
        this.x = this.x * 1.02;
        //console.log(this.x)
        //this.y = this.y + 10;
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
      }  // all computers.
      if (this.x == 494.5769102636695){
         console.log(this.x);
          this.x = this.default_x;
          this.y = this.default_y;
          console.log(this.y);
          this.render();
      }
    };
    
    // Draw the enemy on the screen, required method for game
    render() 
    {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
    
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class player {
            constructor(){
                this.x = 200;
                this.y = 425;
                this.sprite = 'images/char-boy.png';
            }
                render() {
                    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
                };
                handleInput(alkeys){
                              if(this.x < 401 && this.x > -1)
                                 {   
                                    switch(alkeys){
                                        case 'left' : if(this.x > 0 )
                                                      this.x = this.x - 100;
                                                      console.log(this.x)
                                                    break;
                                        case 'up' :  if(this.y > 0 )
                                                      {
                                                       this.y = this.y - 100;
                                                       console.log(this.y)
                                                       if(this.y == -75){
                                                           //water touched method call
                                                       }
                                                        console.log(this.y)
                                                    }
                                                    break;
                                        case 'right' : if(this.x < 400 )
                                                        {this.x = this.x + 100;
                                                        console.log(this.x)}
                                                    break;
                                        case 'down' : if(this.y < 425 )
                                                     {this.y = this.y + 100;
                                                      console.log(this.y)}
                                                    break;
                                    }
                                }    

                }
    
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [1,2,3];
const enemy_obj = new Enemy(10,150);
const enemy_obj_2 = new Enemy(10,225);
const player_obj = new player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player_obj.handleInput(allowedKeys[e.keyCode]);
});
