import { Body, Controller, Get, Post } from "@nestjs/common";
import { ExampleService } from "../services/example.service";
import { ExampleEntity } from "src/typeorm/entities/example.entity";

@Controller('/example')
export class ExampleController {
    constructor(
        private exampleService: ExampleService
    ) { }

    @Get('hello')
    getHello(): string {
        return 'Hello World!';

    }

    @Get('get-users')
    async getAllUsers(): Promise<ExampleEntity[]> {
        return await this.exampleService.getAllUsers();
    }

    @Post('save-example')
    async saveExample(@Body() body: ExampleEntity): Promise<ExampleEntity> {
        return await this.exampleService.saveExample(body);
    }
}
