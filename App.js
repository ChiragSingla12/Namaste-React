import React from "react";
import ReactDOM from "react-dom/client"

const heading = <h1>Namaste react from jsx</h1>

//React functional components

const Title = () => {
    return <h2>Navbar for nav items</h2>
}
const HeadingComponent = () => {
    return (
        <div id="container">
            <Title />
            <h4>Namaste react functional components</h4>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);