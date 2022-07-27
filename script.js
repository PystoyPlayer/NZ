var url = "https://api.minetools.eu/ping/168.119.145.214/25612"; 
 $.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
  $('#rest').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon').attr('src', r.favicon);  
});

var url2 = "https://api.minetools.eu/ping/5.188.141.184/25571"; 
$.getJSON(url2, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest2').html('Server Offline');
   return false;
 } 
  $('#rest2').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon2').attr('src', r.favicon);
}); 

var url3 = "https://api.minetools.eu/ping/142.132.223.37/25652"; 
$.getJSON(url3, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest3').html('Server Offline');
   return false;
 } 
  $('#rest3').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon3').attr('src', r.favicon);
});

var url4 = "https://api.minetools.eu/ping/168.119.145.214/25869"; 
 $.getJSON(url4, function(r) {
 if(r.error){
    $('#rest4').html('Server Offline');
   return false;
 } 
  $('#rest4').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon4').attr('src', r.favicon);  
});

var url5 = "https://api.minetools.eu/ping/"; 
$.getJSON(url5, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest5').html('Server Offline');
   return false;
 } 
  $('#rest5').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon5').attr('src', r.favicon);
}); 

var url6 = "https://api.minetools.eu/ping/"; 
$.getJSON(url6, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest6').html('Server Offline');
   return false;
 } 
  $('#rest6').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon6').attr('src', r.favicon);
});
