import useTheme from "../app/providers/ThemeProvider.jsx";
import Header from "../Header.jsx";

export default function HomePage() {
    useTheme();

    return (
        <>
            <Header />
        </>
    )
}