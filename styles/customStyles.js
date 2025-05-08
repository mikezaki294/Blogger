// styles/customStyles.js

export const layoutStyles = {
  modalContainer: {
    width: '80vw',
    maxWidth: 1000,
  },
  headerBox: {
    px: 3,
    pt: 3,
    pb: 2,
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editorWrapper: {
    padding: '12px',
    minHeight: '200px',
    overflowY: 'auto',
  },
  fullHeightContainer: {
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
  },
};

export const editorContainerStyle = {
  backgroundColor: '#1a1a1a',
  borderRadius: 2,
  padding: '12px',
  minHeight: '200px',
  color: '#fff',
  boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
  overflowY: 'auto',
};

export const editorToolbarStyle = {
  display: 'flex',
  gap: '8px',
  marginBottom: '8px',
};

export const toolbarButtonStyle = (active = false) => ({
  padding: '4px 8px',
  backgroundColor: active ? '#444' : '#2e2e2e',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  fontWeight: 500,
  cursor: 'pointer',
});

// Cover Image Upload Styles
export const uploadWrapper = {
  mt: 2,
};

export const uploadTitle = (theme) => ({
  color: theme.palette.text.primary,
  mb: 1,
  fontWeight: 500,
});

export const uploadDropZone = (theme) => ({
  border: `2px dashed ${theme.palette.divider}`,
  borderRadius: 4,
  p: 4,
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  cursor: 'pointer',
  boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
  '&:hover': {
    backgroundColor: theme.palette.background.default,
  },
});

export const uploadErrorText = (theme) => ({
  color: theme.palette.error.main,
  mt: 1,
});

export const uploadPreview = {
  position: 'relative',
  mt: 2,
  borderRadius: 2,
  overflow: 'hidden',
  border: '1px solid rgba(255,255,255,0.1)', // Consider theme.palette.divider
  boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
};

export const uploadIconButton = {
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: 'rgba(0,0,0,0.6)',
  color: '#fff',
  '&:hover': {
    backgroundColor: 'rgba(255,0,0,0.8)',
  },
};

export const authenticatedUserBox = (theme) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 1.5,
  // backgroundColor: theme.palette.custom.navAccent,
  px: 2,
  py: 0.5,
  borderRadius: 3,
  boxShadow: '0 1px 6px rgba(0,0,0,0.6)',
  border: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(4px)',
  // '&:hover': {
  //   backgroundColor:
  //     theme.palette.mode === 'dark'
  //       ? 'rgba(11, 11, 11, 0.9)'
  //       : 'rgba(0, 172, 193, 0.1)',
  // },
});
