import { Entity } from "../core/entities/entity";
import { UniqueEntityID } from "../core/entities/unique-entity-id";

interface InstructorProps {
  name: string
}

export class Instructor extends Entity<InstructorProps>{
  static create(props: InstructorProps, id: UniqueEntityID){
    const instuctor = new Instructor(props, id)

    return instuctor
  }
}