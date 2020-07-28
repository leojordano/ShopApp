import React from 'react';
import styled from 'styled-components'
// import { Container } from './styles';

const Object = styled.span`
  width: 250px;
  background-color: red;
  padding: 10px 20px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

function Item({ name, price, addToCar, state }) {
  return (
      <Object>
          <span>Nome: {name}</span>
          <span>Preço: {price}</span>
          <button onClick={() => addToCar({ id:state.length + 1, name, price })}>Adicionar ao carrinho</button>
      </Object>
  );
}

export default Item;