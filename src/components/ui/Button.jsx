import PropTypes from 'prop-types'

export default function Button ({icon, label}) {
    return (
        <a href="#" target="_blank">
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