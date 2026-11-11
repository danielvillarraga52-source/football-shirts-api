import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,
  ManyToOne, JoinColumn, OneToMany, Index,
} from 'typeorm';
import { Category } from './Category';
@Entity({ name: "products" })

export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 120 })
  name!: string;

  @Column({ type: "text", nullable: true })
  description?: string;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price!: number;

  @Column({ type: "int", default: 0 })
  stock!: number;

  @Column({type:'varchar', nullable: true })
  imageUrl?: string;

  @Column({ default: true })
  active!: boolean;

  @ManyToOne(() => Category, (category) => category.products, { nullable: false })
  category!: Category;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;
}