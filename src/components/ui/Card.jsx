import Button from '../ButtonPop'
import Basket from "../../assets/basket-svgrepo-com (1).svg";

export default function Card({ product }) {
    return(
        <>
        <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-2">
            <div className="h-80 w-full">
                <img src={product.image} alt={product.title} className="h-full w-full object-cover"/>
            </div>

            <div className="flex items-center gap-2 px-4 pt-3">
                {product.colors?.map((color) => (
                    <span key={color} className="h-3 w-3 rounded-full border" style={{ backgroundColor: color }} />
                ))}
            </div>

            <div className="flex flex-1 flex-col gap-1 px-4 pt-3 pb-4">
                <span className="text-xs tracking-[0.15em] text-gray-500">{product.brand}</span>
                <p className="text-base font-semibold text-blue-700">{product.title}</p>
                <p className="text-sm text-gray-700">{product.desc}</p>

                <div className="mt-2 flex items-center gap-2 text-sm text-gray-800">
                    <span className="text-yellow-500">★</span>
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-gray-500">({product.reviews})</span>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="text-2xl font-bold text-blue-800">{product.price} ₽</span>
                    <Button variant="cards">
                        <img src={Basket} alt="basket" className="h-4 w-4"/> В корзину
                    </Button>
                </div>
            </div>
        </div>
        </>
    )
}