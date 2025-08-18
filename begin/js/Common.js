$(function () {
    WeddingTimer();
    setInterval(WeddingTimer, 1000);
    var scrollTop = Number($(window).scrollTop());
    console.log(scrollTop);
    ShowSection(false, scrollTop);
});
var thisScrollTop = 0;
$(window).on("scroll", function (e) {
    var scrollTop = Number($(window).scrollTop());
    var UpScroll = scrollTop > thisScrollTop ? false : true;
    console.log((UpScroll ? "역방향" : "정방향") + " / scrollTop: " + scrollTop);
    ShowSection(UpScroll, scrollTop);
    thisScrollTop = scrollTop;
});
function WeddingTimer() {
    var targetDate = new Date(2025, 11, 7, 11, 0, 0);
    var nowDate = new Date();
    var diff = Number(targetDate) - Number(nowDate);
    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hour = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var min = Math.floor((diff / (1000 * 60)) % 60);
    var sec = Math.floor((diff / 1000) % 60);
    $("#Day").html(String(day));
    $("#Day_2").html(String(day));
    $("#Hour").html(String(hour).padStart(2, "0"));
    $("#Min").html(String(min).padStart(2, "0"));
    $("#Sec").html(String(sec).padStart(2, "0"));
}
function copyText(index) {
    var copyText = $("#Bank_" + index).val();
    window.navigator.clipboard.writeText(String(copyText)).then(function () {
        $("[id^='CopyDone_']").addClass("hidden");
        $("[id^='Copy_']").removeClass("hidden");
        $("#CopyDone_" + index).removeClass("hidden");
        $("#Copy_" + index).addClass("hidden");
        setTimeout(function () {
            $("#CopyDone_" + index).addClass("hidden");
            $("#Copy_" + index).removeClass("hidden");
        }, 5000);
    });
}
function SlideShow(index) {
    $("#AccountList_" + index)
        .find("ul")
        .slideToggle();
    $("#BtnAccountMore_" + index).toggleClass("on");
}
function FadeShow() {
    var ids = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ids[_i] = arguments[_i];
    }
    var str = "";
    for (var _a = 0, ids_1 = ids; _a < ids_1.length; _a++) {
        var id = ids_1[_a];
        $("#" + id).fadeToggle();
        str == "" ? (str += id) : (str += "," + id);
    }
    $("body").toggleClass("scroll-none");
}
function ShowSection(UpScroll, scrollTop) {
    if (!UpScroll) {
        //스크롤 아래로 내릴때 (정방향)
        if (!UpScroll && scrollTop >= 200) {
            $("#InvitationWrap").addClass("on");
        }
        else {
            $("#InvitationWrap").removeClass("on");
        }
        if (scrollTop >= 1000) {
            $("#DateWrap").addClass("on");
        }
        if (scrollTop >= 1500) {
            $("#LocationWrap").addClass("on");
        }
        if (scrollTop >= 2500) {
            $("#GalleryWrapSection").addClass("on");
        }
        if (scrollTop >= 3200) {
            $("#AccountWrap").addClass("on");
        }
    }
    else {
        //스크롤 위로 올릴때 (역방향)
        if (scrollTop < 200) {
            $("#InvitationWrap").removeClass("on");
        }
        if (scrollTop < 1000) {
            $("#DateWrap").removeClass("on");
        }
        if (scrollTop < 1500) {
            $("#LocationWrap").removeClass("on");
        }
        if (scrollTop < 2500) {
            $("#GalleryWrapSection").removeClass("on");
        }
        if (scrollTop < 3200) {
            $("#AccountWrap").removeClass("on");
        }
    }
}
function SetGalleryHtml() {
    var html = "";
    var htmlNav = "";
    for (var i = 1; i <= 38; i++) {
        var index = i <= 9 ? "0" + i : i;
        html += "<div class=\"slider-item\" onclick=\"ShowImg(" + i + ")\">\n\t\t\t\t\t\t<img src=\"/asset/images/gallery/0" + index + ".jpg\" id=\"Img_" + i + "\" alt=\"\uC6E8\uB529\uC2A4\uB0C5 \uC774\uBBF8\uC9C0 " + i + "\" />\n\t\t\t\t\t</div>";
        htmlNav += "<div class=\"slider-item\">\n\t\t\t\t\t\t<img src=\"/asset/images/gallery/0" + index + ".jpg\" alt=\"\uC6E8\uB529\uC2A4\uB0C5 \uC774\uBBF8\uC9C0 " + i + "\" />\n\t\t\t\t\t</div>";
    }
    $("#GalleryWrap").html(html);
    $("#SliderNav").html(htmlNav);
}
