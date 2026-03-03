import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Catalog() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filterByCategory = (catId) => {
  setActiveCategory(catId);
  
  if (catId === 'all') {
    setFilteredProducts(products);
  } else {
    const filtered = products.filter(p => {
      return Number(p.category_id) === Number(catId);
    });
    setFilteredProducts(filtered);
  }
};
  // const filterByCategory = (catId) => {
  //   setActiveCategory(catId);
  //   if (catId === 'all') {
  //     setFilteredProducts(products);
  //   } else {
  //     setFilteredProducts(products.filter(p => p.category_id === catId));
      
  //   }
  // };

  if (loading) return null;

  return (
    <div className="min-h-screen bg-white font-sans text-[#333] ">
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Каталог товаров</h1>
        
        <div className="flex gap-3 mb-10 ">
          <button 
            onClick={() => filterByCategory('all')}
            className={activeCategory === 'all' 
              ? "px-5 py-2 bg-[#e0f7fa] text-[#00838f] rounded-full text-[13px] font-bold" 
              : "px-5 py-2 bg-gray-100 text-gray-400 rounded-full text-[13px]"}
          >
            Все корма
          </button>
          <button 
            onClick={() => filterByCategory(2)} 
            className={activeCategory === 2 
              ? "px-5 py-2 bg-[#e0f7fa] text-[#00838f] rounded-full text-[13px] font-bold" 
              : "px-5 py-2 bg-gray-100 text-gray-400 rounded-full text-[13px]"}
          >
            Для кошек
          </button>
          <button 
            onClick={() => filterByCategory(1)}
            className={activeCategory === 1 
              ? "px-5 py-2 bg-[#e0f7fa] text-[#00838f] rounded-full text-[13px] font-bold" 
              : "px-5 py-2 bg-gray-100 text-gray-400 rounded-full text-[13px]"}
          >
            Для собак
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 ">
          {filteredProducts.map((item) => (
            <CatalogCard key={item.id} product={item} />
          ))}
        </div>
      </main>
    </div>
  );
}

export function CatalogCard({ product }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white rounded-sm flex flex-col items-center p-2 justify-between" >
      <div className="relative w-full mb-3 bg-[#f8f8f8] flex items-center justify-center rounded-md border border-gray-50">
        <img src={product.image_url} alt="" className="h-[85%] object-contain" />
      </div>
      <div className="w-full text-left">
        <h3 className="text-[#333] text-[14px] font-bold">{product.name}</h3>
        <p className="text-gray-400 text-[11px] mt-1 ">{product.short_description}</p>
        <button 
          onClick={() => navigate(`/product/${product.id}`)} 
          className="w-full mt-4 bg-[#33c9db] text-white py-2 rounded-md text-[13px] font-medium"
        >
          Смотреть
        </button>
      </div>
    </div>
  );
}

export default Catalog;