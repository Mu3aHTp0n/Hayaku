import './app/styles/index.css'
export default function Window({children}) {
    return (
        <>
            <main className="window rental">
                {children}
            </main>
        </>
    )
}