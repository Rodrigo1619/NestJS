import axios from "axios";



export class PokeApiAdapter{

    //recomendado hacer esto porque si en lugar de axios se hace axios2 nos dira en que lugar hacer cambios
    private readonly axios = axios;

    async get(url: string){
        const { data } = await this.axios.get(url);
        return data;
    }
    async post(url:string, data:any){
        
    }
    async patch(url:string, data:any){

    }
    async delete(url:string){

    }

}