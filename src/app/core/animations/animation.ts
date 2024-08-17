import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('void', style({
    transform: 'translateX(-100%)',
    opacity: 0
  })),
  transition(':enter', [
    animate('300ms ease-out', style({
      transform: 'translateX(0)',
      opacity: 1
    }))
  ])
]);

export const bounceAnimation = trigger('bounce', [
  transition(':enter', [
    animate('1s', keyframes([
      style({ transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2 }),
      style({ transform: 'scale3d(0.9, 0.9, 0.9)', offset: 0.4 }),
      style({ transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6 }),
      style({ transform: 'scale3d(0.97, 0.97, 0.97)', offset: 0.8 }),
      style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
    ]))
  ])
])
