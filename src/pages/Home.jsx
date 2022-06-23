import React , {useCallback , useEffect , useState} from 'react'
import HeroSlider from '../component/HeroSlider'
import heroSliderData from '../assets/fake-data/heroSliderData'
import Section , {SectionTitle , SectionBody } from '../component/Section'
import policy from '../assets/fake-data/policy'
import PolicyCart from '../component/PolicyCart'
import Grid from '../component/Grid'
import { Link} from 'react-router-dom'
import productData from '../assets/fake-data/products'
import ProductCart from '../component/ProductCart'
import banner from "../assets/images/banner.png"
const Home = () => {
  return (
    <div>
        <HeroSlider 
          data={heroSliderData}
          control = {true}
          auto = {true}
        />
        <Section>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap = {10}
              >
                { policy.map((item,index) => {
                  return (
                   <Link to="/"   key={index} >
                      <PolicyCart 
                        name={item.name}
                        description={item.description}
                        icon={item.icon}  
                        />
                   </Link>
                  )
                })}
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>
                sản phẩm bán chạy trong tuần
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap = {10}
            >
              {
                productData.getProducts(4).map((item,index) => {
                  return (
                      <ProductCart
                        key={index} 
                        title={item.title}
                        price={Number(item.price)}
                        image01={item.image01}
                        image02={item.image02}
                        slug={item.slug}
                      />
                  )
                })
              }
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionTitle>
                sản phẩm mới
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap = {10}
            >
              {
                productData.getProducts(8).map((item,index) => {
                  return (
                      <ProductCart
                        key={index} 
                        title={item.title}
                        price={Number(item.price)}
                        image01={item.image01}
                        image02={item.image02}
                        slug={item.slug}
                      />
                  )
                })
              }
            </Grid>
          </SectionBody>
        </Section>
        <Section>
          <SectionBody>
            <img src={banner} alt="" />
          </SectionBody>
        </Section>
                <Section>
          <SectionTitle>
               Phổ biến
          </SectionTitle>
          <SectionBody>
            <Grid
              col={4}
              mdCol={2}
              smCol={1}
              gap = {10}
            >
              {
                productData.getProducts(12).map((item,index) => {
                  return (
                      <ProductCart
                        key={index} 
                        title={item.title}
                        price={Number(item.price)}
                        image01={item.image01}
                        image02={item.image02}
                        slug={item.slug}
                      />
                  )
                })
              }
            </Grid>
          </SectionBody>
        </Section>
    </div>


  )
}

export default Home
