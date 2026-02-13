import Input from './Input';
import { useCartStore } from '../store/useCartStore.js';
import { useState } from 'react';
import BasketIcon from '@assets/basket-svgrepo-com.svg';

export default function Basket() {
    const { isOpen, closeCart, items, increaseQty, decreaseQty, removeItem } = useCartStore();
    const [promo, setPromo] = useState('');

    const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const formattedSubtotal = subtotal.toLocaleString('ru-RU');

    const getItemLabel = (count) => {
        if (count % 10 === 1 && count % 100 !== 11) return 'товар';
        if ([2, 3, 4].includes(count % 10) && ![12, 13, 14].includes(count % 100)) return 'товара';
        return 'товаров';
    };

    if(!isOpen) return null;    

    return(
        <div className='fixed inset-0 z-50 flex justify-end'>
            <div className="absolute inset-0 bg-black/50" onClick={closeCart} />
            <div className='relative w-full max-w-md bg-white shadow-xl flex flex-col gap-3 transform transition-transform duration-300 p-4'>
                <div className='flex items-center gap-2'>
                    <img src={BasketIcon} alt="Basket" className='h-5 w-5' />
                    <h1 className='font-bold text-xl'>Корзина</h1>
                    <span className='text-black/70'>({totalQty} {getItemLabel(totalQty)})</span>
                </div>

                <div className='flex flex-col gap-3 max-h-[45vh] overflow-auto pr-1'>
                    {items.length === 0 && (
                        <div className='py-8 text-center text-gray-500'>Корзина пуста</div>
                    )}
                    {items.map((item) => (
                        <div key={item.id} className='flex gap-3 rounded-xl border border-gray-200 p-3'>
                            <img
                                src={item.image}
                                alt={item.title}
                                className='h-20 w-20 rounded-lg object-cover'
                            />
                            <div className='flex flex-1 flex-col gap-1'>
                                <span className='text-xs text-gray-500'>{item.brand}</span>
                                <p className='text-sm font-semibold text-gray-900'>{item.title}</p>
                                <p className='text-xs text-gray-600'>{item.desc}</p>
                                <div className='mt-2 flex items-center justify-between'>
                                    <span className='text-base font-semibold text-blue-700'>
                                        {item.price.toLocaleString('ru-RU')} ₽
                                    </span>
                                    <div className='flex items-center gap-2'>
                                        <button
                                            className='h-7 w-7 rounded-md border border-gray-300 text-sm hover:bg-gray-100'
                                            onClick={() => decreaseQty(item.id)}
                                            aria-label='Уменьшить количество'
                                        >
                                            −
                                        </button>
                                        <span className='min-w-[20px] text-center text-sm font-semibold'>
                                            {item.quantity}
                                        </span>
                                        <button
                                            className='h-7 w-7 rounded-md border border-gray-300 text-sm hover:bg-gray-100'
                                            onClick={() => increaseQty(item.id)}
                                            aria-label='Увеличить количество'
                                        >
                                            +
                                        </button>
                                        <button
                                            className='text-xs text-red-600 hover:text-red-700'
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Удалить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex gap-2'>
                    <Input placeholder="Введите промокод" value={promo} onChange={setPromo}></Input>
                    <button className='bg-black/90 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-800'>Применить</button>
                </div>

                <div className='text-sm flex flex-col gap-2 border-b border-b-gray-300 p-2'>
                    <div className='flex justify-between'>
                        <h2 className='text-black/60 font-normal'>Подытог</h2>
                        <span>{formattedSubtotal} ₽</span>
                    </div>
                    <div className='flex justify-between'>
                        <h2 className='text-black/60 font-normal'>Доставка</h2>
                        <span className='text-blue-600'>Бесплатно</span>
                    </div>
                </div>

                <div className='flex justify-between text-lg font-semibold'>
                    <h2 className=''>Итого</h2>
                    <span className='text-blue-600'>{formattedSubtotal} ₽</span>
                </div>
            </div>
        </div>
    )
}