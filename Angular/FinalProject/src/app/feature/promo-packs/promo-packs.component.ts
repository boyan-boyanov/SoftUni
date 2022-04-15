import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-promo-packs',
  templateUrl: './promo-packs.component.html',
  styleUrls: ['./promo-packs.component.css'],
  animations: [

    trigger('listAnimation', [

      transition(':increment', [
        query(':enter', [
          style({ opacity: 0 }),
          animate('3s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
          ])),
        ], { optional: true }),
      ]),

      transition(':decrement', [
        query(':leave', animate('3s ease-in', keyframes([
          style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
          style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
          style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
        ])), { optional: true })
      ])

    ]),

    trigger('explainerAnim', [
      transition(':enter', [
        query('.col', [
          style({ opacity: 0, transform: 'translateX(-40px)' }),
          stagger('500ms', [
            animate('800ms 1.2s ease-out',
              style({ opacity: 1, transform: 'translateX(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class PromoPacksComponent implements OnInit {
  selectedFile!: File;
  items = []
  constructor() {
    this.items = ['first']
  }

  ngOnInit(): void {
    let hiddenMenu = document.getElementById("hidden-nav-bar")
       hiddenMenu!.style.display = "none"
  }

  onChangeEvent(event: any) {
    this.selectedFile = event.target.files[0]
  }

  pushItem() {
    this.items.push('max')
  }

  removeItem() {
    this.items.pop();
  }

}
