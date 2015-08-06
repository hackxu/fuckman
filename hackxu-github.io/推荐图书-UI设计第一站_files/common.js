$(function() {
	function a() {
		h = !0, c.show(), f.hide()
	}
	function b() {
		h = !1, c.hide(), f.hide(), g.show()
	}
	var c = $("#header-sub-box"), d = $("#header-nav"), e = d.find("a"), f = d.find("i"), g = d.find("li.current i"), h = !1;
	e.each(function() {
		var d = $(this), e = d.attr("data-active");
		d.on({mouseenter: function() {
				a(), e ? $("#subnav_" + e).show().siblings().hide() : (c.hide(), d.next().show())
			},mouseleave: function() {
				h = !1, setTimeout(function() {
					h || b()
				}, 100)
			}})
	}), c.on({mouseenter: a,mouseleave: function() {
			h = !1, setTimeout(function() {
				h || b()
			}, 100)
	}})
});


window._bd_share_config = {
	common: {
		"bdText": "",
		"bdMini": "2",
		"bdMiniList": false,
		"bdPic": "",
		"bdStyle": "0"
	},
	share: [{
		bdCustomStyle:'/skin/ui/css/share.css'
	}]
}
with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];


// 左右同高
/*$(function(){
var hl = $("#left_area").outerHeight();
var hr = $("#right_area").outerHeight();
var mh = Math.max(hl,hr);
$("#left_area").height(mh);
$("#right_area").height(mh);
});*/
$(function(){
var hl = $("#left_area").outerHeight();
var hr = $("#right_area").outerHeight();
var mh = Math.max(hl,hr);
$("#left_area").attr("style","min-height:"+mh+"px;_height:"+mh+"px;");
$("#right_area").attr("style","min-height:"+mh+"px;_height:"+mh+"px;");
});



//linkTip
$(function() {
    var x = 10;
    var y = 20;

    $("a").mousemove(function(e) {
		if (!this.title && !this.myTitle) {
        	return;
        }
        var linkTip = $("#linkTip");
        if (!linkTip.length) {
        	this.myTitle = this.title;
        	this.title = "";
        	linkTip = $("<div id='linkTip'>" + this.myTitle + "</div>");
        	$("body").append(linkTip);
        }
        linkTip.css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"

        }).show("fast");
    }).mouseout(function() {
        if (!$("#linkTip").length) {
            return;
        }
        this.title = this.myTitle;
        $("#linkTip").remove();
    });
});

//gotop
$(function(){	
	$('#sidebar .gt').click(function(){
		$('html,body').animate({scrollTop: '0px'}, 800);
	});
});

/*document.oncontextmenu = function(){return false; };
document.onkeydown = function(){if (event.ctrlKey && window.event.keyCode==67){return false;}};
document.body.oncopy = function (){return false;};*/