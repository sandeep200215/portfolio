import { Component } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwebsites';
  public http !: HttpClient
 AppComponent()
 {
  
this.getAll();
this.getT();
  
 }
 getAll()
 {
  return this.http.get("http://localhost:8080/student").subscribe(data=>
  {
    console.log(data);
  });
 }
  
getT()
{
  console.log("Hello");
}
 
  
}
