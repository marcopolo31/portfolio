//ANIMATION SCROLLTOP
$(function(){

    $(".navbar a, footer a").click(function(event){

        event.preventDefault();
        var hash = this.hash;
        $("html,body").animate({
            scrollTop:$(hash).offset().top}, 900, function(){window.location.hash = hash;})

    });


});

$(function(){

    $('#contact-form').submit(function(e)
    {
        e.preventDefault();
        $('comments').empty();
        var postdata = $('#contact-form').serialize();

        $.ajax(
        {
            type: 'POST',
            url: 'contact.php',
            data: postdata,
            dataType: 'json',
            success: function(result)
            {
                if(result.isSuccess)
                {
                    $('#contact-form').append("<p class='thank-you'>Votre message a bien été envoyé.</p>");
                    $('#contact-form')[0].reset();
                }
                else
                {
                    $('#fistname + .comments').html(result.firstnameError);
                    $('#name + .comments').html(result.nameError);
                    $('#email + .comments').html(result.emailError);
                    $('#phone + .comments').html(result.phoneError);
                    $('#message + .comments').html(result.messageError);
                }

            }


        });

    });

});