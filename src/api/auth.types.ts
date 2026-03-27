export interface UserRegister {
  email: string;
  name: string;
  password: string;
}

export interface IUserResponse {
  id: number;
  email: string;
  name: string;
  createdAt: string;
}
