import PropTypes from 'prop-types'

export default function ImageContainer ({image}) {
 return (
    <div>
        {image && (
            <img icon="{image}" alt="{mage.toLowerCase()}"/>
        )}
    </div>
 )
}

ImageContainer.propTypes = {
    image: PropTypes.string
}