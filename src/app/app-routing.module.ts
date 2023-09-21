import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { sustentationComponent } from './sustentation.component';
import { AvatarComponent } from './avatar/avatar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'avatar', pathMatch: 'full' },
  { path: 'avatar', component: AvatarComponent },
  { path: 'sustentation', component: sustentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
