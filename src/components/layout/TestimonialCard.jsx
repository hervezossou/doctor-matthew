import PropTypes from 'prop-types'

export default function ServiceCard ({testimonial, authorName, authorPosition, authorProfile}) {
 return (
    <div>
        <div>
            <p>{testimonial}</p>
        </div>
        <div>
           <div>
                {authorProfile && (
                    <img src={authorProfile} alt={authorProfile.toLowerCase()} />
                )}
           </div>
           <div>
                <h4>{authorName}</h4>
                <span>{authorPosition}</span>
           </div>
        </div>
    </div>
 )
}

ServiceCard.propTypes = {
    testimonial: PropTypes.string,
    authorName: PropTypes.string,
    authorPosition: PropTypes.string,
    authorProfile: PropTypes.string
}