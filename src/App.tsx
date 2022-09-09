
import usePersistedTheme from './utils/usePersistedTheme'
import Header from './Components/Header';
import {ThemeProvider, DefaultTheme} from 'styled-components'

import darkTheme from './Styles/dark';
import lightTheme from './Styles/light';
function App() {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>('light', lightTheme)

  const handleTheme = () =>{    
    setTheme(theme.name === 'light' ? darkTheme : lightTheme)
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header changeTheme={handleTheme} name='testando'/>
    </ThemeProvider>
    </>
  );
}

export default App;
