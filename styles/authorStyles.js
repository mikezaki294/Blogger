export const authorBox = (variant) => ({
  display: 'flex',
  alignItems: 'center',
  gap: variant === 'full' ? 1.5 : 1,
});

export const authorAvatar = (variant) => ({
  width: variant === 'full' ? 40 : 24,
  height: variant === 'full' ? 40 : 24,
  fontSize: variant === 'full' ? '0.9rem' : '0.75rem',
});