import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-register-donner',
  templateUrl: './register-donner.page.html',
  styleUrls: ['./register-donner.page.scss'],
})
export class RegisterDonnerPage implements OnInit {
  private JSONObject;
  registerDonnerForm: FormGroup;
  today = new Date();
  date;
  obj;
  user;
  donner;
  private loading: boolean;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private formBuilder: FormBuilder,
              private router: Router) {
  }
  data: Observable<any>;
  charityHouse: any;
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.obj = paramMap.get('first_name');
      console.log('reciving data', this.obj);
      this.user = '"user" : {"first_name" : "' + paramMap.get('first_name') +
          '" , "last_name" : "' + paramMap.get('last_name') +
          '" , "email" : "' + paramMap.get('email') +
          '" , "user_name" : "' + paramMap.get('user_name') +
          '" , "password" : "' + paramMap.get('password') +
          '" , "role"  : "' + paramMap.get('role') + '"}';
    });
    this.formInitializer();
  }

  formInitializer() {
    this.registerDonnerForm = this.formBuilder.group({
      address: [null, [Validators.required]],
      contact: [null, [Validators.required]]
    });
  }

  registerDonner() {
    if (this.registerDonnerForm.valid) {
      this.loading = true;
      console.log('form Data', this.registerDonnerForm.value);
      const formData = this.registerDonnerForm.value;
      this.donner = '{"address" : "' + formData.address +
          '", \n"contact" : "' + formData.contact +
          '", \n' + this.user + ' }';
      console.log('data before parsing', this.donner);
      const completeDonner = JSON.parse(this.donner);
      console.log('complete charity house', completeDonner);
      this.saveHttpReq(completeDonner).subscribe(
          data => {
            console.log('I got this response -> ', data);
            this.router.navigate(['login']);
          },
          error => {
            console.log('error', error);
          }
      );
    }
  }

  saveHttpReq(dataObj): Observable<any> {
    console.log('recieved data ', dataObj);
    const url = 'http://localhost:8095/donners/newDonner';
    const test = this.http.post(url, dataObj);
    this.loading = false;
    return test;
  }
}
