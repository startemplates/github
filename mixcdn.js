$(document).ready(function() {
    var idBlog = "5144074120745361959"; //
    $(function() {
        "use strict";
        $.ajax({
            dataType: "json",
            url: "https://www.blogger.com/feeds/" + idBlog + "/pages/default?alt=json-in-script",
            method: "GET",
            dataType: "jsonp",
            success: function(e) {
                var t;
                for (t = 0; t < e.feed.entry.length; t += 1) {
                    var n = $(e.feed.entry[t].content.$t);
                    if (0 === t && !$("body").hasClass("error_page")) {
                        for (var o = n.find("li"), d = [], a = 0; a < o.length; a += 1) d.push($(o[a]).text());
                        var r, i = window.location.hostname.toLowerCase(),
                            f = window.location.href.toLowerCase(),
                            s = d.length - 1;
                        for (r = 0; r < d.length; r += 1) {
                            if (-1 != i.indexOf(d[r])) {
                                var l = $(e.feed.entry[t].content.$t).find("script"),
                                    p = $(e.feed.entry[t].content.$t).find("style");
                                $("head").append(p), $("head").append(l);
                                break
                            }
                            r == s && -1 == f.indexOf("post-preview") && -1 == f.indexOf("www.blogger") && -1 == f.indexOf("b/layout-preview") && -1 == f.indexOf("b/preview") && -1 == f.indexOf("translate.google") && -1 == f.indexOf("webcache.googleusercontent") && -1 == f.indexOf("template-editor") && $("html").html(n.find(".redirect").html())
                        }
                    }
                    if (1 === t) {
                        p = $(e.feed.entry[t].content.$t).find("style");
                        $("head").append(p)
                    }
                }
            }
        })
    });
});
$once = !1, $(window).scroll(function() {
    $once || $["getScript"]("https://www.blogger.com/static/v1/widgets/3564956223-widgets.js").done(function() {
        _WidgetManager._Init(""), _WidgetManager._RegisterWidget("_BlogView", new _WidgetInfo("Blog1", "main", document.getElementById("Blog1"), {
            cmtInteractionsEnabled: !1,
            useNgc: !0
        }, "displayModeFull")), $("#comment-editor").insertAfter($(".conart"));
    }), $once = !0;
}), $(".comment-content").each(function(a) {
    var b = $(".comment-content:eq(" + a + ")");
    if (-1 != b.html().search(/(https|http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/gi)) b.html(b.html().replace(/(https|http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/gi, "<img  src='$2' />"));
    else if (-1 != b.html()["search"](/(?:http:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/gi) || -1 != b.html().search(/(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/gi)) b["html"](b.html().replace(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g, "<iframe width='100%' height='350' src='https://www.youtube.com/embed/$1' frameborder='0' allowfullscreen></iframe>").replace(/(?:http:\/\/)?(?:www\.)?(?:vimeo\.com)\/(.+)/g, "<iframe src='\/\/player.vimeo.com/video/$1' width='200' height='100' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>"));
    else {
        var c = b.text().replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, "<a id='commnetLinkS' rel='nofollow' href='$1'>$1</a>");
        b.html(c["replace"](/(^|[^\/])(www\.[\S]+(\b|$))/gim, '$1<a id="commnetLinkS" target="_blank" rel="nofollow" href="http://$2">$2</a>'));
    }
}), $("#LinkList1 li,#LinkList11 li").each(function() {
    if (-1 == $(this).text().indexOf("+")) $(this).addClass("ma").append("<ul></ul>");
    else {
        var a = $(this)["find"]("a").text()["replace"]("+", "");
        $(this).find("a").text(a), $(this).prev(".ma").addClass("pluselink").find("ul").append($(this));
    }
    $("#LinkList1,#LinkList11")["fadeIn"](0);
});
var a, s = $(".ma"),
    i = 5 * s.length - 5,
    n = 0;
for (a = 0; a < s.length; a += 1) n += s[a].offsetWidth;
jQuery(document)["ready"](function(a) {
        var b = a(".par-top, .head-poz, .par-bottom,.par-tp, .head-pz, .par-bottm");
        a(window).scroll(function() {
            99 <= a(this)["scrollTop"]() ? b.show(10).animate(".par-top, .head-poz, .par-bottom,.par-tp, .head-pz, .par-bottm").addClass("active") : b.animate(".par-top, .head-poz, .par-bottom,.par-tp, .head-pz, .par-bottm").removeClass("active");
        });
    }), $("li.ma.pluselink li").each(function() {
        if (-1 == $(this).text().indexOf("+")) $(this).addClass("ma2").append("<ul class='ma2ul'></ul class='ma2ul'>");
        else {
            var a = $(this).find("a").text().replace("+", "");
            $(this).find("a").text(a), $(this)["prev"](".ma2").addClass("pluselink2").find("ul").append($(this));
        }
    }), $($("<span class='icon'>" + ArrowIcon + "</span>")).insertAfter("li.ma.pluselink ul:not(.ma2ul), .pluselink2 ul"),
    $(".search a").click(function() {
        $(".search-box").fadeIn(0), $(".stxk").fadeIn(200);
    }), $(".search-submit2, .stxk").click(function() {
        $(".search-box").fadeOut(0), $(".stxk").fadeOut(100);
    }), $("a.op-one").click(function() {
        $(".sidenav").addClass("open"), $(".pos-t-t").fadeIn(300);
    }), $(".pos-t-t, a.closebtn")["click"](function() {
        $(".sidenav")["removeClass"]("open"), $(".pos-t-t").fadeOut(200);
    }), $my_menu = $(".nav-par").html(), $(".mop-links")["html"]($my_menu),
    $my_icon = $("#top-social-L").html(), $(".mop-icon").html($my_icon),
    $(".mop-links").html($my_menu),
    $my_tre = $("#pages").html(), $(".mop-pages")["html"]($my_tre),


    $(document)["on"]("scroll", function() {
        100 < $(window).scrollTop() ? $(".smoothscroll-top").addClass("show") : $(".smoothscroll-top").removeClass("show");
    }), $(".smoothscroll-top")["on"]("click", scrollToTop);

function scrollToTop() {
    verticalOffset = "undefined" != typeof verticalOffset ? verticalOffset : 0,
        element = $("body"), offset = element.offset(), offsetTop = offset.top,
        $("html,body").animate({
            scrollTop: offsetTop
        }, 600, "linear").animate({
            scrollTop: 0
        }, 200).animate({
            scrollTop: 0
        }, 150).animate({
            scrollTop: 0
        }, 50);
}
