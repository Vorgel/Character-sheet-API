import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersheetApiService {

  readonly charactersheetAPIUrl = "https://localhost:7049/api";
  
  constructor(private http:HttpClient) { }

  getCharacterList():Observable<any[]> {
    return this.http.get<any>(this.charactersheetAPIUrl + '/Characters');
  }

  addCharacter(data:any){
    return this.http.post(this.charactersheetAPIUrl + '/Characters', data);
  }

  updateCharacter(id:number|string, data:any) {
    return this.http.put(this.charactersheetAPIUrl + `/Characters/${id}`, data);
  }

  deleteCharacter(id:number|string) {
    console.log(id);
    return this.http.delete(this.charactersheetAPIUrl + `/Characters/${id}`)
  }

  getSkillList():Observable<any[]> {
    return this.http.get<any>(this.charactersheetAPIUrl + '/Skills');
  }

  addSkill(data:any){
    return this.http.post(this.charactersheetAPIUrl + '/Skills', data);
  }

  updateSkill(id:number|string, data:any) {
    return this.http.put(this.charactersheetAPIUrl + `/Skills/${id}`, data);
  }

  deleteSkill(id:number|string) {
    return this.http.delete(this.charactersheetAPIUrl + + `/Skills/${id}`)
  }
}
