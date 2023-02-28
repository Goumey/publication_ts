import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Posts from './pages/Posts';
import ViewPost from './pages/ViewPost';
function App() {
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path='/'  element={<Posts/>} />
    <Route path='/:id'  element={<ViewPost/>} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;
