import PropTypes from 'prop-types'

export default function FooterLinks ({list}) {
    return (
        <div>
            <h3>{list.title}</h3>
            <ul>
                {Object.entries(list.items).map(([key, value]) => <li key={key}><a href="#" target="_blank" rel="noopener noreferrer">{value}</a></li>)}
            </ul>
        </div>
    )
}

FooterLinks.propTypes = {
    list: PropTypes.object
}