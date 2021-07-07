import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { PopularComponent } from './popular/popular.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: PopularComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'search-result', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }