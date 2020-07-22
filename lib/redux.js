import { useMemo } from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'

let store

const initialState = {
    sended: false,
    sending: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HANDLE_SENDED':
            return {
                ...state,
                sended: !state.payload
            }
        case 'HANDLE_SENDING':
            return {
                ...state,
                sending: !state.payload,
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    utils: reducer,
    form: formReducer
})

function initStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}

export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}