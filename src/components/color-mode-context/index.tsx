import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('dark');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
        components: {
          MuiInputBase: {
            styleOverrides: {
              input: {
                '&:-webkit-autofill': {
                  // fix big problem mui text box https://github.com/mui/material-ui/issues/14427
                  transitionDelay: '9999999s',
                },
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
