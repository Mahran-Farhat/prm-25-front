import { Routes } from '@angular/router';
import { ListProjects } from './projects/list-projects/list-projects';
import { AddProject } from './projects/add-project/add-project';
import { Search } from './projects/search/search';
import { App } from './app';
import { UpdateProject } from './projects/update-project/update-project';

export const routes: Routes = [
    {path:"",component:ListProjects},
    {path:"products",component:ListProjects},
    {path:"add-project",component:AddProject},
    {path:"search-projects",component:Search},
    {path:"update-project/:id",component:UpdateProject}
];
