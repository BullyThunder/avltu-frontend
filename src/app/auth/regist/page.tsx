import { RegistForm } from '@/features/auth'; // Импортируем из твоего Public API

export default function RegistPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      {/* Теперь страница регистрации доступна по прямой ссылке /auth/regist */}
      <RegistForm />
    </main>
  );
}
