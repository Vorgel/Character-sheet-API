import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersheetApiService } from 'src/app/charactersheet-api.service';

@Component({
  selector: 'app-add-edit-character',
  templateUrl: './add-edit-character.component.html',
  styleUrls: ['./add-edit-character.component.css']
})
export class AddEditCharacterComponent implements OnInit {

  characterList$!: Observable<any[]>;

  constructor(private service:CharactersheetApiService) { }

  @Input() character:any;
  characterID: number=0;
  name: string="";
  race: string="";
  class: string="";
  age!: number;

  ngOnInit(): void {
    this.characterID = this.character.characterID;
    this.name = this.character.name;
    this.race = this.character.race;
    this.class = this.character.class;
    this.age = this.character.age;
    this.characterList$ = this.service.getCharacterList();
  }

  addCharacter(){
    let character ={
      name:this.name,
      race:this.race,
      class:this.class,
      age:this.age
    }

    this.service.addCharacter(character).subscribe(res => {
      let closeModalBtn = document.getElementById('add-edit-modal-close');

      if(closeModalBtn){
        closeModalBtn.click();
      }

      let showAddSuccess = document.getElementById('add-success-alert');
      
      if(showAddSuccess){
        showAddSuccess.style.display = "block";
      }

      setTimeout(function(){
        if(showAddSuccess){
          showAddSuccess.style.display="none"
        }
      }, 4000);
    })
  }

  updateCharacter(){
    let character ={
      characterID: this.characterID,
      name:this.name,
      race:this.race,
      class:this.class,
      age:this.age
    }
    let characterID:number = this.characterID;

    this.service.updateCharacter(characterID, character).subscribe(res => {
      let closeModalBtn = document.getElementById('add-edit-modal-close');

      if(closeModalBtn){
        closeModalBtn.click();
      }

      let showUpdateSuccess = document.getElementById('update-success-alert');
      
      if(showUpdateSuccess){
        showUpdateSuccess.style.display = "block";
      }

      setTimeout(function(){
        if(showUpdateSuccess){
          showUpdateSuccess.style.display="none"
        }
      }, 4000);
    })
  }
}
