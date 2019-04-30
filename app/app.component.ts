import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

//the following method receives the current
//selected pane and does the proper changeSelected to the dom
private flag:boolean = true;
changeSelected(current,id){
  if(this.flag){
    //We remove the initial configuration
    document.getElementById("first-panel").classList.remove("selected");
  }

  //the following lines adjust the width of the elements
  document.getElementById("first-panel").classList.toggle("selected",id===1);
  document.getElementById("content-panel-1").classList.toggle("hide",id!==1);
  document.getElementById("icon-1").classList.toggle("sm-icon",id===1);

  document.getElementById("second-panel").classList.toggle("selected",id===2);
  document.getElementById("content-panel-2").classList.toggle("hide",id!==2);
   document.getElementById("icon-2").classList.toggle("sm-icon",id===2);

  document.getElementById("third-panel").classList.toggle("selected",id===3);
  document.getElementById("content-panel-3").classList.toggle("hide",id!==3);
   document.getElementById("icon-3").classList.toggle("sm-icon",id===3);


  document.getElementById("fourth-panel").classList.toggle("selected",id===4);
  document.getElementById("content-panel-4").classList.toggle("hide",id!==4);
 document.getElementById("icon-4").classList.toggle("sm-icon",id===4);
  
   /* if(current === 1){
      document.getElementById("MyElement").classList.add('MyClass');
      document.getElementById("MyElement").classList.remove('MyClass');
    }
    if(current === 2){

    }
    if(current === 3){

    }
    if(current === 4) {

    }*/
}
  
}
