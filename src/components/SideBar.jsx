
export default function SideBar() {
    return(
        <aside className="bg-white/35 rounded-2xl p-4 w-60 shrink-0 h-fit sticky top-20 flex flex-col gap-3 ">
            <h2 className="text-xl font-semibold">Фильтры</h2>
            <span className="text-base font-semibold">Категории</span>

            <nav className="flex flex-col gap-2">
                <a href="#" className=" rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white">Все товары</a>
                <a href="#" className=" rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white">Смартфоны</a>
                <a href="#" className=" rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white">Наушники</a>
                <a href="#" className=" rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white">Часы</a>
                <a href="#" className=" rounded-xl p-2 hover:bg-gray-400/30 active:bg-blue-600 active:text-white">Аксессуары</a>
            </nav>
        </aside>
    )
}