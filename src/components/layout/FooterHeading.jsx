import PropTypes from 'prop-types'

export default function FooterHeading ({infos}) {
    return (
        <div>
            <div>
                <img src={infos.logo} alt="" />
                <p>{infos.description}</p>
            </div>
            <div>
                <img src={infos.youtube} alt="youtube logo" />
                <img src={infos.facebook} alt="facebook logo" />
                <img src={infos.whatsapp} alt="whatsapp logo" />
            </div>
        </div>
    )
}

FooterHeading.propTypes = {
    infos: PropTypes.object
}