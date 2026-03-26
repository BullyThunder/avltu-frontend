'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '@/shared/Icon';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { loginFormProps } from '@/features/auth/ui/loginForm/types';

export const LoginForm = ({ onClose }: loginFormProps) => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('From sended');
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    // e.target — это то, на что физически нажали
    // e.currentTarget — это элемент, на котором висит этот обработчик (фон)
    if (e.target === e.currentTarget) {
      onClose(); // Закрываем только если кликнули именно по фону
    }
  };
  return (
    <div
      onClick={handleOverlayClick}
      className="font-fixelDisplay flex w-full max-w-sm flex-col items-center justify-center rounded-[24px] bg-[url('/avltu/bg-form.png')] p-10"
    >
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center gap-[60px] pt-24"
      >
        <div className="flex items-end justify-center gap-[10px]">
          <h2 className="font-dihjauti text-[48px] leading-none text-white">Login</h2>
          <img src="/avltu/logo_alvtu.svg" alt="logo" className="h-auto w-[40px]" />
        </div>
        <div className="flex flex-col gap-[40px]">
          <Input type="email" placeholder="email" />
          <Input
            type="password"
            placeholder="Пароль
          "
          />
          <a className="flex justify-center text-[22px]" href="">
            Забули пароль?
          </a>
          <Button className="cursor-pointer">Увійти</Button>
        </div>
      </form>
    </div>
  );
};
