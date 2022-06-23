import React from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Routess from '../routes/Routess'
import Header from './Header'
import Footer from './Footer'
import ProductModal from './ProductModal'
const Layout = () => {
  return (
    <BrowserRouter>
                <div>
                  <Header />
                    <div className="container">
                        <div className="main">
                            <Routess/>
                        </div>
                    </div>
                    <Footer />
                </div>
                <ProductModal />
        </BrowserRouter>
  )
}

export default Layout
