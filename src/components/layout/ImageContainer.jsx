import {PropTypes} from 'prop-types'

export default function ImageContainer ({image, imageAlt}) {
    return (
        <div className='flex items-center justify-center md:w-1/2'>
            <img src={image} alt={imageAlt} />
        </div>
    )
}

ImageContainer.propTypes = {
    image: PropTypes.string,
    imageAlt: PropTypes.string
}