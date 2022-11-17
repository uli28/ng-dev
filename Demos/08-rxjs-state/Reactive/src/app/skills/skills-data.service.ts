import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Skill } from './skill.model';

@Injectable()
export class SkillsDataService extends DefaultDataService<Skill> {
  constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
    super('Skill', http, httpUrlGenerator);
  }
}
