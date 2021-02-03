(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),o=n.n(i),s=n(20),c=n.n(s),r=(n(30),n(22)),l=n(2),u=n(8),p=function(e){var t=e.handleHamburgerClick,n=e.isHamburgerClicked,i=e.isRegisterOpen,o=e.handleRegisterOpen,s=e.handleLogout,c=e.isLoggedIn,r=e.email,l="".concat(i?"/sign-in":"/sign-up");return Object(a.jsxs)("header",{className:"header",children:[Object(a.jsx)("div",{className:"header__logo"}),c?Object(a.jsxs)("div",{className:"header__email-container",children:[Object(a.jsx)("p",{className:"header__email",children:r}),Object(a.jsx)(u.b,{to:"/sign-in",className:"header__button",onClick:s,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(a.jsx)(u.b,{to:l,className:"header__button",onClick:o,children:i?"\u0412\u043e\u0439\u0442\u0438":"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),c&&(n?Object(a.jsx)("button",{className:"header__close-button",type:"button",onClick:t}):Object(a.jsx)("button",{className:"header__hamburger",type:"button",onClick:t}))]})},d=o.a.createContext(),b=function(e){var t=e.card,n=e.onCardClick,o=e.onCardLike,s=e.onCardDelete,c=Object(i.useContext)(d),r=t.owner._id===c._id,l="element__delete-button ".concat(r?"element__delete-button_visible":"element__delete-button_hidden"),u=t.likes.some((function(e){return e._id===c._id})),p="element__like ".concat(u?"element__like_active":"element__like_inactive");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("img",{alt:t.name,className:"element__image",src:t.link,onClick:function(){n(t)}}),Object(a.jsxs)("div",{className:"element__title",children:[Object(a.jsx)("h2",{className:"element__place-name",children:t.name}),Object(a.jsxs)("div",{className:"element__like-container",children:[Object(a.jsx)("button",{className:p,type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a.",onClick:function(){o(t)}}),Object(a.jsx)("p",{className:"element__like-num",children:t.likes.length})]})]}),Object(a.jsx)("button",{className:l,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u043e\u0442\u043e.",onClick:function(){s(t)}})]})},h=function(){return Object(a.jsx)("div",{className:"spinner"})},j=function(e){var t=e.cards,n=e.onEditProfile,o=e.onAddPlace,s=e.onEditAvatar,c=e.onCardClick,r=e.onCardLike,l=e.onCardDelete,u=e.isLoading,p=Object(i.useContext)(d);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__avatar",style:{background:"center/cover url(".concat(p.avatar,") no-repeat")},children:Object(a.jsx)("button",{className:"profile__edit-avatar-button",onClick:s})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__title",children:[Object(a.jsx)("h1",{className:"profile__name",children:p.name}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c.",onClick:n})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:p.about})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044e.",onClick:o})]}),Object(a.jsx)("div",{children:Object(a.jsxs)("ul",{className:"elements",children:[u&&Object(a.jsx)(h,{}),t.map((function(e){return Object(a.jsx)(b,{card:e,onCardClick:c,onCardLike:r,onCardDelete:l},e._id)}))]})})]})},m=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",Object(a.jsx)("span",{id:"year",children:(new Date).getFullYear()})," Mesto Russia"]})})},_=function(e){var t=e.card,n=e.onClose,i=e.onClick;return Object(a.jsx)("div",{className:"popup popup_type_zoomed-image ".concat(t&&"popup_opened"),onClick:i,children:Object(a.jsxs)("div",{className:"popup__form popup__form_type_zoomed-image",children:[Object(a.jsx)("img",{src:t?t.link:"",alt:t?t.name:"",className:"popup__image"}),Object(a.jsx)("p",{className:"popup__name popup__name_place_zoomed-image",children:t?t.name:""}),Object(a.jsx)("button",{className:"popup__close-button",type:"reset",onClick:n})]})})},f=n(13),O=n(14),g=new(function(){function e(t){Object(f.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(O.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"setUserInfo",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers,method:"PATCH",body:JSON.stringify({name:e,about:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers,method:"POST",body:JSON.stringify({name:e,link:t})}).then((function(e){return n._getResponseData(e)}))}},{key:"_addLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"PUT"}).then((function(e){return t._getResponseData(e)}))}},{key:"_deleteLike",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this._addLike(e):this._deleteLike(e)}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/cards/").concat(e),{headers:this.headers,method:"DELETE"}).then((function(e){return t._getResponseData(e)}))}},{key:"editAvatar",value:function(e){var t=this;return fetch("".concat(this.baseUrl,"/users/me/avatar"),{headers:this.headers,method:"PATCH",body:JSON.stringify({avatar:e})}).then((function(e){return t._getResponseData(e)}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-17",headers:{authorization:"b1b736c3-ab37-40d8-99c3-eedcbb719e9d","Content-Type":"application/json"}}),v=function(){function e(t,n){Object(f.a)(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._errorSelector=t.errorSelector,this._formElement=n,this._button=n.querySelector(t.submitButtonSelector),this._inputList=Array.from(n.querySelectorAll(t.inputSelector))}return Object(O.a)(e,[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_enableButton",value:function(){this._button.classList.remove(this._inactiveButtonClass),this._button.removeAttribute("disabled")}},{key:"_disableButton",value:function(){this._button.classList.add(this._inactiveButtonClass),this._button.setAttribute("disabled","true")}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"toggleButtonState",value:function(){this._hasInvalidInput()?this._disableButton():this._enableButton()}},{key:"_handleReset",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListenersForReset",value:function(){var e=this;this._formElement.addEventListener("reset",(function(){e._handleReset()}))}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e.toggleButtonState()}))})),this._setEventListenersForReset()}}]),e}(),x="popupName",C="popupDescription",k="loginEmail",y="loginPassword",N={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",errorSelector:".popup__input-error"},S=function(e){var t=Object(i.useRef)();return Object(i.useEffect)((function(){(function(e){var t=new v(N,e);return t.enableValidation(),t})(t.current).enableValidation()}),[]),Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),onClick:e.onClick,children:Object(a.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),method:"POST",name:e.name,onSubmit:e.onSubmit,ref:t,children:[Object(a.jsx)("button",{className:"popup__close-button",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443.",onClick:e.onClose}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__save-button popup__button\n          ".concat(!("delete-confirm"===e.name)&&e.isOpen&&"popup__button_disabled"),disabled:!("delete-confirm"===e.name)&&e.isOpen,children:e.buttonTitle})]})})},L=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateUser,s=e.isLoading,c=e.onClick,r=Object(i.useContext)(d),u=Object(i.useState)(""),p=Object(l.a)(u,2),b=p[0],h=p[1],j=Object(i.useState)(""),m=Object(l.a)(j,2),_=m[0],f=m[1];Object(i.useEffect)((function(){t&&(h(r.name),f(r.about))}),[r,t]);var O=function(e){switch(e.target.name){case x:h(e.target.value);break;case C:f(e.target.value);break;default:console.log("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043d\u043f\u0443\u0442\u0430: ".concat(e.target.name))}};return Object(a.jsxs)(S,{name:"edit-form",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonTitle:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:b,about:_})},onClick:c,children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__name",name:"popupName",placeholder:"\u0418\u043c\u044f",required:!0,id:"name-input",minLength:"2",maxLength:"40",onChange:O,value:b}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"}),Object(a.jsx)("input",{type:"text",className:"popup__input popup__description",name:"popupDescription",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,id:"description-input",minLength:"2",maxLength:"200",onChange:O,value:_}),Object(a.jsx)("span",{className:"popup__input-error",id:"description-input-error"})]})},E=function(e){var t=e.isOpen,n=e.onClose,o=e.onUpdateAvatar,s=e.isLoading,c=e.onClick,r=Object(i.useRef)();Object(i.useEffect)((function(){t&&(r.current.value="")}),[t]);return Object(a.jsxs)(S,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonTitle:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({avatar:r.current.value})},onClick:c,children:[Object(a.jsx)("input",{type:"url",className:"popup__input popup__description",name:"avatarUrl",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,id:"avatar-input",ref:r}),Object(a.jsx)("span",{className:"popup__input-error",id:"avatar-input-error"})]})},w=function(e){var t=e.isOpen,n=e.onClose,o=e.onAddPlace,s=e.isLoading,c=e.onClick,r=Object(i.useState)(""),u=Object(l.a)(r,2),p=u[0],d=u[1],b=Object(i.useState)(""),h=Object(l.a)(b,2),j=h[0],m=h[1];Object(i.useEffect)((function(){t&&(d(""),m(""))}),[t]);var _=function(e){switch(e.target.name){case x:d(e.target.value);break;case C:m(e.target.value);break;default:console.log("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043d\u043f\u0443\u0442\u0430: ".concat(e.target.name))}};return Object(a.jsxs)(S,{name:"add-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonTitle:s?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),o({name:p,link:j})},onClick:c,children:[Object(a.jsx)("input",{type:"text",className:"popup__input popup__name",name:"popupName",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,id:"title-input",minLength:"2",maxLength:"30",value:p,onChange:_}),Object(a.jsx)("span",{className:"popup__input-error",id:"title-input-error"}),Object(a.jsx)("input",{type:"url",className:"popup__input popup__description",name:"popupDescription",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,id:"url-input",value:j,onChange:_}),Object(a.jsx)("span",{className:"popup__input-error",id:"url-input-error"})]})},D=function(e){var t=e.isOpen,n=e.onClose,i=e.onCardDelete,o=e.isLoading,s=e.card,c=e.onClick;return Object(a.jsx)(S,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonTitle:o?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),i(s)},onClick:c})},I=n(3),R=n(23),T=n(24),U=function(e){var t=e.component,n=Object(T.a)(e,["component"]);return Object(a.jsx)(I.b,{children:function(){return n.isLoggedIn?Object(a.jsx)(t,Object(R.a)({},n)):Object(a.jsx)(I.a,{to:"./sign-in"})}})},P=function(e){var t=e.handleLogin,n=Object(i.useState)(""),o=Object(l.a)(n,2),s=o[0],c=o[1],r=Object(i.useState)(""),u=Object(l.a)(r,2),p=u[0],d=u[1],b=function(e){switch(e.target.name){case k:c(e.target.value);break;case y:d(e.target.value);break;default:console.log("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043d\u043f\u0443\u0442\u0430: ".concat(e.target.name))}};return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(a.jsxs)("form",{className:"login__form",method:"POST",onSubmit:function(e){e.preventDefault(),s&&p&&t(s,p)},children:[Object(a.jsx)("input",{className:"login__input login__email",type:"email",name:"loginEmail",placeholder:"Email",required:!0,id:"email-input",value:s,onChange:b,pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:[a-z]{2,})\\b"}),Object(a.jsx)("input",{className:"login__input login__password",type:"password",name:"loginPassword",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,id:"password-input",value:p,onChange:b}),Object(a.jsx)("button",{className:"login__submit-button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},B=function(e){var t=e.handleRegisterOpen,n=e.handleRegister,o=Object(i.useState)(""),s=Object(l.a)(o,2),c=s[0],r=s[1],p=Object(i.useState)(""),d=Object(l.a)(p,2),b=d[0],h=d[1],j=function(e){switch(e.target.name){case k:r(e.target.value);break;case y:h(e.target.value);break;default:console.log("\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u0438\u043d\u043f\u0443\u0442\u0430: ".concat(e.target.name))}};return Object(a.jsxs)("div",{className:"login login_type_register",children:[Object(a.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(a.jsxs)("form",{className:"login__form",onSubmit:function(e){e.preventDefault(),c&&b&&n(c,b)},children:[Object(a.jsx)("input",{className:"login__input login__email",type:"email",name:"loginEmail",placeholder:"Email",required:!0,id:"email-input",value:c,onChange:j,pattern:"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?:[a-z]{2,})\\b"}),Object(a.jsx)("input",{className:"login__input login__password",type:"password",name:"loginPassword",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,id:"password-input",value:b,onChange:j}),Object(a.jsx)("button",{className:"login__submit-button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(a.jsxs)("p",{className:"login__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(a.jsx)(u.b,{to:"/sign-in",className:"login__link",onClick:t,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})},z=n.p+"static/media/check.e004e6e7.svg",A=n.p+"static/media/wrong.471086c8.svg",q=function(e){var t=e.isOpen,n=e.isValid,i=e.onClose;return Object(a.jsx)("div",{className:"popup popup_type_info ".concat(t&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__form popup__form_type_info",children:[Object(a.jsx)("button",{className:"popup__close-button popup__close-button_type_info",type:"reset","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0444\u043e\u0440\u043c\u0443.",onClick:i}),Object(a.jsx)("img",{className:"popup__status-image",src:n?z:A,alt:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438."}),Object(a.jsx)("p",{className:"popup__text",children:n?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437."})]})})},F="https://auth.nomoreparties.co",J=function(e){var t=e.email,n=e.handleLogout;return Object(a.jsxs)("div",{className:"info",children:[Object(a.jsx)("p",{className:"info__email",children:t}),Object(a.jsx)(u.b,{className:"info__link",to:"/sign-in",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})};var V=function(){var e=Object(i.useState)({}),t=Object(l.a)(e,2),n=t[0],o=t[1],s=Object(i.useState)([]),c=Object(l.a)(s,2),u=c[0],b=c[1],h=Object(i.useState)(null),f=Object(l.a)(h,2),O=f[0],v=f[1],x=Object(i.useState)(!1),C=Object(l.a)(x,2),k=C[0],y=C[1],N=Object(i.useState)(null),S=Object(l.a)(N,2),R=S[0],T=S[1],z=Object(i.useState)(!1),A=Object(l.a)(z,2),V=A[0],H=A[1],$=Object(i.useState)(!1),M=Object(l.a)($,2),G=M[0],Y=M[1],K=Object(i.useState)(!1),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Z=Object(i.useState)(!1),ee=Object(l.a)(Z,2),te=ee[0],ne=ee[1],ae=Object(i.useState)(""),ie=Object(l.a)(ae,2),oe=ie[0],se=ie[1],ce=Object(i.useState)(!1),re=Object(l.a)(ce,2),le=re[0],ue=re[1],pe=Object(i.useState)(!1),de=Object(l.a)(pe,2),be=de[0],he=de[1],je=Object(i.useState)(!1),me=Object(l.a)(je,2),_e=me[0],fe=me[1],Oe=Object(i.useState)(!1),ge=Object(l.a)(Oe,2),ve=ge[0],xe=ge[1],Ce=Object(i.useState)(!1),ke=Object(l.a)(Ce,2),ye=ke[0],Ne=ke[1],Se=Object(I.g)();Object(i.useEffect)((function(){y(!0),Promise.all([g.getUserInfo(),g.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];o(n),b(a)})).catch((function(e){console.log(e)})).finally((function(){y(!1)}))}),[]),Object(i.useEffect)((function(){!function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");(t=e,fetch("".concat(F,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).then((function(e){return e}))).then((function(e){se(e.data.email),e&&(H(!0),Se.push("/"))})).catch((function(e){return console.log(e)}))}var t}()}),[Se]);var Le=function(e){"Escape"===e.key&&De()},Ee=function(e){e.target===e.currentTarget&&De()},we=function(){document.addEventListener("keydown",Le)},De=function(){fe(!1),ue(!1),he(!1),xe(!1),Ne(!1),v(null),document.removeEventListener("keydown",Le)},Ie=function(){H(!1),Y(!1),X(!1),localStorage.removeItem("jwt")},Re=function(){X(!W)};return Object(a.jsx)(d.Provider,{value:n,children:Object(a.jsxs)("div",{className:"page",children:[G&&Object(a.jsx)(J,{email:oe,handleLogout:Ie}),Object(a.jsx)(p,{handleHamburgerClick:function(){Y(!G)},isHamburgerClicked:G,isRegisterOpen:W,handleRegisterOpen:Re,handleLogout:Ie,isLoggedIn:V,email:oe}),Object(a.jsxs)(I.d,{children:[Object(a.jsx)(I.b,{exact:!0,path:"/sign-up",children:Object(a.jsx)(B,{handleRegisterOpen:Re,handleRegister:function(e,t){(function(e,t){return fetch("".concat(F,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.json()})).then((function(e){return e}))})(e,t).then((function(e){e?(Ne(!0),ne(!0),X(!1),Se.push("/sign-in")):(Ne(!0),ne(!1),console.log("Error"))})).catch((function(e){Ne(!0),ne(!1),console.log(e)}))}})}),Object(a.jsx)(I.b,{exact:!0,path:"/sign-in",children:Object(a.jsx)(P,{handleLogin:function(e,t){(function(e,t){return fetch("".concat(F,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:e})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(t){t.token&&(se(e),H(!0),Se.push("/"))})).catch((function(e){return console.log(e)}))}})}),Object(a.jsx)(U,{path:"/",component:j,isLoggedIn:V,cards:u,onEditProfile:function(){ue(!0),we()},onAddPlace:function(){he(!0),we()},onEditAvatar:function(){fe(!0),we()},onCardClick:function(e){v(e),we()},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));g.changeLikeCardStatus(e._id,!t).then((function(t){var n=u.map((function(n){return n._id===e._id?t:n}));b(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){xe(!0),T(e),we()},isLoading:k})]}),Object(a.jsx)(m,{}),Object(a.jsx)(q,{isOpen:ye,isValid:te,onClose:De,onClick:Ee}),Object(a.jsx)(w,{isOpen:be,onClose:De,onAddPlace:function(e){y(!0),g.addNewCard(e.name,e.link).then((function(e){b([e].concat(Object(r.a)(u))),De()})).catch((function(e){console.log(e)})).finally((function(){y(!1)}))},isLoading:k,onClick:Ee}),Object(a.jsx)(D,{isOpen:ve,onClose:De,onCardDelete:function(e){y(!0),g.deleteCard(e._id).then((function(){var t=u.filter((function(t){return t._id!==e._id}));b(t),De()})).catch((function(e){console.log(e)})).finally((function(){y(!1)}))},isLoading:k,card:R,onClick:Ee}),Object(a.jsx)(E,{isOpen:_e,onClose:De,onUpdateAvatar:function(e){y(!0),g.editAvatar(e.avatar).then((function(e){o(e),De()})).catch((function(e){console.log(e)})).finally((function(){y(!1)}))},isLoading:k,onClick:Ee}),Object(a.jsx)(L,{isOpen:le,onClose:De,onUpdateUser:function(e){y(!0),g.setUserInfo(e.name,e.about).then((function(e){o(e),De()})).catch((function(e){console.log(e)})).finally((function(){y(!1)}))},isLoading:k,onClick:Ee}),Object(a.jsx)(_,{card:O,onClose:De,onClick:Ee})]})})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),o(e),s(e)}))};c.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(u.a,{basename:"/react-mesto-auth",children:Object(a.jsx)(V,{})})}),document.getElementById("root")),H()}},[[36,1,2]]]);
//# sourceMappingURL=main.888a5230.chunk.js.map