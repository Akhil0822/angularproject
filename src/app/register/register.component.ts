import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

constructor(public r:Router ,public ob:ConnectorService)
{

}

Username:string ="Please enter username"

res:any

ngOnInit(){
  this.count()
}
countname:any

count(){
  this.ob.getcount().subscribe(res=>{
    this.countname=res
    console.log(this.countname)
})
}

store(form:any)
{

  
  if(form.uname=="" || form.pwd =="" || form.conpwd == "" || form.eml == "" || form.cont == "" || form.x == "")
  {

    alert("Please enter all the details.")
  }
  else if(form.pwd != form.conpwd)
  {
    alert("Password and confirm password does not match")
  }
  else
  {
  //   alert("Registered Successfully!!!")
  //   window.location.href="/login"
  //   this.res={'id' : form.eml, "password" : form.pwd,'name' : form.uname}
  //   console.log(form.uname,form.pwd)
    
 
  //   this.ob.sendcustdet(this.res).subscribe(e => {
      
  // })


   
  this.ob.getcustdetbyid(form.eml).subscribe({
    next:(r1)=>{alert("User already exists!!!")},
    error:(er)=>{
      alert("Registered Successfully!!!")
      window.location.href="/login"
      this.res={'id' : form.eml, "password" : form.pwd,'name' : form.uname, 'gender' : form.x , 'country': form.cnt}
      console.log(form.uname,form.pwd)
      
   
      this.ob.sendcustdet(this.res).subscribe(e => {
        
    })
    }
    
  })
   }
   
}

}
