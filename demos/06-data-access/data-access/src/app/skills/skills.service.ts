import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) {}

  private url = `${environment.api}skills`;

  getSkills() {
    return this.httpClient.get<Skill[]>(this.url);
  }

  getSkill(id: number) {
    return this.httpClient.get<Skill>(`${this.url}/${id}`);
  }

  addSkill(skill: Skill) {
    return this.httpClient.post<Skill>(this.url, skill);
  }

  updateSkill(skill: Skill) {
    return this.httpClient.put<Skill>(`${this.url}/${skill.id}`, skill);
  }

  deleteSkill(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
