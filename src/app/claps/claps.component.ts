import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claps',
  templateUrl: './claps.component.html',
  styleUrls: ['./claps.component.css']
})
export class ClapsComponent implements OnInit {

  @Input() numClaps: number;

  constructor() { }

  ngOnInit() {
  }

}
