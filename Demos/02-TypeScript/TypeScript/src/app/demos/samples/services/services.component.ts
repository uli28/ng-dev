import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Voucher } from '../model';
import { Skill } from '../skills/skill.model';
import { SkillsService } from '../skills/skills.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  url = 'http://localhost:3000/skills';

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {}

  logPipe = (msg: string, data: any) => {
    console.log(`logPipe() - ${msg}:`, data);
  };

  getMockPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        console.log('Async Task Complete');
        if (true) {
          resolve(JSON.stringify({ Id: 1, Person: 'Hugo Wolf' }));
        } else {
          reject('Big Error: Promise rejected');
        }
      }, 1000);
    });
  }

  usingPromises() {
    this.getMockPromise()
      .then((data) => this.logPipe('Date received from getMockPromise', data))
      .catch((err) => console.log('Err:', err));
  }

  usingFetch() {
    fetch(this.url)
      .then<Voucher[]>((resp: Response) => {
        console.log('Response received from fetch', resp);
        return resp.json(); // Notice Response Object
      })
      .then((data: any[]) => {
        console.log('Data received from fetch', data);
      });
  }

  usingFetchAwait() {
    async function getSkills() {
      const response = await fetch('http://localhost:3000/skills');
      const voucher = await response.json();
      console.log('Data received using fetch - await');
      console.log(voucher);
    }

    getSkills();
  }

  postFetch() {
    // Make sure you have installed json-server: npm i -g json-server
    // Run it: json-server db.json -> provides skills api

    const api = 'http://localhost:3000/';

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

    fetch(api, options)
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
    const api = 'http://localhost:3000/skills';

    await axios.get(api).then((result) => console.log(result.data));

    const param: Skill = {
      name: 'Azure',
      completed: true,
    };

    axios.post(api, param);
  }

  consumeService() {
    this.skillsService.getSkills().subscribe((data: Skill[]) => {
      console.log('Data from skillsService ', data);
    });
  }
}
