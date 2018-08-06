import { Component, OnInit, Input } from '@angular/core';
import { ApplicantsListComponent } from '../../pages/applicants-list/applicants-list.component';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.css']
})
export class ApplicationCardComponent implements OnInit {
  @Input() applicant: any;

  constructor() { }

  ngOnInit() {
  }

}
