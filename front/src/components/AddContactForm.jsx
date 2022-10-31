import { useEffect} from 'react';
import useLocalStorage from 'hooks/useLockalStorage';
import toast from 'react-hot-toast';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../redux/phoneBook/phoneBookApi';
import { Box, TextField, Button, } from '@mui/material';




export default function AddContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [email, setEmail] = useLocalStorage('email', '');
  const [phone, setPhone] = useLocalStorage('phone', '');

  const [addContact, { isSuccess, data }] = useAddContactMutation();

  const { data: req } = useGetContactsQuery();
  const contacts = req?.contacts;

  useEffect(() => {
    if (isSuccess) {
      toast.success(`contact ${data.data.contact.name} add in list`);
    }
  }, [isSuccess, data]);

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
  const hasContact = () => {
    contacts?.find(el => el.name.toLowerCase() === name.toLowerCase())
      ? toast.error(`${name} is already in contacts`)
      : addContact({ name, phone, email });
  };

  const handleSubmit = e => {
    e.preventDefault();
    hasContact();
    setName('');
    setEmail('');
    setPhone('');
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
}
