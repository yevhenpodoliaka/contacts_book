import { useEffect } from 'react';
import toast from 'react-hot-toast';
import useLocalStorage from 'hooks/useLockalStorage';
import {
  useGetContactByIdQuery,
  useEditContactMutation,
} from '../redux/phoneBook/phoneBookApi';
import { Box, TextField, Button } from '@mui/material';

export default function EditContactForm({ id }) {
  const [name, setName] = useLocalStorage('editedName', '');
  const [email, setEmail] = useLocalStorage('editedEmail', '');
  const [phone, setPhone] = useLocalStorage('editedPhone', '');

  const { data } = useGetContactByIdQuery(id);
  const [editContact, { isSuccess, isError, error }] = useEditContactMutation();
  console.log(data);

  useEffect(() => {
    if (data) {
      setName(data.data.contact.name);
      setEmail(data.data.contact.email);
      setPhone(data.data.contact.phone);
    }
  }, [data, setEmail, setName, setPhone]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(`contact ${data.data.contact.name} changed `);
    }
    if (isError) {
      toast.error(`Error: ${error.data.message} `);
    }
  }, [data, error, isError, isSuccess]);

  function handleChange(e) {
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
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (
      data.data.contact.name === name &&
      data.data.contact.email === email &&
      data.data.contact.phone === phone
    ) {
      toast(`contact is not changed `);
      return
    } else {
       editContact({ id, data: { name, email, phone } });
    }
 
    editContact({ id, data: { name, email, phone } });
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
        fullWidth
        label="Name"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <TextField
        margin="normal"
        fullWidth
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
        Change
      </Button>
    </Box>
  );
}
