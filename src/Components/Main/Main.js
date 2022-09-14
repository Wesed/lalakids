import React from 'react'

import styled from 'styled-components';
import Categoria from './../Categoria/Categoria';




// responsavel por exibir todos os produtos principais 

const Container = styled.main`
`;

const Main = () => {

  return (
      <Container>
        <Categoria option="Geral"/>

        {/* 
        content = G (geral), ou seja, exibe todos os produtos
        <ShowProd content='G'/> 
        
        content = 'M' exibe todos os produtos masculinos
        <ShowProd content='M'/> */}
      </Container>
  )
}

export default Main;

/* 
  Criar um component pra guardar as chamadas graphQL, 
nesse component, vai ter um switch case, e de acordo com a op do switch, executa o respectivo script;

na chamada do component, passa esse numero, ou seja, no App.JS passa 'geral', por exemplo

No component 'categorias' passa o nome da categoria, no caso 'masculino', 'unissex', etc, dai ele pega esse nome, taca no switch e faz a chamada corretamente;

------------------------------------

Criar um component que recebe esses dados do graphQL e exibe os produtos. No momento, o 'main.js' tem um array de produtos e seta essas informaçoes no main. Como eu vou usar esse tipo de exibiçao de produto mais vezes, e interessante q eu crie um component e so instancia sempre que precisar 
---------------------------------------

Nesse caso, como funcionaria os filtros?
Simples, vou receber, um array com TODOS os produtos da categoria, e apos isso, faço os filtros dentro do proprio component.
Todas as partes terão os mesmos filtros (geral, categoria, melhores da semana, oq aparece no carrinho, etc)
portanto pode ser feito todos no mesmo component
*/