import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectorService } from '../connector.service';
import { Iproducts } from '../connector.service';
import { DiscountPipe } from '../discount.pipe';


@Component({
  selector: 'app-viewpizza',
  standalone: false,
  templateUrl: './viewpizza.component.html',
  styleUrl: './viewpizza.component.css'
})
export class ViewpizzaComponent {
  
  constructor(public r:Router,public ob:ConnectorService ){}

  arr:Iproducts[]=[] 

  ngOnInit()
  {
    this.prod()
  }
  prod(){

    this.ob.getprod().subscribe(
    {
      next:(res:any)=>this.arr=res
        
    }
    )

  }


}



