import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {


// fixedBox = document.getElementById("fixedBox");
// smallBox = document.getElementById("smallBox");
// closeBtn = document.getElementById("closeBtn");

@ViewChild('fixedBox') fixedBox!: ElementRef;
@ViewChild('smallBox') smallBox!: ElementRef;
@ViewChild('closeBtn') closeBtn!: ElementRef;




openAlert(){

  this.fixedBox.nativeElement.style.display = "flex";


};



closeAlert(){

  this.fixedBox.nativeElement.style.display = "none";



};



}
