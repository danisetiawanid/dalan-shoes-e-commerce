$.getJSON('json/product.json', function (data) {
    let produk = data.produk
    $.each(produk, function (i, data) {
        $('#allproduk').append('<div class="col-lg-3 col-sm-6 mb--45"> <div class="ft-product HTfadeInUp"> <div class="product-inner"> <div class="product-image"> <figure class="product-image--holder"> <img src="assets/img/products/' + data.gambar + '" alt="Product"> </figure> <a href="#" class="product-overlay"></a> <div class="product-action"> <a data-toggle="modal" data-target="#" class="action-btn"> <i class="la la-eye"></i> </a> <a href="#" class="action-btn"> <i class="la la-heart-o"></i> </a> <a href="#" class="action-btn"> <i class="la la-repeat"></i> </a> </div> </div> <div class="product-info"> <div class="product-category"> <a href="#" style="font-weight : bold;">' + data.kategori + '</a> </div> <h3 class="product-title"><a href="#" >' + data.nama + '.</a></h3> <div class="product-info-bottom"> <div class="product-price-wrapper"> <span class="money">' + data.harga + '</span> </div> </div> </div> </div> </div> </div>');
    });
});


$.getJSON('json/men.json', function (data) {
    let men = data.men
    $.each(men, function (i, data) {
        $('#menproduct').append('<div class="col-lg-3 col-sm-6 mb--45"> <div class="ft-product HTfadeInUp"> <div class="product-inner"> <div class="product-image"> <figure class="product-image--holder"> <img src="assets/img/products/men/' + data.gambar + '" alt="Product"> </figure> <a href="#" class="product-overlay"></a> <div class="product-action"> <a data-toggle="modal" data-target="#" class="action-btn"> <i class="la la-eye"></i> </a> <a href="#" class="action-btn"> <i class="la la-heart-o"></i> </a> <a href="#" class="action-btn"> <i class="la la-repeat"></i> </a> </div> </div> <div class="product-info"> <div class="product-category"> <a href="#" style="font-weight : bold;">' + data.kategori + '</a> </div> <h3 class="product-title"><a href="#">' + data.nama + '.</a></h3> <div class="product-info-bottom"> <div class="product-price-wrapper"> <span class="money">' + data.harga + '</span> </div> </div> </div> </div> </div> </div>');
    });
});


$.getJSON('json/women.json', function (data) {
    let women = data.women
    $.each(women, function (i, data) {
        $('#womenproduct').append('<div class="col-lg-3 col-sm-6 mb--45"> <div class="ft-product HTfadeInUp"> <div class="product-inner"> <div class="product-image"> <figure class="product-image--holder"> <img src="assets/img/products/women/' + data.gambar + '" alt="Product"> </figure> <a href="#" class="product-overlay"></a> <div class="product-action"> <a data-toggle="modal" data-target="#" class="action-btn"> <i class="la la-eye"></i> </a> <a href="#" class="action-btn"> <i class="la la-heart-o"></i> </a> <a href="#" class="action-btn"> <i class="la la-repeat"></i> </a> </div> </div> <div class="product-info"> <div class="product-category"> <a href="#" style="font-weight : bold;">' + data.kategori + '</a> </div> <h3 class="product-title"><a href="#">' + data.nama + '.</a></h3> <div class="product-info-bottom"> <div class="product-price-wrapper"> <span class="money">' + data.harga + '</span> </div> </div> </div> </div> </div> </div>');
    });
});

$.getJSON('json/kids.json', function (data) {
    let kids = data.kids
    $.each(kids, function (i, data) {
        $('#kidsproduct').append('<div class="col-lg-3 col-sm-6 mb--45"> <div class="ft-product HTfadeInUp"> <div class="product-inner"> <div class="product-image"> <figure class="product-image--holder"> <img src="assets/img/products/kids/' + data.gambar + '" alt="Product"> </figure> <a href="#" class="product-overlay"></a> <div class="product-action"> <a data-toggle="modal" data-target="#" class="action-btn"> <i class="la la-eye"></i> </a> <a href="#" class="action-btn"> <i class="la la-heart-o"></i> </a> <a href="#" class="action-btn"> <i class="la la-repeat"></i> </a> </div> </div> <div class="product-info"> <div class="product-category"> <a href="#" style="font-weight : bold;">' + data.kategori + '</a> </div> <h3 class="product-title"><a href="#">' + data.nama + '.</a></h3> <div class="product-info-bottom"> <div class="product-price-wrapper"> <span class="money">' + data.harga + '</span> </div> </div> </div> </div> </div> </div>');
    });
});


