import { Component, OnInit, ViewChild } from '@angular/core';
import { TicketsService } from './tickets.service';



    export enum gender {
        MALE = 'male',
        FEMALE = 'female',
    }


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})

export class TicketsComponent implements OnInit {
    public tickets:any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
        gender: '',
        address: '',
        zip: '',
        phone: '',
    }




    constructor (
        private ticketsService: TicketsService,
    ) { }

    ngOnInit() {
        this.tickets.created_by = sessionStorage.getItem('email') || ''; 
        


    
    }



  modalpopup: boolean = false;
  Updatemodalpopup: boolean = false;
  show:any = -999;
  deleteshow:any;



  openModal() {
    this.modalpopup = true;
  }

  updateModelPopup(){
    this.Updatemodalpopup = true;
  }

  deleteShow(index:any){
    this.deleteshow = index;
  }

  deleteConfirm(data:any){
    this.Delete(data.id);
    this.deleteshow = -999
  }

}





