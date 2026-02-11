import icon from "@assets/faq-logo.svg";

export default function CardWhy({ title, description, icon}) {
    return(
        <div className="border-2 border-gray-500 p-4 rounded-xl flex flex-col gap-2 items-center shadow-xl hover:border-blue-700">
            <img src={icon} alt={title} className="w-12 h-12"/>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{description}</p>
        </div>
    )
}