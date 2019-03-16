import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailsComponent } from './emails/emails.component';
import { EmailListComponent } from './emails/email-list/email-list.component';
import { CreateEmailComponent } from './emails/create-email/create-email.component';
import { HeaderComponent } from './header/header.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EmailDataComponent } from './emails/email-list/email-data/email-data.component';

const appRoutes: Routes = [
  {path: '', component: EmailListComponent },
  {path: 'emails', component: EmailListComponent },
  {path: 'create', component: CreateEmailComponent },
  {path: 'data', component: EmailDataComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EmailsComponent,
    EmailListComponent,
    CreateEmailComponent,
    HeaderComponent,
    EmailDataComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
