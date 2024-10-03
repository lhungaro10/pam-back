import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExampleEntity } from "src/typeorm/entities/example.entity";
import { MongoRepository } from "typeorm";

@Injectable()
export class ExampleService {
    constructor(
        @InjectRepository(ExampleEntity) private exampleRepository: MongoRepository<ExampleEntity>,
    ) {}
    getHello(): string {
        return 'Hello World!';
    }

    async saveExample(body: ExampleEntity): Promise<ExampleEntity> {
        if(!body.id){
            return await this.exampleRepository.save(body);
        } else {
            const updatedExample =  await this.exampleRepository.update(body.id, body);
            return updatedExample.raw
        }
    }

    async getAllUsers(): Promise<ExampleEntity[]> {
        return await this.exampleRepository.find();
    }
}
