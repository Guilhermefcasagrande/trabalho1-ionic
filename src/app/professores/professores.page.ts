import { Component, OnInit } from '@angular/core';
import { ProfessorService } from '../professor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.page.html',
  styleUrls: ['./professores.page.scss'],
})
export class ProfessoresPage implements OnInit {

  data: any;

  constructor(private professorService: ProfessorService, private router: Router) { }

  ngOnInit() {
    this.professorService.getProfessor('https://my-json-server.typicode.com/Guilhermefcasagrande/json-trabalho1/db')
    .subscribe(data2 =>{
      this.data = data2;
    });
  }

  mostraDetalhes(professor){
    this.professorService.currentProfessor = professor;
    this.router.navigate(['/professor-detalhe']);
  }

}
