import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import {
  getFilterValue,
  getShowFavoriteValue,
} from '../redux/phoneBook/filterSlice';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
  useToggleFavoriteContactMutation,
} from '../redux/phoneBook/phoneBookApi';

import { List, Typography } from '@mui/material';

export default function ContactList() {
  const { data } = useGetContactsQuery();

  let contacts = data?.data.result;

  const [deleteContact] = useDeleteContactMutation();
  const [toggleFavoriteContact] = useToggleFavoriteContactMutation();
  const filterValue = useSelector(getFilterValue);

  const showFavoriteContacts = useSelector(getShowFavoriteValue);
  if (showFavoriteContacts) {
    contacts = data?.data.result.filter(contact => contact.favorite);
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
              onDeleteContact={() => deleteContact(_id)}
              onToggleFavoriteContact={() =>
                toggleFavoriteContact({
                  id: _id,
                  data: { favorite: !favorite },
                })
              }
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
}
