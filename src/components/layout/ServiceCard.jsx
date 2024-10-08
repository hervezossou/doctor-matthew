import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function ServiceCard ({image, title, description, icon, label}) {
 return (
    <div>
        <div>
            <img src={image} alt={title.toLowerCase()}/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <Button icon={icon} label={label} />
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