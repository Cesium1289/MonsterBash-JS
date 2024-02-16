
class Monster{
    constructor(name,type,stat=''){
        this.name = name;
        this.type = type;
        this.stats = new Array();    

        if(Array.isArray(stat))
        {
            this.stats = stat.map((x)=>{
                return{name: x.name, value: x.value}
            })
            
        } 
        else
        this.stats.push(stat);
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
    }
    else
    {
        alert("Enter valid monster creation options!")
    }
   
  
}
class Stat{
    name;
    value;
    constructor(name,value){
        this.name = name;
        this.value = value;
        Object.preventExtensions(this);
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