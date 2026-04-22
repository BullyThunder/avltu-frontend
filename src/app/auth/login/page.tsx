import { LoginForm } from '@/features/auth'; // Импорт через Public API (index.ts)

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      {/* Здесь твоя форма теперь доступна по прямой ссылке /auth/login */}
      <LoginForm />
    </main>
  );
}
