interface DividerProps {
  number: string;
  title: string;
  subtitle: string;
}

export function Divider({ number, title, subtitle }: DividerProps) {
  return (
    <div className="flex justify-between items-center uppercase text-sm tracking-widest py-10 px-20 text-gray-400">
      <span>{number}</span>
      <span>{title}</span>
      <span>{subtitle}</span>
    </div>
  );
}