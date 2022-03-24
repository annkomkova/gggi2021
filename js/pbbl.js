$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "https://raw.githubusercontent.com/annkomkova/gggi2021/main/data/gggi2021.csv",
    dataType: "text",
    success: function(data) {
      processData(data);
    }
  });
});

function processData(allText) {
  let allTextLines = allText.split(/\r\n|\n/);
  let mainblock = $("#block");

  for (let i = 1; i < parseInt(allTextLines.length); i++) {
      let mblock = $('.mainblock');
      let prediv = '<div class=';
      let prea = '<a class=';
      let linkdata = 'target="_blank"  href="';
      let data = allTextLines[i].split(',');
      let databck = 'style="background-image:url(svg/'+data[1]+'.svg);" />';
      let randelement = $(prediv +'"mainblock"'+databck).html(prediv +'"gggi2021score">'+'Global score &nbsp;'+data[5]+'</div>' + prediv +'"gggi2021rank"><p>'+'Global rank &nbsp;' + data[4]+'</p></div>' + prediv +'"economic"><p>' + 'Economic rank &nbsp;' + data[8]+'</p></div>' + prediv +'"edication"><p>' + 'Education rank &nbsp;' + data[12]+'</p></div>' + prediv +'"health"><p>' + 'Health rank &nbsp;' + data[16]+'</p></div>' + prediv +'"politic"><p>' + 'Politic rank &nbsp;' + data[20]+'</p></div>');
      let coin = 0;
      let check = parseInt(mblock.length) >= 1;

      // вывод карточек
      if (coin == 0) {
          mainblock.append(randelement);
          console.log(coin);
        console.log(check);
      }
    }

  $('a[href=""]').remove();
  $('.mainblock').click(function(){
    $('.blocker.hidden').removeClass('closed');
    $(".expand").remove();
    $("#block").after(  $(this).clone().addClass("card-item"));
    setTimeout(function(){
      $('.blocker').removeClass('hidden');
    }, 50);
    setTimeout(function(){
      $('.card-item').addClass('expand');
    }, 300);
  });

  $('.blocker').click(function(){
    $(".expand").remove();
    setTimeout(function(){
      $('.blocker').addClass('closed');
    }, 800);
    setTimeout(function(){
      $('.blocker').addClass('hidden');
    }, 100);
  });
}
