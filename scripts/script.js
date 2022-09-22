let items = [];

function moveToItemPage(index) {
    localStorage.setItem('item', JSON.stringify(items[index]))
    window.location.href = "item.html";
}

$(document).ready(function () {
    $("#openSidedar").on("click", function () {
        document.getElementById("mySidebar").style.display = "block";
    })
    $("#closeSidedar").on("click", function () {
        document.getElementById("mySidebar").style.display = "none";
    });

    function getAllProducts() {
        $.ajax({
            type: "Get",
            url: "http://localhost:3000/api/v1/items",
            dataType: "json",
            success: function (data) {
                items = data;
                let html = '';
                let index = 0;



                data.forEach((carro) => {
                    if(index % 3 == 0){
                        html+='<div class="row">';
                    }
                    html+='<div class="col-md-4 mt-3"><a href="#">';
                    html+='<img class="img-fluid imagencarro" src="' + carro.urlimagen + '" alt="' + carro.modelo + '">';
                    html+='<div class="text-start"><a href="#" class="car-name"><h2>'+ carro.modelo +'</h2></a><p class="vehicle-strapling">llega como quieres</p></div>';
                    html+='<div class="text-start"><a href="#" class="cta-explore">mas informacion</a><a href="#" class="cta-explore-btn">></a></div><hr class="cta-division mb-4"><div class="text-start"><a href="#" class="cta-explore">Cotice aqui</a><a href="#" class="cta-explore-btn">></a></div><hr class="cta-division"></div>';
                    index++;
                    if(index % 3 == 0){
                        html+='</div>';
                    }
                });
                $('#listaautos').append(html);
            },
            error: function (error) {
                alert(error);
            }
        });
    }

    getAllProducts();
})