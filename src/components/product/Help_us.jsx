// import Header from '../components/Header';
// import Footer from '../components/Footer';
import leaf from '/leaf.jpg'
import arrow from '/arrow-right.svg'
import Card_product from './card_product'





export default function Help_us() {
  return (
    
          
    <div className="min-h-screen flex flex-col">
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <div className=" rounded-[40px] flex flex-col md:flex-row">
        <div className="md:w-2/5 h-64 md:h-auto relative">
          <div className="absolute inset-0 flex items-end justify-center p-4">

            <div className="h-full flex items-start justify-start">
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
          <form className="space-y-8 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full  ">
              <div>

                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="px-12 py-4  rounded-2xl  bg-[#ECECEC] transition-colors"/>

              </div>


              <div>

                <input
                  type="text"
                  placeholder="E-mail или телефон"
                  className="px-12 py-4 rounded-2xl mx-17  transition-colors bg-[#F2F2F2]"/>
                  
              </div>
            </div>

            <div>

              <select className="px-12 py-4  rounded-2xl bg-[#F2F2F2] w-full focus:outline-none transition-colors appearance-none" >
                <option value="" disabled selected>Тип организации</option>
                <option value="Kom">Комерческая</option>
                <option value="Dont comm">Некомерческая</option>
              </select>

            </div>

            <div>
              
              <textarea placeholder="Ваш вопрос или комментарий" rows="3" className="w-full bg-[#F2F2F2] rounded-2xl focus:outline-none transition-colors resize-none"></textarea>
            
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
  





    </div>
  );
}