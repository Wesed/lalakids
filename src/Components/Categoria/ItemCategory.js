import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Skeleton from '../Useful/Skeleton';

const Card = styled.div`
  width: 120px;
  border-radius: 4px;
  text-align: center;

  p {
    padding: .5rem;
  }

  img {
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
  }

  @media (max-width: 30rem) {
    
    img {
      width: 80%;
      height: 100px;
    }
  }

`;

const ItemCategory = ({category}) => {

  console.log(category);

  /* pq precisa desestruturar 2x?*/
  const subcategory = category.category;

  return (
    <Link to={subcategory.name.toLowerCase()}>
      <Card>
        <Skeleton src={subcategory.img} alt="subcategory"/>
        <p>{subcategory.name}</p>
    </Card>
    </Link>
  )
}

export default ItemCategory;