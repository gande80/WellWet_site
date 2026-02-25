// import Header from '../components/Header';
// import Footer from '../components/Footer';
import corm from './../assets/korm.jpg'
import leaf from './../assets/leaf.jpg'
import hand from './../assets/paw-print.svg'
import arrow from './../assets/arrow-right.svg'

export default function CardPage() {
  return (
    <div className="min-h-screen flex flex-col">


      <main className="flex-1">
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
              <div className='px-4'>
                    <div className='rounded-xl bg-[#06B2D3] flex justify-between my-4 px-4 py-1'>
                        <ul className="space-y-3 mb-8 text-sm">
                            <li className='text-xl'>Ключевые характеристики</li>
                            <li>Содержимое:</li>
                            <li>– Натуральные источники животного белка</li>
                            <li>– Low-grain рецепт</li>
                            <li>– Без кукурузы и пшеницы</li>
                            <li>– Без искусственных красителей и ароматизаторов</li>
                            <li>– Подходит для ежедневного питания</li>
                        </ul>
                        <img src={hand} className='items-start'></img>
                        </div>

                        <div className='rounded-xl bg-[#06B2D3] flex justify-between text-center my-4 px-4 py-3'>
                            <ul className="text-xl ">
                            <li>О составе</li>
                            </ul>
                            <img src={hand} className='items-start'></img>
                        </div>
                        <div className='rounded-xl bg-[#06B2D3] flex justify-between text-center my-4 px-4 py-3'>
                            <ul className="text-xl ">
                            <li>Рекомендации по кормлению</li>
                            </ul>
                            <img src={hand} className='items-start'></img>
                        </div>
                        <div className='rounded-xl bg-[#06B2D3] flex justify-between text-center my-4 px-4 py-3'>
                            <ul className="text-xl ">
                            <li>Для кого подойдёт</li>
                            </ul>
                            <img src={hand} className='items-start'></img>
                        </div>
                </div>
            </div>
          </div>
        </div>

    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <div className=" rounded-[40px] flex flex-col md:flex-row">
        <div className="md:w-2/5 h-64 md:h-auto relative">
          <div className="absolute inset-0 flex items-end justify-center p-4">

            <div className=" flex items-center justify-center">
              <img src={leaf}></img>
            </div>
          </div>
        </div>

        <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Остались вопросы?
          </h2>
          <p className="text-slate-600 mb-10">
            Мы поможем разобраться с выбором корма и ответим на вопросы о продукции WellWet.
          </p>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full  border-b bg-[#ECECEC] transition-colors"/>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="E-mail или телефон"
                  className="w-full border-b  transition-colors bg-[#F2F2F2]"/>
              </div>
            </div>

            <div>
              <select className="w-full bg-[#F2F2F2] border-b focus:outline-none transition-colors appearance-none" >
                <option value="" disabled selected>Тип организации</option>
                <option value="Kom">Комерческая</option>
                <option value="Dont comm">Некомерческая</option>
              </select>
            </div>

            <div>
              <textarea placeholder="Ваш вопрос или комментарий" rows="3" className="w-full bg-[#F2F2F2] border-b focus:outline-none transition-colors resize-none"></textarea>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-5 h-5 bg-[#F2F2F2] rounded" />
              <label className="ml-3 text-sm cursor-pointer">
                Согласен на обработку персональных данных
              </label>
            </div>

            <button
              type="submit"
              className=" bg-[#FDD5E9] text-white px-8 py-3 rounded-full font-bold items-center gap-2 shadow-lg flex flex-row">
                <img src={arrow} className='flex items-end order-1'></img>
                Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  
</main>




    </div>
  );
}