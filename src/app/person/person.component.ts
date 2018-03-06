import { IPerson } from './../shared/person.model';
import { Component, OnInit, Input } from '@angular/core';
import { PersonService } from '../shared/person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: IPerson;

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  incrementClap(id: number): void {
    this.personService.addClap(id);
  }

}
