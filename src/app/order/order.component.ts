import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

constructor(public r:ActivatedRoute, public r1:Router)
{


  this.r.queryParams.subscribe(data =>{

    this.pid = data["a"]
    this.pname = data["b"]
    this.price = data["c"]
    this.pdes = data["d"]
    this.pimg = data["e"]
  })
}

pid:string=''
pname:string=''
price:number = 0
pdes:string=''
pimg:any=''
q:number = 1


return()
{
  this.r1.navigate(['viewpizza'])
}

bill()
{
  let a = (document.getElementById('db') as HTMLDivElement)

  alert("order confirmed")
  
}

}
