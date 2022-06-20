import React , {useCallback , useEffect , useState} from 'react'
import HeroSlider from '../component/HeroSlider'
import heroSliderData from '../assets/fake-data/heroSliderData'
const Home = () => {
  return (
        <HeroSlider 
          data={heroSliderData}
          control = {true}
          auto = {true}
        />
  )
}

export default Home
