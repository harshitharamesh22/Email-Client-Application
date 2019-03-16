import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor(private http:HttpClient) { }
  public id: any = 1 ;
  public getEmails(): any{
    return this.http.get("https://5c5a21f9af3ff700140de477.mockapi.io/api/email");
  }

  public sendEmailInfo(){
    return this.http.get("https://5c5a21f9af3ff700140de477.mockapi.io/api/email/"+this.id);
  }
}
