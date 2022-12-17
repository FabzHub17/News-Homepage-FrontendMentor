import './_header.scss';
import logo from '../../assets/images/logo.svg';

function Header() {

    return (
        <>
            <header className='header'>
                <img src={logo} alt="logo" className='header__logo' />
                <ul className="header__nav">
                    <li className="header__item"> <a href="#" className="header__link">Home</a></li>
                    <li className="header__item"> <a href="#" className="header__link">New</a></li>
                    <li className="header__item"> <a href="#" className="header__link">Popular</a></li>
                    <li className="header__item"> <a href="#" className="header__link">Trending</a></li>
                    <li className="header__item"> <a href="#" className="header__link">Categories</a></li>
                </ul>
            </header>
        </>
    )
}

export default Header;