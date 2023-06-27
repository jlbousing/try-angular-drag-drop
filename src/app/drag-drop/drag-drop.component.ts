import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit{

  list1: number[] = [];
  list2: number[] = []; 

  constructor() {}

  ngOnInit(): void {
    
    for(let i = 0; i < 10; i++) {

      this.list1.push(i);
    }

    for(let i = 10; i < 20; i++) {

      this.list2.push(i);
    }

  }

  drop($event: CdkDragDrop<number[]>) {

    //SI EL CONTENEDOR ANTERIOR Y EL PREVIO ES EL MISMO CONTENEDOR
    if($event.previousContainer === $event.container) {
      moveItemInArray(
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }else {
      transferArrayItem(
        $event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.currentIndex
      );
    }

  }
  

}
