import { Component, OnInit } from '@angular/core';
import { PersonService } from '../shared/person.service';
import { IPerson } from '../shared/person.model';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
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

  customTrackBy(index: number, obj: any): any {
    return index;
  }
}
