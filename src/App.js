import './App.css';
import { Header } from './Components/Header';

import GlobalVariables from './Components/Useful/GlobalVariables';
import { ThemeProvider } from 'styled-components';
import Main from './Components/Main/Main';

function App() {
  return (
    <ThemeProvider theme={GlobalVariables}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
