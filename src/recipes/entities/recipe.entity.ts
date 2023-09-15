import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Recipe {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ nullable: true })
    description?: string;

    @Column({ type: 'int8' })
    proteins: number;

    @Column({ type: 'int8' })
    fats: number;

    @Column({ type: 'int8' })
    carbohydrates: number;

    @ManyToOne(() => User, (user) => user.recipes)
    user: User;
}
