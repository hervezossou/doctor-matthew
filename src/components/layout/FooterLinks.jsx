import PropTypes from 'prop-types'

export default function FooterLinks ({list}) {
    const listItem = list.items
    return (
        <div>
            <h3>{list.title}</h3>
            <ul>
                {listItem.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

FooterLinks.propTypes = {
    list: PropTypes.string
}