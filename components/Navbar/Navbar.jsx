import 'bootstrap/dist/css/bootstrap.min.css'
import NavbarElement from './NavbarElement';
import NavbarList from './NavbarList';

export default function Navbar() {
    return (
        <div className='navbar navbar-expand-lg navbar-light bg-light'>
            <NavbarList>
                <NavbarElement link='https://github.com/kamkow1/waran' text='github' />
                <NavbarElement link='/' text='home' />
                <NavbarElement link='/docs' text='docs' />
                <NavbarElement link='/examples' text='examples' />
                <NavbarElement link='/about' text='about' />
                <NavbarElement link='/contributors' text='contributors' />
            </NavbarList>
        </div>
    );
}