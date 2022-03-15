import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FinalProject';
  selectedFile!: File;
 

  constructor(private http: HttpClient) { }

  onChangeEvent(event: any) {
    this.selectedFile = event.target.files[0]
    console.log(this.selectedFile);

  }

  onSubmitEvent() {
    const headers = {
      'Content-Type': 'application/json',
      'X-Parse-Application-Id': '4hPPyxt4b0tlUbJAUzz4SdtJ4vqBXpPsdadPF9jr',
      'X-Parse-REST-API-Key': 'JoUCGU1crWNA2LptiPFx1WHOPlkGpE9C55TbK29w',
      };
   const body = {
      carName: "test2",
      carModel: "Viper",
      images: "https://elitetraveler.com/wp-content/uploads/2019/07/Screenshot-2020-05-12-at-15.10.34.png",
    };
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.http.post('https://parseapi.back4app.com/classes/allCars', body, { headers })
      .subscribe(res => {
        console.log(res);

      })

  }
}
