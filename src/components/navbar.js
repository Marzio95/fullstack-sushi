function Navbar(props) {
    return(
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-evenly">
                <span className="navbar-brand mb-0 h1">Fullstack Sushi</span>
                <div className="navbar-brand mb-0 h1">Totale spesa: €{props.fulltotal}</div>
                <div className="navbar-brand mb-0 h1" onClick={() => props.onDisplay()}>{props.title}</div>
            </div>
        </nav>
    );
}

export default Navbar;