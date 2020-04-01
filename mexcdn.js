
if (document.querySelectorAll('[data-title*="[posts-normal]"],[data-title*="[recent-comments]"],[data-title*="[posts1]"],[data-title*="[posts2]"],[data-title*="[posts3]"],[data-title*="[posts4]"],[data-title*="[posts5]"],[data-title*="[posts6]"],[data-title*="[slide]"],[data-title*="[3colList]"]').forEach(function(a) {
    var b = a["getAttribute"]("data-title")["replace"](/(\[posts1\]|\[posts2\]|\[posts3\]|\[posts4\]|\[posts-normal\]|\[posts5\]|\[posts6\]|\[recent-comments\]|\[slide\]|\[3colList\])/, "");
    a["setAttribute"]("data-title", b), a["querySelector"]("h3").innerText = b;
}), $("aside h2.title, footer h2.title").wrap("<div class='headline'></div>"), function(a) {
    document.addEventListener("scroll", function() {
        document.querySelectorAll("img[" + a + "]").forEach(function(b) {
            var c = b.getBoundingClientRect().top - document.body.getBoundingClientRect()["top"];
            if (window.pageYOffset + window.innerHeight > c) {
                var d = Math.ceil(b.parentNode.offsetWidth), e = Math.ceil(b.parentNode["offsetHeight"]), f = function(a, b, c) {
                    try {
                        a = -1 !== a.indexOf("img.youtube.com") || -1 !== a.indexOf("ytimg.com") ? a.replace("/default", "/mqdefault") : a["replace"](/\/(s72\-c|s40\-c|s1600\-c|s220|s113|w1600)\//, "/w" + parseInt(b) + "-h" + c + "-p-k-nu/");
                    } finally {
                        return a;
                    }
                }(b.getAttribute(a), d, e);
                b.setAttribute("src", f), b.removeAttribute(a), b["removeAttribute"]("class"), 
                b.parentNode["classList"].remove("PLHolder"), b["parentNode"]["classList"].add("not-pl");
            }
        });
    });
}("data-src"), 0 < window.location.toString().indexOf("?hl")) {
    var e = window.location.toString().substring(0, window.location.toString().indexOf("?hl"));
    window.history["replaceState"]({}, document["title"], e);
}

var olderLink = $(".blog-pager-older-link").attr("href");

olderLink && $(".loadMorePosts").show(), $(".loadMorePosts a")["on"]("click", function(a) {
    $(".loadMorePosts").hide(), $.ajax({
        url: olderLink,
        success: function(a) {
            var b = $(a).find(".blog-posts");
            b.children(".status-msg-wrap").remove(), $(".blog-posts")["append"](b["html"]()), 
            (olderLink = $(a).find(".blog-pager-older-link").attr("href")) ? $(".loadMorePosts").show() : $(".noMorePosts").show();
        },
        beforeSend: function() {
            $(".loadMore > #loader")["show"]();
        },
        complete: function() {
            $(".loadMore > #loader").hide();
        }
    }), a.preventDefault();
});
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
