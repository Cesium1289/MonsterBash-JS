function CreateMenu(){
    const navbar = document.querySelector(".navbar");
    navbar.appendChild(CreateNavButton("Create Monster", "button-a","create-monster.html"));
    navbar.appendChild(CreateNavButton("Change Monster", "button-a","change-monster.html"));
    navbar.appendChild(CreateNavButton("Display Monster", "button-a","display.html"));
    navbar.appendChild(CreateNavButton("Visit Shop", "button-a","shop.html"));
    navbar.appendChild(CreateNavButton("Battle", "button-a","battle.html"));
    navbar.appendChild(CreateNavButton("Main Menu", "button-a","index.html"));
    
}

function CreateNavButton(text, classNames, destination){
    const a = document.createElement('a');
    a.setAttribute('href',destination);
    const button = document.createElement('button');
    button.classList.add(classNames);
    button.innerText = text;
    a.appendChild(button)
    return a;
}

function DisplayAllMonsters(){
    const div = document.querySelector(".monster-display");
    console.log(div)
    if(localStorage.getItem("available-monsters") == null)
    {
        div.appendChild(document.createTextNode("There are no monsters to display"));
        
    }
    else
    {
        const curMonster = JSON.parse(localStorage.getItem("current-monster"));
        const monsters = JSON.parse(localStorage.getItem("available-monsters"));
        monsters.forEach((monster) => {
            const monsterDiv = document.createElement("div");
            monsterDiv.innerText = monster.name;
            monsterDiv.classList.add("monster");
            monsterDiv.style.margin= '25px';
            if(curMonster.name === monster.name)
            monsterDiv.style.backgroundColor = 'red';
            div.appendChild(monsterDiv);
            monster.stats.forEach((stat)=>{
                const li = document.createElement("li");
                li.textContent = `${stat.name}: ${stat.value}`;
                monsterDiv.appendChild(li); 
            })
            const selectBtn = document.createElement("button");
            selectBtn.innerText = 'Select';
            monsterDiv.appendChild(selectBtn);
            const removeBtn = document.createElement("button");
            removeBtn.innerText = 'Remove';
            monsterDiv.appendChild(removeBtn);

        });

    }
}


//myMonster.DisplayToDom();
function init(){
    const currentPage = window.location.pathname;
    switch(currentPage)
    {
        case '/shop.html':
            console.log("at the shop");
            break;
        case '/index.html':
        case '/':
            console.log("at the main menu");
            break;
        case '/display.html':
            DisplayAllMonsters();
            console.log("display monster page")
            break;
        case '/create-monster.html':
            console.log("create monster page")
            document.querySelector("form").addEventListener("submit",CreateMonster);
            break;
        case '/change-monster.html':
            console.log("Change monster page");
            break;
        default:
            console.log("at nothing!");
            break;
        }
        CreateMenu();
}

document.addEventListener("DOMContentLoaded",init);