import React , {useState , useCallback , useEffect} from 'react'
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

  const filterSelect = (type ,checked ,item) =>{
    if(checked){
      switch(type){
        case "CATEGORY" :
          setFilter({...filter , category : [...filter.category, item.categorySlug]})
          break;
        case "COLOR" : 
          setFilter({...filter , color : [...filter.color , item.color]})
          break;
        case "SIZE" : 
          setFilter({...filter , size : [...filter.size , item.size]})
          break;
      }
    }else{
      switch(type){
        case "CATEGORY" :
          const newCategory = filter.category.filter(e => e !== item.categorySlug);
          setFilter({...filter,category : newCategory})
          break;
        case "COLOR" : 
          const newColor = filter.color.filter(e => e !== item.color);
          setFilter({...filter,color : newColor})
          break;
        case "SIZE" : 
          const newSize = filter.size.filter(e => e!== item.size)
          setFilter({...filter,size :newSize})
          break;
        default : 
      }
    }
  }

  const updateFilter = useCallback(() => {
    let temp = productsList;

    if(filter.category.length > 0){
      temp = temp.filter(e => filter.category.includes(e.categorySlug));
    }

    if(filter.color.length > 0){
      temp = temp.filter(e => {
        const check = e.colors.find(color => filter.color.includes(color));
        return check != undefined;
      })
    }

    if(filter.size.length > 0){
      temp = temp.filter(e => {
        const check = e.size.find(size => filter.size.includes(size))
        return check != undefined
      })
    }

    setProducts(temp);
  },[filter,productsList])


  useEffect(() => {
    updateFilter() 
  },[updateFilter])

  console.log(filter);
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
                            onChange = { (input) => filterSelect("CATEGORY" , input.checked , item)}
                            checked = {filter.category.includes(item.categorySlug)}
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
                            onChange = {(input) => filterSelect("COLOR", input.checked , item)}
                            checked = {filter.color.includes(item.color)}
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
                            onChange = {(input) => filterSelect("SIZE" , input.checked , item )}
                            checked = {filter.size.includes(item.size)}
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