import Logo from '@assets/ecology-leaves-svgrepo-com.svg';
import Inst from '@assets/footer/insta.svg';
import Tg from '@assets/footer/tg.svg';

export default function Footer() {
    return(
        <footer className='footer rounded-t-3xl p-5'>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-3 items-start'>
                    <div className='flex items-center gap-1'>
                        <img src={Logo} alt="Logo" className='w-8 h-8 object-contain -translate-y-[3px]'/>
                        <p className='m-0 text-xl font-bold leading-tight'>GadgetGrove</p>
                    </div>

                    <p className='text-sm'>Магазин электроники с душой.<br /> Только качественные гаджеты и честные цены.</p>

                    <div className='flex gap-3'>
                        <a href="#" className='bg-gray-400/30 rounded-3xl p-2 hover:bg-blue-400'><img src={Inst} alt="Instagram" className='w-5 h-5'/></a>
                        <a href="#" className='bg-gray-400/30 rounded-3xl p-2 hover:bg-blue-400'><img src={Tg} alt="Telegram" className='w-5 h-5'/></a>
                    </div>
                </div>

                <div className='text-sm'>
                    <h2 className='font-semibold mb-5'>Навигация</h2>
                    <ul className='flex flex-col gap-2.5 font-normal text-gray-700'>
                        <li><a href="#" className='hover:text-blue-700'>Главная</a></li>
                        <li><a href="#" className='hover:text-blue-700'>Каталог</a></li>
                        <li><a href="#" className='hover:text-blue-700'>О нас</a></li>
                    </ul>
                </div>

                <div className='text-sm'>
                    <h2 className='font-semibold mb-5'>Категории</h2>
                    <ul className='flex flex-col gap-2.5 font-normal text-gray-700'>
                        <li><a href="#" className='hover:text-blue-700'>Смартфоны</a></li>
                        <li><a href="#" className='hover:text-blue-700'>Наушники</a></li>
                        <li><a href="#" className='hover:text-blue-700'>Аксессуары</a></li>
                        <li><a href="#" className='hover:text-blue-700'>Умные часы</a></li>
                    </ul>
                </div>

                <div className='text-sm'>
                    <h2 className='font-semibold mb-5'>Контакты</h2>
                    <ul className='flex flex-col gap-2.5 font-normal text-gray-700'>
                        <li><img src="" alt="" /><span>+7 (800) 555-35-35</span></li>
                        <li><img src="" alt="" /><span>info@gadgetgrove.ru</span></li>
                        <li><img src="" alt="" /><span>Москва, ул. Примерная, д. 42</span></li>
                    </ul>
                </div>
            </div>

            <div className="flex w-full flex-col gap-4 border-t border-black/15 pt-6 text-black/45 sm:flex-row sm:items-center sm:justify-between mt-5 text-sm">
                <p>© 2026 GadgetGrove. Все права защищены.</p>

                <div className="flex gap-1 font-normal">
                    <a href="#">Политика</a>
                    <span>•</span>
                    <a href="#">Terms</a>
                </div>
            </div>
        </footer>
    )
}