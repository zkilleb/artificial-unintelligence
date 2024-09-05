import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { GridContainer, Header } from './components';
import { baseTheme, darkTheme } from './themes';
import './App.css';

function App() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem('theme'),
  );

  const handleCallback = (tempTheme: string) => {
    setTheme(tempTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme === 'lightMode' ? baseTheme : darkTheme}>
        <div>
          <CssBaseline />
          <Header callback={handleCallback} />
          <div>
            <GridContainer />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
