import { combineReducers } from 'redux';
import { activeFiltersMobileReducer } from './activeFiltersMobile.js'
import { activeUserMobileReducer } from './activeUserMobileReducer.js'

const rootReducer = combineReducers({
    active_filters_mobile: activeFiltersMobileReducer,
    active_user_mobile: activeUserMobileReducer,
})

export default rootReducer;