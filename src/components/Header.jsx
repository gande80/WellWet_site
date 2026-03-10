


import React from 'react'

import { useNavigate, Link } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')); 

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="flex justify-between items-center p-4 ">
      <Link to="/" className="font-test text-4xl">WellWet</Link>
      
      <div className="flex gap-4 items-center">
        {user ? (
          <>
            <span className="text-[13px] text-gray-500">{user.email}</span>
            {user.isAdmin && (
              <Link to="/admin" className="text-[13px] font-bold text-[#00838f]">Админ</Link>
            )}
            <button 
              onClick={handleLogout}
              className="px-7 py-3 text-black border-gray-200  hover:text-wellwet-green rounded-xl hover:bg-[#f3f4f6a8]"
            >
              Выйти
            </button>
          </>
        ) : (
          <div className='md:flex items-center gap-10 '>
            <Link to="/auth" className="px-7 py-3 text-black border-[#F3F4F6] bg-[#F3F4F6]  hover:text-wellwet-green rounded-xl hover:bg-[#5084eca8]">Войти</Link>
            <Link to="/auth" className="text-black border-[#F3F4F6] bg-[#06B2D3] hover:bg-[#067288]  rounded-xl px-7 py-3 hover:text-wellwet-green">Регистрация</Link>
          </div>
          
        )}
      </div>
    </header>
  );
}


