import { useState } from 'react';
import { useGetContactsQuery } from '../redux/phoneBook/phoneBookApi';
import ContactList from '../components/ContactList';
import Filter from 'components/Filter';
import BottomAppBar from 'components/BottomAppBar';
import Modal from 'components/Modal';
import AddContactForm from 'components/AddContactForm';

const ContactListPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const { data } = useGetContactsQuery();
  const contacts = data?.data.result;

  return (
    <>
      {contacts?.length > 5 && <Filter />}
      <ContactList data={contacts} />
      <BottomAppBar onOpenModal={toggleModal} />
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} toggleIsOpen={toggleModal}>
          <AddContactForm />
        </Modal>
      )}
    </>
  );
};
export default ContactListPage;
