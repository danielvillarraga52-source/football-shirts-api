import { DataSource } from "typeorm"
import { User } from "../entities/User"
import { Category } from "../entities/Category"
import { Product } from "../entities/Product"
import { Favorite } from "../entities/Favorite"
import { Order } from "../entities/Order"
import { OrderItem } from "../entities/OrderItem"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "santafe",
    database: "store_shirts",
    synchronize: true,
    //dropSchema:true,
    logging: false,
    entities: [User,Category,Product,Favorite,Order,OrderItem],
    subscribers: [],
    migrations: [],
})

export const userModel=AppDataSource.getRepository(User)
