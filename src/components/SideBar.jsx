import Phone from '../assets/categories/phone.svg';
import Plug from '../assets/categories/plug.svg';
import Pods from '../assets/categories/pods.svg';
import Watch from '../assets/categories/watch.svg';

export default function SideBar() {
    return(
        <aside className="bg-white/35 rounded-2xl p-4 w-60 shrink-0 h-fit sticky top-20 flex flex-col gap-3 ">
            <h2 className="text-xl font-semibold">Фильтры</h2>
            <span className="text-base font-semibold">Категории</span>

            <nav className="flex flex-col gap-2">
                <a href="#" className="rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white">Все товары</a>
                <a href="#" className="flex items-center rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white"><img src={Phone} alt="Смартфоны" className=" w-5 h-5 mr-2"/>Смартфоны</a>
                <a href="#" className="flex items-center rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white"><img src={Pods} alt="Наушники" className=" w-5 h-5 mr-2"/>Наушники</a>
                <a href="#" className="flex items-center rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white"><img src={Watch} alt="Часы" className=" w-5 h-5 mr-2"/>Часы</a>
                <a href="#" className="flex items-center rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white"><img src={Plug} alt="Аксессуары" className=" w-5 h-5 mr-2"/>Аксессуары</a>
            </nav>
        </aside>
    )
}