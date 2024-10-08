import PropTypes from 'prop-types'

export default function TestimonialCard ({testimonial, authorName, authorPosition, authorProfile}) {
 return (
    <div>
        <div>
            <p>{testimonial}</p>
        </div>
        <div>
            <div>
                <img src={authorProfile} />
            </div>
            <div>
                <h4>{authorName}</h4>
                <span>{authorPosition}</span>
            </div>
        </div>
    </div>
 )
}

TestimonialCard.propTypes = {
    testimonial: PropTypes.string,
    authorName: PropTypes.string,
    authorPosition: PropTypes.string,
    authorProfile: PropTypes.string
}