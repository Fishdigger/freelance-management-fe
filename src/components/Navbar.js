import React, {Component} from "react";

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo right">Freelancer</a>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><a href="#">Clients</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;