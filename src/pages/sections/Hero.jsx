import Button from "@components/Button"
import Arrow from "@assets/right-arrow-svgrepo-com.svg"
import Iphone from "@assets/iphone.jpg"
import Basket from '@assets/basket-svgrepo-com (1).svg';
import Star from "@assets/star-svgrepo-com.svg"
import { motion } from "framer-motion"
import { products } from "@data/products";
import { useCartStore } from "../../store/useCartStore";

export default function Hero() {
    const addItem = useCartStore((state) => state.addItem);
    const openCart = useCartStore((state) => state.openCart);
    const heroProduct = products.find((item) => item.id === 1);

    const handleAddToCart = () => {
        if (!heroProduct) return;
        addItem(heroProduct);
        openCart();
    };

    return(
        <>
            <section className="flex justify-between gap-2 m-5">
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 m-3">
                    {/* left content */}
                    <div className="flex flex-col gap-10">
                        <motion.div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-black/10 shadow-lg w-fit border-2 border-blue-600">
                            <span className="text-base">⚡</span>
                            <span>Хит продаж</span>
                        </motion.div>
                        <h1 className="text-5xl font-semibold">iPhone 15 Pro <br />
Титановый корпус, <br />A17 Pro чип</h1>
                        <p className="text-gray-700">Самый мощный iPhone с чипом A17 Pro, титановым корпусом и революционной камерой. <br /> Новый уровень мобильной фотографии и производительности.
                        </p>

                        <div className="flex items-center gap-10">
                            <div className="flex gap-2 items-end">
                                <span className="text-4xl font-bold">129 990 &#x20BD;</span><span className="text-2xl text-gray-700 line-through">149 990 &#x20BD;</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-1 text-lg font-semibold leading-none">
                                    <img src={Star} alt="star" className="h-4 w-4"/>
                                    4.9
                                </span>
                                <span className="text-gray-600 leading-none">(2847 отзывов)</span>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="primary" onClick={handleAddToCart}><img src={Basket} alt="basket" className="h-5 w-5"/> В корзину</Button>
                            <Button variant="admin" onClick={() => alert('Подробнее')}>Подробнее <img src={Arrow} alt="arrow" className="h-5 w-5"/></Button>
                        </div>
                        
                    </div>

                    {/* right content */}
                    <div className="ml-20 animate-soft-float">
                        <img src={Iphone} alt="iPhone 15 pro" />
                    </div>
                </div>
            </section>
        </>
    )
}