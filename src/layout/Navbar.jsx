import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ArticleCard from '../pages/ArticleCard';
import CreateArticle from '../pages/CreateArticle';
import Comment from '../pages/Comment';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ArticleDetail from '../pages/ArticleDetail';

function Navbar() {
  return (
    <div>
      <nav className="bg-gradient-to-r z from-purple-500 via-pink-500 to-red-500 p-4 shadow-xl">
        <div className="container mx-auto flex justify-center items-center">
          <ul className="flex gap-20 space-x-8">
            {[ 
              { to: "/", label: "Home" },
              { to: "/createart", label: "New Article" },
              { to: "/comments", label: "Comments" },
              { to: "/register", label: "Register" },
              { to: "/login", label: "Login" },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-white font-medium px-4 py-2 rounded-lg bg-opacity-50 hover:bg-opacity-80 bg-black transition-all duration-300 transform hover:scale-105 shadow-md"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="container mx-auto mt-12 p-4">
        <Routes>
          <Route path="/" element={<ArticleCard />} />
          <Route path="/createart" element={<CreateArticle />} />
          <Route path="/details/:id" element={<ArticleDetail />} />
          <Route path="/comments" element={<Comment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;
