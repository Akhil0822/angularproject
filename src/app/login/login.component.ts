import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectorService } from '../connector.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

// throw new Error('Method not implemented.');
constructor(public r:Router, public ob:ConnectorService)
{

}

id:any
passwd:any

validate(frm: any) {
if (frm.uname == '' && frm.pass == ''){

  alert("Please login first")

  
}
else
{
  let a= (document.getElementById("inp") as HTMLInputElement).value

  this.ob.getcustdetbyid(a).subscribe({
    next:res=>{this.id = res.id,
            this.passwd = res.password
        
            if(frm.uname == res.id && frm.pass == res.password)
            {
              sessionStorage.setItem('userid',res.id)
              sessionStorage.setItem('pass',res.password)
              alert("Login successfull..!!")
              this.r.navigate(['viewpizza'])
              
              
            }
            else{
              alert("Incorrect email or password")
            }},
            error:err=>{ alert("Incorrect email or password")}
  })
  // alert("Login success")
  // sessionStorage.setItem('uname',frm.uname)
  // sessionStorage.setItem('pass',frm.pass)
  // this.r.navigate(['viewpizza'])
//   (res =>
//     {
  
//       this.id = res.id,
//       this.passwd = res.password
  
//       if(frm.uname == res.id && frm.pass == res.password)
//       {
//         alert("Login successfull..!!")
//         this.r.navigate(['viewpizza'])
//       }
//       else{
//         alert("Incorrect email or password")
//       }
      
//     }
    
// })
}



}
}
