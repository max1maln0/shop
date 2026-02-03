export default function Buttons({
    children,
    variant = 'all',
    onClick,
    type = 'button',
    ...props

}) {
    const baseStyles = 'cursor-pointer font-semibold text-sm';

    const variants = {
        all: 'px-2.5 py-1.5 rounded-full bg-gray-400/20 text-gray-700 hover:text-black active:bg-blue-600 active:text-white',
        cards: 'inline-flex items-center gap-2 px-2 py-1.5 rounded-md bg-blue-900 text-white hover:bg-blue-800 active:bg-blue-600 ',


    };

    const styles = variants[variant] || variants.all;

    return(
        <button type={type} onClick={onClick} className={`${baseStyles} ${styles}`} {...props}>
            {children}
        </button>
    )
}