import { TextField, Button, Stack, Chip, Tooltip } from '@mui/material';


export default function BlogTagsInput({ tags, setTags, tagInput, setTagInput }) {
  // Cap tags
  const tagLimitReached = tags.length >= 7;

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed) && !tagLimitReached) {
      setTags([...tags, trimmed]);
    }
    setTagInput('');
  };

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{ flexWrap: 'wrap' }}
      >
        {/* Tag input field */}
        <TextField
          label="Add Tag"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}

          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              if (!tagLimitReached) handleAddTag();
            }
          }}
          sx={{ flexShrink: 0 }}
        />

        {/* Add button with tooltip */}
        <Tooltip
          title={tagLimitReached ? 'You can only add up to 7 tags.' : ''}
          arrow
          disableHoverListener={!tagLimitReached}
        >
          <span>
            <Button
              onClick={handleAddTag}
              disabled={tagLimitReached}
              variant ={tagLimitReached ? 'disabled' : 'modal'}
            >
              Add
            </Button>
          </span>
        </Tooltip>

        {/* Tag list */}
        <Stack
          direction="row"
          spacing={1}
          sx={{ flexWrap: 'wrap', alignItems: 'center', flex: 1 }}
        >
          {tags.map((tag, idx) => (
            <Chip
              key={idx}
              label={tag}
              onDelete={() => setTags(tags.filter(t => t !== tag))}
            />
          ))}
        </Stack>
      </Stack>
    </>
  );
}