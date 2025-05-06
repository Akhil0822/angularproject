import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const securityGuard: CanActivateFn = (route, state) => {
  
  
  if (sessionStorage.getItem("userid") == null && sessionStorage.getItem("pass") == null){
    const r = inject(Router)
  r.navigate(['login'])
  return false;
}

else
return true

};
