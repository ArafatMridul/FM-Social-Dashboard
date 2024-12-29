import PropTypes from "prop-types";
import { OverviewData } from "../constants/Stats";
import Overview from "./Overview";

OverViewList.propTypes = {
    isDark: PropTypes.bool,
}

export default function OverViewList({ isDark }) {
    return (
        <div className="lg:max-w-screen-xl mx-auto">
            <p
                className={`text-2xl font-fw-bold mb-6 ${
                    isDark ? "text-dark-txt-2" : "text-light-txt-1"
                } transition-all duration-300`}
            >
                Overview - Today
            </p>
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
                {OverviewData.map((overview, i) => (
                    <Overview overview={overview} isDark={isDark} key={i} />
                ))}
            </ul>
        </div>
    );
}
