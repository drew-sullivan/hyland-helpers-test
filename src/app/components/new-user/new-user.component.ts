import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person.service';
import { IPerson } from '../shared/person.model';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  firstName = '';
  lastName = '';
  skills = [''];

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  addNewSkill() {
    this.skills[this.skills.length] = '';
  }

  addNewUser() {
    console.log(this.firstName + ' ' + this.lastName);
    console.log(this.skills);

    const person: IPerson = {
      id: -1 , // this will be set in the service
      numClaps: 0,
      firstName: this.firstName,
      lastName: this.lastName,
      mostHelpfulWith: this.skills
    };

    this.personService.addPerson(person);
  }

  removeSkill(index: number) {
    if (this.skills.length > 1) {
      for (let i = index; i < this.skills.length; i++) {
        this.skills[i] = this.skills[i + 1];
      }
    this.skills.length = this.skills.length - 1;
    }
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
