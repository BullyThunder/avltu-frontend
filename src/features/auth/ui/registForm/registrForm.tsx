'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '@/shared/Icon';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { registrFormProps } from '@/features/auth/ui/registForm/types';

export const RegistrForm = ({ onClose }: registrFormProps) => {
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
    <div className="font-fixelDisplay flex w-full max-w-sm flex-col items-center justify-center rounded-[24px] bg-[url('/avltu/bg-form.png')] p-10">
      <form onSubmit={handleLogin} className="flex flex-col items-center justify-center gap-[60px]">
        <div className="flex items-end justify-center gap-[10px]">
          <h2 className="font-dihjauti text-[48px] leading-none text-white">Registration</h2>
          <img src="/avltu/logo_alvtu.svg" alt="logo" className="h-auto w-[40px]" />
        </div>
        <div className="flex flex-col gap-[40px]">
          <Input type="name" placeholder="Введіть ваше ім'я" />
          <Input type="email" placeholder="Введіть email" />
          <Input
            type="password"
            placeholder="Введіть Пароль
          "
          />
          <Input
            type="password"
            placeholder="Повторно введіть пароль
          "
          />
          <Button className="cursor-pointer">Зарееструватися</Button>
        </div>
      </form>
    </div>
  );
};
