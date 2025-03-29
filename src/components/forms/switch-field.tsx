// // import 'react-datepicker/dist/react-datepicker.css';
// import { Switch } from '@/components/switch';
//
// import {
//   FieldWrapper,
//   FieldWrapperPassThroughProps,
// } from './field-wrapper';
//
// type TextAreaFieldProps = FieldWrapperPassThroughProps & {
//   className?: string;
//   name?: any;
//   // control?: any;
//   placeholder?: string;
//   onToggle?: (e: boolean) => void;
//   onChange?: (e: any) => void;
//   value?: any;
// };
//
// export const SwitchField = ({
//   label,
//   name,
//   // error,
//   // control,
//   required = true,
//   onToggle,
//   // onChange,
//   value,
// }: TextAreaFieldProps) => {
//   return (
//     <FieldWrapper
//       label={label}
//       // error={error}
//       required={required}
//     >
//       {/* <Controller
//         control={control}
//         name={name}
//         defaultValue={false} // Set default value to false
//         render={({ field: { onChange, value = false } }) => ( */}
//           <div>
//             <Switch
//               name={name}
//               // value={value}
//               isChecked={value}
//               handleToggle={(value) => {
//                 // onChange(value);
//                 if (onToggle) {
//                   onToggle(value);
//                 }
//               }}
//             />
//           </div>
//         {/* )}
//       /> */}
//     </FieldWrapper>
//   );
// };
