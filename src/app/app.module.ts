import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { CustomPreloadService } from './custom-preload.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer, metaReducers } from './store';
import { environment } from 'src/environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { AuthService } from './shared/servises/auth/auth.service';
import { CustomRouterSerializer } from './store/reducers/router.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducer, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot({serializer: CustomRouterSerializer}),
    EffectsModule.forRoot(effects)
  ],
  providers: [
    AuthGuard,
    CustomPreloadService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
