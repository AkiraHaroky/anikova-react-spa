function Footer() {
    return (
        <footer className="page-footer teal">
            <div className="footer-copyright">
                <div className="container">
                    ©{new Date().getFullYear()} Anikova Darya
                    <a className="grey-text text-lighten-4 right" href="https://github.com/AkiraHaroky/anikova-react-spa">
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    );
}
export { Footer };
