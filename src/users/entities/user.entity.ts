import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from '../../recipes/entities/recipe.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ unique: false })
    email: string;

    @Column({ nullable: false })
    password: string;

    @OneToMany(() => Recipe, (recipe) => recipe.user)
    recipes: Recipe[];
}