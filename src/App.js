import { useEffect, useRef, useState } from 'react';
import './App.css';
// import { css } from '@emotion/react';
/** @jsxImportSource @emotion/react */

export default function Guestlist() {
  // set state for guestList array
  const [guestList, setGuestList] = useState([]);
  // set inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [setHasError] = useState(false);
  const [showAttending, setShowAttending] = useState(false);
  const [showNotAttending, setShowNotAttending] = useState(false);
  const firstNameIsFocused = useRef(null);
  const lastNameIsFocused = useRef(null);
  const baseUrl = 'http://vast-cliffs-69007.herokuapp.com';

  useEffect(() => {
    async function getGuests() {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestList([...allGuests]);
      setIsLoading(() => false);
    }
    getGuests().catch((error) => console.log('get all guests error:' + error));
  }, []);

  async function addNewGuest() {
    // if (firstName.length === 0 || lastName.length === 0) {
    //   setHasError(true);
    // } else {
    // add the guest data to the list
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: firstName, lastName: lastName }),
    });
    const createdGuest = await response.json();
    setGuestList([...guestList, createdGuest]);
    // clear the input fields
    setFirstName('');
    setLastName('');
    firstNameIsFocused.current.focus();
    setHasError(false);
  }

  async function deleteOneGuest(id) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    const newList = guestList.filter((guest) => guest.id !== deletedGuest.id);
    setGuestList([...newList]);
    setHasError(false);
  }

  async function updateAttending(id, attending) {
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !attending }),
    });
    setHasError(false);
    const updatedGuest = await response.json();
    const newList = guestList.map((guest) => {
      if (guest.id === id) {
        return updatedGuest;
      } else {
        return guest;
      }
    });
    setGuestList([...newList]);
  }

  async function deleteAllGuest() {
    for (const guest of guestList) {
      await fetch(`${baseUrl}/guests/${guest.id}`, {
        method: 'DELETE',
      });
    }
    firstNameIsFocused.current.focus();
    setHasError(false);
    setGuestList([]);
  }
  //   useEffect(() => {
  //     async function getAllGuests() {
  //       const response = await fetch(`${baseUrl}/guests`);
  //       const allGuests = await response.json();
  //       console.log(allGuests);
  //       setGuestList(allGuests);
  //       setIsLoading(false);
  //     }
  //     getAllGuests().catch((error) => {
  //       console.error('Error:', error);
  //     });
  //   }, [lastName, deleteGuest]);

  function updateGuestList(guest) {
    return (
      <div className="newGuest" data-test-id="guest">
        <div key={`guest-${guest.lastName}-${guest.id}`} data-test-id="guest">
          <div className="guestName">
            <p>{`${guest.firstName} `}</p>
            <p>{guest.lastName}</p>
          </div>
          <div className="status">
            <label>
              <input
                type="checkbox"
                aria-label={'change status attending' + guest.firstName}
                checked={guest.attending}
                onChange={() => {
                  updateAttending(guest.id, guest.attending).catch((error) =>
                    console.log('update guest: ' + error),
                  );
                }}
              />
              {guest.attending ? 'Attending' : 'Not attending'}
            </label>
          </div>
          <button
            aria-label="Remove"
            onClick={() =>
              deleteOneGuest(guest.id).catch((error) =>
                console.log('remove guest: ' + error),
              )
            }
          >
            Remove guest
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="GuestTitel">
        <h1>Guestlist</h1>
        <div> Invited Guests: {guestList.length}</div>
        <div>
          {' '}
          Attending:{' '}
          {guestList.filter((guest) => guest.attending === true).length}
        </div>
      </div>
      {/* <div>
//         <GuestList
//           guestList={guestList}
//           setGuestList={setGuestList}
//           setIsLoading={setIsLoading}
//           isLoading={isLoading}
//           baseUrl={baseUrl}
//         />
//       </div> */}
      <div>
        {isLoading ? (
          'Loading...'
        ) : guestList.length === 0 ? (
          <p />
        ) : showAttending ? (
          guestList
            .filter((guest) => guest.attending)
            .map((guest) => updateGuestList(guest))
        ) : showNotAttending ? (
          guestList
            .filter((guest) => !guest.attending)
            .map((guest) => updateGuestList(guest))
        ) : (
          guestList.map((guest) => updateGuestList(guest))
        )}
      </div>

      <div className="filters">
        <button
          className={showAttending ? 'active' : 'inactive'}
          onClick={() => {
            setShowAttending(true);
            setShowNotAttending(false);
          }}
        >
          Who is attending
        </button>
        <button
          className={showNotAttending ? 'active' : 'inactive'}
          onClick={() => {
            setShowNotAttending(true);
            setShowAttending(false);
          }}
        >
          Who is not attending -yet-
        </button>
        <button
          className={
            !showAttending && !showNotAttending ? 'active' : 'inactive'
          }
          onClick={() => {
            setShowAttending(false);
            setShowNotAttending(false);
          }}
        >
          Show all guests
        </button>
      </div>

      <div className="addGuest">
        <div className="GuestName">
          <label>
            First name:
            <input
              required
              placeholder="Paul"
              disabled={isLoading ? 'disabled' : false}
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              ref={firstNameIsFocused}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  lastNameIsFocused.current.focus();
                }
              }}
            />
          </label>
          <label>
            Last name:
            <input
              required
              placeholder="Young"
              disabled={isLoading ? 'disabled' : false}
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  addNewGuest().catch((error) => console.log(error));
                }
              }}
              ref={lastNameIsFocused}
            />
          </label>
        </div>
        <div className="buttons">
          <button
            disabled={isLoading ? 'disabled' : false}
            className="add"
            onClick={() => addNewGuest()}
          >
            Add guest
          </button>
        </div>
      </div>
      <div className="deleteAll">
        <button
          className="delete"
          onClick={() =>
            deleteAllGuest().catch((error) =>
              console.log('delete all: ' + error),
            )
          }
        >
          Delete all guest
        </button>
      </div>
    </>
  );
}
