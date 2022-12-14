import "./App.css";
import { Header } from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalVariables from "./Components/Useful/GlobalVariables";
import { ThemeProvider } from "styled-components";
import Main from "./Components/Main/Main";
import Login from './Components/Login/Login';
import Produto from './Components/Produtos/Produto';
import Categoria from './Components/Categoria/Categoria';

import CartContainer from './Components/Cart/CartContainer';
import { UserStorage } from './Components/UserContext';
import SubCategoria from './Components/Categoria/SubCategoria';
import FavoriteContainer from './Components/Favorite/FavoriteContainer';
import SearchContainer from './Components/SearchBar/SearchContainer';



function App() {
  return (
      <BrowserRouter>
        <UserStorage>
              {/* styled components */}
              <ThemeProvider theme={GlobalVariables}>
                <Header />
                <Routes>
                  <Route path="/" end element={<Main />}> </Route>
                  {/* criar uma rota 'header' pra configurar tds as rotas superiores? */}
                  <Route path="/lista-de-favoritos" end element={<FavoriteContainer />}> </Route>
                  <Route path="/carrinho" end element={<CartContainer />}> </Route>
                  <Route path="/search/*" end element={<SearchContainer />}> </Route>
                  
                  {/* essas rotas nao daria pra colocar no main? */}
                  <Route path="/:titleProd/:idProd/*" element={<Produto />}> </Route>
                  <Route path="login/*" element={<Login />}> </Route>
                  <Route path="categoria/:id/" element={<Categoria />}> </Route>
                  <Route path="categoria/:id/*" element={<SubCategoria />}> </Route>
                </Routes>
              </ThemeProvider>
        </UserStorage>
      </BrowserRouter>
  );
}

export default App;
