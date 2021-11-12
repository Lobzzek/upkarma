import React from 'react'
import Filters from '../Filters.jsx'
import s from '../../styles/MainWrapper/FiltersMobile.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveFiltersMobile } from '../../Redux/actions/activeFiltersMobile.js'

const FiltersMobile = () => {
    const dispatch = useDispatch();
    const active_filters_mobile = useSelector(state => state.active_filters_mobile);

    const filters_mobile = React.useRef()
    const fon = React.useRef()
    const close_all = React.useRef()
    const cnt = React.useRef()

    React.useEffect(() => {
        if (active_filters_mobile.item){
            filters_mobile.current.style.display = "block";
            setTimeout(() => {
                fon.current.style.opacity = "1"
                close_all.current.style.left = "78vw"
                cnt.current.style.left = "0"
            }, 200);
        }else{
            fon.current.style.opacity = "0"
            close_all.current.style.left = "-90%"
            cnt.current.style.left = "-90%"
            setTimeout(() => {
                filters_mobile.current.style.display = "none";
            }, 900);
        }
    }, [active_filters_mobile])
    return (
        <div className={s.filters_mobile} ref={filters_mobile}>
            <div className={s.fon} onClick={() => dispatch(setActiveFiltersMobile(false))} ref={fon}></div>
            <button className={s.close} onClick={() => dispatch(setActiveFiltersMobile(false))} ref={close_all}>
                &#x2715;
            </button>
            <div className={s.cnt} ref={cnt}>
                <Filters />
            </div>
        </div>
    )
}

export default FiltersMobile
