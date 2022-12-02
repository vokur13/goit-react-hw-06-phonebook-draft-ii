import { useState, useMemo } from 'react';
import { Box } from '../components/Box';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { nanoid } from 'nanoid';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { initailContacts } from '../utils/initialContacts';
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, findFilter } from '../redux/contacts/slice';

const STORAGE_KEY = 'contacts';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  // const [contacts, setContacts] = useLocalStorage(STORAGE_KEY, initailContacts);

  function formSubmitHandler({ name, number }) {
    const checkName = contacts.some(item =>
      item.name.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
    checkName
      ? alert(`${name} is already in contacts`)
      : dispatch(add({ id: nanoid(), name, number }));
  }

  function onFilterChange([value]) {
    if (!value) {
      return;
    }
    dispatch(findFilter(value));
  }

  const filteredContacts = useMemo(() => {
    return contacts.filter(item => {
      return item.name
        .toLowerCase()
        .trim()
        .includes(filter.toLowerCase().trim());
    });
  }, [contacts, filter]);

  function deleteItem(itemID) {
    dispatch(remove(itemID));
  }

  return (
    <Box width={1} p={4} bg="bgBasic" as="main">
      <h1>Phonebook</h1>
      <ContactForm onFormSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter onChange={onFilterChange} />
      <ContactList onDelete={deleteItem} list={filteredContacts} />
    </Box>
  );
};
