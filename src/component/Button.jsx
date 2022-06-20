import React from 'react'
import PropTypes from 'prop-types'
import { FaCartPlus } from "react-icons/fa"
const Button = props => {

  const bg = props.backgroundColor ? 'bg-' + props.backgroundColor : 'bg-main';

  const size = props.size ? 'btn-' + props.size : '';

  const animate = props.animate ? 'btn-animate' : '';

  return (
    <button 
        className={`btn ${bg} ${size} ${animate}`}
        
    >
        <span className='btn__txt'>{props.children}</span>
        {
            props.icon ? (
                <span className='btn__icon'>
                    <FaCartPlus />
                </span>
            ) : null
        }
    </button>
  )
}

Button.propTypes = {
    backgroundColor : PropTypes.string,
    size : PropTypes.number,
    icon : PropTypes.string,
    animate : PropTypes.bool,
    onclick : PropTypes.func,
}

export default Button
