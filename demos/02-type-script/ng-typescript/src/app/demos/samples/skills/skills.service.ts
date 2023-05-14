import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  constructor(private httpClient: HttpClient) { }

  // the return type can be avoided - just there to show the antipattern
  getSkills(): Observable<Skill[]> {
    return this.httpClient
      .get<Skill[]>(`${environment.api}skills`)
      .pipe(tap((data) => console.log('Received skills:', data)));
  }

  getSkill(id: number) {
    return this.httpClient.get<Skill>(`${environment.api}skills/${id}`);
  }

  addSkill(skill: Skill) {
    return this.httpClient.post<Skill>(`${environment.api}skills`, skill);
  }

  updateSkill(skill: Skill) {
    return this.httpClient.put<Skill>(
      `${environment.api}skills/${skill.id}`,
      skill
    );
  }

  deleteSkill(skill: Skill) {
    return this.httpClient.delete<Skill>(
      `${environment.api}skills/${skill.id}`
    );
  }
}
