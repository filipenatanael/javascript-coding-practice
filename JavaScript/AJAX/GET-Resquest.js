var req_url = 'http://localhost:8080/MYPROJECTS/contacts/getcontacts'+id_customer;

$.ajax({
  type: 'GET',
  url: req_url,
  beforeSend: function(){
    //--------------------
  },
  success: function(reponse){
    console.log(reponse);
  },
  error: function(error, er){
    console.log(error);
  }
});
