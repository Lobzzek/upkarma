let initialState = {
    item: false,
}
export const activeFiltersMobileReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_FILTERS_MOBILE") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}