import PropTypes from "prop-types";

export default function Button({
    icon,
    label,
    variant = "primary",
    className,
}) {
    const classes = {
        primary:
            "bg-gradient-to-r from-primary-blue to-primary-violet text-pure-white",
        secondary: "bg-pure-white text-primary-blue mb-4",
    };

    return (
        <a
            className={`flex h-12 w-full items-center justify-center gap-2.5 rounded-3xl px-7 py-4 drop-shadow-3xl ${classes[variant]} ${className} md:my-3 md:w-max`}
            href="#"
            target="_blank"
        >
            {icon && <img src={icon} alt="" />}
            <span className="font-sans text-xs font-medium lg:text-lg">
                {label}
            </span>
        </a>
    );
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    className: PropTypes.string,
};
