import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersheetApiService } from 'src/app/charactersheet-api.service';

@Component({
  selector: 'app-show-character',
  templateUrl: './show-character.component.html',
  styleUrls: ['./show-character.component.css']
})
export class ShowCharacterComponent implements OnInit {

  characterList$!:Observable<any[]>;
  skillsList$!:Observable<any[]>;
  skillsList:any=[];

  // Map to display data associate with foreign keys
  skillsListMap:Map<number, string> = new Map()

  constructor(private service:CharactersheetApiService) { }

  ngOnInit(): void {
    this.skillsList$ = this.service.getSkillList();
    this.characterList$ = this.service.getCharacterList();
  }

  modalTitle:string = '';
  activateAddEditCharacterComponent:boolean=false;
  character:any;

  modalAdd(){
    this.character = {
      characterID:0,
      name:null,
      race:null,
      class:null,
      age:null,
    }
    this.modalTitle = "Dodaj Postac";
    this.activateAddEditCharacterComponent = true;
  }

  modalEdit(item:any){
    this.character = item;
    this.modalTitle = "Edytuj Postac";
    this.activateAddEditCharacterComponent = true;
  }

  delete(item:any){
    if(confirm(`Czy na pewno chcesz usunąć postać ${item.characterID}?`)){
      this.service.deleteCharacter(item.characterID).subscribe(res => {
        let closeModalBtn = document.getElementById('add-edit-modal-close');

        if(closeModalBtn){
          closeModalBtn.click();
        }
  
        let showDeleteSuccess = document.getElementById('delete-success-alert');
        
        if(showDeleteSuccess){
          showDeleteSuccess.style.display = "block";
        }
  
        setTimeout(function(){
          if(showDeleteSuccess){
            showDeleteSuccess.style.display="none"
          }
        }, 4000);
        this.characterList$ = this.service.getCharacterList();
      })
    }
  }

  modalClose(){
    this.activateAddEditCharacterComponent = false;
    this.characterList$ = this.service.getCharacterList();
  }
}
