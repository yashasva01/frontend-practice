import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './pages/BlogPage/index';
import Error from './pages/Error/index';
import PageNotFound from './pages/PageNotFound/index';
import { BlogPostProvider } from './contexts/blogPostContext';

//import pages

//const root = ReactDom.createRoot(document.getElementById('root') as HTMLElement);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <BlogPostProvider>
              <BlogPage />
            </BlogPostProvider>
          }
        />
        <Route path='/error/:statusCode?' element={<Error />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
