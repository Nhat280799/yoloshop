import React , {useEffect , useState }from 'react'
import PropTypes from 'prop-types'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import Button from '../component/Button'
import productData from '../assets/fake-data/products'
import numberWidthCommas from '../util/numberWidthCommas'
import CartItem from '../component/CartItem'
const Cart = props => {
  const cartItems = useSelector((state) => state.listCart.value)
  const [cartProducts,setcartProducts] = useState([])
 
  const [totalProducts,setTotalProducts] = useState(0)

  const [totalPrice,setTotalPrice] = useState(0)

  useEffect(() => {
    setcartProducts(productData.getCartItemsInfo(cartItems))
    setTotalProducts(cartItems.reduce((total,item) => total + Number(item.quantity), 0 ))
    setTotalPrice(cartItems.reduce((total,item) => total + (Number(item.quantity) * Number(item.price)),0))
  },[cartItems])
  return (
    <div className="cart">
        <div className="cart__info">
            <div className="cart__info__txt">
                  <p>{`Bạn đang có ${totalProducts} sản phẩm`}</p>
                <div className="cart__info__txt__price">  
                    <span>Thành tiền :</span>
                    <span>{numberWidthCommas(totalPrice)}</span>                  
                </div>
            </div>
            <div className="cart__info__btn">
                  <Button><Link to="/checkout">Đặt hàng</Link></Button>
                  <Button>Tiếp tục mua hàng</Button>
            </div>
        </div>
        <div className="cart__list">
            {
              cartProducts.map((item,index) => {
                return (
                   <CartItem
                      item={item}
                      key={index}
                   />
                )
              })
            }
        </div>
    </div>
  )
}

Cart.propTypes = {

}

export default Cart
