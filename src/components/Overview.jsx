import PropTypes, { bool } from "prop-types";
import upIcon from "../assets/images/icon-up.svg";
import downIcon from "../assets/images/icon-down.svg";

Overview.propTypes = {
    overview: PropTypes.object,
    isDark: bool,
};

export default function Overview({ overview, isDark }) {
    return (
        <li
            className={`flex items-center justify-between list-none w-full p-6 rounded-md ${
                isDark
                    ? "bg-dark-card-bg hover:bg-dark-txt-1 hover:bg-opacity-40"
                    : "bg-light-card-bg hover:bg-light-tgl hover:bg-opacity-65"
            } hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
        >
            <div className="flex flex-col justify-between gap-6">
                <p
                    className={`text-sm font-fw-bold ${
                        isDark ? "text-dark-txt-1" : "text-light-txt-1"
                    } transition-all duration-300`}
                >
                    {overview.heading}
                </p>
                <p
                    className={`font-fw-bold text-3xl ${
                        isDark ? "text-dark-txt-2" : "text-light-txt-2"
                    } transition-all duration-300`}
                >
                    {overview.headingView > 10000
                        ? (overview.headingView / 1000)
                              .toFixed(1)
                              .replace(/\.0$/, "") + "K"
                        : overview.headingView}
                </p>
            </div>
            <div className="h-full flex flex-col items-center justify-between gap-6">
                <img src={overview.icon} alt="fb" />
                <p
                    className={`text-xs font-fw-bold flex items-center gap-1 ${
                        overview.stat < 0
                            ? "text-primary-red"
                            : "text-primary-green"
                    }`}
                >
                    {overview.stat < 0 ? (
                        <img src={downIcon} alt="downIcon" />
                    ) : (
                        <img src={upIcon} alt="upIcon" />
                    )}
                    {Math.abs(overview.stat)}%
                </p>
            </div>
        </li>
    );
}
