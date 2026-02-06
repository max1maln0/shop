

export default function History() {
    return(
        <section className="flex justify-between m-20 p-4">
            {/*left*/}
            <div className="max-w-[600px] flex flex-col gap-5">
                <h2 className="text-3xl font-bold">Наша история</h2>
                <p className="text-gray-500">GadgetGrove начался как небольшой проект друзей, увлечённых технологиями. Мы хотели создать магазин, в котором сами бы хотели покупать — с честными ценами, быстрой доставкой и настоящей заботой о клиентах.</p>
                <p className="text-gray-500">Сегодня мы работаем с лучшими поставщиками и предлагаем только проверенную технику от ведущих мировых брендов. Каждый товар в нашем каталоге прошёл тщательный отбор.</p>
            </div>

            {/*right*/}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/40 rounded-2xl px-20 py-6 flex flex-col items-center">
                    <h3 className="text-blue-700 font-bold text-3xl">10K +</h3>
                    <span>Довольных клиентов</span>
                </div>
                <div className="bg-white/40 rounded-2xl px-20 py-6 flex flex-col items-center">
                    <h3 className="text-blue-700 font-bold text-3xl">500 +</h3>
                    <span>Товаров в каталоге</span>
                </div>
                <div className="bg-white/40 rounded-2xl px-20 py-6 flex flex-col items-center">
                    <h3 className="text-blue-700 font-bold text-3xl">4.9</h3>
                    <span>Средний рейтинг</span>
                </div>
                <div className="bg-white/40 rounded-2xl px-20 py-6 flex flex-col items-center">
                    <h3 className="text-blue-700 font-bold text-3xl">24/7</h3>
                    <span>Поддержка клиентов</span>
                </div>

                
            </div>
        </section>
    )
}