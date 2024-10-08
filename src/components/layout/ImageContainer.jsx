import {PropTypes} from 'prop-types'

export default function ImageContainer ({image, imageAlt}) {
    return (
        <div>
            <img src={image} alt={imageAlt} />
        </div>
    )
}

ImageContainer.propTypes = {
    image: PropTypes.string,
    imageAlt: PropTypes.string
}