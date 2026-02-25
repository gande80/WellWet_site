import Card_photo from './../assets/card.jpg'


function catalog() {
  const products = Array(8).fill(null);

  return (

    <div className="min-h-screen bg-white font-sans text-[#333]">
     

      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        
        <div className="flex gap-3 mb-10">
          <button className="px-5 py-2 bg-[#e0f7fa] text-[#00838f] rounded-full text-[13px] font-bold">Все корма</button>
          <button className="px-5 py-2 bg-gray-100 text-gray-400 rounded-full text-[13px] hover:bg-gray-200 transition-colors">Для кошек</button>
          <button className="px-5 py-2 bg-gray-100 text-gray-400 rounded-full text-[13px] hover:bg-gray-200 transition-colors">Для собак</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((_, i) => (
            <CatalogCard key={i} />
          ))}
        </div>
      </main>


    </div>
  );
}

export function CatalogCard() {
  return (
    <div className="bg-white rounded-sm flex flex-col items-center p-2 group">
      <div className="relative w-full mb-3 bg-[#f8f8f8] flex items-center justify-center rounded-md border border-gray-50">
        <img 
          src= {Card_photo} 
          alt="WellWet" 
          className="h-[85%] object-contain"
        />
      </div>
      <div className="w-full text-left">
        <h3 className="text-[#333] text-[14px] font-bold">WellWet Holistic</h3>
        <p className="text-gray-400 text-[11px] mt-1 ">Для собак с чувствительным пищеварением</p>
        <button className="w-full mt-4 bg-[#33c9db]  text-white py-2 rounded-md text-[13px] font-medium ">
          Смотреть
        </button>
      </div>
    </div>
  );
}
export default catalog;