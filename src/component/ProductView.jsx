import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import Button from './Button';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reduceCart/CartItemSlice';
import numberWidthCommas from "../util/numberWidthCommas";
const ProductView = props => {
  let productt = props.product;
  const [descriptionExpand, setDescriptionExpand] = useState(false);    
  const [preveiewImg,setPreviewImg] = useState(undefined);
  const [quantity, setQuantity] = useState(1)
  const [color,setColor] = useState(undefined);
  const [size,setSize] = useState(undefined);

  const dispath = useDispatch();

    if (productt === undefined) productt = {
        title: "",
        price: '',
        image01: null,
        image02: null,
        categorySlug: "",
        colors: [],
        slug: "",
        size: [],
        description: ""
    }

    useEffect(() => {
        setPreviewImg(productt.image01);
    },[productt])


  const updateQuantity = (type) => {
      if(type === 'plus'){
        setQuantity(quantity + 1)
      }else{
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
      }
  }


  const check = () => {
    if(color === undefined){
        alert("vui lòng chọn màu");
        return false;
    }

    if(size === undefined){
        alert("vui lòng chọn size");
        return false;
    }
    return true;
  }

  const addtoCart = () => {
        if(check()){
            dispath(addItem({
                slug : productt.slug,
                price : productt.price,
                color : color ,
                size : size ,
                quantity : quantity
            }))
        }
  }

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
                <div className="product-description__content" dangerouslySetInnerHTML={{__html: productt.description}}></div>
                <div className="product-description__toggle" onClick={() => setDescriptionExpand(!descriptionExpand)}>
                <Button size="sm">
                            {
                                descriptionExpand ? 'Thu gọn' : 'Xem thêm'
                            }
                </Button>
            </div>
            </div>
        </div>
        <div className="product__info">
            <div className="product-description__title">
                {productt.title}
            </div>
            <div className="product__info__item">
                <span className="product__info__item__price">{numberWidthCommas(productt.price)}</span>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">Màu sắc</div>
                <div className="product__info__item__list">
                    {
                        productt.colors.map((item,index) => {
                        return (
                            <div className={`product__info__item__list__item ${color === item ? "active" : ""}`} key={index} onClick={() => setColor(item)}>
                                <div className={`circle bg-${item}`}></div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
            <div className="product__info__item">
                <div className="product__info__item__title">Kích cỡ</div>
                <div className="product__info__item__list">
                    {
                        productt.size.map((item,index) => {
                        return (
                            <div className={`product__info__item__list__item ${size === item ? "active" : ""}`}  onClick={() => setSize(item)}>
                            <span className="product__info__item__list__item__size" key={index}>
                                        {item}
                            </span>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
            <div class="product__info__item">
                <div class="product__info__item__title">Số lượng</div>
                <div class="product__info__item__quantity">
                    <div class="product__info__item__quantity__btn" onClick={() => updateQuantity('minus')}>                       
                        <FaAngleLeft/>
                    </div>
                        <div class="product__info__item__quantity__input">{quantity}</div>
                    <div class="product__info__item__quantity__btn" onClick={() => updateQuantity('plus')}>
                        <FaAngleRight />
                    </div>
                    </div>
            </div>
            <div className="product__info__item">
                    <Button size="sm" onClick={addtoCart}>thêm vào giỏ</Button>
                    <Button size="sm">mua ngay</Button>
            </div>
        </div>
    </div>
  )
}

ProductView.propTypes = {
    product : PropTypes.object
}

export default ProductView
