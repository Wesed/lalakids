import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Search} from "../../Assets/search.svg";

const Input = styled.div`
  position: relative;
  display: flex !important;

  label {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    height: 40px;

    padding: 0 1rem;
    border-radius: 4px;
    transition: 0.1s;
    background: ${(props) => props.theme.colors.grayBackground} !important;
    border: 1px solid rgba(0, 0, 0, 0.2);

    :focus {
      outline: 1px solid transparent;
    }

    :hover,
    :focus {
      background: white !important;
      box-shadow: 0 0 2px 1px ${(props) => props.theme.colors.blueBackground};
    }
  }

  span {
    position: absolute;
    right: .5rem;
    width: 24px;

    svg {
      position: relative;
      width: 24px;
      padding: 0.3rem;
      top: 1.2rem;

      path {
        fill: ${(props) => props.theme.colors.darkGray};
      }
    }
  }
`;

const SearchBar = () => {

return (
  <>
    <Input type="type">

    <input name="searchBar" 
      type="text" 
      placeholder='O que procura?'
      />

      <span> <Search /> </span>

    </Input>
  </>
);

}

export default SearchBar;