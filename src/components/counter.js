import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'

const Counter = ({ counter, inc, dec, refr }) => {
    return (
        <div className="main-content">
            <div id="counter">
                <span id="counter__text">{counter}</span>
            </div>
            <ul className="controls">
                <li onClick={inc} className="controls__item" id="inc"><img src="./inc.png" alt="Increment"/></li>
                <li onClick={dec} className="controls__item" id="dec"><img src="./dec.png" alt="Decrement"/></li>
                <li onClick={refr} className="controls__item" id="ref"><img src="./refresh.png" alt="Refresh"/></li>
            </ul>
        </div>    
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter)    