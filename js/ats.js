SERVER_ADDR = "http://192.168.0.91:8080"

$(document).on("click", "#loginBtn", function () {

    var token = $('#tokenInput').val();
    var email = $('#emailInput').val();
    var password = $('#pwdInput').val();
    console.log(token)
    console.log(email)
    console.log(password)

    var url = SERVER_ADDR + "/login"
    var str = token + "_" + email + "_" + password
    $.get(url, {
        "entry": str
    },
        function (data) {
            console.log(data)
            if (data.isLoggedIn) {
                var texp = (new Date(Date.now() + 86400 * 1000)).toUTCString();
                console.log(texp);
                $.cookie("atsadmin", data.cookie, { expires: texp, path: "/" });
                $(window).location = "/admin.html";
                $('#tokenInput').val("");
                $('#emailInput').val("");
                $('#pwdInput').val("");
            } else {
                $(window).location = "/";
                $('#tokenInput').val("");
                $('#emailInput').val("");
                $('#pwdInput').val("");
            }

        }
    )
})
.on("click", "#loginBtn", function () {

});

function checkLogIn() {
    $('#tokenInput').val("");
    $('#emailInput').val("");
    $('#pwdInput').val("");
    let cookie = $.cookie("atsadmin");
    console.log(cookie);
    if (cookie != undefined) {
        url = SERVER_ADDR + "/cookie_check"
        $.get(url, {
            "entry": cookie
        },
            function (data) {
                console.log(data);
                if (data) {
                    $(window).location = "/admin.html";
                } else {
                    $(window).location = "/";
                }
            }
        )
    } else {
        $(window).location = "/";
    }
};

function initATS() {
    checkLogIn();
};

$(window).load(initATS())



