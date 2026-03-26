import { ButtonHTMLAttributes } from 'react';

// 1. Описываем интерфейс пропсов.
// Наследуем всё от стандартной кнопки React (HTMLButtonElement).
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string; // Текст внутри кнопки делаем обязательным
}

// 2. Создаем сам компонент.
// Используем деструктуризацию: забираем text и children,
// а всё остальное (onClick, type и т.д.) собираем в props.
export const Button = ({ children, ...props }: ButtonProps) => (
  <button
    {...props} // Распаковываем стандартные атрибуты (например, type="submit")
    className="/* Высота как на макете, соразмерна инпутам */ /* Ширина на весь контейнер */ /* Максимально круглые края */ /* Тот самый темно-зеленый цвет */ /* Белый текст */ /* Крупный шрифт (можно настроить по макету) */ /* Полужирное начертание для акцента */ /* Эффекты при взаимодействии */ /* Плавное изменение цвета */ /* Немного темнее при наведении */ /* Легкий эффект нажатия */ /* Обработка отключенного состояния */ h-[64px] w-full rounded-full bg-[#2D4A3E] text-[20px] font-semibold text-white transition-colors hover:bg-[#1f332a] active:scale-95 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {children} {/* Выводим текст кнопки */}
  </button>
);
