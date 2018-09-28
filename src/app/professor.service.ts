import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  currentProfessor: any;

  constructor(private http: HttpClient) { }

  getProfessor(url){
    return this.http.get(url);
  }
}
