import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ListService} from '../../list.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {
  feedbackForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data coming from donner list.', paramMap);
    });
    this.formInitializer();
  }

  formInitializer() {
    this.feedbackForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required])],
      subject: [null, [Validators.required]],
      feedback_message: [null, [Validators.required]]
    });
  }
    sendFeedback() {
    }
}
