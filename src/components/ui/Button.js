import "./Button.scss"

export const Button = ({ children, type, className }) => {
    return (
        <button type={type} className={`btn ${className}`}>
            {children}
        </button>
    )
}
