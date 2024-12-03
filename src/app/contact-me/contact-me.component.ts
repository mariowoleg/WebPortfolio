import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment.development'
import { FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit{
  api_key = environment.web3apikey;
  my_form: FormGroup = new FormGroup('');

  constructor(){}


  ngOnInit(): void {
    this.my_form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      message: new FormControl('', [Validators.required, Validators.maxLength(300)])
    })
  }


  onSubmit(){
    if(this.my_form.valid){
      console.log("Form successfully uploaded")
      this.my_form.reset();
    }
  }
}
