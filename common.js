$(document).on('click', '#loginBtn', function () {

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
})
.on('click', '#estBtn', function () {
    var id = $('#estDiv').attr("data-id");
})
.on('click', '#acceptBtn', function () {

})
.on('click', '#rejectBtn', function () {

});



