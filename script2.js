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

var url4 = "https://api.minetools.eu/ping/"; 
$.getJSON(url4, function(r4) {
    //data is the JSON string
 if(r4.error){
    $('#rest4').html('Server Offline');
   return false;
 } 
  var pl4 = '';
  if(r4.players.sample.length > 0 ){pl4 = r4.players.sample[0].name;};
  let i4 = 1;
  var str4 = '';
    while (i4 < r4.players.sample.length) {
      pl3 = str.concat(pl4,', ', r4.players.sample[i].name)
      i4++;
}
 if(r4.players.sample.length == 0 ){ pl4 = 'Пусто';  } 
  $('#rest4').html('<b>Players:</b> '+pl4+'.');
 $('#favicon4').attr('src', r4.favicon);  
});

var url5 = "https://api.minetools.eu/ping/"; 
$.getJSON(url5, function(r5) {
    //data is the JSON string
 if(r5.error){
    $('#rest5').html('Server Offline');
   return false;
 } 
  var pl5 = '';
  if(r5.players.sample.length > 0 ){pl5 = r5.players.sample[0].name;}
  let i5 = 1;
  var str5 = '';
    while (i5 < r5.players.sample.length) {
      pl5 = str5.concat(pl2,', ', r5.players.sample[i5].name)
      i5++;
} 
 if(r5.players.sample.length == 0 ){pl5 = 'Пусто';  } 
  $('#rest5').html('<b>Players:</b> '+pl5+'.');
 $('#favicon5').attr('src', r5.favicon);  
});

var url6 = "https://api.minetools.eu/ping/"; 
$.getJSON(url6, function(r6) {
    //data is the JSON string
 if(r6.error){
    $('#rest6').html('Server Offline');
   return false;
 } 
  var pl6 = '';
  if(r6.players.sample.length > 0 ){pl6 = r6.players.sample[0].name;}
  let i6 = 1;
  var str6 = '';
    while (i6 < r6.players.sample.length) {
      pl6 = str6.concat(pl6,', ', r6.players.sample[i6].name)
      i6++;
} 
 if(r6.players.sample.length == 0 ){pl6 = 'Пусто';  } 
  $('#rest6').html('<b>Players:</b> '+pl6+'.');
 $('#favicon6').attr('src', r6.favicon);  
});

