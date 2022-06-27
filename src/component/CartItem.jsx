import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import numberWidthCommas from '../util/numberWidthCommas'
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import {updateItem , removeItem } from '../redux/reduceCart/CartItemSlice';
import { FaTimesCircle } from "react-icons/fa";
const CartItem = props => {
    const itemm = props.item;
    const [quantity, setQuantity] = useState(itemm.quantity)
    const dispatch = useDispatch();
    
    const updateQuantity = (opt) => {
        if (opt === '+') {
            dispatch(updateItem({...itemm, quantity: quantity + 1}))
        }
        if (opt === '-') {
            dispatch(updateItem({...itemm, quantity: quantity - 1 === 0 ? 1 : quantity - 1}))
        }
    }

     useEffect(() => {
        setQuantity(props.item.quantity)
    }, [props.item])

    const removeItemm = () => {
        dispatch(removeItem(itemm));
    }

  return (
    <div className="cart__item">
        <div className="cart__item__image">
            <img src={itemm.product.image01} alt="" />
        </div>
        <div className="cart__item__info">
            <div className="cart__item__info__name">
              <a href="#">{itemm.product.title}</a>
            </div>
            <div className="cart__item__info__price">
                {numberWidthCommas(itemm.product.price)}
            </div>
            <div class="product__info__item__quantity">
                    <div class="product__info__item__quantity__btn" onClick={() => updateQuantity("-")}>                       
                        <FaAngleLeft/>
                    </div>
                        <div class="product__info__item__quantity__input">{quantity}</div>
                    <div class="product__info__item__quantity__btn" onClick={() => updateQuantity("+")}>
                        <FaAngleRight />
                    </div>
            </div>
            <div className="cart__item__del" onClick={() => removeItemm()}>
                    <FaTimesCircle />
            </div>
        </div>
    </div>
  )
}

CartItem.propTypes = {
    item : PropTypes.object
}

export default CartItem
