import Role from "./Enum";
interface UserDto{

  name: string;
  lastName: string;
  email: string;
  role: Role;
  active:boolean;
  passwordHash:string;
  
}
export default UserDto;