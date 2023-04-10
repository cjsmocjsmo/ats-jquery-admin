var SERVER_ADDR = "http://192.168.0.91:8080"
// var SERVER_ADDR = "https://atsdo.xyz"

function clearForm() {
    console.log("starting clearForm")
    $('#tokenInput').val("");
    $('#emailInput').val("");
    $('#pwdInput').val("");
}

function checkLogIn() {
    var cookie = $.cookie("atsadmin");
    console.log(cookie);
    if (cookie != undefined) {
        url = SERVER_ADDR + "/cookie_check"
        $.get(url, {
            "entry": cookie
        },
            function (data) {
                console.log(data);
                console.log(data.length);
                if (data.length != 0) {
                    window.location.href = "/admin.html";
                };
            }
        )
    }
};

function initATS() {
    checkLogIn();
};

$(window).load(initATS())



