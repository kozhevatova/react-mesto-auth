const Header = ({handleHamburgerClick, isHamburgerClicked}) => {
    return (
        <header className="header">
            <div className="header__logo"></div>
            {/* <button className="header__button" type="button">Войти</button> */}
            <div className="header__email-container">
                <p className="header__email">email@mail.com</p>
                <button className="header__button" type="button">Выйти</button>
            </div>
            {
                isHamburgerClicked ? 
                    <button className="header__close-button" type="button" onClick={handleHamburgerClick}></button> :
                    <button className="header__hamburger" type="button" onClick={handleHamburgerClick}></button>

            }            
        </header>
    );
}

export default Header;