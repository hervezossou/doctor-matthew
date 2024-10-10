import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function FlexCard ({title, subtitle, paragraph, icon, label}) {
 return (

    <div className="flex flex-col items-center justify-between gap-5">
        <h2 className='text-center font-body text-base font-medium text-title'>{title}</h2>
        <span className='text-center font-body text-2xl font-bold leading-tight text-subtitle'>{subtitle}</span>
        <p className='text-center font-sans text-sm font-normal text-paragraph'>{paragraph}</p>
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