import { trigger, transition, style, group, animate, keyframes } from '@angular/animations';

export const softAppearAnimation = trigger('softAppearAnimation', [
  transition(':enter', [
    style({height: 0, padding: 0, margin: 0, border: 0, opacity: 0}),
    animate('.2s', style({opacity: 1, height: '20px', offset: 1}))
  ]),
  transition(':leave', [
    animate('.2s', style({ height: 0, padding: 0, margin: 0, border: 0 }))
  ])
]);
