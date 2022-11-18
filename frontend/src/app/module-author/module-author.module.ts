import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAuthorRoutingModule } from './module-author-routing.module';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    NewComponent,
    EditComponent,
    ListComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ModuleAuthorRoutingModule
  ]
})
export class ModuleAuthorModule { }
