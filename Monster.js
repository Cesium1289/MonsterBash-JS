
class Monster{
    constructor(name,type,stats=0){
        this.name = name;
        this.type = type;
        this.stats = new Array();    

        //only use stat param if it is an array of stats
        if(Array.isArray(stats))
        {
            this.stats = stats.map((stat)=>{
                return{name: stat.name, value: stat.value}
            })
            
        } 
        else
        this.GenerateStats();
    }

    GenerateStats()
    {
        this.stats = [new Stat("Health",100,150), 
        new Stat("Armor",100,150),
        new Stat("Damage",20)]  
    }
    
    Display(){
        console.log(`Name: ${this.name}\n Type: ${this.type}`);
        this.stats.forEach((stat) => {
            console.log(`${stat.name}: ${stat.value}`);
        });
    }
    
    DisplayToDom(){
        const div = document.querySelector(".currentMonster");
        div.innerText = `Name: ${this.name}\n Type: ${this.type}`;
        this.stats.forEach((stat)=>{
            const li = document.createElement("li");
            li.innerText = `${stat.name}: ${stat.value}`;
            div.appendChild(li);
        })
        
    }
    
    CreateMonster(e)
    {
        e.preventDefault();
        console.log("create monster called!");
    }
}


//take event data in create-monster.html to create a new monster
function CreateMonster(e)
{
    let type='';
    e.preventDefault();
    let name = e.target.querySelector("#monster-name-value").value;
    name = e.target.querySelector("#monster-name-value").value;
    e.target.querySelectorAll("#monster").forEach((monster)=>{
        if(monster.checked === true)
        type = monster.value;
    });
    if(name !=='' && type!=='')
    {
        let monster = new Monster(name,type);
        console.log(monster)
        monster.Display();
        e.target.querySelector("#monster-name-value").value = '';
        e.target.querySelectorAll("#monster").forEach((monster)=>{
            monster.isChecked = false});
            AddMonsterToLocalStorage(monster);
    }
    else
    {
        alert("Enter valid monster creation options!")
    }
  
}

//Add a newly created monster to local storage
function AddMonsterToLocalStorage(newMonster)
{
    let monsters = [];
    let exists = false;
    
    if(localStorage.getItem("available-monsters")!= null)
    {
    monsters = JSON.parse(localStorage.getItem("available-monsters"));
        monsters.forEach((monster)=>{
            if(monster.name.toLowerCase() === newMonster.name.toLowerCase() )
            {
                alert("A monster with that name already exists. Please choose a different name.");
                exists = true;
                return;
            }
        })
    }

    if(!exists)
    {
        if(localStorage.getItem("current-monster")== null)
        localStorage.setItem("current-monster", JSON.stringify(newMonster));
        monsters.push(newMonster);
        localStorage.setItem('available-monsters',JSON.stringify(monsters));
    }

}

class Stat{
    name;
    value;
    constructor(name,value, maxVal=0){
        this.name = name;

        //if a max val is passed, value becomes the minimum value
        // the stat can be
        if(maxVal !==0)
        this.value = this.GenerateStatValue(value,maxVal);
        else
        this.value= value;
        Object.preventExtensions(this);
    }
    GenerateStatValue(min,max){
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        this.value = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
        console.log(this.value)
        return this.value;
    }
    get name()
    {
        return this.name;
    }

    get value()
    {
        return this.value;
    }

   
    set value(value)
    {
        this.value = value;
    }
}