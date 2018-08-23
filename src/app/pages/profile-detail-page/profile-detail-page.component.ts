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
  applicants: any;


  constructor(private route: ActivatedRoute, private userService: UserService, private authService: AuthService, private router: Router) {}


  ngOnInit() {

    this.route.params.subscribe((params) => {
      const loggedUser = this.authService.getUser();

      this.userCanEdit = false;

       if (params.id === loggedUser._id) {
        this.userCanEdit = true;
       }

       this.userService.getOne(params.id)
       .then((data) => {
          this.userCanSponsor = false;
          this.user = data.profile;
          this.applicants = data.sponsoredUsers;
          this.user.programmingLanguages = this.user.programmingLanguages.join(', ');
          if (loggedUser.userType === 'sponsor' && loggedUser.complete && this.user.userType === 'applicant' && !this.user.sponsor) {
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
      .then((applicants) => {
        this.router.navigate(['/profile', this.currentUser._id]);
      });
  }

}



