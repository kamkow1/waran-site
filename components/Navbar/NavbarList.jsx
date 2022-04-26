import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

export default function NavbarList(props) {
    return (
        <ul className='navbar-nav mr-auto'>
            <React.Fragment>
                {props.children.map((e) => {
                    return e;
                })}
            </React.Fragment>
        </ul>
    );
}