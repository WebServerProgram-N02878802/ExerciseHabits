import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

declare var googleyolo: any;
declare var FB: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _App: AppService) {

    //get personal app ID + setup fb oAuth
    window.fbAsyncInit = () => {
      FB.init({
        appId: '2060883297484199',
        cookie: true,
        xfbml: true,
        version: 'v2.12'
      });

      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = <HTMLScriptElement>d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  ngOnInit() {
  }

  login(name: string, password: string) {
    console.log('logging user - component');
    this._App.login(name, password);
  }

  fblogin() {
    FB.login((credentials: any) => {
      FB.api("/me?fields=email,name,picture", (response: any) => {
        console.log(response);
        this._App.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      })
    }, { scope: "email, user_photos" })
  }

  googlelogin() {
    googleyolo.hint({
      supportedAuthMethods: [
        "https://accounts.google.com"
      ],
      supportedIdTokenProviders: [
        {
          uri: "https://accounts.google.com",
          clientId: "775323368270-icqk8go33l980hdk18citpmemnibgada.apps.googleusercontent.com"
        }
      ]
    }).then((credentials: any) => {
      this._App.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
      console.log(credentials);
    })
  }

}