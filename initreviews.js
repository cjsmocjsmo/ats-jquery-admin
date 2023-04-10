var SERVER_ADDR = "http://192.168.0.91:8080"
// var SERVER_ADDR = "https://atsdo.xyz"

function getReviews() {
    url = SERVER_ADDR + "/all_jailed";
    $.get(url, {}, function (data) {
        $.each(data, function (k, v) {
            console.log(v.email);
            $("#rev_email").text(v.email);
            $("#revReview").text(v.review);
            $("#name").text(v.name);
            $("#rating").text(v.rating);
            newstr = "Date: " + v.date + " at " + v.time;
            $("#dateandtime").text(newstr);
        })

    })
}

$(window).load(getReviews())
