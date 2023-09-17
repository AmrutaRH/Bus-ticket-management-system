import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BusSearchComponent } from './components/bus-search/bus-search.component';
import { HomeComponent } from './components/home/home.component';
import { SeatselectionComponent } from './components/seatselection/seatselection.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "help", component: HelpComponent },
  { path: "header", component: HeaderComponent },
  { path: "footer", component: FooterComponent },
  { path: "veiw-ticket", component: BusSearchComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "seat-selection/:key", component: SeatselectionComponent },
  { path: "confirmation", component: ConfirmationComponent },
  { path: "*", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
