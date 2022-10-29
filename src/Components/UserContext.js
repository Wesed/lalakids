import React from 'react';
import useLogin from './Hooks/useLogin';
import { useNavigate } from 'react-router-dom';


export const UserContext = React.createContext();


export const UserStorage = ({children}) => {

    const [login, setLogin] = React.useState(false); /* informa se esta logado ou nao */
    const [dataContext, setData] = React.useState(null); /* guarda info do usuario */
    const [errorContext, setError] = React.useState(); 
    const [category, setCategory] = React.useState(); /* guarda tds as categorias*/ 
    const [loadingContext, setLoading] = React.useState(); 
    const [token, setToken] = React.useState(); /* seta o token do usuario no localStorage */
    const navigate = useNavigate(); 
    const {data, error, loading, userLogin} = useLogin(token);

    /* QUERYS */

    /* login */
    React.useEffect(()=>{
      setError(error);
      setLoading(loading);

      if (data && !(data.userClient == null)) { 
        setData(data);
        setLogin(true);
        /* aq vai ser falso da 1 vez, ja que o token ainda nao existe*/
        const tokenExists = window.localStorage.getItem("token");
        /* essa verificacao impede que o localStorage seja sobrescrito, ja que so vai ser false aq na 1 vez.*/
        if (!tokenExists) {
          // so vai redirecionar se nao tiver logado. Senao vai sempre navegar ate o inicio
          !login && navigate('/');
          window.localStorage.setItem('token', token);
        }
      }
    }, [error, loading, data, token, login, navigate]);    

    /* logout */
    const userLogout =  React.useCallback(async function () {
      setData(null);
      window.localStorage.removeItem("token");
      window.location.reload();
    }, []);

  /* autologin */
    React.useEffect(() => {
      async function autoLogin() {
        const token = window.localStorage.getItem("token");
        if (token) {
          try {
            userLogin(token);
          } catch (err) {
            console.log(err);
            userLogout();
          }
        } 
      }
      autoLogin();
    }, [userLogin, userLogout]);

    const verifyLogin = async (token) => {
      setToken(token);
    };

  return (
    <UserContext.Provider value={{dataContext, login, setLogin, errorContext, setLoading, loadingContext, setData, verifyLogin, userLogout, category, setCategory}}> 
      {children} 
    </UserContext.Provider>
  );
  
};