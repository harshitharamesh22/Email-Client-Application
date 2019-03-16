import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from '../../email-service.service';

@Component({
  selector: 'app-email-data',
  templateUrl: './email-data.component.html',
  styleUrls: ['./email-data.component.css']
})
export class EmailDataComponent implements OnInit {
  public email:any
  public isLoading: boolean = false;
  constructor(private server: EmailServiceService) { }

  ngOnInit() {
    this.isLoading = true;
    this.server.sendEmailInfo().subscribe(
      ((response) => {
        this.email = response;
        this.isLoading = false;
      }
      )
    )
  }

}
