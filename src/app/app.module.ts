import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { HomeComponent } from './components/home/home.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AllbusService } from './services/allbus.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BusSearchComponent,
    HomeComponent,
    SeatselectionComponent,
    ConfirmationComponent,
    AboutComponent,
    ContactComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AllbusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
