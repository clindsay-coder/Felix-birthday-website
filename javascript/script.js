$(document).ready(function() {


    //up down buttons
    $(function(){       
        $(".up").on("click", function(e) {
            $('html, body').animate({scrollTop:$(this).parent().prev().offset().top}, 'slow');
            // $(this).parent().next() // this is the next div container.
            return false; // prevent anchor
        });

         $(".down").on("click", function(e) {
            $('html, body').animate({scrollTop:$(this).parent().next().offset().top}, 'slow');
            // $(this).parent().next() // this is the next div container.
            return false; // prevent anchor
        });



        //hamburger menu
        $('.fa-bars').on('click', function(e) {

            //header black background
            $('header').toggleClass('black'); 
            
            //slide down nav display
            $('header ul').slideToggle();
        });







    
        
     $('.joe').on('click', function(e) {
        var obj = document.createElement("audio");
          obj.src = "assets/Birthday wishes/joe.opus"; 
          obj.play();
       })

        $('.eleri').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/eleri.opus"; 
            obj.play();
        })

        $('.sam').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/sam-bull.opus"; 
            obj.play();
        })
        $('.lotte').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/lotte.opus"; 
            obj.play();
        })
        $('.simon').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/simon.opus"; 
            obj.play();
        })
        $('.soph').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/soph.opus"; 
            obj.play();
        })
        $('.hannah').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/hannah-uni.aac"; 
            obj.play();
        })

        $('.nick').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/nick.aac"; 
            obj.play();
        })

        $('.holly').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/holly-chris.mp3"; 
            obj.play();
        })

        $('.liam').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/liam.aac"; 
            obj.play();
        })

        $('.hanry').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/hanry.m4a"; 
            obj.play();
        })

        $('.ben').on('click', function(e) {
            alert('hello');
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/ben.opus"; 
            obj.play();
        })
        
        $('.kate').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/kate.m4a"; 
            obj.play();
        })

        $('.brian').on('click', function(e) {
            var obj = document.createElement("audio");
            obj.src = "assets/Birthday wishes/brian.mp4"; 
            obj.play();
        })

    });












});