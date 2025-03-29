import Image from "next/image";

interface ProfileProps {
  imageSrc?: string;
  name?: string;
  title?: string;
}

export function ProfileCard({ imageSrc, name, title }: ProfileProps) {
  return (
    // <div
    //   className="p-8 @container relative overflow-auto rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50 dark:inset-ring dark:inset-ring-white/5 group-data-dragging:before:absolute group-data-dragging:before:inset-0"
    // >
      <div className="flex flex-col my-3 gap-2 p-5 sm:flex-row sm:items-center sm:gap-6 sm:py-4 mx-auto max-w-sm space-y-2 rounded-xl bg-white px-8 py-8 shadow-lg ring ring-black/5 @sm:flex @sm:items-center @sm:space-y-0 @sm:gap-x-6 @sm:py-4">
        <Image
          src={`${imageSrc}`}
          alt=""
          className="mx-auto block h-24 rounded-full @sm:mx-0 @sm:shrink-0"
          width={100}
          height={100}
        />
        <div className="space-y-2 text-center @sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg font-semibold text-black">{name}</p>
            <p className="font-medium text-gray-500">{title}</p>
          </div>
          <button className="rounded-full border border-purple-200 px-4 py-1 text-sm font-semibold text-purple-600 hover:border-transparent hover:bg-[#f3423f] hover:text-white active:bg-purple-700">
            Message
          </button>
        </div>
      {/* </div> */}
    </div>
  );
}
