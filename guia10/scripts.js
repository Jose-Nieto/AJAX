
const links = document.querySelectorAll('.nav li');

links[0].addEventListener('click', ()=> {
    $.ajax({
        url:'comple2.html',
        type:'get',
        success: function(data){
         $('#caja').html(data);
        }
      });
});

links[1].addEventListener('click', ()=> {
    $.ajax({
        url:'content1.html',
        type:'get',
        success: function(data){
         $('#caja').html(data);
        }
      });
});

links[2].addEventListener('click', ()=> {
    $.ajax({
        url:'content2.html',
        type:'get',
        success: function(data){
         $('#caja').html(data);
        }
      });
});

links[3].addEventListener('click', ()=> {
    $.ajax({
        url:'content3.html',
        type:'get',
        success: function(data){
         $('#caja').html(data);
        }
      });
});
links[4].addEventListener('click', ()=> {
  $.ajax({
      url:'content4.html',
      type:'get',
      success: function(data){
       $('#caja').html(data);
      }
    });
});
links[5].addEventListener('click', ()=> {
  $.ajax({
      url:'content5.html',
      type:'get',
      success: function(data){
       $('#caja').html(data);
      }
    });
});
links[6].addEventListener('click', ()=> {
  $.ajax({
      url:'content6.html',
      type:'get',
      success: function(data){
       $('#caja').html(data);
      }
    });
});