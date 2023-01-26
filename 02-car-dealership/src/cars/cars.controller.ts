import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {

    //con el decorador Get le decimos que cuando venga una peticion get al endpoint cars ejecute la funcion de obtener los carros
    @Get()
    getAllCars(){
        return ['Toyota', 'Honda', 'Jeep'];
    }
}
