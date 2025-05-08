export const blogTitleBox = {
  px: 2,
  pt: 2,
};

export const blogTitleText = (variant = 'card') => ({
  fontWeight: 600,
  mb: 1,
  fontSize: variant === 'card' ? '1.25rem' : '2rem',
  lineHeight: 1.3,
});