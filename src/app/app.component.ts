import { Component, AfterViewChecked, OnInit, inject} from '@angular/core';
import { FormControl} from '@angular/forms';
import { Message } from 'src/interfaces/message.interface';
import { SocketService } from 'src/services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked, OnInit{
  ngOnInit(): void {
    this.socketService.getNewMessage().subscribe((message: string) => {
      let uname = message.split(':');
      let index = this.messageList.findIndex(message => message.username === uname[0]);
      if(index > -1){
        this.messageList.push({id: this.messageList[index].id,
        username: this.messageList[index].username,
        content: uname[1],
        usernameColor: this.messageList[index].usernameColor})
      }
      else{
        this.messageList.push({id: uname[0], username: uname[0], usernameColor: this.generateColor(), content: uname[1]})
      }
    });
 
  }
  

  ngAfterViewChecked(): void {
    let chatEl = document.getElementById('chat');
    chatEl?.scrollTo({
      top: chatEl.scrollHeight,
      left: 100,
      behavior: "smooth",
    });
  }

  title = 'livechat';
  messageCount:number = 0;
  socketService = inject(SocketService);
  userMessage = new FormControl('');
  isCharLimitExceeded:boolean = false;
  messageList: Message[] = [];
  messages: string[] = [];

  generateColor(){
    let letters = "0123456789ABCDEF";
 
    // HTML color code starts with #
    let color = '#';
    
    // Generating 6 times as HTML color code
    // consist of 6 letter or digits
    for (let i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];

    if(color === '#FFFFFF'){
      color = '#FF0000';
    }
    
    return color;
  }
  sendMessage() {
    if(this.userMessage.value === null || this.userMessage.value!.trim() === "")
    {
      this.userMessage.setValue('');
      return;
    }
    this.socketService.sendMessage(this.userMessage.value??'');
    this.userMessage.setValue('');
  }

}
