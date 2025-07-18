import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ResultsComponent } from './pages/results/results.component';
import { SolutionsComponent } from './pages/solutions/solutions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solucoes', component: SolutionsComponent },
  { path: 'resultados', component: ResultsComponent },
  { path: 'quem-somos', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContactComponent },
  { path: '**', redirectTo: '' }, // Rota curinga para redirecionar para home
];
