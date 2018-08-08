import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.css']
})
export class EditProfilePageComponent implements OnInit {

  feedbackEnabled = false;
  error = null;
  processing = false;
  name: string;
  country: string;
  email: string;
  languages: string;
  description: string;
  programmingLanguages: string;
  complete: boolean;
  user: any;


  constructor(private userService: UserService, private router: Router, private authService: AuthService) {
    this.user = this.authService.getUser();
   }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.userService.updateOne(form.value)
        .then((updatedUser) => {
          this.router.navigate(['profile', updatedUser._id]);
        })
        .catch((err) => {
          this.error = err.error; //
          this.processing = false;
          this.feedbackEnabled = false;
        });
    }
  }

  ngOnInit() {
    const user = this.authService.getUser();

    this.name = user.name;
    this.country = user.country;
    this.email = user.email;
    this.languages = user.languages;
    this.description = user.description;
    this.programmingLanguages = user.programmingLanguages;
  }

}
