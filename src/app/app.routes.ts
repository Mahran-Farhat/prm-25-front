import { Routes } from '@angular/router';
import { ListProjects } from './projects/list-projects/list-projects';
import { AddProject } from './projects/add-project/add-project';
import { Search } from './projects/search/search';
import { App } from './app';

export const routes: Routes = [
    {path:"",component:ListProjects},
    {path:"projects",component:ListProjects},
    {path:"add-project",component:AddProject},
    {path:"search-projects",component:Search}
];
