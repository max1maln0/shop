import ButtonPop from "@components/ButtonPop";
import Card from "@components/ui/Card";
import { products } from "@data/products";
import { useState } from "react";

const popularCategories = [
    { id: "all", label: "Все" },
    { id: "phones", label: "Смартфоны" },
    { id: "headphones", label: "Наушники" },
    { id: "watches", label: "Часы" },
    { id: "accessories", label: "Аксессуары" },
];

export default function Popular() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredProducts = products.filter((item) => (
        activeCategory === "all" || item.category === activeCategory
    ));

    return(
        <>
            <section className="flex flex-col items-center gap-3">

                
                    <h2 className="section-title">Популярные товары</h2>
                    <p className="text-gray-700">Топ продаж и новинок этого сезона</p>

                    <div className="flex gap-2">
                        {popularCategories.map((category) => (
                            <ButtonPop
                                key={category.id}
                                variant="all"
                                isActive={activeCategory === category.id}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.label}
                            </ButtonPop>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4">
                        {filteredProducts.map((item) => (
                            <Card key={item.id} product={item} />
                        ))}
                    </div>
                    
            </section>
        
        </>
    )
}