import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-detail-page',
  templateUrl: './profile-detail-page.component.html',
  styleUrls: ['./profile-detail-page.component.css']
})
export class ProfileDetailPageComponent implements OnInit {
  user: any;
  currentUser: any;
  userCanEdit: boolean;
  userCanSponsor: boolean;


  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService, private router: Router) {}


  ngOnInit() {
    this.route.params.subscribe((params) => {
      const loggedUser = this.authService.getUser();

       if (params.id === loggedUser._id) {
        this.userCanEdit = true;
       }

       this.userService.getOne(params.id)
       .then((userData) => {
          this.userCanSponsor = false;
          this.user = userData;
          this.user.programmingLanguages = this.user.programmingLanguages.join(', ');
          if (loggedUser.userType === 'sponsor' && loggedUser.complete && this.user.userType === 'applicant') {
            this.userCanSponsor = true;
          }
      })
      .catch((err) => {
        console.log(err);
      });
    });
    this.currentUser = this.authService.getUser();
  }

  sponsorOne(applicantId) {
    this.userService.sponsorOne(applicantId)
      .then((result) => {
        this.userService.applicantOne(applicantId);
        this.router.navigate(['/profile', this.currentUser._id]);
      });
  }

  }



