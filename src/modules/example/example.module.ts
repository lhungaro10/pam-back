import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExampleEntity } from "src/typeorm/entities/example.entity";

import { ExampleService } from "./services/example.service";
import { ExampleController } from "./controllers/example.controller";

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExampleController],
  providers: [ExampleService],
})
export class ExampleModule {}
