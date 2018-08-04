import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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

  constructor(private authService: AuthService, private router: Router) { }

  submitForm(form) {
    this.error = '';
    this.feedbackEnabled = true;
    if (form.valid) {
      this.processing = true;
      this.authService.me(this.name)
        .then((result) => {
          this.name = result.name;
          this.router.navigate(['profile/:id/edit']);
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
