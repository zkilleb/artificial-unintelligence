import './Header.css';
import React from 'react';
import { AppBar, Box, Toolbar, Switch } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

export function Header({ callback }: { callback: (theme: string) => void }) {
  const [theme, setTheme] = React.useState<string | null>(
    localStorage.getItem('theme'),
  );

  const handleThemeChange = () => {
    if (!theme || theme === 'darkMode') {
      localStorage.setItem('theme', 'lightMode');
      setTheme('lightMode');
      callback('lightMode');
    } else {
      localStorage.setItem('theme', 'darkMode');
      setTheme('darkMode');
      callback('darkMode');
    }
  };

  return (
    <Box className="Header" sx={{ flexGrow: 1 }} data-testid="Header">
      <AppBar className="AppBar" position="static">
        <Toolbar>
          <div className="HeaderContainer">
            <div className="CenterLogoContainer">Artifical Unintelligence</div>
            <div className="RightLinksContainer">
              <DarkMode />
              <Switch
                checked={theme === 'lightMode'}
                onChange={handleThemeChange}
              />
              <LightMode />
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
