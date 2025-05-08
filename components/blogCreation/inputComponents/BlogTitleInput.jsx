import { TextField } from '@mui/material';
import { inputProps, inputLabelProps } from '../../../styles/customStyles';

export default function BlogTitleInput({ title, setTitle }) {
  return (
    <TextField
      label="Title"
      fullWidth
      required
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
}