var SERVER_ADDR = "http://192.168.0.91:8080"
// var SERVER_ADDR = "https://atsdo.xyz"

function getEstimats() {
    url = SERVER_ADDR + "/all_est";
    $.get(url, {}, function (data) {
        $.each(data, function (key, val) {
            console.log(val);
            $('#estDiv').attr("data-id", val.id);
            $('#name').text(val.name);
            $('#telephone').text(val.telephone);
            $('#email').text(val.email);
            $('#address').text(val.address);
            $('#city').text(val.city);
            $('#reqServDate').text(val.reqservdate);
            var DandT = val.date + " at " + val.time;
            $('#date').text(DandT);
            $('#image').attr('src', val.photo);
        })
    })
};

// $('#estBtn').click( function () {
//     var id = $('#estDiv').attr("data-id");
//     console.log("esti has been clicked")
// });

$(window).load(getEstimats())



