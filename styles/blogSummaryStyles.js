export const summaryBox = (theme) => ({
  px: 2,
  pb: 1,
});

export const summaryText = (theme) => ({
  color: theme.palette.text.primary,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  minHeight: '3.6em',
});
