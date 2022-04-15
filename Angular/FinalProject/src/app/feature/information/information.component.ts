import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  findNissan(){
    this.router.navigate(['/varnacars/allcars', {info: "nissan"}])
  }

}
