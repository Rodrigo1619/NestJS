import axios from "axios";

//esta es la forma que le daremos a las clases para asi no tener problemas al llamar ya sea asxios o fetch
//Para ser explicitos, que regresamos una promesa de tipo T
//T es el generico por defecto, como en POO con C# se puede decir que es la Template
export interface HttpAdapter{
    get<T>(url:string):Promise<T>
}

//Debemos poner que nuestra clase implementa la interface
export class PokeApiFetchAdapter implements HttpAdapter{
    async get<T>(url:string):Promise<T>{
        const resp= await fetch(url);
        const data: T = await resp.json();

        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter{

    //recomendado hacer esto porque si en lugar de axios se hace axios2 nos dira en que lugar hacer cambios
    private readonly axios = axios;

    
    async get<T>(url: string): Promise<T>{ 
        const { data } = await this.axios.get<T>(url);
        return data;
    }
    /*async post(url:string, data:any){
        
    }
    async patch(url:string, data:any){

    }
    async delete(url:string){

    }*/

}