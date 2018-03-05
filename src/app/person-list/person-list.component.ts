import { IPerson } from './../shared/person.model';
import { PersonService } from './../shared/person.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people: IPerson[];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.people = this.personService.getPeople();
  }

}
