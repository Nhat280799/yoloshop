import React , {useRef , useEffect , useState} from 'react'
import {Link , useLocation} from 'react-router-dom'
import logo from "../assets/images/Logo-2.png";
import { FaAlignJustify , FaSearch , FaShoppingBag , FaRegUser , FaChevronLeft} from 'react-icons/fa';
import {useSelector} from 'react-redux'
const nav = [
    {
        display : "Trang chủ",
        path : "/"
    },
    {
        display : "Sản Phẩm",
        path : "/catalog"
    },
    {
        display : "Phụ kiện",
        path : "accessories"
    },
    {
        display : "Liên hệ",
        path : "/contact"
    }
]

const Header = () => {
  const getNumber = useSelector((state) => state.listCart.value)
  const [number,setNumber] = useState(0);
  const {pathname} = useLocation();
  const activeNav = nav.findIndex(e => e.path === pathname);

  const headerRef = useRef(null);
    
  const menuleftRef = useRef(null);
  const menuToggle = () => {
    menuleftRef.current.classList.toggle('active');
  }

    useEffect(() => {
        const neww = getNumber.length;
        setNumber(Number(neww));
    },[getNumber])

  useEffect(() => {
    window.addEventListener("scroll",() => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('shrink');
        }else{
            headerRef.current.classList.remove('shrink');
        }
    });
    return () => {
        window.removeEventListener("scroll",null);
    }
  },[])


  return (
    <div className="header" ref={headerRef}>
       <div className="container">
            <div className="header__logo">
                <img src={logo} alt="" />
            </div>
            <div className="header__menu">
                <div className="header__menu__mobile__toggle" onClick={menuToggle}>
                    <FaAlignJustify />
                </div>
                <div className="header__menu__left" ref={menuleftRef}>
                    <div className="header__menu__left__close" onClick={menuToggle}>
                        <FaChevronLeft />
                    </div>
                    {
                        nav.map((item,index) => {
                            return (
                                <div key={index} className={`header__menu__item header__menu__left__item ${index === activeNav ? 'active' : '' }`}>
                                    <Link to={item.path}>
                                        <span>{item.display}</span>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="header__menu__right">
                    <div className="header__menu__item header__menu__right__item">
                        <FaSearch />
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <div className={`nitify__number ${number === 0 ? '' : 'active'}`}>
                            {number}
                        </div>
                        <Link to="/cart">
                            <FaShoppingBag />
                        </Link>
                    </div>
                    <div className="header__menu__item header__menu__right__item">
                        <Link to="/login">
                            <FaRegUser />  
                        </Link>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Header
