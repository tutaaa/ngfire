import { Component } from '@angular/core';
import{AngularFireDatabase, AngularFireObject} from '@angular/fire/database'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

countRef: AngularFireObject<any>;
count = 0;
constructor(private db: AngularFireDatabase){
  this.countRef = db.object('counter');
  this.countRef.valueChanges().subscribe(v => this.count = v)
}
inc(){
  this.countRef.update({value: this.count +1});
}
}
