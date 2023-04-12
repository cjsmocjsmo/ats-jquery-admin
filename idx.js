var SERVER_ADDR = "http://192.168.0.91:8080"
// var SERVER_ADDR = "https://atsdo.xyz"
// rsync -avP --delete ats-jquery-admin/* pi@192.168.0.26:/var/www/html/

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

$('#loginBtn').click(function () {

    var token = $('#tokenInput').val();
    var email = $('#emailInput').val();
    var password = $('#pwdInput').val();

    var url = SERVER_ADDR + '/login'
    var str = token + '_' + email + '_' + password
    $.get(url, {
        'entry': str
    },
        function (data) {
            console.log(data.isLoggedIn)
            console.log(typeof data.isLoggedIn)
            if (data.isLoggedIn === 'false') {
                $.cookie('atsadmin', data.cookie, { expires: 7, path: '/' });
                window.location.href = '/admin.html';
                clearForm();
            } else {
                window.location.href = '/admin.html';
                clearForm();
            }
        }
    )
});

function initATS() {
    checkLogIn();
};

$(window).load(initATS())



