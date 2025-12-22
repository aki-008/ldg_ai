interface StepProps {
  title: string;
  description: string;
  number?: number;
  colorClass?: string;
}

export default function Step({ title, description, number, colorClass }: StepProps) {
  return (
    <div className="group rounded-xl border border-black dark:border-white bg-white dark:bg-black p-6 shadow-sm hover:shadow-md transition hover:-translate-y-1">
      {/* Step Number */}
      {number !== undefined && (
        <div className={`h-10 w-10 rounded-full flex items-center justify-center font-bold mb-4 border border-black dark:border-white ${colorClass || 'bg-black text-white'}`}>
          {number}
        </div>
      )}

      <h3 className="font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-black dark:text-white">
        {description}
      </p>
    </div>
  );
}
