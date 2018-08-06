import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-applicants-list',
  templateUrl: './applicants-list.component.html',
  styleUrls: ['./applicants-list.component.css']
})
export class ApplicantsListComponent implements OnInit {
  user: any;
  applicants: any;

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
  }

