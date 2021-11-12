import React from 'react'
import s from '../styles/Filters.module.css'

const Filters = () => {
    return (
        <div className={s.filters}>
            <div>
                <h5><img src="/img/filters.svg" alt="" />Filters</h5>
            </div>
            <div className={s.category}>
                <h5><img src="/img/category_filters.svg" alt="" />Category</h5>

                <div>
                    <input type="radio" id="all" defaultChecked />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="checkbox" id="hand-made" defaultChecked />
                    <label htmlFor="hand-made">Hand-made</label>
                </div>
                <div>
                    <input type="checkbox" id="difital" />
                    <label htmlFor="difital">Digital Graphic</label>
                </div>
                <div>
                    <input type="checkbox" id="famous" />
                    <label htmlFor="famous">Famous Artists</label>
                </div>
            </div>
            <div className={s.dispay}>
                <h5><img src="/img/display_filters.svg" alt="" />Dispaly Options</h5>
                <div>
                    <button><img src="/img/display_1.svg" alt="" /></button>
                    <button><img src="/img/display_2.svg" alt="" /></button>
                </div>
            </div>
            <div className={s.date}>
                <h5><img src="/img/date_filters.svg" alt="" />Publish Date</h5>
                <select>
                    <option value="">Any</option>
                    <option value="">Yesterday</option>
                    <option value="">Lorem</option>
                    <option value="">Lorem1</option>
                    <option value="">Lorem2</option>
                </select>
            </div>
            <div className={s.orientation}>
                <h5><img src="/img/orientation_filters.svg" alt="" />Orientation</h5>
                <div>
                    <input type="radio" id="all" defaultChecked />
                    <label htmlFor="all">All</label>
                </div>
                <div>
                    <input type="checkbox" id="horizontal" />
                    <label htmlFor="horizontal">Horizontal</label>
                </div>
                <div>
                    <input type="checkbox" id="vertical"/>
                    <label htmlFor="vertical">Vertival</label>
                </div>
                <div>
                    <input type="checkbox" id="square" />
                    <label htmlFor="square">Square</label>
                </div>
            </div>
            <div className={s.colors}>
                <h5><img src="/img/colors_filters.svg" alt="" />Colors</h5>
                <div>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                    <button></button>
                </div>
            </div>
            <div className={s.price}>
                <h5><img src="/img/dollar_filters.svg" alt="" />Price</h5>
                    <div>
                        <input type="checkbox" defaultChecked id="low_price" />
                        <label htmlFor="low_price">$</label>
                    </div>
                    <div>
                    <input type="checkbox" id="middle_price" />
                        <label htmlFor="middle_price">$$</label>
                    </div>
                    <div>
                    <input type="checkbox" id="high_price" />
                        <label htmlFor="high_price">$$$</label>
                    </div>
            </div>
        </div>
    )
}

export default Filters
