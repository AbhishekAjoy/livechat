import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io } from 'socket.io-client';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  constructor() { }

  private socket = io('http://localhost:3000');
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  
  sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  public getNewMessage(){
    this.socket.on('message', (message) =>{
      this.message$.next(message);
    });
    return this.message$.asObservable();
  }

}
