export const blogBodyInputStyle = (theme) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: 2,
  '& .MuiInputBase-root': {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fontFamily,
    whiteSpace: 'pre-wrap',
  },
});