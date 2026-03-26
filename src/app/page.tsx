export default function Home() {
  return (
    // Пустой тег или просто div.
    // Поскольку Header и Footer уже в layout.tsx, здесь будет пустота между ними.
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-2xl font-bold">Welcome</h1>
    </div>
  );
}
