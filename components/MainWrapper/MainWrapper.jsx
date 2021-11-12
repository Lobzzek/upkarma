import React from 'react'
import s from '../../styles/MainWrapper/MainWrapper.module.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import FiltersMobile from './FiltersMobile.jsx'
import UserMobile from './UserMobile.jsx'

const MainWrapper = (props) => {
    return (
        <div className={s.main_wrapper}>
            <Header />
            <section className={s.dynamic}>
                {
                    props.children
                }
            </section>
            <Footer />

            <UserMobile />
            <FiltersMobile />
        </div>
    )
}

export default MainWrapper
