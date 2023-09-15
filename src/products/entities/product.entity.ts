import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Recipe } from '../../recipes/entities/recipe.entity';
import { JoinTable } from 'typeorm';
import { Category } from '../../category/entities/category.entity';

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ type: 'decimal' })
    proteins: number;

    @Column({ type: 'decimal' })
    fats: number;

    @Column({ type: 'decimal' })
    carbohydrates: number;

    @Column({type: 'decimal' })
    calories: number;

    @ManyToMany(() => Recipe)
    @JoinTable()
    recipes: Recipe[];

    @ManyToOne(() => Category, (category) => category.products)
    category: Category;
}
