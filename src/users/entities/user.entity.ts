import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recipe } from "../../recipes/entities/recipe.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type: 'int'})
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({default: true})
    isActive: boolean;

    @OneToMany(() => Recipe, (recipe) => recipe.user)
    recipes: Recipe[];
}