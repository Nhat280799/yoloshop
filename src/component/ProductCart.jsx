import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Button from './Button'
import numberWidthCommas from '../util/numberWidthCommas'
import {set} from '../redux/reduceProduct/ProductCartSlice'
import { useSelector, useDispatch } from 'react-redux'
 
const ProductCart = props => {
   const dispath = useDispatch();


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
        <div className="product-card__btn">
                <Button
                    size="sm"
                    icon="xxx"
                    animate={true}
                    onClick  = {() => dispath(set(props.slug))}
                >
                    Chọn mua 
                </Button>
        </div>
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
