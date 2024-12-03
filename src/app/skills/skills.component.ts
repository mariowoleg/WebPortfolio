import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop'; 
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgFor, DragDropModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit{
  skills = ["angular", "react", "react native", "python", "java", "javascript", "c++", "SQL", "noSQL", "TeamWork", "Communication"];
  skills_position: string[][] = [];
  currentlyDragging: number | undefined;
  mouseX: number | undefined;
  mouseY: number | undefined;


  ngOnInit(): void {
    for(let i = 0; i < this.skills.length; i++){
      let pos: string[] = [1 + i * (90 / this.skills.length) + '%', ((i + .25) % 3) * 33 + '%', this.getRandomValue()]
      this.skills_position.push(pos)
    }
  }

  getRandomValue(){
    let randomVal = (Math.random()*30) - 15;
    return `rotate(${randomVal}deg)`
  }


  startDragging(i: number){
    this.currentlyDragging = i;
  }

  mouseMove(e: MouseEvent){
    if(!this.currentlyDragging == undefined) return;

    this.skills_position[this.currentlyDragging!][0] = e.pageX - 70 + 'px'
    this.skills_position[this.currentlyDragging!][1] = e.pageY - 30 + 'px'
  }

  stopDragging(){
    this.currentlyDragging = undefined
  }

}
