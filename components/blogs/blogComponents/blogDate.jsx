// Reusable component displaying date. pass variants to change card/full displays
import { Typography } from '@mui/material';


export default function BlogDate({ date, variant='body2' }) {
  const formatted = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return <Typography variant={variant} >{formatted}</Typography>;
}
