import React from 'react';
import { TextField, Button } from '@mui/material';

const Contact = () => {
  return (
    <form>
      <TextField
        required
        id="name"
        label="Name"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        required
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <TextField
        required
        id="message"
        label="Message"
        multiline
        rows={4}
        variant="outlined"
        fullWidth
        style={{ marginBottom: '20px' }}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default Contact;
