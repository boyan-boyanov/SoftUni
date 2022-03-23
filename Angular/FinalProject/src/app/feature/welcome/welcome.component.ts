import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
backgroundImg = '../assets/images/luxury-private-garage-wallpaper-preview.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
