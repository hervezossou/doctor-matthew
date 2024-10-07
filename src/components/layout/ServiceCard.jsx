import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function ServiceCard ({image, title, description, icon, label}) {
 return (
    <div>
        <div>
            {icon && (
                <img src={image} alt={icon.toLowerCase()} />
            )}
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            {(label && icon) && (
                <Button icon="{icon}" title="{label}"/>
            )}
        </div>
    </div>
 )
}

ServiceCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
}