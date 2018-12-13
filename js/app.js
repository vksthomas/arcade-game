// Enemies our player must avoid
//let default_x;
//let default_y;
class Enemy {
    //
    constructor(startingYCoordinate) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images

        this.min = 1.009;
        this.max = 1.10;
        this.enemy_width = 10;
        this.my_speed_Array = [3, 5, 6, 8];
        this.speed = this.my_speed_Array[Math.floor(Math.random() * this.my_speed_Array.length)];
        let a = -53;
        this.default_x = a;
        this.default_y = startingYCoordinate;
        this.y = this.default_y;
        this.x = this.default_x + 51;

        this.sprite = 'images/enemy-bug.png';
    }

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {

        if (this.x < 500) {
            this.x = this.x + this.speed;

    
            // You should multiply any movement by the dt parameter
            // which will ensure the game runs at the same speed for
        }  // all computers.
        if (this.x >= 500) {
          
            this.speed = this.my_speed_Array[Math.floor(Math.random() * this.my_speed_Array.length)];
            this.x = this.default_x + 51;
          
        }
        if(enemy_obj_4.x >= 492)
        {
            item = enemy_obj_4_x_array[Math.floor(Math.random()*enemy_obj_4_x_array.length)];
          
            enemy_obj_4.y = item;
      
        }
    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   
    };

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


class player {
    constructor() {
        this.x = 200;
        this.y = 425;
        this.player_width = 10;
        this.default_x = this.x;
        this.default_y = this.y;
        this.sprite = 'images/char-boy.png';
        
    }
    render() {
        //
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

       

    };

    update() {
        
        if (this.y == -75) {
            setTimeout(() => {
                
                this.x = this.default_x;
                this.y = this.default_y;
               
            }, 100);
         
        }
        allEnemies.forEach(element => {
           
            if (((player_obj.x <= (element.x + 15)) && (player_obj.x +100 > element.x)) && (   ( (player_obj.y == 25) && (element.y == 60) ) || ( (player_obj.y == 125) && (element.y == 140) ) || ( (player_obj.y == 225) && (element.y == 220) )  ) ) {
              
                player_obj.x = player_obj.default_x;
                player_obj.y = player_obj.default_y;
                level_count = 1;
                level = document.getElementById("level_count_id");
                level.innerHTML = level_count;
            }
        });


    }




    handleInput(alkeys) {
        if (this.x < 401 && this.x > -1) {
            switch (alkeys) {
                case 'left': if (this.x > 0)
                    this.x = this.x - 100;
                

                    break;
                case 'up': if (this.y > 0) {
                    this.y = this.y - 100;

                   
                    if (this.y == -75) {
                        //water touched method call
                       level_update();
                        

                        if(level_count == 4)
                        {
                            setTimeout(function() {
                                alert("Congratulations! You Won");
                                reset_game();
                                
                                  
                             },10);
                            
                        }
                    
                    }
                 
                }
                    break;
                case 'right': if (this.x < 400) {
                    this.x = this.x + 100;
                
                }

                    break;
                case 'down': if (this.y < 425) {
                    this.y = this.y + 100;
                }

                    break;
            }
        }
       
    }

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const enemy_obj = new Enemy(60);
const enemy_obj_2 = new Enemy(140);
const enemy_obj_3 = new Enemy(220);
const enemy_obj_4_x_array = [60, 140, 220];
let item = enemy_obj_4_x_array[Math.floor(Math.random()*enemy_obj_4_x_array.length)];
console.log(item);
let enemy_obj_4 = new Enemy(item);
const allEnemies = [enemy_obj, enemy_obj_2, enemy_obj_3, enemy_obj_4];
const player_obj = new player();
let level_count = 1;
let level;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player_obj.handleInput(allowedKeys[e.keyCode]);
});



function level_update()
        {
            level = document.getElementById("level_count_id");
            console.log(level_count);
            level_count = level_count + 1;
            level.innerHTML = level_count;
    
        };


        /* This function does nothing but it could have been a good place to
     * handle game reset states - maybe a new game menu or a game over screen
     * those sorts of things. 
     */
    

function reset_game()
{
    location.reload();
}        