'use client';

import Link from 'next/link';
import { useState } from 'react';
import { LoginForm } from '@/features/auth/ui/loginForm/loginForm';
import { RegistrForm } from '@/features/auth/ui/registForm/registrForm';
import { registerUser } from '@/services/auth/auth';
import { Icons } from '@/shared/Icon';

export const Header = () => {
  // Состояние: открыта ли форма (true) или закрыта (false)
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRegistr, setIsOpenRegistr] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-h-screen items-center justify-between overflow-y-auto px-4">
          {/* Левая часть: Логотип */}
          <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <Icons.Shipment className="h-8 w-8 text-green-700" />
            <span className="text-xl font-bold tracking-tight text-slate-900">AVLTU</span>
          </Link>

          {/* Центральная часть: Навигация */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              prefetch={false}
              href="/calculate"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-700"
            >
              Калькулятор
            </Link>
            <Link
              prefetch={false}
              href="/tracking"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-700"
            >
              Отследить груз
            </Link>
            <Link
              prefetch={false}
              href="/services"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-green-700"
            >
              Услуги
            </Link>
          </nav>

          {/* Правая часть: Кнопки */}
          <div className="flex items-center gap-3">
            {/* Кнопка входа (открывает модалку) */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 shadow-sm transition-all hover:border-green-500 hover:bg-green-50"
            >
              <Icons.User className="h-4 w-4 text-slate-500" />
              <span className="text-sm font-semibold text-slate-700">Авторизація</span>
            </button>

            {/* Кнопка регистрации (ссылка на отдельную страницу) */}
            <button
              onClick={() => setIsOpenRegistr(true)}
              className="flex items-center gap-2 rounded-full bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800"
            >
              <Icons.UserPlus className="h-4 w-4" />
              Реестрація
            </button>
          </div>
        </div>
      </header>

      {/* МОДАЛЬНОЕ ОКНО (Рендерится вне шапки через fixed) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          {/* Контент модалки */}
          <div className="relative w-full max-w-sm">
            {/* Кнопка-крестик — ТЕПЕРЬ ЭТО ЕДИНСТВЕННЫЙ ПУТЬ ЗАКРЫТЬ ФОРМУ */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-4 -right-4 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-slate-100 active:scale-95"
            >
              ✕
            </button>

            {/* Твоя форма */}
            <LoginForm onClose={() => setIsOpen(false)} />
          </div>
        </div>
      )}
      {isOpenRegistr && (
        // 1. Добавляем overflow-y-auto и py-10, чтобы был отступ сверху и снизу
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/60 p-4 py-10 backdrop-blur-sm">
          {/* 2. Обертка relative должна иметь запас места сверху для крестика */}
          <div className="relative my-auto w-full max-w-sm">
            {/* Кнопка-крестик */}
            <button
              onClick={() => setIsOpenRegistr(false)}
              className="absolute -top-4 -right-4 z-[110] flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white shadow-md transition-all hover:bg-slate-100 active:scale-95"
            >
              ✕
            </button>

            {/* Форма регистрации */}
            <RegistrForm onClose={() => setIsOpenRegistr(false)} />
          </div>
        </div>
      )}
    </>
  );
};
