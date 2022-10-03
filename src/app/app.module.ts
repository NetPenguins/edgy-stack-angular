import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UiStyleToggleService} from "./services/ui-style-toggle.service";
import {StorageService} from "./services/local-storage.service";
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CookieModule } from 'ngx-cookie';
import { PostsService } from './services/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PostComponent } from './components/post/post.component';
import { HighlightService } from './services/highlight.service';
import { PostsComponent } from './components/posts/posts.component';
import { ThemetoggleComponent } from './components/themetoggle/themetoggle.component';
import { HeroHeaderComponent } from './components/hero-header/hero-header.component';
import { HeroSubtitleComponent } from './components/hero-subtitle/hero-subtitle.component';
import { AuthorLinkComponent } from './components/author-link/author-link.component';
import { GraphQLModule } from './graphql.module';
import { HeroAsideComponent } from './components/hero-aside/hero-aside.component';

export function themeFactory(themeService: UiStyleToggleService) {
  return () => themeService.setThemeOnStart();
}

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
<<<<<<< Updated upstream
=======
    SpinnerComponent,
    PostComponent,
    PostsComponent,
    ThemetoggleComponent,
    HeroHeaderComponent,
    HeroSubtitleComponent,
    AuthorLinkComponent,
    HeroAsideComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CookieModule.forRoot(),
    GraphQLModule,
  ],
  providers: [
    UiStyleToggleService,
    StorageService,
    PostsService,
    HighlightService,
    {provide: APP_INITIALIZER, useFactory: themeFactory, deps: [UiStyleToggleService], multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
