$(document).ready(function(){
    let tableObject;
    $.get("https://data.nasa.gov/api/views/59ui-jv2j/rows.json?accessType=DOWNLOAD",function(rawdata){
        let data=rawdata.data;
        for(let i=0; i<data.length; i++) {
            $("#tableContent").append(`
                <tr>
                    <td>` + (i + 1) + `</td>
                    <td>` + data[i][8] + `</td>
                    <td>` + data[i][9] + `</td>
                    <td>` + data[i][10] + `</td>
                    <td>` + data[i][11] + `</td>
                    <td>` + data[i][12] + `</td>
                    <td>` + JSON.parse(data[i][13][0])['address'] + `, ` + JSON.parse(data[i][13][0])['city'] + `, ` + JSON.parse(data[i][13][0])['state'] + `</td>
                    <td><a href="#" class="btn edit btn-warning">Edit</a><a href="#" class="btn delete btn-danger">Delete</a></td>
                </tr>
            `);
        }
        tableObject=$('#dataTable').DataTable();
    });
$(document).ready(
    function () {
        $(document).on("submit", "#inputForm", function (e) {
            e.preventDefault();
            var lastElementNumber = Number($('table tbody tr:last td:first').text());
            $("table tbody").append(`<tr data-index="`+(lastElementNumber+1)+`">
                                    <td>`+$("#nameInput").val()+`</td>
                                    <td>`+$("#namepInput").val()+`</td>
                                    <td>`+$("#dateInput").val()+`</td>
                                    <td>`+$("#nameoutletInput").val()+`</td>
                                    <td>`+$("#numberInput").val()+`</td>
                                    <td>`+$("#priceInput").val()+`</td>
                                    <td>`+$("#markupInput").val()+`</td>
                                    <td><a data-index="`+(lastElementNumber+1)+`" class="delete" href="#">Видалити</a></td>
                                </tr>`);
            $("#inputForm")[0].reset();
        });
        $(document).on("click",".delete", function(e){
            e.preventDefault();
            let deleteNum=$(this).parent().parent().children().first().text();
            $(this).parent().parent().nextAll().each(function (index) {
                $(this).children().first();
            });
            $(this).parent().parent().remove();
        });
    });
    $(document).ready(function(){
        let tableObject;
        $.get(".table",function(rawdata){
            let data=rawdata.data;
            for(let i=0; i<data.length; i++) {
                $("#tableContent").append(`
                    <tr>
                        <td>` + (i + 1) + `</td>
                        <td>` + data[i][8] + `</td>
                        <td>` + data[i][9] + `</td>
                        <td>` + data[i][10] + `</td>
                        <td>` + data[i][11] + `</td>
                        <td>` + data[i][12] + `</td>
                        <td>` + JSON.parse(data[i][13][0])['address'] + `, ` + JSON.parse(data[i][13][0])['city'] + `, ` + JSON.parse(data[i][13][0])['state'] + `</td>
                        <td><a href="#" class="btn edit btn-warning">Edit</a><a href="#" class="btn delete btn-danger">Delete</a></td>
                    </tr>
                `);
            }
            tableObject=$('#dataTable').DataTable();
        });
    });
});
