# Una caracteristica de TS
nosotros podemos meterle a un arreglo de numeros un string, debido a que nosotros ejecutamos JS en el navegador no TS, entonces eso es completamente valido, pero hay una sintaxis medio rara para convertir un string a number 
```
export const pokemonIds = [1,20,30,34,66];
pokemonIds.push( +'1');
```

# Interfaces
Como lo que se vio en POO con C# ayuda a crear un objeto para que luzca de una sola forma y obligar que a la hora de crear otro objeto que sea del tipo del objeto que se creo, obligue a que tenga las propiedades de ese objeto, por ejemplo si se crea una interface de Pokemon y ahora vamos a crear otro objeto que sea bulbaso y tenga tipo Pokemon se obligara a tener las propiedades que tiene el objeto Pokemon

```
interface Pokemon{
    id: number;
    name: string;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}
console.log(bulbasaur)

```
Ahora si queremos que algo sea opcional debido a que no sabemos cual sera ese parametro, solo le ponemos un signo de interrogacion
```
interface Pokemon{
    id: number;
    name: string;
    age?: number;
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}
console.log(bulbasaur)

```