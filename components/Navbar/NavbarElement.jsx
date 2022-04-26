import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavbarElement(props) {
    return (
        <li className={`nav-item ${props.isFirst ? 'active' : ''}`}>
            <a className='nav-link' href={props.link}>{props.text}</a>
        </li>
    );
}