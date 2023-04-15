import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss']
})
export class CustomButtonComponent implements OnInit {
  @Input() label = '';
  @Input() btnWidth = '';
  constructor() { }

  ngOnInit(): void {
  }

}
