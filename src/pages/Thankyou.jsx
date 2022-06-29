import React , {useState} from 'react'
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux'
import Section , {SectionTitle , SectionBody } from '../component/Section'
const Thankyou = () => {
  const checkout = useSelector((state) => state.checkoutPage.value);
  const [user,setUser] = useState(null);
  
  if(checkout === undefined) checkout = {
        name : "",
        phone : "",
        address : "",
        email : "",
        code : "",
  }
  
  useEffect(() => {
    setUser(checkout)
  },[checkout])
  return (
    <Section>
        <SectionTitle>
            Cảm ơn bạn đã đặt hàng 
        </SectionTitle>
        <SectionBody>
            <table>
              <thead>
                <tr>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Mã code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.address}</td>
                  <td>{user.email}</td>
                  <td>{user.code}</td>
                </tr>
              </tbody>
            </table>
        </SectionBody>
    </Section>
  )
}

export default Thankyou