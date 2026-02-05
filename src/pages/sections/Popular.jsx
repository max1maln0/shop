import ButtonPop from "@components/ButtonPop";
import Card from "@components/ui/Card";
import { products } from "@data/products";

export default function Popular() {
    return(
        <>
            <section className="flex flex-col items-center gap-3">

                
                    <h2 className="section-title">Популярные товары</h2>
                    <p className="text-gray-700">Топ продаж и новинок этого сезона</p>

                    <div className="flex gap-2">
                        <ButtonPop variant="all">Все</ButtonPop>
                        <ButtonPop variant="all">Смартфоны</ButtonPop>
                        <ButtonPop variant="all">Наушники</ButtonPop>
                        <ButtonPop variant="all">Часы</ButtonPop>
                        <ButtonPop variant="all">Аксессуары</ButtonPop>
                    </div>

                    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
                        {products.map((item) => (
                            <Card key={item.id} product={item} />
                        ))}
                    </div>
                    
            </section>
        
        </>
    )
}