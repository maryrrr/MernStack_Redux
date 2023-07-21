import React from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Home from './views/Home/Home'
import TheHeader from './components/TheHeader/TheHeader'
import Profile from './views/Profile/Profile'
import PostDetail from './components/Posts/PostDetail/PostDetail'
import Search from './components/Search/Search'
import NewPost from './components/Posts/NewPost/NewPost'
import Footer from './components/Footer/Footer'
import PrivateZone from "./guards/PrivateZone"
import AdminZone from './guards/AdminZone'
import Admin from './views/Admin/Admin'
import NotFound from './views/NotFound/NotFound'


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <TheHeader />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={ <Login />} />
          <Route path ="/profile" element=
            {<PrivateZone>
            <Profile />
            </PrivateZone>} 
            />
          <Route path="/admin" element={ <AdminZone><Admin /></AdminZone> }/>
          <Route path="post/:id" element={<PostDetail />} />
          <Route path="/search/:postName" element={<Search />} />
          <Route path="/newPost" element={<NewPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
