import { Component, AfterViewChecked} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Message } from 'src/interfaces/message.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewChecked{
  

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
  userMessage = new FormControl('');
  isCharLimitExceeded:boolean = false;
  messages: Message[] = [
    {
      id: 'user1',
      username: 'john_doe',
      content: "Hey, what's up? KEKW",
      usernameColor: '#c0392b',
    },
    {
      id: 'user2',
      username: 'jane_smith',
      content: 'Any news about the game release? PogChamp',
      usernameColor: '#3498db',
    },
    {
      id: 'user3',
      username: 'twitchlover24',
      content: "I'm so excited for the stream! HYPERS",
      usernameColor: '#27ae60',
    },
    {
      id: 'user4',
      username: 'gamer_girl92',
      content: "Who's your favorite character in the game? Kappa",
      usernameColor: '#f1c40f',
    },
    {
      id: 'user5',
      username: 'pro_gamer123',
      content: 'Can you give me some tips on improving my gameplay? 4Head',
      usernameColor: '#8e44ad',
    },
    {
      id: 'user6',
      username: 'chat_mod',
      content:
        'Remember to keep the chat friendly and respectful, everyone! :) TriHard',
      usernameColor: '#d35400',
    },
    {
      id: 'user7',
      username: 'game_enthusiast',
      content: "This game looks amazing! Can't wait to try it out! Pog",
      usernameColor: '#9b59b6',
    },
    {
      id: 'user8',
      username: 'streamfan01',
      content: 'How long will the stream be? Jebaited',
      usernameColor: '#2c3e50',
    },
    {
      id: 'user9',
      username: 'coolcat99',
      content: "I just got a new gaming mouse, it's so smooth! CoolCat",
      usernameColor: '#1abc9c',
    },
    {
      id: 'user10',
      username: 'chat_newbie',
      content:
        'This is my first time here, loving the community already! <3 Kreygasm',
      usernameColor: '#e67e22',
    },
  ];

  sendMessage() {
    let message = this.userMessage.value;
    if(message === null || message!.trim() === "")
    {
      this.userMessage.setValue('');
      return;
    }
  
    this.messages.push({
      id: 'user11',
      username: 'test_user',
      content: message,
      usernameColor: '#e24e22',
    });
    this.userMessage.setValue('');
  }
}
