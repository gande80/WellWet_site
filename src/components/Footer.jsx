import Line from "./../assets/Line1.svg"
export default function Footer(){
    return(
        
        <footer className=" bg-[#F2F2F2] py-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                <div>
                <h3 className="font-test text-black textl-xl mb-3">WellWet</h3>
                <p className="text-sm">Holistic-корм<br/> для собак и кошек. Натуральный состав и контроль качества на каждом этапе производства.</p>
                </div>

                <div className="flex justify-end">
                <ul className="text-sm space-y=4 justify-end">
                    <li className="text-black mb-4">Разделы</li>
                    <li><a href="*" className=" text-black">Продукты </a></li>
                    <li><a href="*" className=" text-black">О корме </a></li>
                    <li><a href="*" className=" text-black">Состав </a></li>
                    <li><a href="*" className=" text-black">Контакты </a></li>
                    <li><a href="*" className=" text-black">Партнёрам </a></li>
                </ul>
                </div>

            </div>
            <div className="flex justify-center py-5">
            <img src={Line} ></img>
            </div>
        </footer>
        

    );
}