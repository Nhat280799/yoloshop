import React from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import Routess from '../routes/Routess'
import Header from './Header'
import Footer from './Footer'
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

        </BrowserRouter>
  )
}

export default Layout
