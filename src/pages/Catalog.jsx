import React , {useState} from 'react'
import category from '../assets/fake-data/category'
import  color from '../assets/fake-data/product-color'
import size from '../assets/fake-data/product-size'
import Checkbox from '../component/Checkbox'
import productData from '../assets/fake-data/products'
import InfinityList from '../component/InfinityList'
const Catalog = () => {
  const initFilter = {
    category : [],
    color : [],
    size : [],
  }

  const [filter,setFilter] = useState(initFilter);
  const productsList = productData.getAllProducts();
  const [products,setProducts] = useState(productsList);

  return (
    <div className="catalog">
      <div className="catalog__filter">
         <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
                danh mục sản phẩm
            </div>
            <div className="catalog__filter__widget__content">
              {
                category.map((item,index) => {
                  return (
                      <div key={index} className="catalog__filter__widget__content__item">
                          <Checkbox 
                            label={item.display}
                          />
                      </div>
                  )
                })
              }
            </div>
         </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
                màu sắc
            </div>
            <div className="catalog__filter__widget__content">
 {
                color.map((item,index) => {
                  return (
                      <div key={index} className="catalog__filter__widget__content__item">
                          <Checkbox 
                            label={item.display}
                          />
                      </div>
                  )
                })
              }
            </div>
          </div>
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
                kích thước
            </div>
            <div className="catalog__filter__widget__content">
 {
                size.map((item,index) => {
                  return (
                      <div key={index} className="catalog__filter__widget__content__item">
                          <Checkbox 
                            label={item.display}
                          />
                      </div>
                  )
                })
              }
            </div>
          </div>
      </div>
      <div className="catalog__content">
            <InfinityList 
                data = {products}
            />
      </div>
    </div>
  )
}

export default Catalog