import PropTypes from 'prop-types'
import Button from '../ui/Button'

export default function ServiceCard ({image, title, description, icon, label}) {
 return (
    <div className='flex flex-col items-center justify-center gap-6 rounded-3xl bg-pure-white p-8 drop-shadow-4xl'>
        <div className='flex items-center justify-center'>
            <img src={image} alt={title.toLowerCase()}/>
        </div>
        <div className='flex flex-col items-start justify-center gap-3'>
            <h3 className='font-body text-base font-medium text-black'>{title}</h3>
            <p className='text-justify font-sans text-xs text-paragraph'>{description}</p>
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