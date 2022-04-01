import {AbstractControl, ValidationErrors} from "@angular/forms"

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(!/.{3,}@.{3,}\..{2,}/.test(value)){
       return {
        email:true,
       } 
    }
    return null;
}

export function passwordMatch(passwordFormControl: any){
    return (rePasswordFormControl: AbstractControl) => {
        if (passwordFormControl.value !== rePasswordFormControl.value){
         return {
               passwordMatchFail: true
            }   
        }
        return null
    }
}