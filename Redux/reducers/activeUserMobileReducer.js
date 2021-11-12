let initialState = {
    item: false,
}
export const activeUserMobileReducer = (state = initialState, action) => {
    if (action.type === "ACTIVE_USER_MOBILE") {
        return {
            ...state,
            item: action.payload,
        }
    }
    return state;
}