export default function Button({
    children,
    variant = 'primary',
    onClick,
    type = 'button',
    ...props

}) {
    const baseStyles = 'inline-flex items-center gap-2 px-5 py-3 rounded font-semibold cursor-pointer text-lg leading-none';

    const variants = {
        primary: 'text-white bg-blue-950 hover:bg-blue-900',
        admin: ' bg-gray-400 hover:bg-gray-500',
        look: 'text-blue-850 text-sm'
    };

    const styles = variants[variant] || variants.primary;

    return(
        <button type={type} onClick={onClick} className={`${baseStyles} ${styles}`} {...props}>
            {children}
        </button>
    )
}