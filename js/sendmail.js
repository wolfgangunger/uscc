async function submitToAPI(e) {
    e.preventDefault();


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

    if (!$("#confirm-input").is(":checked")) {
        alert("Please confirm ");
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
    try {
        //res = await fetch('https://api.sccbrasil.com/contact', {
        res = await fetch('https://a0k2pjfioa.execute-api.eu-central-1.amazonaws.com/prod/contact', {
            method: 'post',
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)
        })

        const response = await res;
        //alert(response.status)
        console.log(`my data ${data}`);

        if (response) {
            //window.alert('Customer registered successfully');
            //alert(response)
            window.location = './confirmation.html'
        }

    } catch (error) {
        //alert(error)
        window.alert('Registration failed');
        console.log(error);
    }

}