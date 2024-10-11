import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function FlexCard ({title, subtitle, paragraph, icon, label, variant}) {
    const variants = {
        "primary": "text-3xl md:text-4xl xl:text-5xl",
        "secondary": "text-xl md:text-2xl xl:text-3xl"
    }
 return (

    <div className="flex flex-col items-center gap-5 md:w-485 md:items-start md:gap-3 xl:w-567">
        <h2 className='text-center font-body text-base font-medium text-title md:text-left lg:text-2xl'>{title}</h2>
        <span className={`text-center font-body font-bold ${variants[variant]} leading-tight text-subtitle md:text-left`}>{subtitle}</span>
        <p className='text-center font-sans text-sm font-normal text-paragraph md:text-justify md:text-base xl:text-lg'>{paragraph}</p>
        {(label && icon) && (
            <Button icon={icon} label={label} variant='primary'/>
        )}
    </div>
 )
}

FlexCard.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    paragraph: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    variant: PropTypes.string
}