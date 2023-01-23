import axios from "axios";
import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";

/* export class Pokemon{
    public id: number;
    public name: string;

    constructor(id:number, name:string){
        this.id = id,
        this.name = name
        console.log('Constructor llamado')
    }
} */
//Otra forma mas simplicaifcada de hacerlo es
export class Pokemon{

    //getters
    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg`;
    }

    constructor(
    public readonly id:number, 
    public name:string,
    ){}

    //Metodos: no son mas que funciones, esto lo vimos en POO con C# y lo podemos ver como las acciones que hace nuestro pokemon
    scream(){
        console.log(`${this.name.toUpperCase()}!!!`);
    }
    speak(){
        console.log(`${this.name}, ${this.name}`);
    }

    async getMoves(){
        //const moves = 10;
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves)

        return data.moves;
    }

}
//El readonly es para que no se pueda modificar el parametro de id
export const charmander = new Pokemon(4, 'Charmander');
console.log(charmander)

//utilizando metodos
/* charmander.speak();
charmander.scream(); */
//console.log(charmander.getMoves())
charmander.getMoves()
/* charmander.id = 10;
charmander.name = 'Miu ' */
