import {  Component, DoCheck, Input,  } from '@angular/core';
import { Message } from 'src/interfaces/message.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements DoCheck{
  ngDoCheck(): void {
    let text = this.message.content;
    if(text){
      if(text.includes('joined') || text.includes('disconnected')){
        this.isInfo = true;
      }
    }
  }

  @Input() message: Message = {id:'',username:'',content:'', usernameColor:''};
  isInfo: boolean = false;

  
}
