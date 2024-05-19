import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'address', component: AddressFormComponent },
  { path: 'table', component: TableComponent },
  { path: 'tree', component: TreeComponent },
  { path: 'drag-drop', component: DragDropComponent },
];
