import PropTypes from 'prop-types'

export default function Heading ({title, paragraph}) {
 return (
    <div>
        <h2>{title}</h2>
        <p>{paragraph}</p>
    </div>
 )
}

Heading.propTypes = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
}