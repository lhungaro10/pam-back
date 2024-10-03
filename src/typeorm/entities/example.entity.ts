import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity("example")
export class ExampleEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  quantity: number;
}
