import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../model/agent';
const baseUrl = 'http://localhost:8080/api/v1';
@Injectable({
  providedIn: 'root'
})
export class AgentServiceService {
   
  constructor(private http: HttpClient) { }

  public getAgents(): Observable<Agent[]>{
    return this.http.get<Agent[]>(`${baseUrl}/agents`);
  }

  public getCountAgentsByStatus(): Observable<number[]>{
    return this.http.get<number[]>(`${baseUrl}/statuscount`);
  }
}
