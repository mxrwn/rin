import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UploadComponent } from './components/upload/upload.component';
import { CounterComponent } from './components/counter/counter.component';

const routes: Routes = [
{
  path: 'upload', component: UploadComponent
},
{
  path: '', component: CounterComponent
},
{
  path: 'gallery', component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
