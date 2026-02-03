
export default function Card({
    variant = "default",
    children,
    ...props
}) {
    const baseStyles = "px-5 py-10 rounded-3xl shadow-md flex flex-col items-center gap-3 border-2 transition-transform duration-300 hover:-translate-y-2 cursor-pointer hover:text-blue-800 border-transparent hover:border-blue-800";

    const variants = {
        default: "bg-blue-50",
        phone: "bg-blue-50",
        airpods: "bg-green-50",
        accesories: "bg-yellow-50",
        hours: "bg-purple-50",
    }

    const styles = variants[variant] || variants.default;

    return(
        <div className={`${baseStyles} ${styles}`} {...props}>
            {children}
        </div>
    )
}