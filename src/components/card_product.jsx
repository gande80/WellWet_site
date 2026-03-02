import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import corm from '/korm.jpg'
import Accordion from "./Accordion";

export default function Card() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/card/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div className="p-20 text-center">Загрузка...</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className=" rounded-xl p-8 flex items-center justify-center">
              <img
                src={product.image_url || corm}
                alt={product.name}
                className="min-h-130 min-w-130 "
              />
            </div>

            <div>
              <h1 className="font-inter text-4xl font-medium mb-4">
                {product.full_title}
              </h1>
              <p className="font-inter font-regular text-xl text-gray-600 mb-6">{product.sub_title}</p>

              <p className="text-lg mb-8 font-inter font-regular">
                {product.description}
              </p>

              <Accordion
                title="Ключевые характеристики"
                answer={
                  <ul className="space-y-3 mb-8 text-sm rounded-xl text-color[#000000]">
                    <li>Содержимое:</li>

                    {product.features?.map((f, i) => (
                      <li key={i}>– {f}</li>
                    ))}
                  </ul>
                }
              />

              <Accordion title="О составе" answer={product.composition} />
              <Accordion title="Рекомендации по кормлению" answer={product.feeding_recommendations} />
              <Accordion title="Для кого подойдёт" answer={product.target_audience} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}