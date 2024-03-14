import { content } from "../../content";
import '../styles/navbar.css'

function Navbar() {
    const { nav } = content;

    return (
        <nav className="NavbarDiv">
            {nav.map(({ id, link, icon: Icon }) => (
                <a key={id} href={link} className={link}>
                    <Icon className="icon" />
                </a>
            ))}
        </nav>
    );
};

export default Navbar;



