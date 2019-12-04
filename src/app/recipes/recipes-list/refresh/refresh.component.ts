import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.scss']
})
export class RefreshComponent implements OnInit {
  switchTo: boolean = true;
  @Output() switchNew: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  switchRecipes() {
    this.switchTo = !this.switchTo;
    this.switchNew.emit(this.switchTo);
  }
}
