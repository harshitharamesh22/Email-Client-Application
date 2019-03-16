import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from '../email-service.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  public Emails : any 
  public isLoading : boolean = false;
  constructor(private server: EmailServiceService) { }

  ngOnInit() {
    this.isLoading = true;
    this.server.getEmails().subscribe(
      ((response) => {
        this.Emails = response;
        this.isLoading = false;
      }
      )
    )
  }

  getEmailInfo(id){
    this.server.id = id;
  }

}
