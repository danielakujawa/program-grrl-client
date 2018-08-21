import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.css']
})
export class ApplicantsListComponent implements OnInit {
  feedbackEnabled = false;
  error = null;
  processing = false;
  user: any;
  applicants: any;
  programmingLanguages: string;

  ngOnInit() {
    }

  constructor(private userService: UserService, private router: Router) {

      this.userService.getAllApplicants()
      .then((result) => {
        this.applicants = result;
      })
      .catch((err) => {
        console.log(err);
      });

   }

   submitForm(form) {

    this.userService.getFilteredApplicants(this.programmingLanguages)
      .then((result) => {
        this.applicants = result;
      })
      .catch((err) => {
        this.error = err.error;
        this.processing = false;
        this.feedbackEnabled = false;
      });

   }
  }

