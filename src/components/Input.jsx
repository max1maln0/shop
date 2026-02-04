
import { Search } from 'lucide-react';

export default function Input() {
    return(
        <div className='border-2 border-gray-400/30 flex gap-3 p-2 w-full items-center focus-within:border-blue-500'>
            <Search className='h-5 w-5'/>
            <input type="text" placeholder='Поиск товаров...' className='w-full outline-none focus:border-blue-600'/>
        </div>
    )
}