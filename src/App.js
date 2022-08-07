import "./App.css";
import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalVariables from "./Components/Useful/GlobalVariables";
import { ThemeProvider } from "styled-components";
import Main from "./Components/Main/Main";
import Login from './Components/Login/Login';
import Categoria from './Components/Categorias/Categoria';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={GlobalVariables}>
        <Header />
        <Routes>
          <Route path="/" end element={<Main/>}> </Route>
          <Route path="categoria/:id" element={<Categoria/>}> </Route>
          <Route path="login/*" element={<Login/>}> </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
