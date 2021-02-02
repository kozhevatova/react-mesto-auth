import { NavLink } from "react-router-dom";

const Header = ({ handleHamburgerClick, isHamburgerClicked, isRegisterOpen,
    handleRegisterOpen, handleLogout, isLoggedIn }) => {
    const path = (
        `${isRegisterOpen ? "/sign-in" : "/sign-up"}`
    );

    const onLogout = () => {
        handleLogout();
        handleRegisterOpen();
    }

    return (
        <header className="header">
            <div className="header__logo"></div>
            {
                isLoggedIn ?
                    <div className="header__email-container">
                        <p className="header__email">email@mail.com</p>
                        <NavLink to="/sign-in" className="header__button" onClick={onLogout}>
                            Выйти
                        </NavLink>
                    </div> :
                    <NavLink to={path} className="header__button" onClick={handleRegisterOpen}>
                        {isRegisterOpen ? 'Войти' : 'Регистрация'}
                    </NavLink>
            }
            {
                isHamburgerClicked ?
                    <button className="header__close-button" type="button" onClick={handleHamburgerClick}></button> :
                    <button className="header__hamburger" type="button" onClick={handleHamburgerClick}></button>

            }
        </header>
    );
}

export default Header;