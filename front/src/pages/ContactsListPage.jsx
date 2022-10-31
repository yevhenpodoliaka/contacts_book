import ContactList from '../components/ContactList';
import Filter from 'components/Filter';
import BottomAppBar from 'components/BottomAppBar';
import { Box } from '@mui/material';

export default function ContactListPage() {
  return (
    <Box sx={{ my: 12 }}>
      <Filter />
      <ContactList />
      <BottomAppBar />
    </Box>
  );
}
