import { createTheme } from '@mui/material';

export const baseTheme = createTheme({
  palette: {
    background: {},
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          border: 'solid 1px black',
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          background: '#FF7F7F',
          textAlign: 'center',
          color: 'white',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        thumb: {
          color: 'white',
        },
        track: {
          '.Mui-checked.Mui-checked + &': {
            background: 'white',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid black',
          borderRadius: '10px',
        },
      },
    },
  },
});
