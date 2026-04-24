import { forwardRef, InputHTMLAttributes } from 'react';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; //
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, inputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label className="text-sm font-bold text-white">{label}</label>}

        <input
          {...props}
          ref={ref}
          className={`h-[64px] w-full rounded-[12px] border-[2px] bg-white px-6 text-[20px] text-slate-900 transition-all outline-none placeholder:text-[#C0C0C0] ${error ? 'border-red-500 focus:border-red-600' : 'border-[#A5D6A7] focus:border-green-600'} ${className}`}
        />

        {/* Вывод ошибки под инпутом */}
        {error && <span className="text-sm text-red-400">{error}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
