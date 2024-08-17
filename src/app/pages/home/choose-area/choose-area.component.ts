import { Component } from '@angular/core';
import { VisibilityDirective } from '../../../core/directives/visibility.directive';

@Component({
  selector: 'app-choose-area',
  standalone: true,
  imports: [VisibilityDirective],
  templateUrl: './choose-area.component.html',
  styleUrl: './choose-area.component.scss'
})
export class ChooseAreaComponent {

}
