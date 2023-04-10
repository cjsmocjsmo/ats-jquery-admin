var SERVER_ADDR = 'http://192.168.0.91:8080'
// var SERVER_ADDR = 'https://atsdo.xyz'

function getCounts() {
    var url = SERVER_ADDR + '/counts'
    $.get(url, {
    },
        function (data) {
            console.log(data);
            $('#vidStats').text(data.Vids);
            $('#photoStats').text(data.Photos);
            $('#adminStats').text(data.Admin);
            $('#estStats').text(data.Estimates);
            $('#estCompStats').text(data.Esticompleted);
            $('#estWorkStats').text(data.Estiworking);
            $('#rev').text(data.Revs);
            $('#revAccStats').text(data.Revsaccepted);
            $('#revRejStats').text(data.Revsrejected);
            $('#revJailedStats').text(data.Revsjailed);
        }
    )
}

$(window).load(getCounts())