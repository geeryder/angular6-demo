import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
    title = 'Welcome to Gees world';
    text = 'Its all about Gee';
    name:string;

    menuIsClosed = true;
    menuTitle = "closed"


  constructor() { }

  ngOnInit() {
    this.name= 'bob ';
  }
  showMenu(){
    this.menuIsClosed =! this.menuIsClosed;
    if(this.menuIsClosed == true){
      this.menuTitle = "open"
    }
    else { this.menuTitle= "closed"}
  }

}

