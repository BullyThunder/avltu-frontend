'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icons } from '@/shared/Icon';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { registrFormProps } from '@/features/auth/ui/registForm/types';
import { registerUser } from '@/services/auth/auth';

import { useState } from 'react';

export const RegistrForm = ({ onClose }: registrFormProps) => {
  const [isEmail, setEmail] = useState('');
  const [isNames, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [completeMessage, setCompleteMessage] = useState('');

  const [errorPasswordMessage, setErrorPasswordMessage] = useState('');
  const [isPassword, setPassword] = useState('');
  const [isConfirmPassword, setConfirmPassword] = useState('');

  const handleLoginRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    if (isPassword !== isConfirmPassword) {
      setErrorMessage('passwrod don`t match');
      return;
    }
    try {
      const sendedData = {
        email: isEmail,
        password: isPassword,
        name: isNames,
      };
      await registerUser(sendedData);
      console.log('Data is send');
      setCompleteMessage('Registration is complete');
      onClose();
    } catch (error) {
      setErrorMessage('Error registration');
      console.log(error);
    }
  };
  return (
    <div className="font-fixelDisplay flex w-full max-w-sm flex-col items-center justify-center rounded-[24px] bg-[url('/avltu/bg-form.png')] p-10">
      <form
        onSubmit={handleLoginRegistration}
        className="flex flex-col items-center justify-center gap-[60px]"
      >
        <div className="flex items-end justify-center gap-[10px]">
          <h2 className="font-dihjauti text-[48px] leading-none text-white">Registration</h2>
          <img src="/avltu/logo_alvtu.svg" alt="logo" className="h-auto w-[40px]" />
        </div>
        <div className="flex flex-col gap-[40px]">
          <Input
            type="name"
            value={isNames}
            onChange={(e) => setName(e.target.value)}
            placeholder="Введіть ваше ім'я"
          />
          <Input
            type="email"
            value={isEmail}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введіть email"
          />
          <Input
            type="password"
            placeholder="Введіть пароль"
            value={isPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Повторіть пароль"
            value={isConfirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {completeMessage && <p style={{ color: 'green', fontSize: '14px' }}>{errorMessage}</p>}
          {errorMessage && <p style={{ color: 'red', fontSize: '14px' }}>{errorMessage}</p>}
          <Button type="submit" className="cursor-pointer">
            Зарееструватися
          </Button>
        </div>
      </form>
    </div>
  );
};
