export const fullBlogContainer = (theme) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  color: theme.palette.text.primary,
});

export const fullDivider = (theme) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  borderColor: theme.palette.divider,
});

export const fullTags = {
  marginTop: 32,
};

export const fullHeaderWrapper = {

  mb: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 1.5,
};

export const fullMetaRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: 2,
  px: 3,
  mb: 1,
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: { xs: 'flex-start', sm: 'center' },
};


export const fullBodyWrapper = (theme) => ({
  mt: 4,
  px: { xs: 1, sm: 0 },
});