import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home, Category, Article } from '../pages';

export const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category' element={<Category />} />
        <Route path='article' element={<Article />} />
    </Routes>
  )
}
