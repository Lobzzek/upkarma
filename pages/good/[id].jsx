import React from 'react'
import { useRouter } from 'next/router'
import MainWrapper from '../../components/MainWrapper/MainWrapper.jsx'
import s from '../../styles/good.module.css'
import Link from "next/link";

const Good = () => {
  const router = useRouter();
  console.log(router);
  const [like, setLike] = React.useState(false);
  return (
    <MainWrapper>
      <div className={s.good}>
        <div className={s.picture}>
          <button onClick={() => setLike(!like)}>
            <svg width="24" className={like ? s.active : null} height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.2383 4.75471C22.8718 3.90606 22.3433 3.13702 21.6824 2.49064C21.0211 1.84234 20.2413 1.32714 19.3855 0.973066C18.4982 0.604454 17.5464 0.415776 16.5855 0.417988C15.2375 0.417988 13.9223 0.787129 12.7793 1.48439C12.5059 1.65119 12.2461 1.83439 12 2.034C11.7539 1.83439 11.4941 1.65119 11.2207 1.48439C10.0777 0.787129 8.7625 0.417988 7.41445 0.417988C6.44375 0.417988 5.50312 0.603926 4.61445 0.973066C3.75586 1.32854 2.98203 1.83986 2.31758 2.49064C1.65585 3.13629 1.12724 3.90551 0.761719 4.75471C0.381641 5.63791 0.1875 6.5758 0.1875 7.54104C0.1875 8.45158 0.373438 9.40041 0.742578 10.3656C1.05156 11.1723 1.49453 12.009 2.06055 12.8539C2.95742 14.191 4.19062 15.5856 5.72187 16.9992C8.25937 19.3426 10.7723 20.9614 10.8789 21.027L11.527 21.4426C11.8141 21.6258 12.1832 21.6258 12.4703 21.4426L13.1184 21.027C13.225 20.9586 15.7352 19.3426 18.2754 16.9992C19.8066 15.5856 21.0398 14.191 21.9367 12.8539C22.5027 12.009 22.9484 11.1723 23.2547 10.3656C23.6238 9.40041 23.8098 8.45158 23.8098 7.54104C23.8125 6.5758 23.6184 5.63791 23.2383 4.75471ZM12 19.2797C12 19.2797 2.26562 13.0426 2.26562 7.54104C2.26562 4.75471 4.5707 2.49611 7.41445 2.49611C9.41328 2.49611 11.1469 3.61174 12 5.24143C12.8531 3.61174 14.5867 2.49611 16.5855 2.49611C19.4293 2.49611 21.7344 4.75471 21.7344 7.54104C21.7344 13.0426 12 19.2797 12 19.2797Z" fill="black" />
            </svg>
          </button>
          <img src="/img/octopus.jpg" className={s.main_img} alt="" />
        </div>

        <div className={s.info}>
          <Link href="/">
            <a className={s.close}>
              <img src="/img/arrow_left.svg" alt="" />
            </a>
          </Link>
          <div>
            <h2>Pelican</h2>
            <small>Designed by John Renny</small>
          </div>
          <div>
            <h4 className={s.price}>$20.95</h4>
            <p className={s.if}>$19.99 when you buy 2+</p>
          </div>

          <div>
            <p>Size</p>
            <select>
              <option>120mm x 90mm</option>
              <option>120mm x 90mm</option>
              <option>120mm x 90mm</option>
              <option>120mm x 90mm</option>
            </select>
            <button className={s.add_to_cart}>
              <img src="/img/add_cart.svg" alt="" />
              Add To Cart
            </button>
          </div>
          
          <div>
            <p className={s.delivery}>
              <img src="/img/2_lines.svg" alt="" />
              Delivery
            </p>
            <small>Express by 25 October</small>
            <small>Standart between 2-7 November</small>
          </div>
        </div>
      </div>
    </MainWrapper>
  )
}

export default Good
