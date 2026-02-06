import CardWhy from "@components/ui/CardWhy";
import { whyData } from "@data/why";


export default function Why() {
    return(
        <section className="m-20 p-4 text-center flex flex-col gap-5">
            <h1 className="section-title">Почему выбирают нас</h1>

            <div className="flex gap-4">
                {whyData.map((item, index) => (
                    <CardWhy 
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    )
}