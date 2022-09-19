import React from 'react';
import styled from 'styled-components';
import Item from './Item';
import { useQuery } from 'graphql-hooks';
import CategoriaGeralCarousel from './CategoriaGeralCarousel';

const Container = styled.section`
  background: white;
  max-width: 80%;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: column;
  padding: 1rem 5rem;
  border-radius: 10px;

  @media (max-width: 30rem) {
    max-width: 100%;
    gap: 2rem 1rem;
    margin: auto;
  }
`;


const CategoriaGeral = () => {
  /* 
    1: vai fazer a chamada geral, que recebe as 3 categorias
    2. vai colocar os IDS categoria num array (cat1[], cat2[], cat3[])
    3. vai enviar esses arrays pras 3 chamadas no datocms.js
    4. O dado pega esse array e faz as 3 chamadas, retorna 3 datas com as 3 listas de produtos diferentes
  */

  const PROJECT_QUERY = `
  query MyQuery {
    allBombandos {
      productCode
    }
    allOff40s {
      productCode
    }
    allTendenciaVeraos {
      productCode
    }
  }`;


  const {error, data } = useQuery(PROJECT_QUERY, {
    variables: {
      limit: 100,
    },
  });

  function ObjToString(data) {
    let string = "";
    let category = "";
    if ( data ) {
      for (let i=0; i < data.length; i++) {
        string += '"' + data[i].productCode + '",'
      }
      category = string.substring(0, string.length-1)
    }
    return category;
  }

  let category1 = ObjToString(data?.allBombandos);
  let category2 = ObjToString(data?.allOff40s);
  let category3 = ObjToString(data?.allTendenciaVeraos);

  return (
    <Container>
      <CategoriaGeralCarousel category={category1} title={'Tá bombando'}/>
      <CategoriaGeralCarousel category={category2} title={'Tudo com 40% OFF'}/>
      <CategoriaGeralCarousel category={category3} title={'Tendências do verão'}/>
    </Container>
  )
}

export default CategoriaGeral;