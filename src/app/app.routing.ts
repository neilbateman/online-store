import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { PostplaceComponent } from './postplace/postplace.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostComponent } from './post/post.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostplaceComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
   {
    path: 'postplace',
    component: PostplaceComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'post',
    component: PostComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
