webpackJsonp([1],{0:function(l,n,t){l.exports=t("cDNt")},YuZA:function(l,n){function t(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}t.keys=function(){return[]},t.resolve=t,l.exports=t,t.id="YuZA"},cDNt:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("1GK5");const u={production:!0,backendUrl:"mumarov.localhost.run"};var i=t("CaT7");class s{}class r{}var a=t("W1ez"),o=t("65Ps"),c=t("pJXC"),_=t("Fxis");class d{constructor(l,n){this.http=l,this.router=n,this.USER_NAME_KEY="ws-chat-server-user-name",this.TOKEN_KEY="ws-chat-server-token"}getUserName(){return localStorage.getItem(this.USER_NAME_KEY)}getToken(){return localStorage.getItem(this.TOKEN_KEY)}hasAuth(){const l=this.getUserName(),n=this.getToken();return null!==l&&null!==n}storeUserName(l){localStorage.setItem(this.USER_NAME_KEY,l)}storeToken(l){localStorage.setItem(this.TOKEN_KEY,l)}login({userName:l,password:n}){return this.http.post(`http://${u.backendUrl}/api/auth`,{userName:l,password:n}).pipe(Object(_.a)(l=>(this.storeUserName(l.userName),l)))}signup({userName:l,password:n,firstName:t,lastName:e}){return this.http.post(`http://${u.backendUrl}/api/users`,{firstName:t,lastName:e,userName:l,password:n})}logout(){localStorage.clear(),this.router.navigate(["/login"])}}var m=t("tOHq");class p{constructor(l,n){this.authService=l,this.router=n,this.loginCard=!0}ngOnInit(){}ngAfterViewInit(){this.initializeLoginCardElements()}initializeLoginCardElements(){this.initializeTextField(this.usernameTextFieldElm.first.nativeElement),this.initializeTextField(this.passwordTextFieldElm.first.nativeElement),this.initializeRipple(this.loginButtonElm.first.nativeElement),this.initializeRipple(this.createAccountButtonElm.first.nativeElement)}login(){this.authService.login({userName:this.usernameTextFieldElm.first.nativeElement.firstElementChild.value,password:this.passwordTextFieldElm.first.nativeElement.firstElementChild.value}).pipe(Object(m.a)(1)).subscribe(()=>{this.router.navigateByUrl("/chat")},console.log)}showSignUpCard(){this.router.navigateByUrl("/signup")}initializeTextField(l){return new a.a(l,void 0,this.initializeRipple)}initializeRipple(l){return new o.a(l)}}var g=e.Y({encapsulation:0,styles:[[".login-root[_ngcontent-%COMP%]{height:100%;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-grid-rows:1fr;grid-template-rows:1fr;background-color:purple}.mdc-card.login-card[_ngcontent-%COMP%]{-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;display:-ms-grid;display:grid;-ms-grid-columns:auto;grid-template-columns:auto;-ms-grid-rows:auto;grid-template-rows:auto;grid-gap:8px;padding:8px;background-color:#fff}.mdc-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:16px}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-color:purple}"]],data:{}});function h(l){return e._14(0,[e._11(671088640,1,{usernameTextFieldElm:1}),e._11(671088640,2,{passwordTextFieldElm:1}),e._11(671088640,3,{loginButtonElm:1}),e._11(671088640,4,{createAccountButtonElm:1}),(l()(),e._0(4,0,null,null,48,"div",[["class","login-root"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n  "])),(l()(),e._0(6,0,null,null,45,"div",[["class","mdc-card login-card"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(8,0,null,null,7,"section",[["class","mdc-card__primary"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(10,0,null,null,1,"h1",[["class","mdc-card__title mdc-card__title--large"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Login To Chat Server"])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(13,0,null,null,1,"h2",[["class","mdc-card__subtitle"]],null,null,null,null,null)),(l()(),e._13(-1,null,["with your details"])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(17,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(19,0,[[1,0],["usernameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(21,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","username"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(23,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","username"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Username"])),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(26,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(30,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(32,0,[[2,0],["passwordTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(34,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","password"],["minlength","8"],["required",""],["type","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(36,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Password"])),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(39,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n\n    "])),(l()(),e._0(43,0,null,null,7,"section",[["class","mdc-card__actions"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(45,0,[[3,0],["loginButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.login()&&e),e},null,null)),(l()(),e._13(-1,null,["\n        Login\n      "])),(l()(),e._13(-1,null,["\n\n      "])),(l()(),e._0(48,0,[[4,0],["createAccountButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.showSignUpCard()&&e),e},null,null)),(l()(),e._13(-1,null,["\n        Create Account\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n"])),(l()(),e._13(-1,null,["\n\n\n\n\n"]))],null,null)}var f=e.W("app-login",p,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-login",[],null,null,null,h,g)),e.Z(1,4308992,null,0,p,[d,c.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]);class b{constructor(l,n,t,e){this.userName=l,this.password=n,this.firstName=t,this.lastName=e}}class x{constructor(l,n){this.router=l,this.authService=n}ngOnInit(){}ngAfterViewInit(){this.initializeSignUpCardElements()}initializeSignUpCardElements(){const l=this.usernameTextFieldElm.first.nativeElement;this.initializeTextField(l),this.userNameInput=l.firstElementChild;const n=this.passwordTextFieldElm.first.nativeElement;this.initializeTextField(n),this.passwordInput=n.firstElementChild;const t=this.firstNameTextFieldElm.first.nativeElement;this.initializeTextField(t),this.firstNameInput=t.firstElementChild;const e=this.lastNameTextFieldElm.first.nativeElement;this.initializeTextField(e),this.lastNameInput=e.firstElementChild,this.initializeRipple(this.signUpButtonElm.first.nativeElement)}signUp(l){l.preventDefault();const n=new b(this.userNameInput.value,this.passwordInput.value,this.firstNameInput.value,this.lastNameInput.value);this.authService.signup(n).pipe(Object(m.a)(1)).subscribe(()=>{this.backToLogin()})}backToLogin(){this.router.navigateByUrl("/login")}initializeTextField(l){return new a.a(l,void 0,this.initializeRipple)}initializeRipple(l){return new o.a(l)}}var v=e.Y({encapsulation:0,styles:[[".login-root[_ngcontent-%COMP%]{height:100%;display:-ms-grid;display:grid;-ms-grid-columns:1fr;grid-template-columns:1fr;justify-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-grid-rows:1fr;grid-template-rows:1fr;background-color:#14c40e}.mdc-card.sign-up-card[_ngcontent-%COMP%]{-webkit-box-pack:stretch;-ms-flex-pack:stretch;justify-content:stretch;display:-ms-grid;display:grid;-ms-grid-columns:auto;grid-template-columns:auto;-ms-grid-rows:auto;grid-template-rows:auto;padding:8px;background-color:#fff}.mdc-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:16px}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-color:#14c40e}"]],data:{}});function E(l){return e._14(0,[e._11(671088640,1,{usernameTextFieldElm:1}),e._11(671088640,2,{passwordTextFieldElm:1}),e._11(671088640,3,{firstNameTextFieldElm:1}),e._11(671088640,4,{lastNameTextFieldElm:1}),e._11(671088640,5,{signUpButtonElm:1}),e._11(671088640,6,{backToLoginButtonElm:1}),(l()(),e._0(6,0,null,null,77,"div",[["class","login-root"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n  "])),(l()(),e._0(8,0,null,null,74,"form",[],null,[[null,"submit"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==l.component.signUp(t)&&e),e},null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(10,0,null,null,71,"div",[["class","mdc-card sign-up-card"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(12,0,null,null,7,"section",[["class","mdc-card__primary"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(14,0,null,null,1,"h1",[["class","mdc-card__title mdc-card__title--large"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Create an account"])),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(17,0,null,null,1,"h2",[["class","mdc-card__subtitle"]],null,null,null,null,null)),(l()(),e._13(-1,null,["with your details"])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(21,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(23,0,[[3,0],["firstNameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(25,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","firstName"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(27,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","firstName"]],null,null,null,null,null)),(l()(),e._13(-1,null,["First Name"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(30,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(34,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(36,0,[[4,0],["lastNameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(38,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","lastName"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(40,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","lastName"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Last Name"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(43,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(47,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(49,0,[[1,0],["usernameTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(51,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","username"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(53,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","username"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Username"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(56,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(60,0,null,null,11,"section",[["class","mdc-card__supporting-text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(62,0,[[2,0],["passwordTextField",1]],null,8,"div",[["class","mdc-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(64,0,null,null,0,"input",[["class","mdc-text-field__input"],["id","password"],["minlength","8"],["required",""],["type","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(66,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","password"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Password"])),(l()(),e._13(-1,null,["\n          "])),(l()(),e._0(69,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n\n      "])),(l()(),e._0(73,0,null,null,7,"section",[["class","mdc-card__actions"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n        "])),(l()(),e._0(75,0,[[5,0],["signUpButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Sign Up"])),(l()(),e._13(-1,null,["\n\n        "])),(l()(),e._0(78,0,[[6,0],["backToLoginButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.backToLogin()&&e),e},null,null)),(l()(),e._13(-1,null,["\n          Back to Login\n        "])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n"])),(l()(),e._13(-1,null,["\n\n\n\n\n"]))],null,null)}var w=e.W("app-signup",x,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-signup",[],null,null,null,E,v)),e.Z(1,4308992,null,0,x,[c.k,d],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),k=t("AdGS"),T=t("m1U/"),O=t("/XxX"),y=t("O60Z"),N=t("U2gC");class C{constructor(l,n){this.authService=l,this.router=n,this.messages=[],this.forceScrollOnMessage=!0}ngOnInit(){this.connectToServer()}ngAfterViewInit(){this.messageListElement=this.messageLists.first.nativeElement,this.textInput=this.textInputs.first.nativeElement,this.messagesScroll$=Object(T.a)(this.messageListElement,"scroll"),new a.a(this.textFieldBoxEls.first.nativeElement,void 0,l=>new o.a(l)),new o.a(this.mdcButtons.first.nativeElement)}ngOnDestroy(){this.socket.close()}formSubmit(l){l.preventDefault(),this.sendMessage()}sendMessage(){const{value:l}=this.textInput;l&&(this.socket.send(this.textInput.value),this.textInput.value="")}trackByIndex(l,n){return l}registerScrollListener(){this.scrollSub=this.messagesScroll$.pipe(Object(y.a)(l=>({sH:l.target.scrollHeight,sT:l.target.scrollTop,cH:l.target.clientHeight})),Object(O.a)(),Object(N.a)(500)).subscribe(l=>{const[n,t]=l;console.log(n.sT<t.sT),this.forceScrollOnMessage=n.sT<t.sT})}connectToServer(){this.authService.getToken()?(this.socket=new WebSocket(`ws://${u.backendUrl}/chat?token=${this.authService.getToken()}`),this.socket.addEventListener("message",l=>{const n=JSON.parse(l.data),{firstName:t,lastName:e}=n.user;this.messages.push(`${t} ${e}: ${n.content}`),setTimeout(()=>{this.messageListElement.scrollTop=this.messageListElement.scrollHeight},10)}),this.socket.addEventListener("close",l=>{console.log("You are not authorized to access chat or the chat server is dead"),setTimeout(()=>{this.connectToServer()},5e3)})):this.router.navigateByUrl("/login")}}var S=e.Y({encapsulation:0,styles:[[".chat-ui[_ngcontent-%COMP%]{height:100vh;-ms-grid-rows:1fr 0fr;grid-template-rows:1fr 0fr}.chat-ui[_ngcontent-%COMP%], .message-input[_ngcontent-%COMP%]{display:-ms-grid;display:grid}.message-input[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);-ms-grid-columns:4fr 1fr;grid-template-columns:4fr 1fr;grid-gap:8px;padding:8px 8px 0 8px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.messages-list[_ngcontent-%COMP%]{background-color:#fafad2;overflow-y:scroll}.messages-list.mdc-list.bordered-list[_ngcontent-%COMP%]{padding-top:0;padding-bottom:0;font-size:.812rem}.bordered-list[_ngcontent-%COMP%]{\n  padding-right:0;padding-left:0}.bordered-list[_ngcontent-%COMP%]   .mdc-list-item[_ngcontent-%COMP%]{\n  padding:0 16px;\n  border:1px solid rgba(0,0,0,.12)}\n\n.bordered-list[_ngcontent-%COMP%]   .mdc-list-item[_ngcontent-%COMP%]:not(:first-child){border-top:none}"]],data:{}});function F(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"li",[["class","mdc-list-item"]],null,null,null,null,null)),(l()(),e._13(1,null,["\n      ","\n    "]))],null,function(l,n){l(n,1,0,n.context.$implicit)})}function M(l){return e._14(0,[e._11(671088640,1,{messageLists:1}),e._11(671088640,2,{textInputs:1}),e._11(671088640,3,{textFieldBoxEls:1}),e._11(671088640,4,{mdcButtons:1}),(l()(),e._0(4,0,null,null,23,"div",[["class","chat-ui"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n  "])),(l()(),e._0(6,0,[[1,0],["messagesList",1]],null,4,"ul",[["class","messages-list mdc-list bordered-list"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e.V(16777216,null,null,1,null,F)),e.Z(9,802816,null,0,k.h,[e.K,e.H,e.p],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n\n  "])),(l()(),e._0(12,0,null,null,14,"div",[["class","message-input"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(14,0,[[3,0],["mdcTextField",1]],null,8,"form",[["class","mdc-text-field"]],null,[[null,"submit"]],function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==l.component.formSubmit(t)&&e),e},null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(16,0,[[2,0],["textInput",1]],null,0,"input",[["autocomplete","off"],["autofocus","true"],["class","mdc-text-field__input"],["id","my-text-field"],["type","text"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(18,0,null,null,1,"label",[["class","mdc-text-field__label"],["for","my-text-field"]],null,null,null,null,null)),(l()(),e._13(-1,null,["Type your message"])),(l()(),e._13(-1,null,["\n      "])),(l()(),e._0(21,0,null,null,0,"div",[["class","mdc-text-field__bottom-line"]],null,null,null,null,null)),(l()(),e._13(-1,null,["\n    "])),(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(24,0,[[4,0],["mdcButton",1]],null,1,"button",[["class","mdc-button mdc-button--raised"]],null,[[null,"click"]],function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.sendMessage()&&e),e},null,null)),(l()(),e._13(-1,null,["\n      Send\n    "])),(l()(),e._13(-1,null,["\n  "])),(l()(),e._13(-1,null,["\n"])),(l()(),e._13(-1,null,["\n"]))],function(l,n){var t=n.component;l(n,9,0,t.messages,t.trackByIndex)},null)}var I=e.W("app-chat-home",C,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-chat-home",[],null,null,null,M,S)),e.Z(1,4440064,null,0,C,[d,c.k],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),U=e.Y({encapsulation:2,styles:[],data:{}});function P(l){return e._14(0,[(l()(),e._13(-1,null,["\n    "])),(l()(),e._0(1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e.Z(2,212992,null,0,c.m,[c.b,e.K,e.j,[8,null],e.h],null,null),(l()(),e._13(-1,null,["\n  "]))],function(l,n){l(n,2,0)},null)}var B=e.W("app-root",r,function(l){return e._14(0,[(l()(),e._0(0,0,null,null,1,"app-root",[],null,null,null,P,U)),e.Z(1,49152,null,0,r,[],null,null)],null,null)},{},{},[]),j=t("PXDV");class z{constructor(l,n){this.authService=l,this.router=n}canActivate(l,n){return!!this.authService.hasAuth()||(this.router.navigate(["/login"]),!1)}}class K{}var L=e.X(s,[r],function(l){return e._6([e._7(512,e.j,e.T,[[8,[f,w,I,B]],[3,e.j],e.u]),e._7(5120,e.r,e._10,[[3,e.r]]),e._7(4608,k.j,k.i,[e.r,[2,k.n]]),e._7(5120,e.c,e._2,[]),e._7(5120,e.p,e._8,[]),e._7(5120,e.q,e._9,[]),e._7(4608,j.b,j.q,[k.c]),e._7(6144,e.C,null,[j.b]),e._7(4608,j.e,j.f,[]),e._7(5120,j.c,function(l,n,t,e,u){return[new j.j(l,n),new j.n(t),new j.m(e,u)]},[k.c,e.w,k.c,k.c,j.e]),e._7(4608,j.d,j.d,[j.c,e.w]),e._7(135680,j.l,j.l,[k.c]),e._7(4608,j.k,j.k,[j.d,j.l]),e._7(6144,e.A,null,[j.k]),e._7(6144,j.o,null,[j.l]),e._7(4608,e.I,e.I,[e.w]),e._7(4608,j.g,j.g,[k.c]),e._7(4608,j.h,j.h,[k.c]),e._7(5120,c.a,c.v,[c.k]),e._7(4608,c.d,c.d,[]),e._7(6144,c.f,null,[c.d]),e._7(135680,c.n,c.n,[c.k,e.t,e.i,e.o,c.f]),e._7(4608,c.e,c.e,[]),e._7(5120,c.h,c.y,[c.w]),e._7(5120,e.b,function(l){return[l]},[c.h]),e._7(4608,i.l,i.l,[]),e._7(6144,i.k,null,[i.l]),e._7(4608,i.i,i.i,[i.k]),e._7(6144,i.b,null,[i.i]),e._7(4608,i.j,i.o,[k.c,e.y,i.m]),e._7(4608,i.p,i.p,[i.j,i.n]),e._7(5120,i.a,function(l,n){return[l,new class{constructor(){this.TOKEN_KEY="ws-chat-server-token"}intercept(l,n){const t=localStorage.getItem(this.TOKEN_KEY);if(t){const e=l.clone({setHeaders:{authorization:t}});return n.handle(e)}return n.handle(l)}},new class{constructor(l){this.router=l,this.TOKEN_KEY="ws-chat-server-token"}intercept(l,n){return n.handle(l).pipe(Object(_.a)(l=>{l instanceof i.h&&l.body.token&&localStorage.setItem(this.TOKEN_KEY,l.body.token)},l=>{l instanceof i.f&&401===l.status&&this.router.navigate(["/login"])}))}}(n)]},[i.p,c.k]),e._7(5120,i.g,i.q,[i.b,[2,i.a]]),e._7(4608,i.c,i.c,[i.g]),e._7(4608,d,d,[i.c,c.k]),e._7(4608,z,z,[d,c.k]),e._7(512,k.b,k.b,[]),e._7(1024,e.k,j.p,[]),e._7(1024,e.v,function(){return[c.r()]},[]),e._7(512,c.w,c.w,[e.o]),e._7(1024,e.d,function(l,n){return[j.s(l),c.x(n)]},[[2,e.v],c.w]),e._7(512,e.e,e.e,[[2,e.d]]),e._7(131584,e.g,e.g,[e.w,e.U,e.o,e.k,e.j,e.e]),e._7(512,e.f,e.f,[e.g]),e._7(512,j.a,j.a,[[3,j.a]]),e._7(1024,c.q,c.t,[[3,c.k]]),e._7(512,c.p,c.c,[]),e._7(512,c.b,c.b,[]),e._7(256,c.g,{},[]),e._7(1024,k.g,c.s,[k.l,[2,k.a],c.g]),e._7(512,k.f,k.f,[k.g]),e._7(512,e.i,e.i,[]),e._7(512,e.t,e.F,[e.i,[2,e.G]]),e._7(1024,c.i,function(){return[[{path:"login",component:p},{path:"signup",component:x},{path:"chat",component:C,canActivate:[z]},{path:"",redirectTo:"chat",pathMatch:"full"}]]},[]),e._7(1024,c.k,c.u,[e.g,c.p,c.b,k.f,e.o,e.t,e.i,c.i,c.g,[2,c.o],[2,c.j]]),e._7(512,c.l,c.l,[[2,c.q],[2,c.k]]),e._7(512,K,K,[]),e._7(512,i.e,i.e,[]),e._7(512,i.d,i.d,[]),e._7(512,s,s,[]),e._7(256,i.m,"XSRF-TOKEN",[]),e._7(256,i.n,"X-XSRF-TOKEN",[])])});u.production&&Object(e.O)(),j.i().bootstrapModuleFactory(L).catch(l=>console.log(l))}},[0]);
//# sourceMappingURL=main.f702500e6cf9540d07ae.bundle.js.map