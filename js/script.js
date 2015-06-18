// SECURE EMAIL

  function showEM(userName, emServer) {
      /*
        The showEM() function displays a link to the user's e-mail address.
        The text of the user and e-mail server names are entered in reverse order to thwart e-mail harvesters.
      */
      
      userName = stringReverse(userName); // reverse the text of the userName parameter
      emServer = stringReverse(emServer); // reverse the text of the emServer parameter
      
      var emLink = userName + "@" + emServer; // combine the text of userName and emServer
      document.write("<a href='mailto:" + emLink + "'>");
      document.write(emLink);
      document.write("</a>");
  }

  $(document).ready(function() {

    $(".fancybox").fancybox();

    $(function(){
        $('#menu').slicknav();
    });


  })