import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './filter.pipe';
import { HighDirective } from './high.directive';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {Interceptor} from './intercep';
import { ServersComponent } from './servers/servers.component';
import {Ng2PaginationModule} from 'ng2-pagination';
import {HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import {S2Component} from './s2/s2.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { SComponent } from './s/s.component';
import {NameService} from './name.service';
import { AlbumService } from './album.service';
import { HttpClient } from 'selenium-webdriver/http';
import { DummyComponent } from './dummy/dummy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
ServersComponent,

    FilterPipe, HighDirective,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    SComponent,
    S2Component,
    DummyComponent
   
  ],
  imports: [
    BrowserModule, Ng2PaginationModule,
    FormsModule,
   HttpClientModule,
    AppRoutingModule
  ],
  providers: [ServersService,AlbumService,NameService, AuthService, AuthGuard, ServerResolver, 
    {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
