// import PropTypes from 'prop-types';
// import { useState, useEffect, useRef } from 'react';
// import GuestListApp from './App';
// import Form from './Form';

// export default function GuestList(guest) {
//   return (
//     <div
//       key={`guest-${guest.lastName}-${guest.id}`}
//       data-test-id="guest"
//       className="guest"
//     >
//       <div className="guestName" title="Edit Name">
//         <p onClick={() => patchName(guest.id)}>{`${guest.firstName}`}</p>
//         <p onClick={() => patchName(guest.id)}>{`${guest.lastName}`}</p>
//       </div>
//       <div className="Attendance">
//         <label>
//           <input
//             type="checkbox"
//             aria-label={'change attending' + guest.firstName}
//             checked={guest.attending}
//             onChange={() => {
//               updateAttendance(guest.id, guest.attending).catch((error) =>
//                 console.log(error),
//               );
//             }}
//           />
//           {guest.attending ? 'Attending' : 'not Attenting'}
//         </label>
//       </div>
//       <button
//         onClick={() =>
//           deleteGuest(guest.id).catch((error) =>
//             console.log('remove guest: ' + error),
//           )
//         }
//       >
//         Remove guest
//       </button>
//     </div>
//   );
// }
// const inputFirstName = useRef(guest.firstName);
// const inputLastName = useRef(guest.LastName);
// const [isEditable, setIsEditable] = useState(false);
// const changeIsEditable = () => {
//   setIsEditable(!isEditable);
// };

// return (
//   <>
//     <input
//       defaultValue={guest.firstName}
//       ref={inputFirstName}
//       placeholder={guest.firstName}
//     />
//     <input
//       defaultValue={guest.lastName}
//       ref={inputLastName}
//       placeholder={guest.lastName}
//     />
//     <button
//       onClick={() => {
//         changeIsEditable();
//       }}
//     >
//       Cancel
//     </button>
//     <button
//       onClick={() => {
//         console.log(inputFirstName.current.value);
//         console.log(inputLastName.current.value);
//         //updateFirstName(guest.id, inputFirstName.current.value);
//         //updateLastName(guest.id, inputLastName.current.value);
//         changeIsEditable();
//       }}
//     >
//       Save
//     </button>

//     <span
//       className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
//     >{`${guest.firstName} `}</span>
//     <span
//       className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
//     >
//       {guest.lastName}
//     </span>
//   </>
// );
