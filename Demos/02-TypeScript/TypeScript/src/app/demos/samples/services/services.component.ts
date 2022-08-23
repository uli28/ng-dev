import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  // antipattern - use environment.ts
  skillsapi = 'http://localhost:3000/skills';
  skills: Skill[];

  constructor(private skillsService: SkillsService, private http: HttpClient) {}

  usingFetch() {
    fetch(this.skillsapi)
      .then((resp: Response) => {
        console.log('Response received from fetch', resp);
        return resp.json(); // Notice Response Object
      })
      .then((data: Skill[]) => {
        console.log('Data received from fetch', data);
      });
  }

  usingFetchAwait() {
    async function getSkills() {
      const response = await fetch(environment.skillsApi);
      const skills = await response.json();
      console.log('Data received using fetch - await', skills);
    }

    getSkills();
  }

  postFetch() {
    // Make sure you have installed json-server: npm i -g json-server
    // Run it: json-server db.json -> provides skills api
    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(param),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    fetch(this.skillsapi, options)
      .then(function (res) {
        if (res.ok) {
          return res.statusText;
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  async usingAxios() {
    const api = this.skillsapi;

    await axios.get(api).then((result) => console.log(result.data));

    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    axios.post(api, param);
  }

  // antipattern - try to keep data operation in services
  useClientInComponent() {
    //untyped
    this.http.get(this.skillsapi).subscribe((data) => console.log(data));
    //typed
    this.http
      .get<Skill[]>(this.skillsapi)
      .subscribe((data) => console.log(data));
  }

  consumeService() {
    // assign to prop in component for use in template
    this.skillsService.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }
}
