import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import numberWidthCommas from '../util/numberWidthCommas'
const ProductCart = props => {
  return (
    <div className="product-card">
        <Link to={`/catalog/${props.slug}`}>
            <div className="product-card__image">
                <img src={props.image01} alt="" />
                <img src={props.image02} alt="" />
            </div>
            <h3 className="product-card__name">
                {props.title}
            </h3>
            <div className="product-card__price">
                {
                    numberWidthCommas(props.price)
                }
                <span className='product-card__price__old'>
                    <del>399,000</del>
                </span>
            </div>
        </Link>
    </div>
  )
}

ProductCart.propTypes = {
    title : PropTypes.string.isRequired,
    price : PropTypes.number.isRequired,
    image01: PropTypes.string.isRequired,
    image02: PropTypes.string.isRequired,
    slug : PropTypes.string.isRequired
}

export default ProductCart
