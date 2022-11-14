import { ifError } from 'assert';
import React from 'react';
import { useState } from 'react';

export interface SelectOption {
  label: string;
  value: string;
}

// interface Props {
//   value: string;
//   optionProp: Array<SelectOption>;
//   onChange: (v: string) => void;
// }

// export const Select: React.FC<Props> = (props: Props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectItem, setSelectIem] = useState<string>(props.value);

//   const selectedValue = (title: string) => {
//     props.onChange(title);
//     setSelectIem(title);
//   };
//   return (
//     <>
//       <div>
//         <button
//           type="button"
//           onClick={() => setIsOpen(!isOpen)}
//           className="select"
//         >
//           <div>{selectItem}</div>
//         </button>
//         {isOpen && (
//           <ul className="select-ul">
//             {props.optionProp.map((item: SelectOption) => (
//               <li
//                 onClick={() => selectedValue(item.value)}
//                 onKeyDown={() => selectedValue(item.value)}
//                 key={item.id}
//                 className="select_li"
//               >
//                 {item.value}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// };
