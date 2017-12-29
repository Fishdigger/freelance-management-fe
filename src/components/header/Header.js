import React, {Component} from "react";
import NavbarLink from "./NavbarLink";

class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">Freelancer</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <NavbarLink linkText="Clients"/>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;