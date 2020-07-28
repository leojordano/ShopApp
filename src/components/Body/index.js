import React from 'react';

import { connect } from 'react-redux'
import { addToCar } from '../../store/actions'

import styled from 'styled-components'

import Item from './Item'

const Container = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: blue;
    margin: 0px auto;
`

function Body({ addToCar, state }) {
  return (
      <Container>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
         <Item state={state} name='teste' price='200' addToCar={addToCar}/>
      </Container>
  );
}

function mapStateToProps(state) {
    return {
        state
    }
}

const mapDispatchToProps = { addToCar }

export default connect(mapStateToProps, mapDispatchToProps)(Body);