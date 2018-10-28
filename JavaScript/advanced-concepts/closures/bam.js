var bam = (function(){

  var obj = {
    zoo: 'zoo'
  };

  return {
    zoo: function() {
      console.log(obj.zoo);
    }
  };

})();

console.log(bam.zoo());
