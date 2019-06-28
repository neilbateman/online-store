import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { PostplaceComponent } from './postplace/postplace.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NguiStickyModule } from '@ngui/sticky';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    PostplaceComponent,
    PostDetailComponent,
    PostComponent,
    EditPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    NguiStickyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
