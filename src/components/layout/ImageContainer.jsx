import {PropTypes} from 'prop-types'

export default function ImageContainer ({image}) {
    <div>
        <img src={image} alt="" />
    </div>
}

ImageContainer.propTypes = {
    image: PropTypes.string
}