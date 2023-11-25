import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Platform} from "@ionic/angular";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash = true;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    this.initializeApp();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(() => this.showSplash = false );
    });
  }

}


