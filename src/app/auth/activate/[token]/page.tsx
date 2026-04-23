'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

export default function ActivatePage() {
  const params = useParams();
  const router = useRouter();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const { token } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://avltu-backend.onrender.com/auth/activate/${token}`,
        );
        if (response.status === 200) {
          setStatus('success');
        }
      } catch (error) {
        setStatus('error');
      }
    };
    if (token) {
      fetchData();
    }
  }, [token]);
  return (
    /* Головна обгортка */
    <div className="flex min-h-screen w-full justify-center bg-[#D9D2C0] p-4 pt-32">
      {/* pt-32 — робить великий відступ зверху, щоб картка була "ближче до верху", але не прилипала.
     justify-center — центрує горизонтально.
     items-center — ми прибрали, щоб не центрувати вертикально.
  */}

      <div className="h-fit w-full max-w-md rounded-2xl border border-gray-700 bg-gray-800 p-8 text-center shadow-2xl">
        {/* h-fit — КРИТИЧНО ВАЖЛИВО. Змушує блок бути лише такої висоти, яка потрібна для тексту.
         */}

        {/* СТАН: ЗАВАНТАЖЕННЯ */}
        {status === 'loading' && (
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            <h2 className="text-xl font-semibold text-white">Перевіряємо токен...</h2>
            <p className="text-gray-400">Це займе всього секунду</p>
          </div>
        )}

        {/* СТАН: УСПІХ */}
        {status === 'success' && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-3xl text-green-500">
              ✓
            </div>
            <h2 className="text-2xl font-bold text-white">Акаунт активовано!</h2>
            <p className="text-gray-400">Тепер ви можете користуватися всіма функціями сервісу</p>
            <button
              onClick={() => router.push('/auth/login')}
              className="mt-4 w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition-all hover:bg-blue-700 active:scale-95"
            >
              Увійти в систему
            </button>
          </div>
        )}

        {/* СТАН: ПОМИЛКА */}
        {status === 'error' && (
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/10 text-3xl text-red-500">
              ✕
            </div>
            <h2 className="text-2xl font-bold text-white">Помилка активації</h2>
            <p className="text-gray-400">Токен недійсний або термін його дії закінчився</p>
            <button
              onClick={() => router.push('/register')}
              className="mt-4 w-full rounded-xl bg-gray-700 py-3 font-bold text-white transition-all hover:bg-gray-600"
            >
              Спробувати знову
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
