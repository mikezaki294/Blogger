export const cardCoverImage = (theme, imageUrl) => ({
  position: 'relative',
  height: 240,
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const fullCoverImage = (theme, imageUrl) => ({
  width: '100%',
  height: '60vh', // Adjust height as desired
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderBottom: `1px solid ${theme.palette.divider}`,
});

export const fullImageWrapper = {


  borderRadius: 2,
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.6)',
};