import PropTypes from 'prop-types'

export default function FooterLinks ({list}) {
    const items = list.items
    return (
        <div>
            <h3>{list.title}</h3>
            <ul>
                {items.map((item) => <li key={list.title}>{item}</li>)}
            </ul>
        </div>
    )
}

FooterLinks.propTypes = {
    list: PropTypes.object
}