/**
 * Created by jeff on 16/3/9.
 */
function SmoothlyMenu() {
    $("body").hasClass("mini-navbar") ? $("body").hasClass("fixed-sidebar") ? ($("#side-menu").hide(), setTimeout(function() {
            $("#side-menu").fadeIn(500)
        },
        300)) : $("#side-menu").removeAttr("style") : ($("#side-menu").hide(), setTimeout(function() {
            $("#side-menu").fadeIn(500)
        },
        100))
}

$(document).ready(function() {
    // 边栏缩小
    $(document).on("click", ".navbar-minimalize", function() {
        if($("body").hasClass("mini-navbar"))
            $(".change-img").attr("src", "images/logo_mini.png");
        else
            $(".change-img").attr("src", "images/logo_big.png");
        $("body").toggleClass("mini-navbar");
        SmoothlyMenu();
    });

    $(document).on("click", "#dockerSetBtn", function() {
        $("#DockerSetting").toggle(500);
    });
})
