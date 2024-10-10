import PropTypes from 'prop-types'

export default function Button ({icon, label}) {
    return (
        <a className="flex h-10 w-64 items-center justify-center gap-2.5 rounded-3xl bg-gradient-to-r from-primary-blue to-primary-violet px-7 py-4 drop-shadow-3xl" href="#" target="_blank">
            {icon && (
                <img src={icon} alt="" />
            )}
            <span className='font-sans text-sm font-semibold text-pure-white'>{label}</span>
        </a>
    )
}

Button.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}