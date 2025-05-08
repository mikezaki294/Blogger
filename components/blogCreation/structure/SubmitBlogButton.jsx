'use client';

import { Button, Tooltip } from '@mui/material';

export default function SubmitBlogButton({ disabled, onClick }) {
  return (
    // Disable submission if all fields are not filled in
    <Tooltip
      title={!disabled ? '' : 'Please fill in all fields before submitting.'}
      placement="top"
      arrow
      disableHoverListener={!disabled}
    >
      <span>
        <Button
          variant="modal"
          disabled={disabled}
          onClick={onClick}
        >
          Submit Blog
        </Button>
      </span>
    </Tooltip>
  );
}