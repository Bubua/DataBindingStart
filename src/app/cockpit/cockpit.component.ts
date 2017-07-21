import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }


  onAddServer(serverName: HTMLInputElement) {
      console.log(this.serverContentInput);
      this.serverCreated.emit({
          serverName: serverName.value,
          serverContent: this.serverContentInput.nativeElement.value
      })
  }

  onAddBlueprint(serverName: HTMLInputElement) {
      console.log(serverName)
      this.blueprintCreated.emit({
          serverName: serverName.value,
          serverContent:  this.serverContentInput.nativeElement.value
      })  
  }


}
