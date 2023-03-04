import { useState } from 'react';
import { useGetContactsQuery } from '../redux/phoneBook/phoneBookApi';
import ContactList from '../components/ContactList';
import Filter from 'components/Filter';
import BottomAppBar from 'components/BottomAppBar';
import Modal from 'components/Modal';
import AddContactForm from 'components/AddContactForm';
import EditContactForm from 'components/EditContactForm';

const ContactListPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [ editableContactId, setEditableContactId] = useState(null)
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const { data } = useGetContactsQuery();
  const contacts = data?.data.result;

  return (
    <>
      <main style={{ padding: '15px', margin: '65px 0' }}>
        {contacts?.length > 5 && <Filter />}
        <ContactList
          data={contacts}
          setContactId={setEditableContactId}
          openModal={toggleModal}
        />
      </main>
      <BottomAppBar onOpenModal={toggleModal} />
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          toggleIsOpen={toggleModal}
          setContactId={setEditableContactId}
        >
          {editableContactId ? (
            <EditContactForm id={editableContactId} />
          ) : (
            <AddContactForm />
          )}
        </Modal>
      )}
    </>
  );
};
export default ContactListPage;
