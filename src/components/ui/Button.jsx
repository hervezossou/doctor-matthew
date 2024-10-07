import PropTypes from 'prop-types'

export default function Button ({icon, title}) {
    return (
        <button>
            {icon && (
                <img src="{imageUrl" alt="" />
            )}
            <span>{title}</span>
        </button>
    )
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}