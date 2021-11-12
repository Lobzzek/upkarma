import React from 'react'
import s from '../../styles/MainWrapper/UserMobile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveUserMobile } from '../../Redux/actions/activeUserMobile.js'

const UserMobile = () => {
    const dispatch = useDispatch();
    const active_user_mobile = useSelector(state => state.active_user_mobile);

    const user_mobile = React.useRef()
    const fon_user_mobile = React.useRef()
    const cnt_user_mobile = React.useRef()

    React.useEffect(() => {
        if (active_user_mobile.item){
            user_mobile.current.style.display = "block";
            setTimeout(() => {
                fon_user_mobile.current.style.opacity = "1"
                cnt_user_mobile.current.style.top = "0"
            }, 200);
        }else{
            fon_user_mobile.current.style.opacity = "0"
            cnt_user_mobile.current.style.top = "-70vh"
            setTimeout(() => {
                user_mobile.current.style.display = "none";
            }, 900);
        }
    }, [active_user_mobile])
    return (
        <div className={s.user_mobile} ref={user_mobile}>
            <div className={s.fon} onClick={() => dispatch(setActiveUserMobile(false))} ref={fon_user_mobile}></div>
            <div className={s.cnt} ref={cnt_user_mobile}>
                <button className={s.close} onClick={() => dispatch(setActiveUserMobile(false))}>
                    &#x2715;
                </button>
                <nav>
                    <button>
                        Login
                    </button>
                    <button>
                        Sign Up
                    </button>
                    <a href="#">
                        Help
                    </a>
                    <a href="#">
                       Pivacy
                    </a>
                    <button className={s.sell_your_art}>
                        Sell Your Art
                    </button>
                </nav>
                <img className={s.logo} src="/img/logo.svg" alt="" />
            </div>
        </div>
    )
}

export default UserMobile
