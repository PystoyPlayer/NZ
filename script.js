var url = "https://api.minetools.eu/ping/168.119.145.214/25612"; 
 $.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
  $('#rest').html('<b>Game:</b> '+r.description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon').attr('src', r.favicon);  
});

var url2 = "https://api.minetools.eu/ping/5.188.141.184/26378"; 
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
