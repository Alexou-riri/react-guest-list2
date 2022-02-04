// import React from 'react';
// import Guest from './Guest.js';
// import PropTypes from 'prop-types';
// import { useCallback, useEffect } from 'react';

// export default function GuestList({
//   guestList,
//   setGuestList,
//   isLoading,
//   setIsLoading,
//   baseUrl,
// }) {
//   // useEffect(() => {
//   //   async function fetchGuestList() {
//   //     setIsLoading(true);
//   //     const response = await fetch(`${baseUrl}/guests`);
//   //     const allGuests = await response.json();
//   //     setGuestList([...allGuests]);
//   //     // console.log(allGuests);
//   //     setIsLoading(() => false);
//   //   }
//   //   fetchGuestList().catch((error) => console.log('error' + error));
//   // }, []);

//   return guestList.map((singleGuest) => {
//     return (
//       <Guest
//         key={String(
//           singleGuest.id + singleGuest.firstName + singleGuest.lastName,
//         )}
//         id={singleGuest.id}
//         firstName={singleGuest.firstName}
//         lastName={singleGuest.lastName}
//         attending={singleGuest.attending}
//         baseUrl={baseUrl}
//         setIsLoading={setIsLoading}
//         guestList={guestList}
//         setGuestList={setGuestList}
//       />
//     );
//   });
// }
// GuestList.propTypes = {
//   guestsList: PropTypes.arrayOf(
//     PropTypes.shape({
//       firstName: PropTypes.string.isRequired,
//       lastName: PropTypes.string.isRequired,
//       attending: PropTypes.bool.isRequired,
//       id: PropTypes.string.isRequired,
//     }),
//   ),
//   setGuestList: PropTypes.func,
//   setIsLoading: PropTypes.func,
//   isLoading: PropTypes.bool,
//   baseUrl: PropTypes.string,
// };
// // import React from 'react';
// // import Guest from './Guest';

// // export default function List({
// //   guestList,
// //   toggleAttendance,
// //   deleteGuest,
// //   updateFirstName,
// //   updateLastName,
// //   filter,
// // }) {
// //   let filteredGuestList = guestList;
// //   // depending on state of the filter, set the array to map over for e render
// //   if (filter === 'showAttending') {
// //     filteredGuestList = guestList.filter((guest) => guest.attending === true);
// //   } else if (filter === 'showNotAttending') {
// //     filteredGuestList = guestList.filter((guest) => guest.attending === false);
// //   }

// //   return (
// //     <div>
// //       <ul>
// //         {filteredGuestList.map((guest) => (
// //           <li key={guest.id}>
// //             <button
// //               onClick={() => {
// //                 deleteGuest(guest.id);
// //               }}
// //             >
// //               Delete
// //             </button>
// //             <button
// //               onClick={() => {
// //                 toggleAttendance(guest.id);
// //               }}
// //             >
// //               {guest.attending ? 'Cancel' : 'Confirm'}
// //             </button>

// //             <Guest
// //               guest={guest}
// //               updateFirstName={updateFirstName}
// //               updateLastName={updateLastName}
// //             />
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }
