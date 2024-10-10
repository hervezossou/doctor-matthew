import PropTypes from 'prop-types'

export default function Button ({icon, label}) {
    return (
        <a className="bg-gradient-to-r from-primary-blue to-primary-violet drop-shadow-3xl w-64 h-10 flex items-center justify-center gap-2.5 rounded-3xl px-7 py-4 font-sans text-pure-white text-sm font-semibold" href="#" target="_blank">
            {icon && (
                <img src={icon} alt="" />
            )}
            <span>{label}</span>
        </a>
    )
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}