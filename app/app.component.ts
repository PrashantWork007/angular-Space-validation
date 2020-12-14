import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { UsernameValidator } from "./username.validator";

@Component({
  selector: "app",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidator.cannotContainSpace
    ]),
    password: new FormControl("", Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    alert(JSON.stringify(this.form.value));
  }
}
