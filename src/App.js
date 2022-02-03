import './App.css';
import { useEffect, useState } from 'react';
// import List from './List.js';
// import Guest from './Guest.js';
// import Form from './Form.js';

export default function GuestListApp() {
  // set state for guestList array
  const [guestList, setGuestList] = useState([]);
  // set state for input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const baseUrl = 'http://vast-cliffs-69007.herokuapp.com';
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [showAttending, setShowAttending] = useState(false);
  const [showNotAttending, setShowNotAttending] = useState(false);
  const showAll = 'showAll';
  const [filter, setFilter] = useState(showAll);

  useEffect(() => {
    async function fetchGuestList() {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestList([...allGuests]);
      // console.log(allGuests);
      setIsLoading(() => false);
    }
    fetchGuestList().catch((error) => console.log('error' + error));
  }, []);

  async function createGuest() {
    // setIsLoading(true);
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: 'first',
        lastName: 'last',
      }),
    });
    const createdGuest = await response.json();
    setGuestList([...guestList, createdGuest]);
    setFirstName('');
    setLastName('');
    setHasError(false);
    // setIsLoading(false);
  }

  async function deleteGuest(id) {
    // setIsLoading(true);
    const response = await fetch(`${baseUrl}/guests/${id}`, {
      method: 'DELETE',
    });
    const deletedGuest = await response.json();
    const newList = guestList.filter((guest) => guest.id !== deletedGuest.id);
    setGuestList([...newList]);
    setHasError(false);
    // setIsLoading(false);
  }

  const deleteAllGuests = (guestList) => {
    for (let i = 0; i < guestList.length; i++) {
      deleteGuest(guestList[i].id);
    }
    setHasError(false);
  };

  // async function attending(id, isAttending) {
  //   const response = await fetch(`${baseUrl}/guests/1`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ attending: true }),
  //   });
  //   const updatedGuest = await response.json();
  // }
  // function to patch attendance for one guest

  async function updateAttendance(id, attending) {
    // setIsLoading(true);
    const response = await fetch(`${baseUrl}/guests${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: !attending }),
    });
    // setHasError(false);
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
  // function to patch new value for names -- a revoir
  async function patchName(id, newValue, keyToUpdate) {
    // setIsLoading(true);
    if (keyToUpdate === 'firstName') {
      await fetch(`${baseUrl}/guests/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName: newValue }),
      });
      // setIsLoading(false);
    } else if (keyToUpdate === 'lastName') {
      await fetch(`${baseUrl}/guests/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lastName: newValue }),
      });
      // setIsLoading(false);
    }
  }

  // const toggleAttendance = (id) => {
  //   const guestToUpdate = guestList.find((guest) => {
  //     if (guest.id === id) {
  //     }
  //     return guest.id === id;
  //   });
  //   const modifiedGuest = {
  //     ...guestToUpdate,
  //     attending: !guestToUpdate.attending,
  //   };
  //    updateAttendance(id, modifiedGuest.attending);
  // };

  // const updateFirstName = (id, value) => {
  //    patchName(id, value, 'firstName');
  // };
  // const updateLastName = (id, value) => {
  //    patchName(id, value, 'lastName');
  // };
  function newGuestList(guest) {
    return (
      <div
        key={`guest-${guest.lastName}-${guest.id}`}
        data-test-id="guest"
        className="guest"
      >
        <div className="guestName">
          {/* <p onClick={() => patchName(guest.id)}>
            {`${guest.firstName} `}
          </p>
          <p onClick={() => patchName(guest.id)}>{guest.lastName}</p> */}
        </div>
        <div className="status">
          <label>
            <input
              type="checkbox"
              aria-label={'change attending status for ' + guest.firstName}
              checked={guest.attending}
              onChange={() => {
                updateAttendance(guest.id, guest.attending).catch((error) =>
                  console.log('update guest: ' + error),
                );
              }}
            />
            {guest.attending ? 'Attending' : 'Not attending'}
          </label>
        </div>
        <button
          onClick={() =>
            deleteGuest(guest.id).catch((error) =>
              console.log('remove guest: ' + error),
            )
          }
        >
          Remove guest
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="GuestTitel">
        <h1>Guest List</h1>
        <div>Invited Guests: {guestList.length}</div>
        <div>
          {' '}
          Attending:{' '}
          {guestList.filter((guest) => guest.attending === true).length}
        </div>
      </div>
      <div className="list">
        {isLoading ? (
          'Loading...'
        ) : guestList.length === 0 ? (
          <p></p>
        ) : showAttending ? (
          guestList
            .filter((guest) => guest.attending)
            .map((guest) => newGuestList(guest))
        ) : showNotAttending ? (
          guestList
            .filter((guest) => !guest.attending)
            .map((guest) => newGuestList(guest))
        ) : (
          guestList.map((guest) => newGuestList(guest))
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
          Show attending only
        </button>
        <button
          className={showNotAttending ? 'active' : 'inactive'}
          onClick={() => {
            setShowAttending(true);
            setShowNotAttending(false);
          }}
        >
          Show not attending only
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
        <div className={hasError ? 'error inputs' : 'inputs'}>
          {/* {hasError ? (

          ) : null} */}
          <label>
            First name:
            <input
              disabled={isLoading ? 'disabled' : false}
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
              // ref={firstNameIsFocused}
              // onKeyPress={(event) => {
              //   if (event.key === 'Enter') {
              //     lastNameIsFocused.current.focus();
              //   }
              // }}
            />
          </label>
          <label>
            Last name:
            <input
              disabled={isLoading ? 'disabled' : false}
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  createGuest().catch((error) => console.log(error));
                }
              }}
              // ref={lastNameIsFocused}
            />
          </label>
        </div>
        <div className="buttons">
          <button
            disabled={isLoading ? 'disabled' : false}
            className="add"
            onClick={() => createGuest()}
          >
            Add guest
          </button>
        </div>
      </div>
      <div className="deleteAll">
        <button
          className="delete"
          onClick={() =>
            deleteAllGuests().catch((error) =>
              console.log('delete all: ' + error),
            )
          }
        >
          Delete all guest
        </button>
      </div>
      {/* // {/* <Form createdGuest={createGuest} />
      // <Guest /> */}
      <div>Filter:</div>
      <button onClick={() => setFilter(showAttending)}>attending</button>{' '}
      <button onClick={() => setFilter(showNotAttending)}>not attending</button>
      <button onClick={() => setFilter(showAll)}>Reset Filter</button>
      {/* <List
      //   guestList={guestList}
      //   toggleAttendance={toggleAttendance}
      //   deleteGuest={deleteGuest}
      //   firstName={firstName}
      //   lastName={lastName}
      //   filter={filter}
      // /> */}
      <button onClick={() => deleteAllGuests(guestList)}>
        Delete Guest List
      </button>
    </>
  );
}
