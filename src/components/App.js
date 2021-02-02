import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import ConfirmDeletePopup from './ConfirmDeletePopup';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import Login from './Login';
import Register from './Register';
import InfoTooltip from './InfoTooltip';

function App() {
  //#region стейты
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  //стейты для открытия/закрытия попапов
  const [isEditProfileFormOpen, setIsEditProfileFormOpen] = useState(false);
  const [isAddPlaceFormOpen, setIsAddPlaceFormOpen] = useState(false);
  const [isEditAvatarFormOpen, setIsEditAvatarFormOpen] = useState(false);
  const [isConfirmDeleteFormOpen, setIsConfirmDeleteFormOpen] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);

  //#endregion

  //#region эффекты
  //получение данных о пользователе с сервера и присвоение этих данных контексту
  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then((values) => {
        const [userInfo, initialCards] = values;
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  //#endregion

  //#region обработчики событий
  //добавление карточки
  const handleAddPlace = (newPlace) => {
    setIsLoading(true);
    api.addNewCard(newPlace.name, newPlace.link)
      .then((newPlace) => {
        setCards([newPlace, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //лайк
  const handleCardLike = (card) => {
    //определение есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    //отправка запроса в API и получение обновленных данных карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        //формирование нового массива на основе имеющегося, 
        //поставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //удаление карточки
  const handleCardDelete = (card) => {
    setIsLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //обработчик закрытия по нажатию Esc
  const handleEscClose = (event) => {
    if (event.key === 'Escape') {
      closeAllPopups();
    }
  }

  //обработчик закрытия попапов при нажатии по фону
  const handleCLosePopupByClickOnOverlay = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    closeAllPopups();
  }

  const setEscListener = () => {
    document.addEventListener('keydown', handleEscClose);
  }

  const removeEscListener = () => {
    document.removeEventListener('keydown', handleEscClose);
  }

  //обработчик клика по кнопке удаления карточки
  const handleDeleteButtonClick = (card) => {
    //открытие попапа подтверждения удаления
    setIsConfirmDeleteFormOpen(true);
    setCardToDelete(card);

    setEscListener();
  }

  //обработчик открытия попапа редактирования аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarFormOpen(true);

    setEscListener();
  }

  //обработчик открытия попапа редактирования профиля
  const handleEditProfileClick = () => {
    setIsEditProfileFormOpen(true);

    setEscListener();
  }

  //обработчик открытия попапа добавления карточки
  const handleAddPlaceClick = () => {
    setIsAddPlaceFormOpen(true);

    setEscListener();
  }

  //обработчик открытия попапа с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);

    setEscListener();
  }

  //закрытие всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarFormOpen(false);
    setIsEditProfileFormOpen(false);
    setIsAddPlaceFormOpen(false);
    setIsConfirmDeleteFormOpen(false);
    setIsInfoPopupOpen(false);
    setSelectedCard(null);

    removeEscListener();
  }

  //обработчик обновления инфы пользователя
  const handleUpdateUser = (info) => {
    setIsLoading(true);
    api.setUserInfo(info.name, info.about)
      .then((info) => {
        setCurrentUser(info);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  //обработчик обновления аватара
  const handleUpdateAvatar = (newAvatar) => {
    setIsLoading(true);
    api.editAvatar(newAvatar.avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  const handleHamburgerClick = () => {
    setIsHamburgerClicked(!isHamburgerClicked);
  }

  const handleRegisterOpen = () => {
    setIsRegisterOpen(!isRegisterOpen);
  }

  //#endregion

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">

        <Header handleHamburgerClick={handleHamburgerClick} isHamburgerClicked={isHamburgerClicked} 
          isRegisterOpen={isRegisterOpen} handleRegisterOpen={handleRegisterOpen} />
        <Switch>
          <Route exact path="/sign-up">
            <Register handleRegisterOpen={handleRegisterOpen}/>
          </Route>
          <Route exact path="/sign-in">
            <Login />
          </Route>
          <ProtectedRoute path="/" component={Main} isLoggedIn={isLoggedIn} cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}
            onCardLike={handleCardLike} onCardDelete={handleDeleteButtonClick} isLoading={isLoading} />
        </Switch>
        <Footer />

        <InfoTooltip isOpen={isInfoPopupOpen} isValid={true} onClose={closeAllPopups} 
          onClick={handleCLosePopupByClickOnOverlay} />

        <AddPlacePopup isOpen={isAddPlaceFormOpen} onClose={closeAllPopups}
          onAddPlace={handleAddPlace} isLoading={isLoading} onClick={handleCLosePopupByClickOnOverlay} />

        <ConfirmDeletePopup isOpen={isConfirmDeleteFormOpen} onClose={closeAllPopups}
          onCardDelete={handleCardDelete} isLoading={isLoading} card={cardToDelete}
          onClick={handleCLosePopupByClickOnOverlay} />

        <EditAvatarPopup isOpen={isEditAvatarFormOpen} onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading} onClick={handleCLosePopupByClickOnOverlay} />

        <EditProfilePopup isOpen={isEditProfileFormOpen} onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} isLoading={isLoading} onClick={handleCLosePopupByClickOnOverlay} />

        <ImagePopup card={selectedCard} onClose={closeAllPopups} onClick={handleCLosePopupByClickOnOverlay} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
