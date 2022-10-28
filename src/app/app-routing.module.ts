import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent/agent.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/agents', pathMatch: 'full' },
  { path: 'agents', component: AgentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
