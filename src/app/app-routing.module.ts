import { PercentagecalculatorComponent } from './percentagecalculator/percentagecalculator.component';
import { HomeComponent } from './home/home.component';
import { PpfComponent } from './ppf/ppf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
{path: 'ppf',component: PpfComponent},
{path: 'about',component: AboutComponent},
{path: 'home', component: HomeComponent},
{path: 'percentagecalculator', component: PercentagecalculatorComponent},
{path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
