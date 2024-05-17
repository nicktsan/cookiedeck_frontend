import { Component } from '@angular/core';
import SuperTokens from 'supertokens-web-js';
import Session from 'supertokens-web-js/recipe/session';
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'

SuperTokens.init({
  appInfo: {
      apiDomain: "http://localhost:8080",
      apiBasePath: "/supertokenauth",
      appName: "...",
  },
  recipeList: [
      Session.init(),
      EmailPassword.init(),
  ],
});

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}