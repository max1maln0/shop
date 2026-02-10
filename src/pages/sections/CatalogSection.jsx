import Input from "@components/Input";
import { products } from "@data/products";
import Card from "@components/ui/Card";
import SideBar from "@components/SideBar";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Phone from "@assets/categories/phone.svg";
import Plug from "@assets/categories/plug.svg";
import Pods from "@assets/categories/pods.svg";
import Watch from "@assets/categories/watch.svg";

const catalogCategories = [
    { id: "all", label: "Все товары", icon: null },
    { id: "phones", label: "Смартфоны", icon: Phone },
    { id: "headphones", label: "Наушники", icon: Pods },
    { id: "watches", label: "Часы", icon: Watch },
    { id: "accessories", label: "Аксессуары", icon: Plug },
];

const catalogCategoryIds = new Set(catalogCategories.map((category) => category.id));

export default function CatalogSection() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState(() => {
        const categoryParam = searchParams.get("category");

        return catalogCategoryIds.has(categoryParam) ? categoryParam : "all";
    });

    useEffect(() => {
        const categoryParam = searchParams.get("category");
        const nextCategory = catalogCategoryIds.has(categoryParam) ? categoryParam : "all";

        setActiveCategory(nextCategory);
    }, [searchParams]);

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);

        const nextParams = new URLSearchParams(searchParams);

        if (categoryId === "all") {
            nextParams.delete("category");
        } else {
            nextParams.set("category", categoryId);
        }

        setSearchParams(nextParams, { replace: true });
    };

    const filteredProducts = products.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="m-5 flex flex-col w-full max-w-7xl mx-auto">
            <h1 className="section-title">Каталог товаров</h1>

            <div className="flex gap-8 mt-5">
                <SideBar
                    categories={catalogCategories}
                    activeCategory={activeCategory}
                    onCategoryChange={handleCategoryChange}
                />

                <div className="flex flex-col items-start gap-5 ">
                    <Input value={searchQuery} onChange={setSearchQuery} placeholder="Поиск товаров..." />
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <Card key={item.id} product={item} />
                            ))
                        ) : (
                            <p className="text-gray-500">Товары не найдены</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}