import { trigger, state, style, transition, animate, group, query, stagger, keyframes } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

export const Slide = [
    trigger('slideInOut', [
        transition(':enter', [
          style({ transform: 'translateX(25%)' }),
          style({opacity: 0.0}),
          animate('200ms ease-in', style({transform: 'translateX(0%)', opacity: 1})),
        ]),
        transition(':leave', [
          animate('200ms ease-in', style({transform: 'translatex(-25%)', opacity: 0.0}))
        ])
      ])
];

export const APP: any = {
    ApiEndpoint: 'http://192.3.249.132:5000/rest/v1/',
/*     ApiEndpoint: 'http://backequipos.us-east-2.elasticbeanstalk.com/rest/v1/', */
    AppBaseUrl: 'http://localhost:4200'
}
