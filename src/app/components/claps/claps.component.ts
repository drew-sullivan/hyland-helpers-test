import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-claps',
  templateUrl: './claps.component.html',
  styleUrls: ['./claps.component.scss']
})
export class ClapsComponent implements OnInit {

  @Input() numClaps: number;
  @Output() clap = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.clap.emit({});
  }

}
