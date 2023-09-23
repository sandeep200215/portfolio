import { Component } from '@angular/core';

@Component({
  selector: 'app-aout',
  templateUrl: './aout.component.html',
  styleUrls: ['./aout.component.css']
})
export class AoutComponent {
 
  AoutComponent()
  {
     this.get();
  }
  get()
  {
    console.log("Hello");
  }
}
