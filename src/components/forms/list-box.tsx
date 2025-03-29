// import { Listbox, Transition } from "@headlessui/react";
// import { CheckIcon } from "lucide-react";
// import * as React from "react";
// import { Fragment } from "react";
// import { ChevronUpDownIcon } from "@heroicons/react/24/outline";
//
// import { cn } from "@/lib/utils";
// import { truncateString } from "@/utils/helper";
//
// export type ListBoxOption = {
//   label: React.ReactNode;
//   value: { code: string; name: string } | string; // Allow both string and object types
// };
//
// interface ListBoxProps {
//   options: ListBoxOption[];
//   onChange: (value: any) => void;
//   value?: any;
//   className?: string;
//   limit?: number;
//   disabled?: boolean;
// }
//
// export function ListBox({
//   options,
//   onChange,
//   value,
//   className,
//   limit,
//   disabled,
// }: ListBoxProps) {
//   // Use a type guard to check if value is an object or string
//   const selectedOption =
//     typeof value === 'string'
//       ? options.find((option) => option.value === value)?.label
//       : options.find(
//           (option) =>
//             typeof option.value !== 'string' && option.value.code === value?.code
//         )?.label;
//
//   const displayedOption = limit
//     ? truncateString(selectedOption as string, limit)
//     : selectedOption;
//
//   return (
//     <Listbox value={value} onChange={onChange} as={"div"} disabled={disabled}>
//       {({ open }) => (
//         <>
//           <div className="relative">
//             <Listbox.Button
//               className={cn(
//                 `relative w-full appearance-none rounded-md border border-[#E5E7EB] py-4 ${disabled ? 'bg-[#e9e9e9]' : 'bg-[#F9FAFB]'} cursor-default pl-3 pr-10 shadow-none text-left text-gray-600  focus:border-gray-200 focus:outline-none focus:ring-gray-200 sm:text-sm sm:leading-6`,
//                 className
//               )}
//             >
//               <span className="block truncate">
//                 {displayedOption ?? (
//                   <span className={"text-gray-400"}>Choose an option</span>
//                 )}
//               </span>
//               <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                 <ChevronUpDownIcon
//                   className="h-5 w-5 text-gray-400"
//                   aria-hidden="true"
//                 />
//               </span>
//             </Listbox.Button>
//
//             <Transition
//               show={open}
//               as={Fragment}
//               leave="transition ease-in duration-100"
//               leaveFrom="opacity-100"
//               leaveTo="opacity-0"
//             >
//               <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md custom-scrollbar bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                 {options.map((option) => (
//                   <Listbox.Option
//                     key={
//                       typeof option.value === 'string'
//                         ? option.value
//                         : option.value.code
//                     }
//                     className={({ active }) =>
//                       cn(
//                         active ? "bg-[#12342A] text-white" : "text-gray-600",
//                         "relative cursor-default select-none py-2 pl-3 pr-9"
//                       )
//                     }
//                     value={option.value}
//                   >
//                     {({ selected, active }) => (
//                       <>
//                         <span
//                           className={cn(
//                             selected ? "font-semibold" : "font-normal",
//                             "block truncate"
//                           )}
//                         >
//                           {option.label}
//                         </span>
//
//                         {selected ? (
//                           <span
//                             className={cn(
//                               active ? "text-white" : "text-[#12342A]",
//                               "absolute inset-y-0 right-0 flex items-center pr-4"
//                             )}
//                           >
//                             <CheckIcon className="h-5 w-5" aria-hidden="true" />
//                           </span>
//                         ) : null}
//                       </>
//                     )}
//                   </Listbox.Option>
//                 ))}
//               </Listbox.Options>
//             </Transition>
//           </div>
//         </>
//       )}
//     </Listbox>
//   );
// }
