import React from 'react';
import { connect } from 'react-redux';
import {inc, dec, rel} from '../actions.js';
import {bindActionCreators} from 'redux';

import '../style.css';
import plus from '../img/plus.svg';
import minus from '../img/Minus.svg'
import reload from '../img/Group.svg'

const Counter = ({counter, inc, dec, rel}) => {
    return (
        <div className="content">
        <div className="white-block">
          <h1 className="counter">{counter}</h1>
        </div>
        <div className="btn btn-block">
          <button onClick={inc} id="plus" className="btn plus-btn">
            <img src={plus} alt=""></img>
          </button>
          <button onClick={dec} id="minus" className="btn minus-btn">
            <img src={minus} alt=""></img>
          </button>
          <button onClick={rel} id="reload" className="btn reload-btn">
            <img src={reload} alt=""></img>
          </button>
        </div>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    counter: state
  }
}

const mapDispatchToProps = (dispatch) => {
  const {dispatchInc, dispatchDec, dispatchRel} = bindActionCreators( // в dispatch помещаем функции из actions
    {
      dispatchInc: inc, 
      dispatchDec: dec,
      dispatchRel: rel
    }, dispatch)
    
  return {
    inc: dispatchInc, // возвращаем переменные, которые будем использовать в обработчиках
    dec: dispatchDec,
    rel: dispatchRel
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);