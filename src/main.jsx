import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/Content.jsx'
import { createStore } from 'redux'
import NavReducer from './components/NavReducer.jsx'
// var store=createStore(NavReducer)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* <Content store={store}/> */}
  </StrictMode>,
)
// customer();
// store.subscribe(customer)

