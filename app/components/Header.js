import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="header">
                React Logo Designer
                <div className="socialIcons">
                    <ul>
                        <li>
                            <a href="" target="_blank" className="socialIcons__linkedIn">
                                <i className="fa fa-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/AShark1001/react-logo-generator" target="_blank" className="socialIcons__github">
                                <i className="fa fa-github"></i>
                                <span>Github</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

};

export default Header;