import PropTypes from "prop-types";

Heading.propTypes = {
    children: PropTypes.elementType,
    isDark: PropTypes.bool,
};

export default function Heading({ children, isDark }) {
    return (
        <header className="text-start lg:flex items-center justify-between lg:max-w-screen-xl mx-auto">
            <div className={`absolute left-0 right-0 ${isDark ? "bg-dark-top-bg-pattern" : "bg-light-top-bg-pattern"} h-[200px] lg:h-[380px] w-full rounded-b-3xl z-0`}></div>
            <div className="relative z-10"> 
                <h1
                    className={`text-2xl font-fw-bold ${
                        isDark ? "text-dark-txt-2" : "text-light-txt-2"
                    }`}
                >
                    Social Media Dahboard
                </h1>
                <p
                    className={`text-sm font-fw-bold ${
                        isDark ? "text-dark-txt-1" : "text-light-txt-1"
                    }  border-b border-light-txt-1 pb-5 lg:border-none`}
                >
                    Total Followers: 23,004
                </p>
            </div>
            {children}
        </header>
    );
}
