import React , { useState,useEffect} from 'react'
import "./Nav.css"

function Nav() {
    const [show  ,handleShow] = useState(false);

    const transitionNavBar = () =>{
        if (window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() =>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=> window.removeEventListener('scroll',transitionNavBar)
    },[])
   
return (
        <div className={`nav ${show && "nav__black" }`}>
            <div className="nav__contents">
            <img 
                className="nav__logo"
                src="https://crm7.com.br/wp-content/uploads/2020/11/Netflix-Logo.png" 
                alt="logo"
            />

            <img 
                className="nav__avatar" 
                src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" 
                alt=""
                />
            </div>
        </div>
        

    )
}

export default Nav
