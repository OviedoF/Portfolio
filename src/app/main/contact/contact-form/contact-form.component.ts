import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  constructor(private _httpService: ConfigService) { }

  ngOnInit(): void {
  }

  validitys: any = {
    inputNombre: false,
    inputEmail: false
  }

  form: any  = { name: '', job: '', email: '', linkedin: '', details: '' }

  validityInfo(e:Event){
    const target = (<HTMLInputElement>e.target);
    let regex: any;
    
    if(target.id === "inputNombre") regex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    if(target.id === "inputEmail") regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if(regex.test(target.value)){
      target.style.borderBottom = '1px solid green';
      this.validitys[target.id] = true;
      console.log(this.validitys);
    } else{
      target.style.borderBottom = '1px solid red';
    }
  }

  sendForm(){
    if(this.validitys.inputNombre && this.validitys.inputEmail) {
      const toSend = {
        message: `Hola! mi nombre es: ${this.form.name} y te contacto para ${this.form.job}. Puedes encontrarme con mi gmail: ${this.form.email} o mi LinkedIn: ${this.form.linkedin}. 
        Adjunto más detalles: ${this.form.details}`
      };

      this._httpService.postForm('https://formsubmit.co/oviedofederico039@gmail.com', toSend).subscribe(data => console.log(data));
    } else {
      console.log('fijate de estar bien pa')
    }
  }

}
