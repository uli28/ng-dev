import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    return this.getSkills().pipe(
      map((skills) => skills.find((sk) => sk.id == id))
    );
  }

  addSkill(skill: Skill) {
    return this.httpClient.post<Skill>(this.url, skill);
  }

  deleteSkill(skill: Skill) {
    return this.httpClient.delete(this.url);
  }
}
