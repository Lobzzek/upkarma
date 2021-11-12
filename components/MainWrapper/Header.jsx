import React from 'react'
import s from '../../styles/MainWrapper/Header.module.css'
import Link from "next/link";
import { useDispatch } from 'react-redux'
import { setActiveUserMobile } from '../../Redux/actions/activeUserMobile.js'

const Header = () => {
    const dispatch = useDispatch();
    return (
        <div className={s.header}>
            <div className={s.cnt}>
                <div className={s.top_cnt}>
                    <Link href="/">
                        <a>
                            <img src="/img/logo.svg" alt="" className={s.logo} />
                        </a>
                    </Link>
                    <div className={s.search}>
                        <input type="text" placeholder="Find Product" />
                        <button>
                            <img src="/img/loupe.svg" alt="" />
                        </button>
                    </div>
                    <div className={s.user_panel}>
                        <a href="#">Sell Your Art</a>
                        <button className={s.login}>Login</button>
                        <button className={s.sign}>Sign Up</button>
                        <button className={s.cart}>
                            <img src="/img/shopping-cart.svg" alt="" />
                        </button>
                        <button className={s.user} onClick={() => dispatch(setActiveUserMobile(true))}><img src="/img/user.svg" alt="" /></button>
                    </div>
                </div>
                <nav>
                    <div className={s.wrapp_a}>
                        <a href="#" className={s.active}>Modern Art</a>
                        <a href="#">Modern Art</a>
                        <a href="#">Modern Art</a>
                        <a href="#">Modern Art</a>
                        <a href="#">Modern Art</a>
                        <a href="#">Modern Art</a>
                        <a href="#">Modern Art</a>
                        <a href="#">Modern Art</a>
                    </div>
               </nav>
            </div>
        </div>
    )
}

export default Header
