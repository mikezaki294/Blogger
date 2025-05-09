export const introWrapper = (theme) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  px: { xs: 2, sm: 4 },
  py: { xs: 3, sm: 5, md: 6, lg: 8, xl: 10 },
  backgroundColor: theme.palette.background.intro,
  borderBottom: `1px solid ${theme.palette.divider}`,
  boxShadow: theme.shadows[1],
});


export const introContent = (theme) => ({
  width: '100%',
  maxWidth: 900,
  textAlign: { xs: 'center', sm: 'left', },
});
