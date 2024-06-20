function cleanDescription(description) {
    return description.replace(/§[a-z0-9]/gi, '');
}

var url1 = "https://api.minetools.eu/ping/57.129.13.63/30046"; 
$.getJSON(url1, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
    return false;
 } 
 var description = cleanDescription(r.description);
 $('#rest').html('<b>Game:</b> '+description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon').attr('src', r.favicon);  
});

var url2 = "https://api.minetools.eu/ping/5.188.141.184/25571"; 
$.getJSON(url2, function(r) {
 if(r.error){
    $('#rest2').html('Server Offline');
    return false;
 } 
 var description = cleanDescription(r.description);
 $('#rest2').html('<b>Game:</b> '+description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon2').attr('src', r.favicon);
}); 

var url3 = "https://api.minetools.eu/ping/142.132.223.37/25652"; 
$.getJSON(url3, function(r) {
 if(r.error){
    $('#rest3').html('Server Offline');
    return false;
 } 
 var description = cleanDescription(r.description);
 $('#rest3').html('<b>Game:</b> '+description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon3').attr('src', r.favicon);
});

var url4 = "https://api.minetools.eu/ping/168.119.145.214/25869"; 
$.getJSON(url4, function(r) {
 if(r.error){
    $('#rest4').html('Server Offline');
    return false;
 } 
 var description = cleanDescription(r.description);
 $('#rest4').html('<b>Game:</b> '+description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon4').attr('src', r.favicon);  
});

var url5 = "https://api.minetools.eu/ping/123.456.789.0/30000"; 
$.getJSON(url5, function(r) {
 if(r.error){
    $('#rest5').html('Server Offline');
    return false;
 } 
 var description = cleanDescription(r.description);
 $('#rest5').html('<b>Game:</b> '+description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon5').attr('src', r.favicon);
}); 

var url6 = "https://api.minetools.eu/ping/123.456.789.0/30001"; 
$.getJSON(url6, function(r) {
 if(r.error){
    $('#rest6').html('Server Offline');
    return false;
 } 
 var description = cleanDescription(r.description);
 $('#rest6').html('<b>Game:</b> '+description+'<br><b>Online:</b> '+r.players.online+'/'+r.players.max);
 $('#favicon6').attr('src', r.favicon);
});
