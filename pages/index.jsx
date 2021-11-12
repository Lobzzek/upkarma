import s from '../styles/Home.module.css'
import MainWrapper from '../components/MainWrapper/MainWrapper.jsx';
import Filters from '../components/Filters';
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { setActiveFiltersMobile } from '../Redux/actions/activeFiltersMobile.js'

function Category({ img, name }) {
  return (
    <button className={s.category}>
      <div className={s.picture} style={{ background: `url("${img}") center/cover no-repeat` }}></div>
      <p>{name}</p>
    </button>
  )
}


function Item({ img, name, author, price, id }) {
  return (
    <Link href={`/good/${id}`} >
    <a>
      <div className={s.item}>
        <div className={s.picture}>
          <img src={img} alt="" />
        </div>
        <div className={s.text}>
          <p><b>{name}</b></p>
          <p>By {author}</p>
          <p><b>{price}$</b></p>
        </div>
      </div>
    </a>
    </Link>
  )
}

export default function Home() {
  const dispatch = useDispatch();
  return (
    <MainWrapper>

      <div className={s.goods_filter}>
        <div className={s.wrap_filters}>
          <Filters />
        </div>
        <hr />
        <div className={s.goods}>
          <div className={s.categories}>
            <div className={s.wrap_categry}>
              <Category img="/img/category_1.jpg" name="Comic" />
              <Category img="/img/category_1.jpg" name="Polygonal" />
              <Category img="/img/category_1.jpg" name="Fantasy" />
              <Category img="/img/category_1.jpg" name="Magic Realism" />
              <Category img="/img/category_1.jpg" name="Realism" />
              <Category img="/img/category_1.jpg" name="Abstract" />
            </div>
          </div>
          
          <h5>Shop Product Range <button onClick={() => dispatch(setActiveFiltersMobile(true))} ><img src="/img/filters.svg" alt="" /></button> </h5>
          <div className={s.items}>
            <Item img="/img/octopus.jpg" id="0" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="1" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="2" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="3" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="4" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="5" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="6" name="Octopus" author="John Renny" price="20.95" />
            <Item img="/img/octopus.jpg" id="7" name="Octopus" author="John Renny" price="20.95" />
          </div>
        </div>
      </div>


      <div className={s.what}>
        <div className={s.title}>
          <h2>
            What is <img src="/img/logo_purple.svg" alt="" />
          </h2>
          <h3>What is <img src="/img/logo.svg" alt="" /></h3>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br />
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br />
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h5>Any questions? Ask!</h5>
        <a href="#">Go to Help Center</a>
      </div>
    </MainWrapper>
  )
}
