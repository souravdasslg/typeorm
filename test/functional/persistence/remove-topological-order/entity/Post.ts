import { Category } from "./Category"
import { Entity } from "../../../../../src/decorator/entity/Entity"
import { PrimaryGeneratedColumn } from "../../../../../src/decorator/columns/PrimaryGeneratedColumn"
import { Column } from "../../../../../src/decorator/columns/Column"
import { OneToMany } from "../../../../../src/decorator/relations/OneToMany"

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @OneToMany(() => Category, (category) => category.post, {
        cascade: ["insert"],
    })
    categories: Category[]
}
