import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Home from './views/Home/Home';
import TheHeader from './components/TheHeader/TheHeader';
import Profile from './views/Profile/Profile';
import PostDetail from './components/Posts/PostDetail/PostDetail';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <TheHeader />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path ="/profile" element={<Profile />} />
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
