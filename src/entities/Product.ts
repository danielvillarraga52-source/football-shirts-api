import {
  Entity, PrimaryGeneratedColumn, Column, CreateDateColumn,
  ManyToOne, JoinColumn, OneToMany, Index,
} from 'typeorm';
import { Category } from './Category';
import { Favorite } from './Favorite';
import { OrderItem } from './OrderItem';

@Entity({name:"products"})
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @Column({ name: 'category_id' })
  categoryId!: number;

  @Column()
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ name: 'price_cents', type: 'int' })
  priceCents!: number;

  @Column({ type: 'int', default: 0 })
  stock!: number;

  @Column({ name: 'image_url' })
  imageUrl!: string;

  @Column({ name: 'is_active', default: true })
  isActive!: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @OneToMany(() => Favorite, (favorite) => favorite.product)
  favorites!: Favorite[];

  @OneToMany(() => OrderItem, (item) => item.product)
  orderItems!: OrderItem[];
}