import PropTypes from 'prop-types'

export default function Tag ({icon, title, description}) {
    return (
        <div>
            {icon && (
                <img src={icon} alt={icon.toLowerCase()} />
            )}
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

Tag.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}