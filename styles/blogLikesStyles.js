// styles/blogLikesStyles.js

export const likesContainer = (theme) => ({
  position: 'absolute',
  top: 12,
  left: 12,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(4px)',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1),
  zIndex: 2,
});

export const likeIconButton = (isLiked, theme) => ({
  color: isLiked ? theme.palette.secondary.light : theme.palette.text.primary,
  '&:hover': {
    color: isLiked ? theme.palette.secondary.light : theme.palette.text.secondary,
  },
});