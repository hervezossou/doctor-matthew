import PropTypes from "prop-types";

export default function Tag({ icon, title, description }) {
    return (
        <div className="flex h-auto w-80 items-center justify-center gap-4 rounded-xl bg-gradient-to-r from-pure-blue to-light-blue px-5 py-4">
            <div className="flex h-full items-center justify-center gap-4">
                {icon && <img src={icon} />}
                <div className="flex h-full flex-col">
                    <h3 className="font-body text-sm font-semibold text-pure-white">
                        {title}
                    </h3>
                    {description && (
                        <div className="group relative">
                            <p className="line-clamp-2 w-48 cursor-help font-sans text-xs font-normal text-pure-white">
                                {description}
                            </p>
                            <div className="pointer-events-none absolute bottom-full left-0 z-10 mb-2 hidden w-48 rounded-lg bg-gray-800 px-3 py-2 text-xs font-normal text-pure-white shadow-lg group-hover:block">
                                {description}
                                <div className="absolute left-4 top-full size-0 border-x-4 border-t-4 border-x-transparent border-t-gray-800"></div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

Tag.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
};
