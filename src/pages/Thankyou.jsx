import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
const Thankyou = () => {
  const checkout = useSelector((state) => state.checkoutPage.value);
  console.log(checkout);
  return (
    <div>
      thankyou
    </div>
  )
}

export default Thankyou