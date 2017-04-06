import { FormControl, AbstractControl } from '@angular/forms';

export class MyValidators{

  static isOld(control: FormControl){
    let value = control.value;;
    if(value >= 21 || value == ''){
      return null;
    }else{
      return {'isold': true};
    }
  }

  static passwordMatcher(group: AbstractControl){
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;;
    if(password === confirmPassword){
      return null;
    }else{
      return {'nomatch': true};
    }
  }

}