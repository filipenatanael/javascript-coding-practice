$.ajax({
  type: 'POST',
  url: 'http://localhost:8080/MYPROJECTS/contacts/addcontacts',
  data : {
    'firstname': $("#input_firstname").val(),
    'lastname': $("#input_lastname").val(),
  },
  dataType : 'html',
  beforeSend: function(){
    //-------------------
  },
  success: function(response){
    console.log(response);
    preventDefault();
  },
  error: function(error, er){
    console.log(error);
  }
});
