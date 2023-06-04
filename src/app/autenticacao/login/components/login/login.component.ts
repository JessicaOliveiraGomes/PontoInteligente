import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder, private snackBar: MatSnackBar/*, private router: Router*/) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm () {
    this.form = this.fb.group ({ 
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      this.snackBar.open (
        "Dados inválidos", "Erro", {duration: 5000});
        return;
    }
    alert(JSON.stringify(this.form.value));
  }

}
