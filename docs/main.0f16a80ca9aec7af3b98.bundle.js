webpackJsonp([1],{0:function(l,n,t){l.exports=t("cDNt")},YuZA:function(l,n){function t(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="YuZA"},cDNt:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("LMZF"),u=t("9iV4"),i=function(){},s=function(){},o=t("W1ez"),r=t("65Ps"),a=t("UHIZ"),c=t("nihM"),_=function(){function l(l,n){this.http=l,this.router=n,this.USER_NAME_KEY="ws-chat-server-user-name",this.TOKEN_KEY="ws-chat-server-token"}return Object.defineProperty(l.prototype,"baseUrl",{get:function(){return"https://nodechat.club"},enumerable:!0,configurable:!0}),l.prototype.getUserName=function(){return localStorage.getItem(this.USER_NAME_KEY)},l.prototype.getToken=function(){return localStorage.getItem(this.TOKEN_KEY)},l.prototype.hasAuth=function(){var l=this.getUserName(),n=this.getToken();return null!==l&&null!==n},l.prototype.storeUserName=function(l){localStorage.setItem(this.USER_NAME_KEY,l)},l.prototype.storeToken=function(l){localStorage.setItem(this.TOKEN_KEY,l)},l.prototype.login=function(l){var n=this;return this.http.post(this.baseUrl+"/api/auth",{userName:l.userName,password:l.password}).pipe(Object(c.a)(function(l){return n.storeUserName(l.userName),l}))},l.prototype.signup=function(l){return this.http.post(this.baseUrl+"/api/users",{firstName:l.firstName,lastName:l.lastName,userName:l.userName,password:l.password})},l.prototype.logout=function(){localStorage.clear(),this.router.navigate(["/login"])},l}(),d=t("pXwq"),p=function(){function l(l,n){this.authService=l,this.router=n,this.loginCard=!0}return l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewInit=function(){this.initializeLoginCardElements()},l.prototype.initializeLoginCardElements=function(){this.initializeTextField(this.usernameTextFieldElm.first.nativeElement),this.initializeTextField(this.passwordTextFieldElm.first.nativeElement),this.initializeRipple(this.loginButtonElm.first.nativeElement),this.initializeRipple(this.createAccountButtonElm.first.nativeElement)},l.prototype.login=function(){var l=this;this.authService.login({userName:this.usernameTextFieldElm.first.nativeElement.firstElementChild.value,password:this.passwordTextFieldElm.first.nativeElement.firstElementChild.value}).pipe(Object(d.a)(1)).subscribe(function(){l.router.navigateByUrl("/chat")},console.log)},l.prototype.showSignUpCard=function(){this.router.navigateByUrl("/signup")},l.prototype.initializeTextField=function(l){return new o.a(l,void 0,this.initializeRipple)},l.prototype.initializeRipple=function(l){return new r.a(l)},l}(),m=e.Y({encapsulation:0,styles:[[".login-root[_ngcontent-%COMP%]{height:100%;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-grid-rows:1fr;grid-template-rows:1fr;background-color:purple}.mdc-card.login-card[_ngcontent-%COMP%]{-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;display:-ms-grid;display:grid;-ms-grid-columns:auto;grid-template-columns:auto;-ms-grid-rows:auto;grid-template-rows:auto;grid-gap:8px;padding:8px;background-color:#fff}.mdc-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:16px}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-color:purple}"]],data:{}});function f(l){return e._14(0,[e._11(671088640,1,{usernameTextFieldElm:1}),e._11(671088640,2,{passwordTextFieldElm:1}),e._11(671088640,3,{loginButtonElm:1}),e._11(671088640,4,{createAccountButtonElm:1}),(l()(),e._0(4,0,null,null,48,"div",[["class","login-root"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n  "])),(l()(),e._0(6,0,null,null,45,"div",[["class","mdc-card login-card"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(8,0,null,null,7,"section",[["class","mdc-card__primary"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(10,0,null,null,1,"h1",[["class","mdc-card__title mdc-card__title--large"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Login To Chat Server"])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(13,0,null,null,1,"h2",[["class","mdc-card__subtitle"]],null,null,null,null,null)),(l()(),e._13(-1,null,["with your details"])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(17,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(19,0,[[1,0],["usernameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(21,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","username"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(23,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","username"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Username"])),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(26,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(30,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(32,0,[[2,0],["passwordTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(34,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","password"],["minlength","8"],["required",""],["type","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(36,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Password"])),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(39,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n\n    "])),(l()(),e._0(43,0,null,null,7,"section",[["class","mdc-card__actions"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(45,0,[[3,0],["loginButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.login()&&e),e},null,null)),(l()(),e._13(-1,null,["\n        Login\n      "])),(l()(),e._13(-1,null,["\n\n      "])),(l()(),e._0(48,0,[[4,0],["createAccountButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showSignUpCard()&&e),e},null,null)),(l()(),e._13(-1,null,["\n        Create Account\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n"])),(l()(),e._13(-1,null,["\n\n\n\n\n"]))],null,null)}var g=e.W("app-login",p,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-login",[],null,null,null,f,m)),e.Z(1,4308992,null,0,p,[_,a.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=function(){function l(l,n){this.router=l,this.authService=n}return l.prototype.ngOnInit=function(){},l.prototype.ngAfterViewInit=function(){this.initializeSignUpCardElements()},l.prototype.initializeSignUpCardElements=function(){var l=this.usernameTextFieldElm.first.nativeElement;this.initializeTextField(l),this.userNameInput=l.firstElementChild;var n=this.passwordTextFieldElm.first.nativeElement;this.initializeTextField(n),this.passwordInput=n.firstElementChild;var t=this.firstNameTextFieldElm.first.nativeElement;this.initializeTextField(t),this.firstNameInput=t.firstElementChild;var e=this.lastNameTextFieldElm.first.nativeElement;this.initializeTextField(e),this.lastNameInput=e.firstElementChild,this.initializeRipple(this.signUpButtonElm.first.nativeElement)},l.prototype.signUp=function(l){var n=this;l.preventDefault();var t=new function(l,n,t,e){this.userName=l,this.password=n,this.firstName=t,this.lastName=e}(this.userNameInput.value,this.passwordInput.value,this.firstNameInput.value,this.lastNameInput.value);this.authService.signup(t).pipe(Object(d.a)(1)).subscribe(function(){n.backToLogin()})},l.prototype.backToLogin=function(){this.router.navigateByUrl("/login")},l.prototype.initializeTextField=function(l){return new o.a(l,void 0,this.initializeRipple)},l.prototype.initializeRipple=function(l){return new r.a(l)},l}(),b=e.Y({encapsulation:0,styles:[[".login-root[_ngcontent-%COMP%]{height:100%;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-grid-rows:1fr;grid-template-rows:1fr;background-color:#14c40e}.mdc-card.sign-up-card[_ngcontent-%COMP%]{-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;display:-ms-grid;display:grid;-ms-grid-columns:auto;grid-template-columns:auto;-ms-grid-rows:auto;grid-template-rows:auto;padding:8px;background-color:#fff}.mdc-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:16px}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-color:#14c40e}"]],data:{}});function v(l){return e._14(0,[e._11(671088640,1,{usernameTextFieldElm:1}),e._11(671088640,2,{passwordTextFieldElm:1}),e._11(671088640,3,{firstNameTextFieldElm:1}),e._11(671088640,4,{lastNameTextFieldElm:1}),e._11(671088640,5,{signUpButtonElm:1}),e._11(671088640,6,{backToLoginButtonElm:1}),(l()(),e._0(6,0,null,null,77,"div",[["class","login-root"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n  "])),(l()(),e._0(8,0,null,null,74,"form",[],null,[[null,"submit"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==l.component.signUp(t)&&e),e},null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(10,0,null,null,71,"div",[["class","mdc-card sign-up-card"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(12,0,null,null,7,"section",[["class","mdc-card__primary"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(14,0,null,null,1,"h1",[["class","mdc-card__title mdc-card__title--large"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Create an account"])),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(17,0,null,null,1,"h2",[["class","mdc-card__subtitle"]],null,null,null,null,null)),(l()(),e._13(-1,null,["with your details"])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(21,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(23,0,[[3,0],["firstNameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(25,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","firstName"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(27,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","firstName"]],null,null,null,null,null)),(l()(),e._13(-1,null,["First Name"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(30,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(34,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(36,0,[[4,0],["lastNameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(38,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","lastName"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(40,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","lastName"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Last Name"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(43,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(47,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(49,0,[[1,0],["usernameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(51,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","username"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(53,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","username"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Username"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(56,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(60,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(62,0,[[2,0],["passwordTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(64,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","password"],["minlength","8"],["required",""],["type","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(66,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Password"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(69,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n\n      "])),(l()(),e._0(73,0,null,null,7,"section",[["class","mdc-card__actions"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(75,0,[[5,0],["signUpButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Sign Up"])),(l()(),e._13(-1,null,["\n\n        "])),(l()(),e._0(78,0,[[6,0],["backToLoginButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.backToLogin()&&e),e},null,null)),(l()(),e._13(-1,null,["\n          Back to Login\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n"])),(l()(),e._13(-1,null,["\n\n\n\n\n"]))],null,null)}var x=e.W("app-signup",h,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-signup",[],null,null,null,v,b)),e.Z(1,4308992,null,0,h,[a.k,_],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),y=t("Un6q"),E=t("kH4A"),w=t("/iaB"),k=t("qqDE"),T=t("Rx5t"),O=function(){function l(l,n){this.authService=l,this.router=n,this.messages=[],this.forceScrollOnMessage=!0}return Object.defineProperty(l.prototype,"webSocketBaseUrl",{get:function(){return"wss://nodechat.club"},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){this.connectToServer()},l.prototype.ngAfterViewInit=function(){this.messageListElement=this.messageLists.first.nativeElement,this.textInput=this.textInputs.first.nativeElement,this.messagesScroll$=Object(E.a)(this.messageListElement,"scroll"),new o.a(this.textFieldBoxEls.first.nativeElement,void 0,function(l){return new r.a(l)}),new r.a(this.mdcButtons.first.nativeElement)},l.prototype.ngOnDestroy=function(){this.socket.close()},l.prototype.formSubmit=function(l){l.preventDefault(),this.sendMessage()},l.prototype.sendMessage=function(){this.textInput.value&&(this.socket.send(this.textInput.value),this.textInput.value="")},l.prototype.trackByIndex=function(l,n){return l},l.prototype.registerScrollListener=function(){var l=this;this.scrollSub=this.messagesScroll$.pipe(Object(k.a)(function(l){return{sH:l.target.scrollHeight,sT:l.target.scrollTop,cH:l.target.clientHeight}}),Object(w.a)(),Object(T.a)(500)).subscribe(function(n){var t=n[0],e=n[1];console.log(t.sT<e.sT),l.forceScrollOnMessage=t.sT<e.sT})},l.prototype.connectToServer=function(){var l=this;this.authService.getToken()?(this.socket=new WebSocket(this.webSocketBaseUrl+"/chat?token="+this.authService.getToken()),this.socket.addEventListener("message",function(n){var t=JSON.parse(n.data),e=t.user;l.messages.push(e.firstName+" "+e.lastName+": "+t.content),setTimeout(function(){l.messageListElement.scrollTop=l.messageListElement.scrollHeight},10)}),this.socket.addEventListener("close",function(n){console.log("You are not authorized to access chat or the chat server is dead"),setTimeout(function(){l.connectToServer()},5e3)})):this.router.navigateByUrl("/login")},l}(),N=e.Y({encapsulation:0,styles:[[".chat-ui[_ngcontent-%COMP%]{height:100vh;-ms-grid-rows:1fr 0fr;grid-template-rows:1fr 0fr}.chat-ui[_ngcontent-%COMP%], .message-input[_ngcontent-%COMP%]{display:-ms-grid;display:grid}.message-input[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);-ms-grid-columns:4fr 1fr;grid-template-columns:4fr 1fr;grid-gap:8px;padding:8px 8px 0 8px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.messages-list[_ngcontent-%COMP%]{background-color:#fafad2;overflow-y:scroll}.messages-list.mdc-list.bordered-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;font-size:.812rem}.bordered-list[_ngcontent-%COMP%]{\n  padding-right:0;padding-left:0}.bordered-list[_ngcontent-%COMP%]   .mdc-list-item[_ngcontent-%COMP%]{\n  padding:0 16px;\n  border:1px solid rgba(0,0,0,.12)}\n\n.bordered-list[_ngcontent-%COMP%]   .mdc-list-item[_ngcontent-%COMP%]:not(:first-child){border-top:none}"]],data:{}});function S(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"li",[["class","mdc-list-item"]],null,null,null,null,null)),(l()(),e._13(1,null,["\n      ","\n    "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function C(l){return e._14(0,[e._11(671088640,1,{messageLists:1}),e._11(671088640,2,{textInputs:1}),e._11(671088640,3,{textFieldBoxEls:1}),e._11(671088640,4,{mdcButtons:1}),(l()(),e._0(4,0,null,null,23,"div",[["class","chat-ui"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n  "])),(l()(),e._0(6,0,[[1,0],["messagesList",1]],null,4,"ul",[["class","messages-list mdc-list bordered-list"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e.V(16777216,null,null,1,null,S)),e.Z(9,802816,null,0,y.h,[e.K,e.H,e.p],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n\n  "])),(l()(),e._0(12,0,null,null,14,"div",[["class","message-input"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(14,0,[[3,0],["mdcTextField",1]],null,8,"form",[["class","mdc-text-field"]],null,[[null,"submit"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==l.component.formSubmit(t)&&e),e},null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(16,0,[[2,0],["textInput",1]],null,0,"input",[["autocomplete","off"],["autofocus","true"],["class","mdc-text-field__input"],["id","my-text-field"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(18,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","my-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Type your message"])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(21,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(24,0,[[4,0],["mdcButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.sendMessage()&&e),e},null,null)),(l()(),e._13(-1,null,["\n      Send\n    "])),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n"])),(l()(),e._13(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,9,0,t.messages,t.trackByIndex)},null)}var F=e.W("app-chat-home",O,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-chat-home",[],null,null,null,C,N)),e.Z(1,4440064,null,0,O,[_,a.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),M=e.Y({encapsulation:2,styles:[],data:{}});function I(l){return e._14(0,[(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.Z(2,212992,null,0,a.m,[a.b,e.K,e.j,[8,null],e.h],null,null),(l()(),e._13(-1,null,["\n  "]))],function(l,n){l(n,2,0)},null)}var U=e.W("app-root",s,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-root",[],null,null,null,I,M)),e.Z(1,49152,null,0,s,[],null,null)],null,null)},{},{},[]),P=t("RyBE"),B=function(){function l(){this.TOKEN_KEY="ws-chat-server-token"}return l.prototype.intercept=function(l,n){var t=localStorage.getItem(this.TOKEN_KEY);if(t){var e=l.clone({setHeaders:{authorization:t}});return n.handle(e)}return n.handle(l)},l}(),j=function(){function l(l){this.router=l,this.TOKEN_KEY="ws-chat-server-token"}return l.prototype.intercept=function(l,n){var t=this;return n.handle(l).pipe(Object(c.a)(function(l){l instanceof u.h&&l.body.token&&localStorage.setItem(t.TOKEN_KEY,l.body.token)},function(l){l instanceof u.f&&401===l.status&&t.router.navigate(["/login"])}))},l}(),z=function(){function l(l,n){this.authService=l,this.router=n}return l.prototype.canActivate=function(l,n){return!!this.authService.hasAuth()||(this.router.navigate(["/login"]),!1)},l}(),L=function(){},K=e.X(i,[s],function(l){return e._6([e._7(512,e.j,e.T,[[8,[g,x,F,U]],[3,e.j],e.u]),e._7(5120,e.r,e._10,[[3,e.r]]),e._7(4608,y.j,y.i,[e.r,[2,y.n]]),e._7(5120,e.c,e._2,[]),e._7(5120,e.p,e._8,[]),e._7(5120,e.q,e._9,[]),e._7(4608,P.b,P.q,[y.c]),e._7(6144,e.C,null,[P.b]),e._7(4608,P.e,P.f,[]),e._7(5120,P.c,function(l,n,t,e,u){return[new P.j(l,n),new P.n(t),new P.m(e,u)]},[y.c,e.w,y.c,y.c,P.e]),e._7(4608,P.d,P.d,[P.c,e.w]),e._7(135680,P.l,P.l,[y.c]),e._7(4608,P.k,P.k,[P.d,P.l]),e._7(6144,e.A,null,[P.k]),e._7(6144,P.o,null,[P.l]),e._7(4608,e.I,e.I,[e.w]),e._7(4608,P.g,P.g,[y.c]),e._7(4608,P.h,P.h,[y.c]),e._7(5120,a.a,a.v,[a.k]),e._7(4608,a.d,a.d,[]),e._7(6144,a.f,null,[a.d]),e._7(135680,a.n,a.n,[a.k,e.t,e.i,e.o,a.f]),e._7(4608,a.e,a.e,[]),e._7(5120,a.h,a.y,[a.w]),e._7(5120,e.b,function(l){return[l]},[a.h]),e._7(4608,u.l,u.l,[]),e._7(6144,u.k,null,[u.l]),e._7(4608,u.i,u.i,[u.k]),e._7(6144,u.b,null,[u.i]),e._7(4608,u.j,u.o,[y.c,e.y,u.m]),e._7(4608,u.p,u.p,[u.j,u.n]),e._7(5120,u.a,function(l,n){return[l,new B,new j(n)]},[u.p,a.k]),e._7(5120,u.g,u.q,[u.b,[2,u.a]]),e._7(4608,u.c,u.c,[u.g]),e._7(4608,_,_,[u.c,a.k]),e._7(4608,z,z,[_,a.k]),e._7(512,y.b,y.b,[]),e._7(1024,e.k,P.p,[]),e._7(1024,e.v,function(){return[a.r()]},[]),e._7(512,a.w,a.w,[e.o]),e._7(1024,e.d,function(l,n){return[P.s(l),a.x(n)]},[[2,e.v],a.w]),e._7(512,e.e,e.e,[[2,e.d]]),e._7(131584,e.g,e.g,[e.w,e.U,e.o,e.k,e.j,e.e]),e._7(512,e.f,e.f,[e.g]),e._7(512,P.a,P.a,[[3,P.a]]),e._7(1024,a.q,a.t,[[3,a.k]]),e._7(512,a.p,a.c,[]),e._7(512,a.b,a.b,[]),e._7(256,a.g,{useHash:!0},[]),e._7(1024,y.g,a.s,[y.l,[2,y.a],a.g]),e._7(512,y.f,y.f,[y.g]),e._7(512,e.i,e.i,[]),e._7(512,e.t,e.F,[e.i,[2,e.G]]),e._7(1024,a.i,function(){return[[{path:"login",component:p},{path:"signup",component:h},{path:"chat",component:O,canActivate:[z]},{path:"",redirectTo:"chat",pathMatch:"full"}]]},[]),e._7(1024,a.k,a.u,[e.g,a.p,a.b,y.f,e.o,e.t,e.i,a.i,a.g,[2,a.o],[2,a.j]]),e._7(512,a.l,a.l,[[2,a.q],[2,a.k]]),e._7(512,L,L,[]),e._7(512,u.e,u.e,[]),e._7(512,u.d,u.d,[]),e._7(512,i,i,[]),e._7(256,u.m,"XSRF-TOKEN",[]),e._7(256,u.n,"X-XSRF-TOKEN",[])])});Object(e.O)(),P.i().bootstrapModuleFactory(K).catch(function(l){return console.log(l)})}},[0]);