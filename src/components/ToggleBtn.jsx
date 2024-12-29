import PropTypes from "prop-types";

ToggleBtn.propTypes = {
    isDark: PropTypes.bool,
    handleToggle: PropTypes.func,
};

export default function ToggleBtn({ isDark, handleToggle }) {
    return (
        <div className="relative z-10 mt-4 flex items-center justify-between lg:justify-normal lg:gap-4">
            <p
                className={`text-sm font-fw-bold ${
                    isDark ? "text-dark-txt-1" : "text-light-txt-1"
                }`}
            >
                Dark Mode
            </p>
            <div
                className={`relative w-14 h-7 p-1  ${
                    isDark
                        ? "bg-gradient-to-r from-dark-tgl-liner-1 to-dark-tgl-liner-2 hover:shadow-custom"
                        : "bg-light-tgl"
                }  rounded-full cursor-pointer transition-all duration-300`}
                onClick={handleToggle}
            >
                <div
                    className={`absolute w-5 h-5 rounded-full ${
                        isDark
                            ? "translate-x-0 bg-dark-bg"
                            : "translate-x-7 bg-light-bg"
                    } transition-all duration-300`}
                ></div>
            </div>
        </div>
    );
}
