//Para entender, practicamente un decorador es una funcion que tiene acceso a la definicion a la clase, metodo, propiedad, etc.
class newPokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}
    scream(){
        console.log(`NO!!`);
    }
    speak(){
        console.log(`NO TAMPOCO`);
    }
}


const myDecorator = ()=>{
    return (target: Function)=>{
        return newPokemon;
    }
}

@myDecorator()
export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string
    ){}
    scream(){
        console.log(`${this.name.toUpperCase()}!!`);
    }
    speak(){
        console.log(`${this.name}, ${this.name}`);
    }
}

export const charmander = new Pokemon(4, 'Charmander');

charmander.scream();
charmander.speak();