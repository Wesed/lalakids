import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Search} from "../../Assets/search.svg";
import { useNavigate } from 'react-router-dom';
import useForm from './../Useful/UseForm';



const Input = styled.div`
  position: relative;
  display: flex !important;

  label {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  form {
    width: 100%;
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

const ResultContainer = styled.div`
  position: absolute;
  z-index: 1000;
  height: 10rem;
  width: 100%;
  top: 3rem;

  background: ${(props) => props.theme.colors.grayBackground};
  text-align: left;
  border: 1px solid transparent;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: .1s;

  ul {
    background: white;
  }

  li {
    border: 1px solid slategray;
  }
`;

const SearchBar = () => {

  const [search, setSearch] = React.useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    navigate(`/search/${search}`);
  };


return (
  <>
    <Input>
      <form onSubmit={handleSubmit}>
        <input 
          name="searchBar" 
          id="inputSearch"
          type="text" 
          placeholder='O que procura?'
          value={search}
          onChange={(e)=>{setSearch(e.target.value)}}
          onBlur={()=>{setSearch('')}}
        />

        <span> <Search /> </span>
      </form>

    </Input>
  </>
);

}

export default SearchBar;