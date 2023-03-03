import { useState } from 'react';
import ContactList from '../components/ContactList';
import Filter from 'components/Filter';
import BottomAppBar from 'components/BottomAppBar';
import Modal from 'components/Modal';
import AddContactForm from 'components/AddContactForm';

export default function ContactListPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <Filter />
      <ContactList />
      <BottomAppBar onOpenModal={toggleModal} />
      <Modal isOpen={modalIsOpen} toggleIsOpen={toggleModal}>
        <AddContactForm />
      </Modal>
    </>
  );
}
