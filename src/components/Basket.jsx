import Input from './Input';
import { useCartStore } from '../store/useCartStore.js';

export default function Basket() {

    const {isOpen, closeCart} = useCartStore();

    if(!isOpen) return null;    

    return(
        <div className='fixed inset-0 z-50 flex justify-end'>
            <div className="absolute inset-0 bg-black/50" onClick={closeCart} />
            <div className='relative w-full max-w-md bg-white shadow-xl flex flex-col gap-3 transform transition-transform duration-300 p-4'>
                <div className='flex items-center gap-2'>
                    <img src="" alt="" />
                    <h1 className='font-bold text-xl'>Корзина</h1>
                    <span className='text-black/70'>(1 товар)</span>
                </div>

                <div>

                </div>

                <div className='flex gap-2'>
                    <Input placeholder="Введите промокод"></Input>
                    <button className='bg-black/90 text-white py-2 px-4 rounded-md cursor-pointer'>Применить</button>
                </div>

                <div className='text-sm flex flex-col gap-2 border-b border-b-gray-300 p-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-black/60 font-normal'>Подытог</h2>
                        <span>24 990 ₽</span>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='text-black/60 font-normal'>Доставка</h2>
                        <span className='text-blue-600'>Бесплатно</span>
                    </div>
                </div>

                <div className='flex justify-between text-lg font-semibold'>
                    <h2 className=''>Итого</h2>
                    <span className='text-blue-600'>24 990 ₽</span>
                </div>
            </div>
        </div>
    )
}