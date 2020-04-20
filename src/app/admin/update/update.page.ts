import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  public signupForm;
  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private router: Router,
              private formBuilder: FormBuilder) { }
  propertyList: any;
  user;
    data: Observable<any>;

  ngOnInit() {
      this.formInitializer();
      this.route.paramMap.subscribe(paramMap => {
          const val = paramMap.get('id');
          console.log('id', val);
          const url  = `http://localhost:8095/users/getUser/${val}`;
          console.log('url', url);
          this.data =  this.http.get(url);
          console.log(this.data);
          this.data.subscribe(data => {
              this.user = data;
              this.signupForm.patchValue(this.user);
              console.log(this.user);
          });
          console.log(this.user);
      });

  }

    formInitializer() {
        console.log('formInitializer', this.user);
        this.signupForm = this.formBuilder.group({
            id: [null, [Validators.required]],
            first_name: [null, [Validators.required]],
            last_name: [null, [Validators.required]],
            email: [null, [Validators.required]],
            user_name: [null, [Validators.required]],
            password: [null, [Validators.required]],
            role: [null, [Validators.required]],
            // city: [null, [Validators.required]]
        });
    }

  updateData() {
        if (this.signupForm.valid) {
            console.log('formData', this.signupForm.value);

            const formData = this.signupForm.value;
            this.saveHttpReq(formData).subscribe(
                data => {
                    console.log('I got this response -> ', data);
                    this.router.navigate(['list']);
                },
                error => {
                    console.log('error', error);
                }
            );
        }
    }

    saveHttpReq(dataObj): Observable<any> {
        const url = `http://localhost:8095/users/updateUser`;
        console.log('link', url);
        return this.http.put(url, dataObj);
    }
}
