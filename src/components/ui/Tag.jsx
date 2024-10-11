import PropTypes from 'prop-types'

export default function Tag ({icon, title, description}) {
    return (
        // eslint-disable-next-line tailwindcss/no-custom-classname
        <div className='md:w-p6 h-18 flex w-80 items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-pure-blue to-light-blue px-5 py-2'>
            {icon && (
                <img src={icon} />
            )}
            <div className='flex flex-col'>
                <h3 className='font-body text-sm font-semibold text-pure-white'>{title}</h3>
                {description && <p className='h-5 w-48 font-sans text-xs font-normal text-pure-white'>{description}</p>}
            </div>
        </div>
    )
}

Tag.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}