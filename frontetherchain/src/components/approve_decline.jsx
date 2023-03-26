import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// Função que renderiza ser aprovado ou não em um grupo
export default function ApproveDecline() {
  return (
    <Stack direction="row" spacing={2}>
      {/* <Button color="secondary">Secondary</Button> */}
      <Button variant="contained" color="success">
        Aprovar
      </Button>
      <Button variant="outlined" color="error">
        Recusar
      </Button>
    </Stack>
  );
}