function submitToAPI(e) {
    e.preventDefault();
    var URL = "https://a0k2pjfioa.execute-api.eu-central-1.amazonaws.com/prod/contact";

    var Namere = /[A-Za-z]{1}[A-Za-z]/;
    if (!Namere.test($("#name-input").val())) {
        alert("Name can not less than 2 char");
        return;
    }
    //var mobilere = /[0-9]{10}/;
    var mobilere = /[0-9]/;
    if (!mobilere.test($("#phone-input").val())) {
        alert("Please enter valid mobile number");
        return;
    }
    if ($("#email-input").val() == "") {
        alert("Please enter your email id");
        return;
    }

    var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
    if (!reeamil.test($("#email-input").val())) {
        alert("Please enter valid email address");
        return;
    }

    var name = $("#name-input").val();
    var phone = $("#phone-input").val();
    var email = $("#email-input").val();
    var desc = $("#description-input").val();
    var data = {
        name: name,
        phone: phone,
        email: email,
        desc: desc
    };
    fetch("https://a0k2pjfioa.execute-api.eu-central-1.amazonaws.com/prod/contact", {
        method: 'POST',
        body: JSON.stringify(data),
        //body: 'hallo',
        headers: {
            'Accept': '*',
            'Connection': 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': '*'
        }
    }).then((response) => {
        alert('success')
        //return response.json()
    }).then((res) => {
        if (res.status === 200) {
            console.log("Post successfully created!")
        }
    }).catch((error) => {
        console.log(error)
        alert(error)
        //alert("UnSuccessfull !!!")
    })
    /*
    $.ajax({
        type: "POST",
        url: "https://a0k2pjfioa.execute-api.eu-central-1.amazonaws.com/prod/contact",
        dataType: "json",
        crossDomain: "true",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),


        success: function () {
            // clear form and show a success message
            alert("Successfull");
            document.getElementById("contact-form").reset();
            //location.reload();
            window.location = './confirmation.html'
        },
        //error: function () {
        error: function (jqXHR, exception) {
            // show an error message
            //console.error(error, error.stack);
            //alert("UnSuccessfull ");
            alert(jqXHR.status);
            //window.location = './confirmation.html'
        }
    });
    //window.location = './confirmation.html'
    */
}