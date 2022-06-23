import React , {useEffect,useState}from 'react'
import PropTypes from 'prop-types'
import productData from '../assets/fake-data/products'
import ProductView from './ProductView'
import { remove } from '../redux/reduceProduct/ProductCartSlice'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
const ProductModal = props => {
  const productSlug = useSelector((state) => state.productModal.value);
  const dispath = useDispatch();
  const [productt,setProductt] = useState(undefined);

  useEffect(() => {
      setProductt(productData.getProductBySlug(productSlug));
  },[productSlug])

  return (
    <div className={`product-view__modal ${productt === undefined ? "" : "active"}`}>
        <div className="product-view__modal__content">
              <ProductView
                product={productt}
              />
              <div className="product-view__modal__content__close">
                <Button onClick={() => dispath(remove())}>
                    đóng
                </Button>
              </div>
        </div>
    </div>
  )
}

ProductModal.propTypes = {

}

export default ProductModal
