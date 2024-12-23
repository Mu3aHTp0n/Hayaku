import {useState} from "react";
import useTheme from "../app/providers/ThemeProvider.jsx";
import Header from "../Header.jsx";
import AuthWindow from "../Auth.jsx";

export default function HomePage() {
    useTheme();
    const [active, setActive] = useState(false)

    function handleClick(setFalse) {
        setActive(setFalse)
    }

    return (
        <>
            <Header />
            <AuthWindow isShow={active} setDisable={handleClick} />
        </>
    )
}
