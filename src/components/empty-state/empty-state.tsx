import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface EmptyStateProps {
  className?: string;
  title?: string;
}
export function EmptyState({ title = "No Record", className }: EmptyStateProps) {
  return (
    <div className={twMerge("flex flex-col items-center text-center", className)}>
      <Image src="/img/no-application.png" alt="certified-Icon" width={70} height={70} />
      <p className="mt-4 text-sm">{title}</p>
    </div>
  );
}
