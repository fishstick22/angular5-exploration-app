import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { TwainService } from './twain.service';

@Component({
  selector: 'twain-quote',
  template: '<p class="twain"><i>{{quote}}</i></p>',
  // templateUrl: './twain.component.html',
  // styleUrls: ['./twain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TwainComponent implements OnInit {

  intervalId: number;
  quote = '...';
  constructor(private twainService: TwainService) { }

  ngOnInit(): void {
    this.twainService.getQuote().then(quote => this.quote = quote);
  }

}
