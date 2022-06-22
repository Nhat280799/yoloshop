import React from 'react'
import productData from '../assets/fake-data/products'
import { useParams } from 'react-router-dom'
import Section , {SectionTitle , SectionBody} from '../component/Section'
import ProductView from '../component/ProductView'
const Product = () => {
  let Params = useParams();
  console.log(Params);
  const product = productData.getProductBySlug(Params.slug);
  return (
    <Section>
        <SectionBody>
            <ProductView product={product} />
        </SectionBody>
    </Section>
  )
}

export default Product
