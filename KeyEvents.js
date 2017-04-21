function KeyDown(event) {
      console.log("Press: "+event.keyCode);
    }

    function KeyUp(event) {
      console.log("Press: "+event.keyCode);
    }

    function KeyPress(event) {
      console.log("Press: "+event.keyCode);
    }

    function Command(event) {
      if(event.shiftKey == true && event.keyCode == 13){
        console.log("Shift+Enter");
      }

    }

/*
  </br>
  <input type="text" onKeyDown="KeyDown(event)" onKeyUp="KeyUp(event)" onKeyPress="KeyPress(event)">
  </br></br>
  <input type="text" onKeyUp="Command(event)">
*/
