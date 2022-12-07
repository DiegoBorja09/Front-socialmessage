import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Modelo/Message';
import { MessageservicesService } from 'src/app/services/message/messageservices.service';



@Component({
  selector: 'app-mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.css']
})
export class MymessageComponent  implements OnInit{

  message: Message[]=[];

  fullname ="";
  
  constructor(private service: MessageservicesService) {
    
   }
  ngOnInit(): void {
    let data = JSON.parse(localStorage.getItem('user')!);
    let id=data.userData.id
    this.fullname = data.userData.fullname
    this.service.getMesasagebyId(+id).subscribe(data=>{
      this.message=data;
    });
  
    

 

}


}