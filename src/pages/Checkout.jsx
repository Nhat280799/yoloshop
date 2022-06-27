import React , {useEffect,useState} from 'react'
import CartItem from '../component/CartItem'
import productData from '../assets/fake-data/products'
import { useSelector , useDispatch } from 'react-redux'
import numberWidthCommas from '../util/numberWidthCommas'
import { addUser } from '../redux/reduceCheckout/CheckoutSlice'
import Button from '../component/Button'
import { useNavigate } from 'react-router-dom';
const Checkout = () => {
  const dispath = useDispatch();
  let history = useNavigate();
  const cartItems = useSelector((state) => state.listCart.value)
  const [cartProducts,setcartProducts] = useState([])
  const [totalProducts,setTotalProducts] = useState(0)
  const [totalPrice,setTotalPrice] = useState(0)

  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [address,setAddress] = useState('')
  const [email,setEmail] = useState('')
  const [code,setCode] = useState('')

  useEffect(() => {
    setcartProducts(productData.getCartItemsInfo(cartItems))
    setTotalProducts(cartItems.reduce((total,item) => total + Number(item.quantity), 0 ))
    setTotalPrice(cartItems.reduce((total,item) => total + (Number(item.quantity) * Number(item.price)),0))
  },[cartItems])



  const handleSubmit = () => {
      if(name === "" || phone === "" || address === "" || email === "" || code === ""){
        alert("Bạn phải nhập đầy đủ các trường thanh toán ")
      }else{
        dispath(addUser({
          name : name,
          phone : phone,
          address : address,
          email : email,
          code : code,
        }))
        history("/thankyou");
      } 
  }

  return (
    
    <form className="checkout__page" onSubmit={handleSubmit}>
    <div className="checkout__page__form">
        <lable>Họ tên</lable>
        <input type="text" placeholder="Nhập họ tên" onChange={(e) => setName(e.target.value)}/>
        <label>Số điện thoại</label>
        <input type="text" placeholder='Nhập số điện thoại' onChange={(e) => setPhone(e.target.value)}/>
        <label>Địa chỉ</label>
        <input type="text" placeholder='Nhập địa chỉ'  onChange={(e) => setAddress(e.target.value)}/>
        <label>Email</label>
        <input type="text" placeholder='nhập email'  onChange={(e) => setEmail(e.target.value)}/>
        <label>Mã đại lý</label>
        <input type="text" placeholder='nhập mã đại lý'  onChange={(e) => setCode(e.target.value)} />
    </div>
    <div className="checkout__page__cart">
      <h2 className='checkout__page__cart__name'>ĐƠN HÀNG CỦA BẠN</h2>
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
        <div className="process_to_checkout">
        <Button type="submit">Tiến hành đặt hàng</Button>
        </div>
    </div>  
    </form>
  )
}

export default Checkout