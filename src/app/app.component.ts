import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pizzamania';

  constructor(public r:Router)
  {

  }

b:boolean =false
Logout: any;

d={bglgtheme:true,bgdrtheme : false}

  bgfunc()
{
  let val = (document.getElementById("sel1") as HTMLSelectElement).value
  console.log(val)
  if(val == 'd'){
    
    this.d.bglgtheme = false
    this.d.bgdrtheme = true

  }else{

 
    this.d.bglgtheme = true
    this.d.bgdrtheme = false

  }
 
  
  
}






  // func()
  // {
 
  //  sessionStorage.clear()
  // alert("hiiighukfc")
  //  this.r.navigate(['/login'])
  //  this.b1=false
    
  // }


  b1 = true
logout()
{

  if(sessionStorage.getItem("userid") == null && sessionStorage.getItem("pass") == null)
  {
    sessionStorage.clear()
  this.r.navigate(['login'])
  this.b1 = false
  }
  
  
 
}




}


