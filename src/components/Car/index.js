import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from 'styled-components'

import { connect } from 'react-redux'
import { logState } from '../../store/actions'

// import { Container } from './styles';



function Car(props) {

    const CarComponent = styled.nav`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid black;
        div {
            margin: 0px auto;
            height: 100%;
            width: 70%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
`
const AfterIcon = styled.span`
    width: auto;
    height: 100%;
    padding: 0px 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;

        &::after {
            content: '${props.state.length}';
            font-size: 14px;
            position: absolute;
            top: 0px;
            right: 0px;
            background-color: red;
            height: 20px;
            width: 20px;
            text-align: center;
            border-radius: 100%;
        }
`

  return (
      <CarComponent>
          <div>
              <AfterIcon>
                <AiOutlineShoppingCart className='icon' />
              </AfterIcon>
          </div>
      </CarComponent>
  );
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

const mapDispatchToProps = { logState }

export default connect(mapStateToProps, mapDispatchToProps)(Car)