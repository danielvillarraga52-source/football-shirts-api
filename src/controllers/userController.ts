import IUser from "../interfaces/IUsers";
import UserDto from "../interfaces/UserDto";

const users:IUser[]=[];
let id:number=1;


export const createUserController=async(userData:UserDto):Promise<IUser>=>{

    const newUser:IUser={
        id,
        name:userData.name,
        secondName:userData.secondName,
        lastName:userData.lastName,
        secondLastName:userData.secondLastName,
        email:userData.email,
        country:userData.country,
        address:userData.address,
        active:userData.active,
        role:userData.role
    }
    users.push(newUser);
    id++;
    return newUser;
}
 
    
   