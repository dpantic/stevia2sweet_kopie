(function(){this.init_interface=function(){var a;return parent&&parent.document.location.href!==document.location.href&&$("body#dialog_container.dialog").addClass("iframed"),$("input:submit:not(.button)").addClass("button"),$.browser.msie||($("#page_container, .wym_box").corner("5px bottom"),$(".wym_box").corner("5px tr"),$(".field > .wym_box").corner("5px tl"),$(".wym_iframe iframe").corner("2px"),$('.form-actions:not(".form-actions-dialog")').corner("5px")),$("#recent_activity li a, #recent_inquiries li a").each(function(a,b){return $(this).textTruncate({width:$(this).width(),tooltip:!1})}),$("textarea.wymeditor").each(function(){var a,b,c,d;d=$(this);if((a=WYMeditor.INSTANCES[$((d.next(".wym_box").find("iframe").attr("id")||"").split("_")).last().get(0)])!=null){(b=d.parent().next())!=null&&b.length>0&&b.find("input, textarea").keydown($.proxy(function(a){var b;b=a.shiftKey;if(b&&a.keyCode===$.ui.keyCode.TAB)return this._iframe.contentWindow.focus(),a.preventDefault()},a)).keyup(function(a){var b;return b=!1});if((c=d.parent().prev())!=null&&c.length>0)return c.find("input, textarea").keydown($.proxy(function(a){if(a.keyCode===$.ui.keyCode.TAB)return this._iframe.contentWindow.focus(),a.preventDefault()},a))}}),(a=$("#menu")).length>0&&(a.jcarousel({vertical:!1,scroll:1,buttonNextHTML:"<img src='https://.s3.amazonaws.com/assets/refinery/carousel-right.png' alt='down' height='15' width='10' />",buttonPrevHTML:"<img src='https://.s3.amazonaws.com/assets/refinery/carousel-left.png' alt='up' height='15' width='10' />",listTag:a.get(0).tagName.toLowerCase(),itemTag:a.children(":first").get(0).tagName.toLowerCase()}),a.outerWidth()<$("#page_container").outerWidth()?$("#page_container:not('.login #page_container')").corner("5px tr"):$("#page_container:not('.login #page_container')").uncorner()),$("#current_locale li a").click(function(a){return $("#current_locale li a span").each(function(a){return $(this).css("display",$(this).css("display")==="none"?"":"none")}),$("#other_locales").animate({opacity:"toggle",height:"toggle"},250),$("html,body").animate({scrollTop:$("#other_locales").parent().offset().top},250),a.preventDefault()}),$("#existing_image img").load(function(){return $("form.edit_image .form-actions").css({"margin-top":$("#existing_image").height()-$("form.edit_image").height()+8})}),$(".form-actions .form-actions-left input:submit#submit_button").click(function(a){return $("<img src='https://.s3.amazonaws.com/assets/refinery/ajax-loader.gif' width='16' height='16' class='save-loader' />").appendTo($(this).parent())}),$(".form-actions.form-actions-dialog .form-actions-left a.close_dialog").click(function(a){var b;return b=$(".ui-dialog-titlebar-close"),parent&&(b=parent.$(".ui-dialog-titlebar-close")),b.trigger("click"),a.preventDefault()}),$("a.suppress").live("click",function(a){return a.preventDefault()})}}).call(this);