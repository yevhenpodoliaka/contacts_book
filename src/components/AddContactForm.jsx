import { useEffect } from 'react';
import useLocalStorage from 'hooks/useLockalStorage';
import toast from 'react-hot-toast';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../redux/phoneBook/phoneBookApi';
import { Box, TextField, Button } from '@mui/material';

const AddContactForm = () => {
  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [phone, setPhone] = useLocalStorage('phone', '');

  const [addContact, { isSuccess, data, isError, error }] =
    useAddContactMutation();

  const { data: req } = useGetContactsQuery();

  const contacts = req?.data.result;

  useEffect(() => {
    if (isSuccess) {
      toast.success(`contact ${data.data.contact.name} add in list`);
    }
    if (isError) {
      toast.error(`Error: ${error.data.message} `);
    }
  }, [isSuccess, data, error, isError, phone]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };
  const addNewContact = () => {
    const contactName = contacts?.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    const contactPhone = contacts?.find(el => el.phone === phone);

    if (contactName) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    if (contactPhone) {
      toast.error(`contact with ${phone} number is already in contacts`);
      return;
    } else {
      addContact({ name, phone, email });
      setName('');
      setEmail('');
      setPhone('');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name && phone) {
      addNewContact();
    } else {
      toast('name and phone must have in form');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ maxWidth: 'sm', mx: 'auto', p: '15px' }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        label="Name"
        name="name"
        value={name}
        autoFocus
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email"
        name="email"
        value={email}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="phone"
        value={phone}
        label="Phone"
        type="tel"
        onChange={handleChange}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default AddContactForm;
