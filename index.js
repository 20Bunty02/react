// import React from "react";
import ReactDOM from "react-dom/client";

function Header(){
    return(<div id="header" className="center">
        <h1>This is heading</h1>
    </div>);
};
function Body(){
    return(
        <div id="body" className="center">
            <h1>This is Content Section</h1>
        </div>
    );
};
function Footer(){
    return(
        <div id="footer" className="center">
            <h1>This is Footer</h1>
        </div>
    );
};
function Outline(){
    return(
        <div id="outline">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};
var root=ReactDOM.createRoot(document.getElementById('greet'));
root.render(<Outline />);