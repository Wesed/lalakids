import React from 'react';
import { UserContext } from './../UserContext';
import { useQuery } from 'graphql-hooks'; 

const useLogin = (tokenValue) => {

  const [token, setToken] = React.useState(null);

  React.useEffect(()=>{
    setToken(tokenValue);
  },[tokenValue]);

    const PROJECT_QUERY = `
    query MyQuery {
      userClient(filter: {token: {eq: "${token}"}}) {
        id
        nameCli
      }
    }
    `;

  const {error, data, loading } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  const userLogin =  React.useCallback(async function (token, data) {
    setToken(token);
  }, []);


    return {
      data,
      error,
      loading,
      userLogin
    }
};

export default useLogin;