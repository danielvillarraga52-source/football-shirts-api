import {
  Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn,
} from 'typeorm';
import { User } from './User';
import { Product } from './Product';

@Entity({name:"favorites"})
export class Favorite {
  @PrimaryColumn({ name: 'user_id' })
  userId!: number;

  @PrimaryColumn({ name: 'product_id' })
  productId!: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: Date;

  @ManyToOne(() => User, (user) => user.favorites, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @ManyToOne(() => Product, (product) => product.favorites, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'product_id' })
  product!: Product;
}