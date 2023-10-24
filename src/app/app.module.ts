import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { OuterThingComponent } from './outer-thing/outer-thing.component';
import { InnerThingComponent } from './outer-thing/inner-thing/inner-thing.component';
import { DependencyComponent } from './common/dependency/dependency.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    OuterThingComponent,
    InnerThingComponent,
    DependencyComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
