import React , {useCallback , useEffect , useState} from 'react'
import HeroSlider from '../component/HeroSlider'
import heroSliderData from '../assets/fake-data/heroSliderData'
import Section , {SectionTitle , SectionBody } from '../component/Section'
import policy from '../assets/fake-data/policy'
import PolicyCart from '../component/PolicyCart'
import Grid from '../component/Grid'
import { Link} from 'react-router-dom'
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
    </div>


  )
}

export default Home
