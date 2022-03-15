import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  imageSrc = 'assets/images/Logo.png'  
  imageAlt = 'pic'
  viberImg = 'assets/svg/viber-brands.svg' 
  whatsapp = 'assets/svg/whatsapp-brands.svg'
  bars ='assets/svg/bars-solid.svg' 
  constructor() { }

  ngOnInit(): void {
    
  }
  openMenu() {
    let main = document.getElementById("main")
    let hiddenMenu = document.getElementById("hidden-nav-bar")
    if (hiddenMenu!.style.display == "flex") {
      hiddenMenu!.style.display = "none"
      main!.style.top = "0px"

    } else if (hiddenMenu!.style.display == "none" || hiddenMenu!.style.display == "") {
      hiddenMenu!.style.display = "flex";
      main!.style.top = "50px"
      console.log(screen.width);
      if (screen.width <= 730) {
        main!.style.top = "130px"
      }
    }
  }
}
