import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cardscontainer',
  templateUrl: './cardscontainer.component.html',
  styleUrls: ['./cardscontainer.component.css']
})
export class CardscontainerComponent implements OnInit {
  @Input() data;

  constructor() {}

  ngOnInit() {}
}
