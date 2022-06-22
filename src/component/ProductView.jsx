import React , {useState} from 'react'
import PropTypes from 'prop-types'
import Button from './Button';
const ProductView = props => {
  let productt = props.product;
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [preveiewImg,setPreviewImg] = useState(productt.image01);
  return (
    <div className="product">
        <div className="product__images">
            <div className="product__images__list">
                <div className="product__images__list__item" onClick = {() => setPreviewImg(productt.image01)}>
                    <img src={productt.image01} alt="" />
                </div>
                <div className="product__images__list__item" onClick = {() => setPreviewImg(productt.image02)}>
                    <img src={productt.image02} alt="" />
                </div>
            </div>
            <div className="product__images__main">
                <img src={preveiewImg} alt="" />
            </div>
            <div className={`product-description ${descriptionExpand ? "expand" : ""}`}>
                <div className="product-description__title">{productt.title}</div>
                <div className="product-description__content">{productt.description}</div>
                <div className="product-description__toggle">
                <Button size="sm" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                </Button>
            </div>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product : PropTypes.object
}

export default ProductView
