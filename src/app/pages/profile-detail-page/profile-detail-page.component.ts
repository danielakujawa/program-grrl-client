import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-profile-detail-page',
  templateUrl: './profile-detail-page.component.html',
  styleUrls: ['./profile-detail-page.component.css']
})
export class ProfileDetailPageComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
    this.route.params.subscribe((params) => {
      this.userService.getOne(params.id)
      .then((userData) => {
        this.user = userData;
        this.user.programmingLanguages= this.user.programmingLanguages.join(", ");
      })
      .catch((err) => {
        console.log(err);
      });
    }); 
   }

  
  ngOnInit() {
    
  }

}
