import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import Home from './views/Home'
import NotFound from './views/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './views/Contact'
import News from './views/News'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/news' element={<News />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
)
