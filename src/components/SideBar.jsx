export default function SideBar({ categories, activeCategory, onCategoryChange }) {
    return(
        <aside className="bg-white/35 rounded-2xl p-4 w-60 shrink-0 h-fit sticky top-20 flex flex-col gap-3 ">
            <h2 className="text-xl font-semibold">Фильтры</h2>
            <span className="text-base font-semibold">Категории</span>

            <nav className="flex flex-col gap-2">
                {categories.map((category) => {
                    const isActive = activeCategory === category.id;
                    const icon = category.icon;

                    return (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => onCategoryChange(category.id)}
                            aria-pressed={isActive}
                            className={`flex items-center rounded-xl p-2 text-left transition-colors cursor-pointer ${
                                isActive
                                    ? "bg-blue-600 text-white"
                                    : "hover:bg-gray-400/30 text-gray-800"
                            }`}
                        >
                            {icon ? (
                                <img src={icon} alt={category.label} className="w-5 h-5 mr-2" />
                            ) : null}
                            {category.label}
                        </button>
                    );
                })}
            </nav>
        </aside>
    )
}