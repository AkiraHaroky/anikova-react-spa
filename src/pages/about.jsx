function About() {
    return (
        <div className="container center-align">
            <div className="section">
                <div className="col center-align">
                    <div className="col s12 m6">
                        <h2>SPA React Project</h2>
                        <h4>Made by Anikova Darya</h4>
                        <p>
                            Если вы это читаете - хорошего вам дня и будьте по
                            жизни как котик снизу ^_^
                        </p>
                        <a
                            href="https://proglib.io/p/tvoe-pervoe-spa-na-react-osnovnye-koncepcii-i-razrabotka-2020-01-13"
                            className="waves-effect waves-light btn"
                        >
                            Learn More
                        </a>
                        <br />
                        <br />
                        <img
                            style={{ maxWidth: "100%", maxHeight: "400px" }}
                            src="https://i.pinimg.com/564x/0d/11/6c/0d116c8e58fa9a039115ee55fa57027d.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export { About };