import {Component} from '@angular/core';
import { Message } from './message.model';
import { MessageComponent } from './message.component';

@Component({
    selector:'app-message-list',
    template:`
    <app-message *ngFor="let message of messages"
        [message]="message" 
        (editClicked)="onEditClicked($event)">
    </app-message>
    `
})

export class MessageListComponent{
    messages: Message[] = [ 
        new Message('Some message','Max'),
        new Message('Some 123','ven'),
        new Message('44 message','kev')
    ];  
}