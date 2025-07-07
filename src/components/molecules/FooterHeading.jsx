import PropTypes from 'prop-types'

export default function FooterHeading ({infos}) {
    return (
        <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="flex flex-col items-center justify-center lg:items-start lg:gap-4">
                <img src={infos.logo} alt="Doctor logo" />
                <p className="text-center font-body text-xs font-light text-pure-white lg:w-96 lg:text-wrap lg:text-left lg:text-base">{infos.description}</p>
            </div>
            <div className="my-4 flex items-center gap-4">
                <a href="#">
                    <img src={infos.youtube} alt="youtube logo" />
                </a>
                <a href="#">
                    <img src={infos.facebook} alt="facebook logo" />
                </a>
                <a href="#">
                    <img src={infos.whatsapp} alt="whatsapp logo" />
                </a>
            </div>
        </div>
    )
}

FooterHeading.propTypes = {
    infos: PropTypes.object
}