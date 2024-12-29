import { useState } from "react";
import Heading from "./components/Heading";
import ToggleBtn from "./components/ToggleBtn";
import SocialList from "./components/SocialList";
import OverViewList from "./components/OverViewList";

export default function App() {
    const [isDark, setIsDark] = useState(true);
    function handleToggle() {
        setIsDark((pv) => !pv);
    }

    return (
        <div
            className={`relative w-full px-6 py-10 z-20 ${
                isDark ? "bg-dark-bg" : "bg-light-bg"
            } lg:h-screen transition-colors duration-300`}
        >
            <Heading isDark={isDark}>
                <ToggleBtn isDark={isDark} handleToggle={handleToggle} />
            </Heading>
			<SocialList isDark={isDark} />
            <OverViewList isDark={isDark} />
        </div>
    );
}
