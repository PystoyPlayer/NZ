var url = "https://api.minetools.eu/ping/168.119.145.214/25612"; 
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
  var pl = '';
  if(r.players.sample.length > 0 ){pl = r.players.sample[0].name;};
  let i = 1;
  var str = '';
    while (i < r.players.sample.length) {
      pl = str.concat(pl,', ', r.players.sample[i].name)
      i++;
}
 if(r.players.sample.length == 0 ){ pl = 'Пусто';  } 
  $('#rest').html('<b>Players:</b> '+pl+'.');
 $('#favicon').attr('src', r.favicon);  
});

var url2 = "https://api.minetools.eu/ping/5.188.141.184/26378"; 
$.getJSON(url2, function(r2) {
    //data is the JSON string
 if(r2.error){
    $('#rest2').html('Server Offline');
   return false;
 } 
  var pl2 = '';
  if(r2.players.sample.length > 0 ){pl2 = r2.players.sample[0].name;}
  let i2 = 1;
  var str2 = '';
    while (i2 < r2.players.sample.length) {
      pl2 = str2.concat(pl2,', ', r2.players.sample[i2].name)
      i2++;
} 
 if(r2.players.sample.length == 0 ){pl2 = 'Пусто';  } 
  $('#rest2').html('<b>Players:</b> '+pl2+'.');
 $('#favicon2').attr('src', r2.favicon);  
});

var url3 = "https://api.minetools.eu/ping/142.132.223.37/25652"; 
$.getJSON(url3, function(r3) {
    //data is the JSON string
 if(r3.error){
    $('#rest3').html('Server Offline');
   return false;
 } 
  var pl3 = '';
  if(r3.players.sample.length > 0 ){pl3 = r3.players.sample[0].name;}
  let i3 = 1;
  var str3 = '';
    while (i3 < r3.players.sample.length) {
      pl3 = str3.concat(pl3,', ', r3.players.sample[i3].name)
      i3++;
} 
 if(r3.players.sample.length == 0 ){pl3 = 'Пусто';  } 
  $('#rest3').html('<b>Players:</b> '+pl3+'.');
 $('#favicon3').attr('src', r3.favicon);  
});
