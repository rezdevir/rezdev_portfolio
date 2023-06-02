import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.scss']
})
export class CardViewComponent {
  @Input() img_url:string | undefined;
  @Input() text:string | undefined;
  @Input() dllink:string | undefined;
  @Input() dltext:string | undefined;
}
