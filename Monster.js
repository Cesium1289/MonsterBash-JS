 class Monster{
    constructor(name,type,stats){
        this.name = name;
        this.type = type;
        this.stats = stats;
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