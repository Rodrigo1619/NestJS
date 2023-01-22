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

    constructor(
    public readonly id:number, 
    public name:string
    ){}
}
//El readonly es para que no se pueda modificar el parametro de id
export const charmander = new Pokemon(4, 'Charmander');
/* charmander.id = 10;
charmander.name = 'Miu ' */
