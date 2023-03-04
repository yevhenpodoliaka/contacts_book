import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import {
  getFilterValue,
  getShowFavoriteValue,
} from '../redux/phoneBook/filterSlice';

import { List, Typography } from '@mui/material';

const ContactList = ({ data, setContactId,openModal }) => {
  let contacts = data;

  const filterValue = useSelector(getFilterValue);

  const showFavoriteContacts = useSelector(getShowFavoriteValue);
  if (showFavoriteContacts) {
    contacts = contacts.filter(contact => contact.favorite);
  }

  const getVisibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    return contacts?.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <>
      <List>
        {visibleContacts ? (
          visibleContacts?.map(({ _id, name, phone, email, favorite }) => (
            <ContactItem
              key={_id}
              id={_id}
              name={name}
              phone={phone}
              email={email}
              favorite={favorite}
              setContactId={setContactId}
              openModal={openModal}
              
            />
          ))
        ) : (
          <Typography>Loading Contact ...</Typography>
        )}
      </List>
      {contacts?.length === 0 && (
        <Typography>there are not contacts</Typography>
      )}
    </>
  );
};
export default ContactList;
