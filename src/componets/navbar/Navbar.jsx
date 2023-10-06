import logo from '/images/airbnb-logo.png';
import s from './navbar.module.css'

export default function Navbar () {
    return (
        <nav className={s.navbar}>
            <img src={logo} alt="AirBnb's logo" className={s.logo}/>
        </nav>
    )
}