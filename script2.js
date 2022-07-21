var url = "https://api.minetools.eu/ping/"; 
 $.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
  $('#rest').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon').attr('src', r.favicon);  
});

var url2 = "https://api.minetools.eu/ping/"; 
$.getJSON(url2, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest2').html('Server Offline');
   return false;
 } 
  $('#rest2').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon2').attr('src', r.favicon);
}); 

var url3 = "https://api.minetools.eu/ping/"; 
$.getJSON(url3, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest3').html('Server Offline');
   return false;
 } 
  $('#rest3').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon3').attr('src', r.favicon);
});
