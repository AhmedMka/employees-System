import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {DataTableModule} from 'angular-6-datatable';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesListComponent } from './employeesList/employees-list/employees-list.component';
import { ModifyComponent } from './employeesList/modify/modify.component';
import { environment } from '../environments/environment';
import { EmployeesService } from './employees.service';
import { GenderService } from './gender.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesListComponent,
    ModifyComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    Ng2SearchPipeModule,
    DataTableModule,
    FormsModule,
    CustomFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'employeesList/empEdit/new', component: ModifyComponent},
      {path: 'employeesList/empEdit/:id', component: ModifyComponent},
      {path: 'employeesList', component: EmployeesListComponent},
      {path: '**', component: HomeComponent},


    ]),
  ],
  providers: [EmployeesService, GenderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
