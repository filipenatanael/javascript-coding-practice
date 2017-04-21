function Down(){
      console.log("DOWN");
    }
function Up(){
      console.log("UP");
    }
function Over(){
      console.log("OVER ELEMENT");
    }
function Out(){
      console.log("OUT ELEMENT");
    }
function Move(){
      console.log("MOUSE IS MOVINIG");
    }
function Click() {
      console.log("CLICKED");
    }
function ContextMenu() {
      console.log("CLICKED ON RIGHT BUTTON");
      return false
    }
function DblClick() {
      console.log("DOUBLE CLICK");
    }

/*
  </br></br>
  <button type="button" onMouseDown="Down()" onMouseUp="Up()" onMouseOver="Over()" onMouseOut="Out()">Exemple 1</button>
  </br></br>
  <button type="button" onMouseMove="Move()" onClick="Click()">Exemple 2</button>
  </br></br>
  <button type="button" onContextMenu="return ContextMenu()" onDblClick="DblClick()">Exemple 3</button>
*/
