var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
$(function () {
    WeddingTimer();
    setInterval(WeddingTimer, 1000);
    var scrollTop = Number($(window).scrollTop());
    ShowSection(false, scrollTop);
});
document.addEventListener("DOMContentLoaded", function () {
    return __awaiter(this, void 0, void 0, function () {
        var audio, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    $("[id^='BtnAudio']").hide();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    audio = document.querySelector("#Bgm");
                    // play()는 Promise를 반환 (정책상 막히면 reject됨)
                    return [4 /*yield*/, audio.play()];
                case 2:
                    // play()는 Promise를 반환 (정책상 막히면 reject됨)
                    _a.sent();
                    $("#BtnAudioPause").show();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    // 자동재생 막힘 → 재생 버튼 UI 유지
                    $("#BtnAudioPlay").show();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
var thisScrollTop = 0;
$(window).on("scroll", function (e) {
    var scrollTop = Number($(window).scrollTop());
    var UpScroll = scrollTop > thisScrollTop ? false : true;
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
function FadeShow(ModalId, IsShow) {
    if (IsShow) {
        $("#" + ModalId).fadeIn();
        $("body").addClass("scroll-none");
    }
    else {
        $("#" + ModalId).fadeOut();
        $("body").removeClass("scroll-none");
    }
}
function ShowImg(id, IsShow) {
    FadeShow("ImgModalWrap", IsShow);
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
function AudioControl(play) {
    var audio = document.querySelector("#Bgm");
    $("[id^='BtnAudio']").hide();
    if (play) {
        audio.play();
        $("#BtnAudioPause").show();
    }
    else {
        audio.pause();
        $("#BtnAudioPlay").show();
    }
}
