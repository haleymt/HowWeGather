function Viewer($main) {
  this.$doc = $main;
  this.registerEvents();
}

// $ is a jQuery namespace
$.extend(Viewer.prototype, {

  registerEvents: function () {
    $('#panel1').on('click', function() {
      $('#pdf1').css('display', 'block');
    });

    $('#panel2').on('click', function() {
      $('#pdf2').css('display', 'block');
    });

    $('#pdf2').on('click', function() {
      $('#pdf2').css('display', 'none');
    });

    $('#pdf1').on('click', function() {
      $('#pdf1').css('display', 'none');
    });

    $('#overlay1').on('click', function(e) {
      e.stopPropagation();
      downloadFile("pdfs/how-we-gather.pdf", "how_we_gather");
    });

    $('#overlay2').on('click', function(e) {
      e.stopPropagation();
      downloadFile("pdfs/something-more.pdf", "something_more");
    });

    $('.download-button').click(function(e) {
      // e.preventDefault();
      // downloadFile();
    });
  },
});

function downloadFile(file, title) {
  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
  var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
  var downloadUrl = file;

  if (isChrome || isFirefox) {
    var link = document.createElement('a');
    link.download = title;
    link.href = downloadUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } else if (isSafari) {
    window.location.assign(downloadUrl);
  } else {
    window.open(downloadUrl, 'Download');
  }
}

$(function () {
  var $main = $('#main');
  v = new Viewer($main);
});
