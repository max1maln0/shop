import Logo from '@assets/ecology-leaves-svgrepo-com.svg';
import Basket from '@assets/basket-svgrepo-com.svg';
import { Link } from "react-router-dom";
import { useCartStore } from '../store/useCartStore.js';


export default function Header() {

    const openCart = useCartStore((state) => state.openCart);

    return(
        <header className='sticky top-0 z-50 flex justify-between items-center p-4 bg-[#eeeef0]/75 border-b border-gray-300 rounded-b-xl backdrop-blur-sm'>

            <div className='flex items-center gap-1'>
                <img src={Logo} alt="Logo" className='w-8 h-8 object-contain -translate-y-[3px]'/>
                <p className='m-0 text-2xl font-bold leading-tight'>GadgetGrove</p>
            </div>
            

            <nav className='flex items-center gap-6 text-sm font-medium text-gray-600'>
                <Link to="/" className='relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-black after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 active:after:scale-x-100 hover:text-gray-800'>Главная</Link>
                <Link to="/catalog" className='relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-black after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 active:after:scale-x-100 hover:text-gray-800'>Каталог</Link>
                <Link to="/about" className='relative pb-1 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-black after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 active:after:scale-x-100 hover:text-gray-800'>О нас</Link>
            </nav>

            

            <button className='rounded-2xl p-2 hover:bg-gray-300' onClick={openCart}>
                <img src={Basket} alt="Basket" className='w-5 h-5'/>
            </button>
            
        </header>
    )
}