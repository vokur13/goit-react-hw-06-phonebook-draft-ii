import { useState, useMemo } from 'react';
import { Box } from '../components/Box';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initailContacts } from '../utils/initialContacts';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, filter } from '../redux/contacts/slice';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  // const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, initailContacts);
  // const [filter, setFilter] = useState('');

  function formSubmitHandler({ name, number }) {
    const checkName = contacts.some(item =>
      item.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    checkName
      ? alert(`${name} is already in contacts`)
      : dispatch(add({ id: nanoid(), name, number }));
  }

  // function onFilterChange([value]) {
  //   !value ? setFilter('') : setFilter(value);
  // }

  // const filteredContacts = useMemo(() => {
  //   return contacts.filter(item => {
  //     return item.name
  //       .toLowerCase()
  //       .trim()
  //       .includes(filter.toLowerCase().trim());
  //   });
  // }, [contacts]);

  const filteredContacts = contacts;

  function deleteItem(itemID) {
    dispatch(remove(itemID));
  }

  return (
    <Box width={1} p={4} bg="bgBasic" as="main">
      {/* <>
        <button onClick={() => dispatch(add(payload))}>Add</button>
        {value}
        <button onClick={() => dispatch(remove(payload))}>Remove</button>
      </> */}
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      {/* <Filter onChange={onFilterChange} /> */}
      <ContactList onDelete={deleteItem} list={filteredContacts} />
    </Box>
  );
};

{
  /* <ContactList onDelete={deleteItem} list={filteredContacts} />; */
}
