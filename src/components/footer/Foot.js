import React, {Component} from "react";
import {Footer} from "react-materialize";

class Foot extends Component {
    render () {
        return (
            <footer>
                <Footer className="indigo lighten-1" copyrights="&copy; Joel and Doug 2017"
                    links={
                        <ul>
                            <li><a className="grey-text text-lighten-2" href="https://github.com/Fishdigger/freelance-management-fe">
                                Front end repo
                            </a></li>
                            <li><a className="grey-text text-lighten-2" href="https://github.com/Fishdigger/freelance-management">
                                Back end repo
                            </a></li>
                            <li><a className="grey-text text-lighten-2" href="https://github.com/Fishdigger/quote-generator">
                                Quote generator repo
                            </a></li>
                        </ul>
                    }
                >
                    <h5 className="white-text">More about this project</h5>
                    <p className="grey-text text-lighten-4">This project was made to learn Node, Express, React, Mongo, and Go all at once.</p>
                </Footer>
            </footer>
        );
    }
}

export default Foot;