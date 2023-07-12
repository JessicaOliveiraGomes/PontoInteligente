import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CadastroPj } from '../../models';
import { CpfValidator } from 'src/app/shared/validators';
import { CnpjValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-cadastrar-pj',
  templateUrl: './cadastrar-pj.component.html',
  styleUrls: ['./cadastrar-pj.component.css']
})
export class CadastrarPjComponent implements OnInit {

  form: FormGroup;

  constructor( private fb: FormBuilder, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group ({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      razaoSocial: ['', [Validators.required, Validators.minLength(5)]],
      cnpj: ['', [Validators.required, CnpjValidator]]
    });
  }

  cadastrarPj() {
    if (this.form.invalid) {
      return;
    }
    const cadastroPj: CadastroPj =  this.form.value;
    alert(JSON.stringify(cadastroPj));
  }

}
