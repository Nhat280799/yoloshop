import React , { useEffect, useRef , useState} from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid';
import ProductCart from './ProductCart';
import { useContext } from 'react';
const InfinityList = props => {

  const  perLoad = 6;
  const [dataa,setDataa] = useState([]);
  const [load, setLoad] = useState(true);
  const refItem  = useRef(null)
  const [index, setIndex] = useState(0)


    useEffect(() => {
        setDataa(props.data.slice(0,perLoad));
    },[props.data])

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY + window.innerHeight >= refItem.current.clientHeight + refItem.current.offsetTop + 200 ){
                console.log("tobottom");
                setLoad(true)
            }
        })
    },[refItem])

    useEffect(() => {
        const getItems = () => {
            const pages = Math.floor(props.data.length / perLoad);
            const maxIndex = props.data.length / perLoad === 0 ? pages : pages + 1;

            if(load && index <= maxIndex){
                const start = index * perLoad;
                const end = perLoad * maxIndex;
                setDataa(dataa.concat(props.data.slice(start,end)))
                setIndex(index + 1);
            }
        }
        getItems(); 
        setLoad(false);

    },[props.data,index,load,dataa])

  return (
    <div ref={refItem}>
        <Grid
            col={3}
            mdCol={2}
            smCol={1}
            gap={20}
        >
        {
            dataa.map((item,index) => {
                return (
                    <ProductCart 
                         key={index}
                         image01={item.image01}
                         image02={item.image02}
                         title={item.title}
                         price={item.price}
                         slug={item.slug}
                    />
                )
            })
        }
        </Grid>
    </div>
  )
}

InfinityList.propTypes = {
    data : PropTypes.array.isRequired,
}

export default InfinityList
