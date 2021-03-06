import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {isJsonObject} from '@angular-devkit/core';
import {ListService} from '../../list.service';

@Component({
  selector: 'app-register-charity-house',
  templateUrl: './register-charity-house.page.html',
  styleUrls: ['./register-charity-house.page.scss'],
})
export class RegisterCharityHousePage implements OnInit {
  registerCharityHouseForm: FormGroup;
  today = new Date();
  date;  testData;  last;  user; obj1; obj2;  // tstUser;
  charityHouse;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpClient,
              private service: ListService,
              private formBuilder: FormBuilder) {
  }
  get registerFormControl() {
    return this.registerCharityHouseForm.controls;
  }
  data: Observable<any>;
  submitted: any;
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.testData = paramMap;
      // this.obj1 = paramMap.get('obj1');
      // this.obj2 = paramMap.get('obj2');
      // console.log('data reciving', this.first);
      // console.log('obj1', this.obj1);
      // console.log('obj2', this.obj2);
      // this.first = paramMap.get('first_name');
      // const user = paramMap;
      // this.last = paramMap.get('last_name');
      // console.log('first_name ' + this.first);
      // // this.tstUser = { '{"first_name" : " ' + paramMap.get('first_name') + ' " , "last_name: " ' + this.last};
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
    const EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    // this.date = this.today.getFullYear() + '-' + (this.today.getMonth() + 1 ) + '-' + this.today.getDate();
    // console.log('current date', this.date);
    this.registerCharityHouseForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: [null, [Validators.required, Validators.pattern(EMAILPATTERN)]],
      no_of_dependents: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      contact: [null, [Validators.required, Validators.pattern('[0-9]*')]],
      type: [null, [Validators.required]],
      bank_name: [null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      account_no: [null, [Validators.required, Validators.pattern('[0-9]*')]]
    });
  }
  save() {
    if (this.registerCharityHouseForm.valid) {
      this.submitted = true;
      console.log('formData', this.registerCharityHouseForm.value);
      const formData = this.registerCharityHouseForm.value;
      this.charityHouse = '{"name" : " ' + formData.name +
          '" , "email" : "' + formData.email +
          '" , "no_of_dependents" : "' + formData.no_of_dependents +
          '" , "contact" : "' + formData.contact +
          '" , "type" : "' + formData.type +
          '" , "bank_name" : "' + formData.bank_name +
          '" , "account_no" : "' + formData.account_no +
          '" ,' + this.user +
          ',';
      console.log('data before parsing', this.charityHouse);
      // const chkObj = JSON.parse(this.first);
      // if (isJsonObject(chkObj)) {
      //   const newObject = Object.assign(this.first, formData);
      //   console.log('new merged Object', newObject);
      // } else {
      //   alert('not JSON');
      // }
      // const newObject = Object.assign(formData, chkObj);
      // console.log('new merged Object', newObject);
      // const readyToPost = JSON.parse(this.charityHouse);
      console.log('ready to post', this.charityHouse);
      const url = `register-charity-house/${this.charityHouse}`
      this.router.navigateByUrl(url);
    }
  }

  saveHttpReq(dataObj): Observable<any> {
    // const url = 'http://test-node-api-test.herokuapp.com/students/newStudent'; // This link is working coorectly.
    console.log(dataObj);
    const url = `${this.service.homeUrl}/charityHouses/newCharityHouse`;
    return this.http.post(url, dataObj);
  }
}
