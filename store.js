import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import DarkSkyApi from 'dark-sky-api'

const initialState = {
  weather: null 
}

export const actionTypes = {
  FETCH: 'FETCH WEATHER',
  FETCHED: 'WEATHER FETCHED'
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return Object.assign({}, state, {
          count: state.count + 1
        }
      )
    case actionTypes.FETCHED:
      console.log(action)
      return Object.assign({}, state, {
        weather: action
      })
    default:
      return state
  }
}

export const fetchWeather = (val = 'Surabaya') => async (dispatch) => {
  let key = '11ed8b75747732f39fdabfa3501976a3'
  let res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${val},ID&appid=${key}&units=metric`)
  let data = await res.json()

  return dispatch({ type : actionTypes.FETCHED, data: data })
}

export const initStore = (initialState = initialState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
