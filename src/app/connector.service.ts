import { HttpClient } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectorService {

  constructor(public h:HttpClient) {
     

   }

   getcustdetbyid(id:any):Observable<Icustomer>
   {
    return this.h.get<Icustomer>('http://localhost:3000/customer/'+id)
   }

   sendcustdet(data:any):Observable<Icustomer>
   {
    return this.h.post<Icustomer>('http://localhost:3000/customer',data)
   }

   getcount():Observable<any>
   {
    return this.h.get<any>('http://localhost:3000/country')
   }


   getprod():Observable<Iproducts>
   {
    return this.h.get<Iproducts>('http://localhost:3000/products')
   }
}

export interface Icustomer<>{
  name:string,
  password:any,
  id:any
  
}

export interface Icountry<>
{

}

export interface Iproducts<>
{
  pid:any,
  pname:string,
  pdes:string,
  price: number,
  pimg:any
}