import axios from 'axios';
import { UserRegister, IUserResponse } from '@/api/auth.types';

const Api_Url = process.env.NEXT_PUBLIC_API_URL;
const instance = axios.create({
  baseURL: Api_Url,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (data: UserRegister) => {
  try {
    const response = await instance.post('/auth/register', data);
    console.log('Registration successful');
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
