
    // $.getJSON("/pages/data.json", function (text) {

    //     console.log(text)
    //     function napSanpham(sp) {
    //         let row = "<div class='col-md-3 mb-4 div_sp' id='sp-" + sp.id + "'><a href='#' class='text-dark text-decoration-none'><div class='div_img'><button id='btn-" + sp.id + "' class='add-to-cart hide'>Mua hàng</button><img id='image-" + sp.id + "' class='product-image'  src='" + sp.product_img + "' alt=''></div><span class='p_Ten'>" + sp.product_name + "</span><br></a><span class='p_Gia mb-5'>" + sp.product_price + "<span>&nbsp VND</span></span></div>"
    //         $("#table").append(row);

    //     }
    //     text.forEach(napSanpham);
    //     var dssp = localStorage.getItem('dssp');
    //     var jsdssp = JSON.stringify(text);
    //     localStorage.setItem('dssp', jsdssp);
    //     // localStorage.setItem('dssp',JSON.stringify(text))
    // });


    $("#menuDNDK").click(function () {
        $("#myModalDN").modal()
    })

    $("#bt-DN").click(function () {
        if ($("#txtDNTen").val().trim() == "") {
            $("#errorDNTen").html("Bạn phải nhập tên hoặc email đăng nhập!!!")
            return false
        }
        $("#errorDNTen").html("*")
        if ($("#txtDNMK").val().trim() == "") {
            $("#errorDNMK").html("Bạn phải nhập mật khẩu đăng nhập!!!")
            return false
        }

        $("#errorDNMK").html("*")
        return true
    })
    $("#moDK").click(function () {
        $("#myModalDN").modal("hide")
        $("#myModalDK").modal()


    })
    $("#bt-DK").click(function () {
        if ($("#txtTenDK").val().trim() == "") {
            $("#errorTenDK").html("Bạn phải tên đăng nhập!!!")
            return false
        }
        $("#errorTenDK").html("*")
        if ($("#txtDKEmail").val().trim() == "") {
            $("#errorDKEmail").html("Bạn phải nhập địa chỉ email!!!")
            return false
        }
        $("#errorDKEmail").html("*")
        if ($("#txtDKMK").val().trim() == "") {
            $("#errorDKMK").html("Bạn phải nhập mật khẩu đăng ký!!!")
            return false
        }

        let mk = $("#txtDKMK").val()
        let regexmk = /^\w{6,}$/
        if (!regexmk.test(mk)) {
            $("#errorDKMK").html("Mật khẩu phải có ít nhất 6 kí tự")
            return false
        }
        $("#errorDKMK").html("*")

        if ($("#txtDKNLMK").val().trim() == "") {
            $("#errorDKNLMK").html("Bạn phải nhập mục nhập lại mật khẩu!!!")
            return false
        }
        let nlmk = $("#txtDKNLMK").val()
        if (!(nlmk == mk)) {
            $("#errorDKNLMK").html("Mật khẩu phải trùng khớp với mật khẩu đã nhập!!!")
            return false
        }
        $("#errorDKNLMK").html("*")
        let ten = $("#txtTenDK").val()
        let email = $("#txtDKEmail").val()
        let mkdk = $("#txtDKMK").val()

        let row_DKTC = "<div class='row'><label class='col-md-5' for=''>Tên đăng ký là: </label><label for='' class='col-md-7'>"+ten+"</label></div><div class='row'><label class='col-md-5' for=''>Email đăng ký là: </label><label for='' class='col-md-7'>"+email+"</label></div><div class='row'><label class='col-md-5' for=''>Mật khẩu là: </label><label for='' class='col-md-7'>"+mkdk+"</label></div>"
        $("#DKTC").append(row_DKTC);
        $("#myModal_DKThanhCong").modal()
        $("#myModalDK").modal("hide")
        return true
    })

    $("#bt-search").click(function () {
        $("#myModal_Tim").modal()
    })
    $("#btnSearch").click(function () {
        if ($("#txtSearch").val().trim() == "") {
            $("#errorSearch").html("Bạn chưa nhập tên sản phẩm cần tìm")
            return false
        }
        $("#errorSearch").html("")
        return true
    });
    

