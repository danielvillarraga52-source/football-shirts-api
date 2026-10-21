import Role from "./Enum";

interface IUser {
  id: number;
  name: string;
  lastName: string;
  email: string;
  role: Role;
  active:boolean;
  passwordHash:string;
  
}

export default IUser;