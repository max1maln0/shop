import Input from "@components/Input";
import { products } from "@data/products";
import Card from "@components/ui/Card";
import SideBar from "@components/SideBar";
import { useState } from "react";

export default function CatalogSection() {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <section className="m-5 flex flex-col w-full max-w-7xl mx-auto">
            <h1 className="section-title">Каталог товаров</h1>

            <div className="flex gap-8 mt-5">
                <SideBar />

                <div className="flex flex-col items-start gap-5 ">
                    <Input value={searchQuery} onChange={setSearchQuery}/>
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