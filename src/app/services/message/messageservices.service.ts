import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Message } from '../../Modelo/Message';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MessageservicesService {


  constructor(private http: HttpClient, private router: Router) { }


  url = "https://backdiego-production.up.railway.app/message/";


  
  getMessage(){
    return this.http.get<Message[]>(this.url)
  }

  getMesasagebyId(id:number){
    return this.http.get<Message[]>(this.url+"/findone/"+id);
  }

  createmessage(message:Message){
    return this.http.post<Message>(this.url+"create",message)
    
  }

}
