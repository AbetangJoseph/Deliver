import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-howitworks',
  templateUrl: './howitworks.component.html',
  styleUrls: ['./howitworks.component.css']
})
export class HowitworksComponent implements OnInit {
  @Input() data;

  constructor() {}

  ngOnInit() {}
}
