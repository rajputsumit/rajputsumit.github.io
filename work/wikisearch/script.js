var submit = document.getElementById("submit");
var insertData = document.getElementById("searchData"); 

submit.addEventListener("click", function () {
    if (document.getElementById("searchTerm").value != "") {
        $(".searchHead").html("");
        $(".searchBody").html("");
        var searchTerm = document.getElementById("searchTerm").value;
        var url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+searchTerm;
        document.getElementById("searchTerm").value = "";
        var searchBox = document.getElementById("searchBox");
        var xhr = new XMLHttpRequest;
    //    console.log(searchTerm);
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = function () {
            renderHTML(xhr.responseText);
        };
        function renderHTML (data) {
            $(insertData).fadeIn(600);
            data = JSON.parse(data);
            // console.log(data);
//            console.log(dataHead);
            for (var i = 0; i < data[1].length; i++) {
                var dataHead = data[1][i];
                var dataBody = data[2][i];
                $(".searchHead").append("<a target='_blank' href="+data[3][i]+"><h1>"+dataHead+"</h1></a>"+"<p>"+dataBody+"</p>");
            }
        }
    } 
    else {
        console.log("Empty search term !");
        alert("Empty search term !");
    }
});