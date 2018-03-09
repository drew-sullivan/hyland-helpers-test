import { Component, OnInit, NgZone } from '@angular/core';
import { PersonService, IPerson } from '../../shared/index';
import { Observable } from 'rxjs/Observable';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px`);
  people: IPerson[];

  constructor(zone: NgZone, private personService: PersonService) {
    this.mediaMatcher.addListener(mql => {
      zone.run(() => this.mediaMatcher = mql);
    });
  }

  ngOnInit() {
    this.people = this.personService.getPeople().sort(sortByNumClaps);
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}

const sortByNumClaps = (p1: IPerson, p2: IPerson): number => p2.numClaps - p1.numClaps;
