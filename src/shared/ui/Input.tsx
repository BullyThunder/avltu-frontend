import { InputHTMLAttributes } from 'react';

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string; //
}

export const Input = ({ label, ...props }: inputProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-bold">{label}</label>
    <input
      {...props}
      className="h-[64px] w-full rounded-[12px] border-[2px] border-[#A5D6A7] bg-white px-6 text-[20px] text-slate-900 transition-all outline-none placeholder:text-[#C0C0C0] focus:border-green-600"
    />
  </div>
);
