import PropTypes from "prop-types";
import { statData } from "../constants/Stats";
import Social from "./Social";

SocialList.propTypes = {
    isDark: PropTypes.bool,
};

export default function SocialList({ isDark }) {
    return (
        <ul className="py-4 lg:max-w-screen-xl mx-auto grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
            {statData.map((social, i) => (
                <Social social={social} isDark={isDark} key={i} />
            ))}
        </ul>
    );
}
