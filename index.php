<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Testing JavaScript</title>
    <script type="text/javascript">
    function addNewItem(){
      var newItem = document.getElementById("item").value;
      var ListHTML = document.getElementById("list").innerHTML;
      ListHTML = ListHTML + "<li>"+newItem+"</li>";

      document.getElementById("list").innerHTML = ListHTML;
    }
    </script>

  </head>
  <body>

  <input type="text" id="item">
  <button type="button" onclick="addNewItem()">Adicionar</button>
  </br></br>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>

  </body>
</html>
