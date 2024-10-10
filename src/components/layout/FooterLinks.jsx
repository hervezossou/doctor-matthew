import PropTypes from 'prop-types'

export default function FooterLinks ({list}) {
    return (
        <div className='flex flex-col gap-2'>
            <h3 className='text-center font-body text-base font-semibold text-pure-white'>{list.title}</h3>
            <ul className='flex flex-col items-center'>
                {Object.entries(list.items).map(([key, value]) => <li className='font-sans text-sm text-pure-white' key={key}><a href="#" target="_blank" rel="noopener noreferrer">{value}</a></li>)}
            </ul>
        </div>
    )
}

FooterLinks.propTypes = {
    list: PropTypes.object
}