import corm from './../assets/korm.jpg'

import Accordion from "./Accordion";

export default function Card() {
  return (

    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">

            <div className=" rounded-xl p-8 flex items-center justify-center">
              <img
                src={corm}
                alt="Пакет корма"
                className="min-h-130 min-w-130 "
              />
            </div>

            <div>
              <h1 className="font-inter text-4xl font-medium mb-4">
                WellWet Holistic Sensitive Low-Grain Veal
              </h1>
              <p className="font-inter font-regular text-xl text-gray-600 mb-6">Для взрослых собак</p>

              <p className="text-lg mb-8 font-inter font-regular">
                Holistic-корм для собак с чувствительным пищеварением.Натуральный состав, минимальное содержание зерновых и контроль качества на каждом этапе производства.
              </p>







    
        <Accordion
        title="Ключевые характеристики"
    
         answer={<ul className="space-y-3 mb-8 text-sm  rounded-xl text-color[#000000]">
                            <li>Содержимое:</li>
                            <li>– Натуральные источники животного белка</li>
                            <li>– Low-grain рецепт</li>
                            <li>– Без кукурузы и пшеницы</li>
                            <li>– Без искусственных красителей и ароматизаторов</li>
                            <li>– Подходит для ежедневного питания</li>
                        </ul>}


      />

       <Accordion title="О составе"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />

        <Accordion title="Рекомендации по кормлению"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />

        <Accordion title="Для кого подойдёт"
        answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />
   

                        

                </div>
            </div>
          </div>
        </div>
        </div>




      )
}