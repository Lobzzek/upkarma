import React from 'react'
import s from '../../styles/MainWrapper/Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.top_cnt}>
                <nav>
                    <div>
                        <h5>Shop</h5>
                        <a href="#">Gift Cards</a>
                        <a href="#">Sitemap</a>
                        <a href="#">UpKarma Blog</a>
                        <a href="#">New Works</a>
                        <a href="#">Login</a>
                        <a href="#">Sign Up</a>
                    </div>
                    <div>
                        <h5>Sell</h5>
                        <a href="#">Sell on UpKarma</a>
                        <a href="#">Forums</a>
                        <a href="#">Affiliates</a>
                    </div>
                    <div>
                        <h5>About</h5>
                        <a href="#">Policies</a>
                        <a href="#">Investors</a>
                        <a href="#">Careers</a>
                        <a href="#">Social Responsibility</a>
                        <a href="#">Sell your art</a>
                    </div>
                    <div>
                        <h5>Help</h5>
                        <a href="#">Help Center</a>
                        <a href="#">Trust and safety</a>
                        <a href="#">Privacy settings</a>
                        <a href="#">Delivery</a>
                        <a href="#">Returns</a>
                        <a href="#">Contact Us</a>
                    </div>
                </nav>
                <a href="#" className={s.download_app}>Download the UpKarma App</a>
                <div className={s.socials_logo}>
                    <div>
                        <a href="#"><img src="/img/insta.svg" alt="" /></a>
                        <a href="#"><img src="/img/facebook.svg" alt="" /></a>
                        <a href="#"><img src="/img/youtube.svg" alt="" /></a>
                    </div>
                    <img src="/img/logo.svg" alt="" />
                </div>
            </div>
            <div className={s.bottom_cnt}>
                <p>@UpKarma.All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
