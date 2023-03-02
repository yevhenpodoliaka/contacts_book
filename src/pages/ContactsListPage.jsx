import ContactList from '../components/ContactList';
import Filter from 'components/Filter';
import BottomAppBar from 'components/BottomAppBar';


export default function ContactListPage() {
  return (
    <>
      <Filter />
      <ContactList />
      <BottomAppBar />
    </>
  );
}
