console.log("hello");

const monsterData = {
    name: "Goblin",
    type: "Creature",
    stats: [
        new Stat("Strength", 10) ,
         new Stat("eat","10")
        // Add more stats as needed
    ]
};

// Create a new Monster instance
const myMonster = new Monster(monsterData.name, monsterData.type, monsterData.stats);
localStorage.setItem("currentMonster",JSON.stringify(myMonster));

const newMonster = JSON.parse(localStorage.getItem("currentMonster"));

console.log(newMonster);
// Call the Display method to log information
myMonster.Display();
//myMonster.DisplayToDom();
function init(){
    const currentPage = window.location.pathname;
    switch(currentPage)
    {
        case '/shop.html':
            console.log("at the shop");
            
            break;
        case '/index.html':
            console.log("at the main menu");
            break;
            case '/display.html':
                console.log("display monster page")
                break;
        default:
            console.log("at nothing!");
            break;
    }
}

document.addEventListener("DOMContentLoaded",init);