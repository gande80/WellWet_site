


import React from 'react'


const HeaderComponent = () => {
  return (

 <header className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center'>
          <a href='/Catalog' className='font-test text-4xl'>WellWet</a>

          <div className='md:flex items-center gap-10'>
            <div className='sm:block border border-[#F3F4F6] bg-[#F3F4F6] rounded-xl '>
               <button className=  'px-7 py-3 text-black hover:text-wellwet-green'>
                Войти
              </button>
              </div>
            <div className='flex items-center gap-5'>
            <div className='px-7 py-3 border border-[#06B2D3] bg-[#06B2D3] rounded-xl'>
              <button className='text-white hover:text-wellwet-green'>
              Регистрация
              </button>
              </div>
          </div>
        </div>
    </div>
  </header>
  
  )
}


export default HeaderComponent;
