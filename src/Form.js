// import PropTypes from 'prop-types';
// import { useState } from 'react';

// export default function Form({ guestList, setGuestList, isLoading, baseUrl }) {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [hasError, setHasError] = useState(false);

//   return (
//     <div className={hasError ? 'error inputs' : 'inputs'}>
//       {/* {hasError ? (

//   ) : null} */}
//       <label>
//         First name:
//         <input
//           disabled={isLoading ? 'disabled' : ''}
//           onChange={(event) => setFirstName(event.currentTarget.value)}
//           value={firstName}
//           // ref={firstNameIsFocused}
//           // onKeyPress={(event) => {
//           //   if (event.key === 'Enter') {
//           //     lastNameIsFocused.current.focus();
//           //   }
//           // }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           disabled={isLoading ? 'disabled' : ''}
//           onChange={(event) => setLastName(event.currentTarget.value)}
//           value={lastName}
//           onKeyPress={(event) => {
//             if (event.key === 'Enter') {
//               createGuest().catch((error) => console.log(error));
//             }
//           }}
//           // ref={lastNameIsFocused}
//         />
//       </label>
//       <div className="addGuest">
//         <div className="buttons">
//           <button
//             disabled={isLoading ? 'disabled' : false}
//             className="add"
//             onClick={() => createGuest()}
//           >
//             Add guest
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Form.propTypes = {
// //   guestList: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       firstName: PropTypes.string.isRequired,
// //       lastName: PropTypes.string.isRequired,
// //       attending: PropTypes.bool.isRequired,
// //       id: PropTypes.string.isRequired,
// //     }),
// //   ),
// //   setGuestList: PropTypes.func,
// //   isLoading: PropTypes.bool,
// //   baseUrl: PropTypes.string,
// // };

// // <div>
// //   <form
// //     onSubmit={(e) => {
// //       props.postGuest(newGuestFirstName, newGuestLastName);
// //       e.preventDefault();
// //       setNewGuestFirstName('');
// //       setNewGuestLastName('');
// //     }}
// //   >
// //     <input
// //       required
// //       placeholder="Paul"
// //       value={newGuestFirstName}
// //       onChange={(e) => setNewGuestFirstName(e.currentTarget.value)}
// //     />
// //     <input
// //       required
// //       placeholder="Young"
// //       value={newGuestLastName}
// //       onChange={(e) => setNewGuestLastName(e.currentTarget.value)}
// //     />
// //     <input type="submit" value="Invite Guest" />
// //   </form>
// // </div>
// // );
// // }
// // export default Form
