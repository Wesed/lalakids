import "./App.css";
import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalVariables from "./Components/Useful/GlobalVariables";
import { ThemeProvider } from "styled-components";
import Main from "./Components/Main/Main";
import Login from './Components/Login/Login';
import Produto from './Components/Produtos/Produto';
import Categoria from './Components/Categoria/Categoria';

import { GraphQLClient, ClientContext  } from 'graphql-hooks';

export const API_URL = 'https://graphql.datocms.com/';
export const API_TOKEN ='f99dfc998a43929e417cab61b132aa';

export const client = new GraphQLClient({
  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${API_TOKEN}`,
  }
});

function App() {
  return (
    <ClientContext.Provider value={client}>
    <BrowserRouter>
      <ThemeProvider theme={GlobalVariables}>
        <Header />
        <Routes>
          <Route path="/" end element={<Main/>}> </Route>
          <Route path="produto/:id" element={<Produto/>}> </Route>
          <Route path="login/*" element={<Login/>}> </Route>
          <Route path="categoria/*" element={<Categoria/>}> </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    </ClientContext.Provider>
  );
}

export default App;
