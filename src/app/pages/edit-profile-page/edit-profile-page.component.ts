import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

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


  constructor(private userService: UserService, private router: Router) { }

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
  }

}
