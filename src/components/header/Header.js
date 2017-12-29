import React, {Component} from "react";
import {Navbar} from "react-materialize";

class Header extends Component {
    render() {
        return(
            <nav>
                <Navbar className="indigo lighten-1" brand="Freelancer" right>
                    
                </Navbar>
            </nav>
        );
    }
}

export default Header;