import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contacts-app';

  contactForm = new FormGroup({
    name: new FormControl(''),
    phone: new FormControl('')
  });

  constructor(private _contactService: ContactService){
  }

  public saveContact(){
    this._contactService.saveContact(
      this.contactForm.controls.name.value ?? '',
      this.contactForm.controls.phone.value ?? ''
    ).subscribe(
      response => { debugger; 
        if(response){ 
          this.contactForm.patchValue({ name: '', phone: '' });
          alert("Contacto guardado exitosamente") 
        } }
    )
  }
}
