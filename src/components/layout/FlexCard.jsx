import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function FlexCard ({title, subtitle, paragraph, icon, label}) {
 return (

    <div>
        <h2>{title}</h2>
        <span>{subtitle}</span>
        <p>{paragraph}</p>
        {(label && icon) && (
            <Button icon={icon} label={label}/>
        )}
    </div>
 )
}

FlexCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    paragraph: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string
}