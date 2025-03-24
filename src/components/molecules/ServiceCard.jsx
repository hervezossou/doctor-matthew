import PropTypes from 'prop-types'
import Button from '../atoms/Button'

export default function ServiceCard ({image, title, description, icon, label}) {
 return (
    <div className='flex w-72 flex-col items-center justify-center gap-6 rounded-3xl bg-pure-white p-8 drop-shadow-4xl lg:w-346'>
        <div className='flex items-center justify-center'>
            <img src={image} alt={title.toLowerCase()}/>
        </div>
        <div className='flex flex-col items-start justify-center gap-1'>
            <h3 className='font-body text-base font-medium text-black md:text-lg lg:text-xl xl:text-2xl'>{title}</h3>
            <p className='text-justify font-sans text-xs text-paragraph md:text-sm lg:text-base xl:text-lg'>{description}</p>
        </div>
        <Button icon={icon} label={label} variant='primary' />
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