import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Agent } from '../model/agent';
import { AgentServiceService } from '../service/agent-service.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  agents: Agent[]=[];
  count: number[]=[];
  constructor(private agentService: AgentServiceService) { }

  ngOnInit(): void {
    this.getAgents();
    this.getCountAgentsByStatus();
  }

  public getAgents(): void {
    this.agentService.getAgents().subscribe(
      (response: Agent[]) => {
        this.agents = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  public getCountAgentsByStatus(): void {
    this.agentService.getCountAgentsByStatus().subscribe(
      (response: number[]) => {
        this.count = response;
        console.log(response);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
