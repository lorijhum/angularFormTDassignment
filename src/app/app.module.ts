import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaxComponent } from './max/max.component';
import { Routes, RouterModule } from '@angular/router';
import { LoriComponent } from './lori/lori.component';

const appRoutes: Routes = [
  { path: 'max', component: MaxComponent},
  { path: 'lori', component: LoriComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MaxComponent,
    LoriComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
