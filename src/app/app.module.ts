import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { RecetasListComponent } from './components/recetas/recetas-list/recetas-list.component';
import { RecetaComponent } from './components/recetas/receta/receta.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { RecetaService } from  './services/receta.service';


@NgModule({
  declarations: [
    AppComponent,
    RecetasComponent,
    RecetasListComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [RecetaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
