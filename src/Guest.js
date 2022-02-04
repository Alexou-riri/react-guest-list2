//import PropTypes from 'prop-types';
//import { useState, useEffect, useRef } from 'react';
// import GuestList from './GuestList';
// import Form from './Form';

// export default function Guest(props) {
//   const [attending, setAttending] = useState(props.attending);
//   const baseUrl = 'http://vast-cliffs-69007.herokuapp.com';

//   async function updateAttending(id) {
//     const response = await fetch(`${baseUrl}/guests/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ attending: !attending }),
//     });
//     const updatedGuest = await response.json();
//     console.log(updatedGuest);
//     setAttending(!attending);
//     updateAttending().catch((error) => console.log('error' + error));

//     return (
//       <li key={props.firstName} data-test-id="guest">
//         <input
//           aria-label="attending"
//           type="checkbox"
//           checked={attending}
//           onChange={() => {
//             updateAttending(props.id).catch((error) => {
//               console.error('Error:', error);
//             });
//           }}
//         />
//         <p>
//           Name: {props.firstName} {props.lastName}
//         </p>
//         {attending ? <p> attending</p> : <p>not attending</p>}
//       </li>
//     );
//   }
// }

// export default function Guest({
//   id,
//   firstName,
//   lastName,
//   attending,
//   baseUrl,
//   guestList,
//   setGuestList,
// }) {

//   return (
//     <li>
//       <div data-test-id="guest">
//         <div>
//           <div>{firstName}</div>
//           <div>{lastName}</div>
//         </div>
//         <label>
//           attending
//           <input
//             type="checkbox"
//             // value={guest.attending}
//             aria-label="attending"
//             checked={attending}
//             onChange={(e) => onChangeAttending}
//           />
//         </label>
//         <button onClick={deleteGuest}>Remove</button>
//       </div>
//     </li>
//   );
// }
// Guest.propTypes = {
//   id: PropTypes.string.isRequired,
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   attending: PropTypes.bool.isRequired,
//   baseUrl: PropTypes.string,
//   guestList: PropTypes.arrayOf(
//     PropTypes.shape({
//       firstName: PropTypes.string.isRequired,
//       lastName: PropTypes.string.isRequired,
//       attending: PropTypes.bool.isRequired,
//       id: PropTypes.string.isRequired,
//     }),
//   ),
//   setGuestList: PropTypes.func,
// };

// //   return (
// //     <div
// //       key={`guest-${guest.lastName}-${guest.id}`}
// //       data-test-id="guest"
// //       className="guest"
// //     >
// //       <div className="guestName" title="Edit Name">
// //         <p onClick={() => patchName(guest.id)}>{`${guest.firstName}`}</p>
// //         <p onClick={() => patchName(guest.id)}>{`${guest.lastName}`}</p>
// //       </div>
// //       <div className="Attendance">
// //         <label>
// //           <input
// //             type="checkbox"
// //             aria-label={'change attending' + guest.firstName}
// //             checked={guest.attending}
// //             onChange={() => {
// //               updateAttendance(guest.id, guest.attending).catch((error) =>
// //                 console.log(error),
// //               );
// //             }}
// //           />
// //           {guest.attending ? 'Attending' : 'not Attenting'}
// //         </label>
// //       </div>
// //       <button
// //         onClick={() =>
// //           deleteGuest(guest.id).catch((error) =>
// //             console.log('remove guest: ' + error),
// //           )
// //         }
// //       >
// //         Remove guest
// //       </button>
// //     </div>
// //   );
// // }
// // const inputFirstName = useRef(guest.firstName);
// // const inputLastName = useRef(guest.LastName);
// // const [isEditable, setIsEditable] = useState(false);
// // const changeIsEditable = () => {
// //   setIsEditable(!isEditable);
// // };

// // return (
// //   <>
// //     <input
// //       defaultValue={guest.firstName}
// //       ref={inputFirstName}
// //       placeholder={guest.firstName}
// //     />
// //     <input
// //       defaultValue={guest.lastName}
// //       ref={inputLastName}
// //       placeholder={guest.lastName}
// //     />
// //     <button
// //       onClick={() => {
// //         changeIsEditable();
// //       }}
// //     >
// //       Cancel
// //     </button>
// //     <button
// //       onClick={() => {
// //         console.log(inputFirstName.current.value);
// //         console.log(inputLastName.current.value);
// //         //updateFirstName(guest.id, inputFirstName.current.value);
// //         //updateLastName(guest.id, inputLastName.current.value);
// //         changeIsEditable();
// //       }}
// //     >
// //       Save
// //     </button>

// //     <span
// //       className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
// //     >{`${guest.firstName} `}</span>
// //     <span
// //       className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
// //     >
// //       {guest.lastName}
// //     </span>
// //   </>
// // );
