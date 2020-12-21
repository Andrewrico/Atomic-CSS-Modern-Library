document.addEventListener("DOMContentLoaded", function () {
    let avatars = new Array(
        "https://i.pravatar.cc/300",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/300",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/300",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150",
        "https://i.pravatar.cc/150"
    );
    let names = new Array(
        "- J. S",
        "- J. V.",
        "- J. S.",
        "- K. J.",
        "- K. McC",
        "- D. D.",
        "- L. C.",
        "- J. A.",
        "- K. S.",
        " - J.S., Jul 2016",
        "- S.J, Jul 2016",
        " - P.R, Jul 2016",
        " K.P., Jul 2016",

        "- K. J."
    );
    let msgs = new Array(
      "The best thing was the speed and ease of use. Glad I was able to use them and will use them in the future if needed.",
     
      "Great service and customer service, fast delivery of funds.",
      
      "Received quick response from my inquiry and then received a prompt phone call explaining the loan offer.", 

      "I was pleased with the service",   

      "It was simple and easy to use fast pay out, good rates",
         
      "I like your service",  

      "Very good service",   

      "Easy website",   

      "Simple to use and secure interface to use for loan applications and if any assistance is required they are always happy to help applicants through the process",  

      "Professional service very good",  

      "Overall very good service",  

      "The application was fairly straight forward and there is no waiting on results",  
     
      "Great service and great representatives! Will definitely use again!"
    );

    let i = 0;
    function socialProof() {
      i++;
      $(".social-proof-avatar").attr("src", avatars[Math.floor(Math.random() * avatars.length)]);
      $(".social-proof-name").html(names[Math.floor(Math.random() * names.length)]);
      $(".social-proof-msg").html(msgs[Math.floor(Math.random() * msgs.length)]);
    //   $(".counter").html(Math.floor(10 + Math.random() * 1000));
      $("#social-proof").delay(5000).animate({
        left: "12px"
      }, 1500,
        "easeInOutBack", function () {
          $(this).delay(3000).animate({
            left: "-500px"
          }, 3000,
            "easeInQuart", function () {
              setTimeout(function () {
                socialProof()
              }, Math.floor(2000 + Math.random() * 10000));
            });
        });
    }
    socialProof();
  });