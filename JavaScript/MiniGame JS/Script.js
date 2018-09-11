var pontos = 0;

function addBoll(){
  var boll = document.createElement("div");
  boll.setAttribute("class","boll");
  var x = Math.floor(Math.random() * 500);
  var y = Math.floor(Math.random() * 400);
  boll.setAttribute("style","left:"+x+"px;top:"+y+"px;");
  boll.setAttribute("onclick", "FireBoll(this)");
  document.body.appendChild(boll);
}
s
function FireBoll(element) {
  document.body.removeChild(element);
  pontos  =+ 1;
  document.getElementById('DisplayPontos').value = parseInt(document.getElementById('DisplayPontos').value) + pontos;
}

function StartGame() {
  document.getElementById('DisplayPontos').value = 0;
  setInterval(addBoll, 1000);
}
