import React, {Component} from "react";

class NavbarLink extends Component {
    render() {
        return (
            <li><a>{this.props.linkText}</a></li>
        );
    }
}

export default NavbarLink;