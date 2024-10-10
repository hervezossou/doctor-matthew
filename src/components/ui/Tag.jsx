import PropTypes from 'prop-types'

export default function Tag ({icon, title, description}) {
    return (
        <div className='flex justify-center gap-3 bg-gradient-to-r from-pure-blue to-light-blue px-5 py-2 w-64 h-16 rounded-xl'>
            {icon && (
                <img src={icon} />
            )}
            <div className='flex flex-col'>
                <h3 className='font-semibold font-body text-pure-white text-sm'>{title}</h3>
                <p className='font-sans text-xs text-pure-white w-48 h-5'>{description}</p>
            </div>
        </div>
    )
}

Tag.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}