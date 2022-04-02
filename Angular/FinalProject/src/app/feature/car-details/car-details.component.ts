import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCommentService } from 'src/app/services/add-comment.service';
import { IsAdminService } from 'src/app/services/is-admin.service';
import { ReserveCarService } from 'src/app/services/reserve-car.service';
import { SingleCarService } from 'src/app/services/single-car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carId: any;
  colectSingleCar: any;
  carData: any;
  isLoading: Boolean = false;
  commentModel: string = ''
  allComments: any = []
  currentComment: string = "";
  newComment: string = ""
  currentCommentIndex!: number;
  userData: any = {};
  admin = false;
  constructor(private route: ActivatedRoute,
    private getSingleCarServices: SingleCarService,
    private addComentServices: AddCommentService,
    private getAdminDataServices: IsAdminService,
    private reservedCarServices: ReserveCarService,
    private router: Router,
  ) {
    this.carId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getSingleCarServices.getSingleCar(this.carId).subscribe((data) => {
      this.colectSingleCar = data;
      this.carData = this.colectSingleCar
      this.allComments = this.carData.comments
      this.admin = this.getAdminDataServices.isAdmin()
      this.isLoading = false;
      // console.log(this.allComments);

    })
    this.userData = JSON.parse(localStorage.getItem("userData")!)
    //console.log(this.userData);


  }

  onSubmit(event: any) {
    let commentsArray = this.carData.comments
    let currentDate = new Date()
    const date = ("Date: " + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() + "-" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());


    let newComment = {
      email: this.userData.email,
      data: date,
      comment: this.commentModel,
      name: this.userData.username,
      userId: this.userData.objectId
    }
    commentsArray.push(newComment)
    this.allComments = commentsArray
    let commentsData = {
      "comments": commentsArray
    }
    this.addComentServices.addNewComment(this.carId, commentsData)
      .subscribe()
    this.commentModel = ""
  }

  handleKeyUp(event: any) {
    if (event.keyCode === 13) {
      this.onSubmit(event);
    }
  }

  editComment(event: any) {
    const comentInfo = event.target.parentElement.parentElement
    const userName = comentInfo.children[0].textContent
    const oldComment = comentInfo.children[1].textContent
    const oldDate = comentInfo.children[2].textContent

    this.currentCommentIndex = this.allComments.findIndex((object: { data: any; }) => {
      return object.data === oldDate;
    });

    this.currentComment = oldComment



    let modalForm = document.getElementById("modalComment")
    modalForm!.style.display = "block"

  }

  onEdit(event: any) {
    let modalForm = document.getElementById("modalComment")
    modalForm!.style.display = "none"
    let currentDate = new Date()
    const date = ("Date: " + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear() + "-" + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds());

    let userData = JSON.parse(localStorage.getItem("userData")!)
    let editComment = {
      email: userData.email,
      data: date,
      comment: this.currentComment,
      name: userData.username,
      userId: this.userData.objectId
    }
    this.allComments[this.currentCommentIndex] = editComment

    let commentsData = {
      "comments": this.allComments
    }
    this.addComentServices.addNewComment(this.carId, commentsData)
      .subscribe()
    this.commentModel = ""
  }

  deleteComment(event: any) {
    //console.log('delete');
    const comentInfo = event.target.parentElement.parentElement
    const oldDate = comentInfo.children[2].textContent
    this.currentCommentIndex = this.allComments.findIndex((object: { data: any; }) => {
      return object.data === oldDate;
    });
    this.allComments.splice(this.currentCommentIndex, 1)
    let commentsData = {
      "comments": this.allComments
    }
    this.addComentServices.addNewComment(this.carId, commentsData)
      .subscribe()

  }

  reserveCar(event) {
    console.log(this.userData);
    this.userData.reservedCars.push(this.carId)
    console.log(this.userData);
    let reservedCarData = {
      "reservedCars": this.userData.reservedCars
    }
    this.reservedCarServices.putReservedCars(this.userData.objectId, reservedCarData)
      .subscribe(data => {
        this.router.navigate(['/user'])
      })
  }
}


