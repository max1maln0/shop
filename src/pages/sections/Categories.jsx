import Card from "@components/ui/CardCat";
import Phone from "@assets/categories/phone.svg";
import Pods from "@assets/categories/pods.svg";
import Watch from "@assets/categories/watch.svg";
import Plug from "@assets/categories/plug.svg";
import Button from "@components/Button";
import Arrow from "@assets/right-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";


export default function Categories() {
    return(
        <>
        <section className="flex flex-col items-center gap-3">
            <h2 className="section-title">Выберите категорию</h2>
            <p className="text-gray-700">От флагманских смартфонов до полезных аксессуаров — найдите идеальный гаджет для себя</p>

            
            <div className="grid grid-cols-1 gap-5 m-6 p-3 sm:grid-cols-2 md:grid-cols-4">
                <Link to="/catalog?category=phones">
                    <Card variant="default">
                        <img src={Phone} alt="phone" className="h-30 w-30"/>
                        <h3 className="text-[1.25rem] font-medium">Смартфоны</h3>
                        <p>Флагманы и хиты продаж.</p>
                        <Button variant="look">Смотреть <img src={Arrow} alt="arrow" className="h-5 w-5"/></Button>
                    </Card>
                </Link>

                <Link to="/catalog?category=headphones">
                    <Card variant="default">
                        <img src={Pods} alt="pods" className="h-30 w-30"/>
                        <h3 className="text-[1.25rem] font-medium">Наушники</h3>
                        <p>Беспроводной звук высокого качества.</p>
                        <Button variant="look">Смотреть <img src={Arrow} alt="arrow" className="h-5 w-5"/></Button>
                    </Card>
                </Link>

                <Link to="/catalog?category=watches">
                    <Card variant="default">
                        <img src={Watch} alt="watch" className="h-30 w-30"/>
                        <h3 className="text-[1.25rem] font-medium">Умные часы</h3>
                        <p>Умные гаджеты.</p>
                        <Button variant="look">Смотреть <img src={Arrow} alt="arrow" className="h-5 w-5"/></Button>
                    </Card>
                </Link>

                <Link to="/catalog?category=accessories">
                    <Card variant="default">
                        <img src={Plug} alt="plug" className="h-30 w-30"/>
                        <h3 className="text-[1.25rem] font-medium">Аксессуары</h3>
                        <p>Все для ваших устройств.</p>
                        <Button variant="look">Смотреть <img src={Arrow} alt="arrow" className="h-5 w-5"/></Button>
                    </Card>
                </Link>
            </div>
        </section>
        </>
        
    )
}