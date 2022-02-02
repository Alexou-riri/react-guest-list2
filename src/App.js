import './App.css';
import { useEffect, useState } from 'react';
import List from './List.js';
import Guest from './Guest.js';
import Form from './Form.js';

export default function GuestList() {
  // set state for guestList array
  const [guestList, setGuestList] = useState([]);
  // set state for input fields
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const baseUrl = 'http://sleepy-escarpment-78325.herokuapp.com';
  const [isLoading, setIsLoading] = useState(true);
  const showAttendingGuest = 'showAttendingGuest';
  const showNotAttendingGuest = 'showNotAttendingGuest';
  const showAllGuest = 'showAllGuest';
  const [filter, setFilter] = useState(showAllGuest);

  useEffect(() => {
    async function fetchGuestList() {
      const response = await fetch(`${baseUrl}/guests`);
      const allGuests = await response.json();
      setGuestList(allGuests);
      console.log(allGuests);
      setIsLoading(false);
    }
    fetchGuestList().catch((error) => console.log('error'));
  });
  async function createdGuest(first, last, attending) {
    const response = await fetch(`${baseUrl}/guests`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName: '', lastName: '' }),
    });
    const createdGuest = await response.json();
  }

  async function deleteGuest(id) {
    const response = await fetch(`${baseUrl}/guests/1`, { method: 'DELETE' });
    const deletedGuest = await response.json();
  }

  const deleteAllGuests = (guestList) => {
    for (let i = 0; i < guestList.length; i++) {
      deleteGuest(guestList[i].id);
    }
  };

  async function attending(id, isAttending) {
    const response = await fetch(`${baseUrl}/guests/1`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attending: true }),
    });
    const updatedGuest = await response.json();
  }

  const toggleAttendance = (id) => {
    const guestToUpdate = guestList.find((guest) => {
      if (guest.id === id) {
      }
      return guest.id === id;
    });
    const modifiedGuest = {
      ...guestToUpdate,
      attending: !guestToUpdate.attending,
    };
    attending(id, modifiedGuest.attending);
  };

  return (
    <>
      <h1>Guest List</h1>
      <div>Guests: {guestList.length}</div>
      <div>
        Attending: {''}
        {guestList.filter((guest) => guest.attending === true).length}
      </div>

      <Form createdGuest={createdGuest} />
      <Guest />

      <div>Filter:</div>
      <button onClick={() => setFilter(showAttendingGuest)}>attending</button>
      <button onClick={() => setFilter(showNotAttendingGuest)}>
        not attending
      </button>
      <button onClick={() => setFilter(showAllGuest)}>Reset Filter</button>

      <List
        guestList={guestList}
        toggleAttendance={toggleAttendance}
        deleteGuest={deleteGuest}
        firstName={firstName}
        lastName={lastName}
        filter={filter}
      />
      <button onClick={() => deleteAllGuests(guestList)}>
        Delete Guest List
      </button>
    </>
  );
}
