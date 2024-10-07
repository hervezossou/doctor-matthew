import PropTypes from 'prop-types'

export default function Button ({icon, label}) {
    return (
        <button>
            {icon && (
                <img src={icon} alt="" />
            )}
            <span>{label}</span>
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}