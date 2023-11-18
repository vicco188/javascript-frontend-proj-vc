import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Home from './views/Home';
import NotFound from './views/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './views/Contact';
import News from './views/News';
import Articles from './views/Articles';
import ScrollToTop from './components/reusables/ScrollToTop';
import { NewsProvider } from './contexts/NewsContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="wrapper">
      <BrowserRouter>
        <NewsProvider>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/news' element={<News />} />
            <Route path='/articles/:id' element={<Articles />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </NewsProvider>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
