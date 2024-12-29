import PropTypes from "prop-types";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

Social.propTypes = {
    social: PropTypes.object,
    isDark: PropTypes.bool,
};

export default function Social({ social, isDark }) {
    return (
        <li className="list-none">
            <div
                className={`relative w-full rounded-md my-6 py-8 flex flex-col items-center gap-6  ${
                    isDark ? "bg-dark-card-bg" : "bg-light-card-bg"
                } overflow-hidden`}
            >
                <div
                    className={`absolute top-0 h-[5px] w-full ${
                        social.gradient
                            ? "bg-gradient-to-r from-clr-ig-1 to-clr-ig-2"
                            : social.topClr
                    }`}
                ></div>
                <div className="flex items-center gap-2">
                    <img src={social.icon} alt="fb" />
                    <p
                        className={`text-xs font-fw-bold ${
                            isDark ? "text-dark-txt-1" : "text-light-txt-1"
                        }`}
                    >
                        {social.name}
                    </p>
                </div>
                <div className="text-center">
                    <p
                        className={`font-fw-bold text-6xl ${
                            isDark ? "text-dark-txt-2" : "text-light-txt-2"
                        }`}
                    >
                        {social.followers > 10000
                            ? (social.followers / 1000)
                                  .toFixed(1)
                                  .replace(/\.0$/, "") + "K"
                            : social.followers}
                    </p>
                    <p
                        className={`uppercase leading-6 tracking-[4px] text-sm ${
                            isDark ? "text-dark-txt-1" : "text-light-txt-1  "
                        } font-fw-normal`}
                    >
                        {social.subHeading}
                    </p>
                </div>
                <p
                    className={`text-xs font-fw-bold flex items-center gap-2 ${
                        social.statsTody < 0
                            ? "text-primary-red"
                            : "text-primary-green"
                    }`}
                >
                    {social.statsTody < 0 ? (
                        <img src={downIcon} alt="downIcon" />
                    ) : (
                        <img src={upIcon} alt="upIcon" />
                    )}
                    {Math.abs(social.statsTody)} Today
                </p>
            </div>
        </li>
    );
}
