import { createElement } from "react";
import { content } from "../../content";
import './navBar.css'

const Navbar = () => {
    const { nav } = content;


    /* const idst = id.toString() */
    return (
        <div className="NavbarDiv" >
            <nav className="nav">
                {nav.map((item) => (
                    <a id={item.id} key={item.id} href={item.link} >
                        {createElement(item.icon)}
                    </a>
                ))}
            </nav>
        </div >
    );
};

export default Navbar;
