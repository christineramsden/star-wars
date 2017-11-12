import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { PeopleComponent } from './people/people.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { SpeciesComponent } from './species/species.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
    { path: 'films', component: FilmsComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'starships', component: StarshipsComponent },
    { path: 'vehicles', component: VehiclesComponent },
    { path: 'species', component: SpeciesComponent },
    { path: 'planets', component: PlanetsComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
