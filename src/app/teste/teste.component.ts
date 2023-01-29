import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit{
  nome = 'fabiano'
  novaEscola=false
  texto="nao criada"
  cool=false
  school=''
  schoolSituation='aberta'
  schools=['escola1','escola2']
  schoolName=''
  url='https://www.uol.com.br'
  description='leao'
  loginForm!: FormGroup;


  constructor(private formBuilder:FormBuilder){
    this.schoolSituation =Math.random()>0.5?'aberta':'fechado'}

  ngOnInit(){
    setTimeout(()=>{
      this.novaEscola=true
    })
    this.loginForm = this.formBuilder.group({
      userName:['',Validators.required]
    })
  }



  pegar(nome:string){
    this.nome=nome
  }
  createSchool(){
    this.schools.push(this.schoolName)
    this.cool=true
    this.texto="criada"
  }
  schoolColor(){
return this.schoolSituation=='aberta'?'pink':'blue'
  }
}
