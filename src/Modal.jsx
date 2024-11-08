import './app/styles/Modal.css'

export default function Modal({modalTitle}) {
    return (
        <>
            <article className={`modal`}>
                <section className={"modal-body"}>
                    <header className={`modal__header`}>
                        <h3>{modalTitle}</h3>
                    </header>
                    <main className={`modal__content`}>

                    </main>
                    <footer className={`modal__footer`}>

                    </footer>
                </section>
            </article>
        </>
    )
}