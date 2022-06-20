import React from 'react'
import PropTypes from 'prop-types'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FaWhmcs } from "react-icons/fa";
const PolicyCart = props => {
  return (
    <div className="policy-card">
        <div className="policy-card__icon">
            <FaWhmcs size={60}/>
        </div>
        <div className="policy-card__info">
            <div className="policy-card__info__name">{props.name}</div>
            <div className="policy-card__info__description">{props.description}</div>
        </div>
    </div>
  )
}

PolicyCart.propTypes = {
    name : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired,
}

export default PolicyCart
