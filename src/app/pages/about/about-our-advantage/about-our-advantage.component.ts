import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { VisibilityDirective } from '../../../core/directives/visibility.directive';

@Component({
  selector: 'app-about-our-advantage',
  standalone: true,
  imports: [MatIconModule, VisibilityDirective],
  templateUrl: './about-our-advantage.component.html',
  styleUrl: './about-our-advantage.component.scss',
  host: {
    class: 'container'
  }
})
export class AboutOurAdvantageComponent {
  advantages = [
    {
      text: 'Having automobile export qualifications and automobile quality testing.',
      icon: 'workspace_premium'
    },
    {
      text: 'Full brand coverage, multiple vehicle procurement only requires contacting one supplier.',
      icon: 'signal_cellular_alt'
    },
    {
      text: "Reasonable price, increase customers' profit.",
      icon: 'recommend'
    },
    {
      text: 'The entire automotive industry chain service process covers pre-sales, during sales, and after-sales.',
      icon: 'diamond'
    },
    {
      text: '16 years of industry experience, with rich export experience and mature supply chain.',
      icon: 'offline_bolt'
    },
    {
      text: 'Provide a mature product selection platform to assist dealers in serving end customers.',
      icon: 'work'
    },
    {
      text: 'We have a mature auto parts supply system, and you can even open a local auto repair shop.',
      icon: 'view_cozy'
    },
    {
      text: 'Provide diversified cooperation models and flexible payment methods.',
      icon: 'recycling'
    }
  ]
}
