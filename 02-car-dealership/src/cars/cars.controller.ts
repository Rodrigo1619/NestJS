import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep'];

    //con el decorador Get le decimos que cuando venga una peticion get al endpoint cars ejecute la funcion de obtener los carros
    @Get()
    getAllCars(){
        return this.cars
    }

    @Get(':id')
    getCarById( @Param('id')id:string){
        console.log({id})
        return {
            car: this.cars[id]
        }
    }
}
