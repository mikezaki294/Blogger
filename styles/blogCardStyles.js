export const cardContainer = (theme) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  boxShadow: theme.shadows[4],
  display: 'flex',
  flexDirection: 'column',
  height: 520,
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  cursor: 'pointer',
});

export const cardHover = (theme) => ({
  transform: 'translateY(-4px)',
  boxShadow: theme.shadows[8],
});

export const cardHeader = (theme) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1.5, 2),
  borderBottom: `1px solid ${theme.palette.divider}`,
});