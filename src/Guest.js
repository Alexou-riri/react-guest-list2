import PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';

export default function Guest(guest) {
  const inputFirstName = useRef(guest.firstName);
  const inputLastName = useRef(guest.LastName);
  const [isEditable, setIsEditable] = useState(false);
  const changeIsEditable = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
      <input
        defaultValue={guest.firstName}
        ref={inputFirstName}
        placeholder={guest.firstName}
      />
      <input
        defaultValue={guest.lastName}
        ref={inputLastName}
        placeholder={guest.lastName}
      />
      <button
        onClick={() => {
          changeIsEditable();
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          console.log(inputFirstName.current.value);
          console.log(inputLastName.current.value);
          // updateFirstName(guest.id, inputFirstName.current.value);
          // updateLastName(guest.id, inputLastName.current.value);
          changeIsEditable();
        }}
      >
        Save
      </button>

      <span
        className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
      >{`${guest.firstName} `}</span>
      <span
        className={`guest ${guest.attending ? 'attending' : 'notAttending'}`}
      >
        {guest.lastName}
      </span>
    </>
  );
}
