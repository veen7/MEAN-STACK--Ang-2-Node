import { Component } from '@angular/core';
import {Message} from './messages/message.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent {
 

    onEditClicked(e){
        console.log("passed"+e);
    }
}