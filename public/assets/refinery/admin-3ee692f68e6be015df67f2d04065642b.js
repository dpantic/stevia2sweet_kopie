var shiftHeld=!1,initialLoad=!0;init_refinery_admin=function(){init_interface(),init_sortable_menu(),init_submit_continue(),init_modal_dialogs(),init_tooltips(),init_ajaxy_pagination()},$(document).ready(init_refinery_admin),typeof window.onpopstate=="object"&&$(window).bind("popstate",function(a){initialLoad||$(document).paginateTo(location.pathname+location.href.split(location.pathname)[1]),initialLoad=!1}),$.fn.paginateTo=function(a){$.ajax({url:a,cache:!1,success:function(a){$(".pagination_container").slideTo(a),$(".pagination_container .pagination a").each(function(a,b){$(this).attr("href",$(this).attr("href").replace(/\?\_\=[^&]+&/,"?"))})},failure:function(a){window.location=popstate_location}})},$.fn.slideTo=function(a){return $(this).html(a),$(this).applyMinimumHeightFromChildren(),$(this).find(".pagination_frame").removeClass("frame_right").addClass("frame_center"),init_modal_dialogs(),init_tooltips(),$(this)},$.fn.applyMinimumHeightFromChildren=function(){return child_heights=0,$(this).children().each(function(a,b){child_heights+=$(b).height(),$.each(["marginTop","marginBottom","paddingTop","paddingBottom"],function(a,c){child_heights+=parseInt($(b).css(c))||0})}),$(this).css("min-height",child_heights),$(this)},init_modal_dialogs=function(){$(document).on("click",'a[href*="dialog=true"]:not(#dialog_container a)',function(a){var b=$(this),c=b.attr("href"),d=parseInt($(c.match("width=([0-9]*)")).last().get(0),10)||928,e=parseInt($(c.match("height=([0-9]*)")).last().get(0),10)||473,f=b.attr("title")||b.attr("name")||b.html()||null;c=c.replace(/(\&(amp\;)?)?dialog\=true/,"").replace(/(\&(amp\;)?)?width\=\d+/,"").replace(/(\&(amp\;)?)?height\=\d+/,"").replace(/(\?&(amp\;)?)/,"?").replace(/\?$/,""),iframe_src=(iframe_src=c)+(iframe_src.indexOf("?")>-1?"&":"?")+"app_dialog=true&dialog=true",iframe=$("<iframe id='dialog_iframe' frameborder='0' marginheight='0' marginwidth='0' border='0'></iframe>"),$.browser.msie||iframe.corner("8px"),iframe.dialog({title:f,modal:!0,resizable:!1,autoOpen:!0,width:d,height:e,open:onOpenDialog,close:onCloseDialog,open:function(a,b){iframe.attr("src",iframe_src)}}),a.preventDefault()})},refinery_dialog_success=function(a){close_dialog(),$.ajax({url:window.location.pathname,cache:!1,success:function(a){$(".pagination_container").html(a),$("#flash_container > #flash").remove(),$("#flash_container").append($(".pagination_container").find("#flash")),$("#flash").css({width:"auto",visibility:""}).fadeIn(550),init_refinery_admin()}})},trigger_reordering=function(a,b){$menu=$("#menu"),a.preventDefault(),$("#menu_reorder, #menu_reorder_done").toggle(),$("#site_bar, #content").fadeTo(500,b?.35:1),b?$menu.find(".tab a").click(function(a){a.preventDefault()}):$menu.find(".tab a").unbind("click"),$menu.sortable(b?"enable":"disable")},trigger_reordering_content_section=function(a,b){$menu=$("#page-tabs"),a.preventDefault(),$("#reorder_page_part, #reorder_page_part_done").toggle(),$("#site_bar, #menu, .field:not(:has(#page-tabs)), .page_part, #more_options_field, .form-actions").fadeTo(500,b?.35:1),b?$menu.addClass("reordering").find(".tab a").click(function(a){a.preventDefault()}):$menu.removeClass("reordering").find(".tab a").unbind("click"),$menu.sortable(b?"enable":"disable").sortable({items:"li",stop:function(a,b){$("#page-tabs li[data-index]").each(function(a,b){$("#page_parts_attributes_"+$(this).data("index")+"_position").val(a+1)})}})},submit_and_continue=function(a,b){$(this).hasClass("wymupdate")&&$.each(WYMeditor.INSTANCES,function(a,b){b.update()}),$("#continue_editing").val(!0),$("#flash").fadeOut(250),$(".fieldWithErrors").removeClass("fieldWithErrors").addClass("field"),$("#flash_container .errorExplanation").remove(),$.post($("#continue_editing").get(0).form.action,$($("#continue_editing").get(0).form).serialize(),function(a){($flash_container=$("#flash_container")).length>0&&($flash_container.html(a),$("#flash").css({width:"auto",visibility:null}).fadeIn(550),$(".errorExplanation").not($("#flash_container .errorExplanation")).remove(),(error_fields=$("#fieldsWithErrors").val())!=null?$.each(error_fields.split(","),function(){$("#"+this).wrap("<div class='fieldWithErrors' />")}):b&&(window.location=b),$(".fieldWithErrors:first :input:first").focus(),$("#continue_editing").val(!1),init_flash_messages())},"html"),a.preventDefault()},init_tooltips=function(a){$($(a!=null?a:"a[title], span[title], #image_grid img[title], *[tooltip]")).not(".no-tooltip").each(function(a,b){$(b).hover(function(a){if(a.type=="mouseenter"||a.type=="mouseover")$(this).oneTime(350,"tooltip",$.proxy(function(){$(".tooltip").remove(),tooltip=$("<div class='tooltip'><div><span></span></div></div>").appendTo("#tooltip_container"),tooltip.find("span").html($(this).attr("tooltip")),$.browser.msie||tooltip.corner("6px").find("span").corner("6px"),tooltip_nib_extension=$.browser.msie?".gif":".png",nib=$("<img src='https://.s3.amazonaws.com/assets/refinery/tooltip-nib"+tooltip_nib_extension+"' class='tooltip-nib'/>").appendTo("#tooltip_container"),tooltip.css({opacity:0,maxWidth:"300px"}),required_left_offset=$(this).offset().left-tooltip.outerWidth()/2+$(this).outerWidth()/2,tooltip.css("left",required_left_offset>0?required_left_offset:0);var a=tooltip.offset(),b=tooltip.outerWidth();a&&a.left+b>(window_width=$(window).width())&&tooltip.css("left",window_width-b),tooltip.css({top:$(this).offset().top-tooltip.outerHeight()-10}),nib.css({opacity:0}),(a=tooltip.offset())&&nib.css({left:$(this).offset().left+$(this).outerWidth()/2-5,top:a.top+tooltip.height()});try{tooltip.animate({top:a.top-10,opacity:1},200,"swing"),nib.animate({top:nib.offset().top-10,opacity:1},200)}catch(c){tooltip.show(),nib.show()}},$(this)));else if(a.type=="mouseleave"||a.type=="mouseout")$(this).stopTime("tooltip"),(tt_offset=(tooltip=$(".tooltip")).css("z-index","-1").offset())==null&&(tt_offset={top:0,left:0}),tooltip.animate({top:tt_offset.top-20,opacity:0},125,"swing",function(){$(this).remove()}),(nib_offset=(nib=$(".tooltip-nib")).offset())==null&&(nib_offset={top:0,left:0}),nib.animate({top:nib_offset.top-20,opacity:0},125,"swing",function(){$(this).remove()})}).click(function(a){$(this).stopTime("tooltip")}),$(b).attr("tooltip")==null&&$(b).attr("tooltip",$(b).attr("title")),$elements=$(b).add($(b).children("img")).removeAttr("title"),$.browser.msie&&$elements.removeAttr("alt")})};var link_tester={initialised:!1,init:function(a,b){this.initialised||(this.test_url=a,this.test_email=b,this.initialised=!0)},email:function(a,b){a!=""&&$.getJSON(link_tester.test_email,{email:a},function(a){b(a.result=="success")})},url:function(a,b){a!=""&&$.getJSON(link_tester.test_url,{url:a},function(a){b(a.result=="success")})},validate_textbox:function(a,b,c){var d="",e=$("<img id='"+b.replace("#","")+"_test_loader' src='https://.s3.amazonaws.com/assets/refinery/ajax-loader-439a76dd6a2495d3ff4d56f8c64bbd86.gif' alt='Testing...' style='display: none;'/>"),f=$("<span id='"+b.replace("#","")+"_test_result'></span>");e.insertAfter($(b)),f.insertAfter(e),$(b).bind("paste blur",function(){$(b).stop(!0),$(b+"_test_loader").hide(),$(b+"_test_result").hide(),$(b+"_test_result").removeClass("success_icon").removeClass("failure_icon"),this.value!=""&&this.value[0]!="/"&&$(b).delay(300).queue(function(){$(b+"_test_loader").show(),$(b+"_test_result").hide(),$(b+"_test_result").removeClass("success_icon").removeClass("failure_icon"),a(this.value,function(a){a?d="success_icon":d="failure_icon",$(b+"_test_result").addClass(d).show(),$(b+"_test_loader").hide()}),c&&c($(b)),$(this).dequeue()})})},validate_url_textbox:function(a,b){link_tester.validate_textbox(link_tester.url,a,b)},validate_email_textbox:function(a,b){link_tester.validate_textbox(link_tester.email,a,b)}},link_dialog={initialised:!1,init:function(){this.initialised||(this.init_tabs(),this.init_resources_submit(),this.init_close(),this.page_tab(),this.web_tab(),this.email_tab(),this.initialised=!0)},init_tabs:function(){var a=$("#dialog_menu_left input:radio"),b=a.parent().filter(".selected_radio").find("input:radio").first()||a.first();a.click(function(){link_dialog.switch_area($(this))}),b.attr("checked","true"),link_dialog.switch_area(b)},init_resources_submit:function(){$("#existing_resource_area .form-actions-dialog #submit_button").click(function(a){a.preventDefault(),(resource_selected=$("#existing_resource_area_content ul li.linked a")).length>0&&(resourceUrl=parseURL(resource_selected.attr("href")),relevant_href=resourceUrl.pathname,resourceUrl.hostname.match(/s3.amazonaws.com/)&&(relevant_href=resourceUrl.protocol+"//"+resourceUrl.host+relevant_href),typeof resource_picker.callback=="function"&&resource_picker.callback({id:resource_selected.attr("id").replace("resource_",""),href:relevant_href,html:resource_selected.html()})),$(".form-actions-dialog #cancel_button").trigger("click")})},init_close:function(){$(".form-actions-dialog #cancel_button").not(".wym_iframe_body .form-actions-dialog #cancel_button").click(close_dialog),parent&&parent.document.location.href!=document.location.href&&parent.document.getElementById("wym_dialog_submit")!=null&&($("#dialog_container .form-actions input#submit_button").click(function(a){a.preventDefault(),$(parent.document.getElementById("wym_dialog_submit")).click()}),$("#dialog_container .form-actions a.close_dialog").click(close_dialog))},switch_area:function(a){$("#dialog_menu_left .selected_radio").removeClass("selected_radio"),$(a).parent().addClass("selected_radio"),$("#dialog_main .dialog_area").hide(),$("#"+$(a).val()+"_area").show()},page_tab:function(){$(".link_list li").click(function(a){a.preventDefault(),$(".link_list li.linked").removeClass("linked"),$(this).addClass("linked");var b=$(this).children("a.page_link").get(0),c=window.location.port.length>0?":"+window.location.port:"",d=b.href.replace(window.location.protocol+"//"+window.location.hostname+c,"");link_dialog.update_parent(d,b.rel.replace(/\ ?<em>.+?<\/em>/,""))})},web_tab:function(){link_tester.validate_url_textbox("#web_address_text",function(){}),$("#web_address_text, #web_address_target_blank").change(function(){link_dialog.update_parent($("#web_address_text").val(),$("#web_address_text").val(),$("#web_address_target_blank").get(0).checked?"_blank":"")})},email_tab:function(){link_tester.validate_email_textbox("#email_address_text",function(){}),$("#email_address_text, #email_default_subject_text, #email_default_body_text").change(function(a){var b=$("#email_default_subject_text").val(),c=$("#email_default_body_text").val(),d=$("#email_address_text").val();modifier="?",additional="",b.length>0&&(additional+=modifier+"subject="+b,modifier="&"),c.length>0&&(additional+=modifier+"body="+c,modifier="&");var e="";for(var f=0;f<d.length;f++)e+="%"+d.charCodeAt(f).toString(16);link_dialog.update_parent("mailto:"+e+additional,d)})},update_parent:function(a,b,c){parent!=null&&((wym_href=parent.document.getElementById("wym_href"))!=null&&(wym_href.value=a),(wym_title=parent.document.getElementById("wym_title"))!=null&&(wym_title.value=b),(wym_target=parent.document.getElementById("wym_target"))!=null&&(wym_target.value=c||""))}},page_options={initialised:!1,init:function(a,b,c){this.initialised||(page_options.tabs=$("#page-tabs"),page_options.tabs.tabs({tabTemplate:'<li><a href="#{href}">#{label}</a></li>'}),page_options.tabs.find(" > ul li a").corner("top 5px"),part_shown=$("#page-tabs .page_part.field").not(".ui-tabs-hide"),$("#page-tabs .page_part.field").removeClass("ui-tabs-hide"),this.enable_parts=a,this.new_part_url=b,this.del_part_url=c,this.show_options(),$(document).ready($.proxy(function(){$("#page-tabs .page_part.field").not(this).addClass("ui-tabs-hide"),$("#page-tabs > ul li a").corner("top 5px")},part_shown)),this.enable_parts&&this.page_part_dialog(),this.initialised=!0)},show_options:function(){$("#toggle_advanced_options").click(function(a){a.preventDefault(),$("#more_options").animate({opacity:"toggle",height:"toggle"},250),$("html,body").animate({scrollTop:$("#toggle_advanced_options").parent().offset().top},250)})},page_part_dialog:function(){$("#new_page_part_dialog").dialog({title:"Create Content Section",modal:!0,resizable:!1,autoOpen:!1,width:600,height:200}),$("#add_page_part").click(function(a){a.preventDefault(),$("#new_page_part_dialog").dialog("open")}),$("#new_page_part_save").click(function(a){a.preventDefault();var b=$("#new_page_part_title").val();if(b.length>0){var c=b.toLowerCase().replace(" ","_");$("#part_"+c).size()===0?$.get(page_options.new_part_url,{title:b,part_index:$("#new_page_part_index").val(),body:""},function(a,c){$("#submit_continue_button").remove(),$("#page_part_editors").append(a),page_options.tabs.tabs("add","#page_part_new_"+$("#new_page_part_index").val(),b),page_options.tabs.tabs("select",$("#new_page_part_index").val()),WYMeditor.onload_functions.push(function(){page_options.tabs.tabs("select",$("#new_page_part_index").val())}),$("#page_part_new_"+$("#new_page_part_index").val()).appendTo("#page_part_editors"),WYMeditor.init(),$("#new_page_part_index").val(parseInt($("#new_page_part_index").val(),10)+1),$("#new_page_part_title").val(""),page_options.tabs.find("> ul li a").corner("top 5px"),$("#new_page_part_dialog").dialog("close")},"html"):alert("A content section with that title already exists, please choose another.")}else alert("You have not entered a title for the content section, please enter one.")}),$("#new_page_part_cancel").click(function(a){a.preventDefault(),$("#new_page_part_dialog").dialog("close"),$("#new_page_part_title").val("")}),$("#delete_page_part").click(function(a){a.preventDefault();if(confirm("This will remove the content section '"+$("#page_parts .ui-tabs-selected a").text()+"' immediately even if you don't save this page, are you sure?")){var b=page_options.tabs.tabs("option","selected");$.ajax({url:page_options.del_part_url+"/"+$("#page_parts_attributes_"+b+"_id").val(),type:"DELETE"}),page_options.tabs.tabs("remove",b),$("#page_parts_attributes_"+b+"_id").remove(),$("#submit_continue_button").remove()}}),$("#reorder_page_part").click(function(a){trigger_reordering_content_section(a,!0)}),$("#reorder_page_part_done").click(function(a){trigger_reordering_content_section(a,!1)})}},image_dialog={initialised:!1,callback:null,init:function(a){return this.initialised||(this.callback=a,this.init_tabs(),this.init_select(),this.init_actions(),this.initialised=!0),this},init_tabs:function(){var a=$("#dialog_menu_left input:radio"),b=a.parent().filter(".selected_radio").find("input:radio").first()||a.first();a.click(function(){link_dialog.switch_area($(this))}),b.attr("checked","true"),link_dialog.switch_area(b)},switch_area:function(a){$("#dialog_menu_left .selected_radio").removeClass("selected_radio"),$(a).parent().addClass("selected_radio"),$("#dialog_main .dialog_area").hide(),$("#"+a.value+"_area").show()},init_select:function(){$("#existing_image_area_content ul li img").click(function(){image_dialog.set_image(this)}),(selected_img=$("#existing_image_area_content ul li.selected img")).length>0&&image_dialog.set_image(selected_img.first())},set_image:function(a){if($(a).length>0){$("#existing_image_area_content ul li.selected").removeClass("selected"),$(a).parent().addClass("selected");var b=$(a).attr("data-id"),c=$("#existing_image_size_area li.selected a").attr("data-geometry"),d=$("#existing_image_size_area li.selected a").attr("data-size"),e=$("#wants_to_resize_image").is(":checked");image_url=e?$(a).attr("data-"+d):$(a).attr("data-original"),parent&&((wym_src=parent.document.getElementById("wym_src"))!=null&&(wym_src.value=image_url),(wym_title=parent.document.getElementById("wym_title"))!=null&&(wym_title.value=$(a).attr("title")),(wym_alt=parent.document.getElementById("wym_alt"))!=null&&(wym_alt.value=$(a).attr("alt")),(wym_size=parent.document.getElementById("wym_size"))!=null&&typeof c!="undefined"&&(wym_size.value=c.replace(/[<>=]/g,"")))}},submit_image_choice:function(a){a.preventDefault(),(img_selected=$("#existing_image_area_content ul li.selected img").get(0))&&$.isFunction(this.callback)&&this.callback(img_selected),close_dialog(a)},init_actions:function(){var a=this;$("#existing_image_area .form-actions-dialog #submit_button").not(".wym_iframe_body #existing_image_area .form-actions-dialog #submit_button").click($.proxy(a.submit_image_choice,a)),$(".form-actions-dialog #cancel_button").not(".wym_iframe_body .form-actions-dialog #cancel_button").click($.proxy(close_dialog,a)),$("#existing_image_size_area ul li a").click(function(a){$("#existing_image_size_area ul li").removeClass("selected"),$(this).parent().addClass("selected"),$("#existing_image_size_area #wants_to_resize_image").attr("checked","checked"),image_dialog.set_image($("#existing_image_area_content ul li.selected img")),a.preventDefault()}),$("#existing_image_size_area #wants_to_resize_image").change(function(){$(this).is(":checked")?$("#existing_image_size_area ul li:first a").click():($("#existing_image_size_area ul li").removeClass("selected"),image_dialog.set_image($("#existing_image_area_content ul li.selected img")))}),image_area=$("#existing_image_area").not("#wym_iframe_body #existing_image_area"),image_area.find(".form-actions input#submit_button").click($.proxy(function(a){a.preventDefault(),$(this.document.getElementById("wym_dialog_submit")).click()},parent)),image_area.find(".form-actions a.close_dialog").click(close_dialog)}},list_reorder={initialised:!1,init:function(){this.initialised||($("#reorder_action").click(list_reorder.enable_reordering),$("#reorder_action_done").click(list_reorder.disable_reordering),list_reorder.tree===!1&&list_reorder.sortable_list.find("li").addClass("no-nest"),list_reorder.sortable_list.nestedSortable({listType:"ul",disableNesting:"no-nest",forcePlaceholderSize:!0,handle:list_reorder.tree?"div":null,items:"li",opacity:.6,placeholder:"placeholder",tabSize:25,tolerance:"pointer",toleranceElement:list_reorder.tree?"> div":null,disabled:!0,start:function(){},change:function(){list_reorder.tree&&list_reorder.reset_branch_classes(this)},stop:function(){list_reorder.tree?(list_reorder.reset_branch_classes(this),list_reorder.reset_icon_classes(this)):list_reorder.reset_on_off_classes(this)}}),list_reorder.tree?list_reorder.reset_branch_classes(list_reorder.sortable_list):list_reorder.reset_on_off_classes(list_reorder.sortable_list),this.initialised=!0)},reset_on_off_classes:function(a){$("> li",a).each(function(a,b){$(b).removeClass("on off on-hover").addClass(a%2===0?"on":"off")})},reset_branch_classes:function(a){$("li.ui-sortable-helper",this).removeClass("record").removeClass("branch_start").removeClass("branch_end"),$("li",a).removeClass("branch_start").removeClass("branch_end"),$("> li:first",a).addClass("branch_start"),$("> li:last",a).addClass("branch_end");var b=$("ul",a);$("> li:last",b).addClass("branch_end")},reset_icon_classes:function(a){$("li",a).each(function(){var a=$(this),b=a.find(".icon:first");a.find("ul li").size()>0?b.addClass("toggle expanded"):b.hasClass("expanded")&&b.removeClass("toggle expanded")})},enable_reordering:function(a){a&&a.preventDefault(),$("#sortable_list, .sortable_list").addClass("reordering"),$("#sortable_list .actions, .sortable_list .actions, #site_bar, header > *:not(script)").fadeTo(500,.3),$('#actions *:not("#reorder_action_done, #reorder_action")').not($("#reorder_action_done").parents("li, ul, div")).fadeTo(500,.55),list_reorder.sortable_list.nestedSortable("enable"),$("#reorder_action").hide(),$("#reorder_action_done").show()},disable_reordering:function(a){a&&a.preventDefault();if($("#reorder_action_done").hasClass("loading"))return!1;$("#reorder_action_done").addClass("loading"),list_reorder.sortable_list.nestedSortable("disable"),$("#sortable_list, .sortable_list").removeClass("reordering");if(list_reorder.update_url!==null){var b=list_reorder.sortable_list.serializelist();$.post(list_reorder.update_url,b,function(b){list_reorder.restore_controls(a)})}else list_reorder.restore_controls(a)},restore_controls:function(a){$(list_reorder.sortable_list).removeClass("reordering"),$("#sortable_list .actions, .sortable_list .actions, #site_bar, header > *:not(script)").fadeTo(250,1),$('#actions *:not("#reorder_action_done, #reorder_action")').not($("#reorder_action_done").parents("li, ul, div")).fadeTo(250,1,function(){$("#reorder_action_done").hide().removeClass("loading"),$("#reorder_action").show()})}},image_picker={initialised:!1,options:{selected:"",thumbnail:"medium",field:"#image",image_display:".current_picked_image",no_image_message:".no_picked_image_selected",image_container:".current_image_container",remove_image_button:".remove_picked_image",picker_container:".image_picker_container",image_link:".current_image_link",image_toggler:null},init:function(a){return this.initialised||(this.options=$.extend(this.options,a),$(this.options.picker_container).find(this.options.remove_image_button).click($.proxy(this.remove_image,{container:this.options.picker_container,picker:this})),$(this.options.picker_container).find(this.options.image_toggler).click($.proxy(this.toggle_image,{container:this.options.picker_container,picker:this})),this.initialised=!0),this},remove_image:function(a){a.preventDefault(),$(this.container).find(this.picker.options.image_display).removeClass("brown_border").attr({src:"",width:"",height:""}).css({width:"auto",height:"auto"}).hide(),$(this.container).find(this.picker.options.field).val("").trigger("change"),$(this.container).find(this.picker.options.no_image_message).show(),$(this.container).find(this.picker.options.remove_image_button).hide()},toggle_image:function(a){$(this.container).find(this.options.image_toggler).html($(this.container).find(options.image_toggler).html()=="Show"?"Hide":"Show"),$(this.container).find(this.options.image_container).toggle(),a.preventDefault()},changed:function(a){$(this.container).find(this.picker.options.field).val(this.image.id.replace("image_","")).trigger("change");var b=this.picker.options.thumbnail||"original";this.image.src=$(this.image).attr("data-"+b),current_image=$(this.container).find(this.picker.options.image_display),current_image.replaceWith($("<img src='"+this.image.src+"?"+Math.floor(Math.random()*1e5)+"' id='"+current_image.attr("id")+"' class='"+this.picker.options.image_display.replace(/^./,"")+" brown_border' />")),$(this.container).find(this.picker.options.remove_image_button).show(),$(this.container).find(this.picker.options.no_image_message).hide()}},resource_picker={initialised:!1,callback:null,init:function(a){this.initialised||(this.callback=a,this.initialised=!0)}};close_dialog=function(a){iframed()?(the_body=$(parent.document.body),the_dialog=parent.$(".ui-dialog-content")):(the_body=$(document.body).removeClass("hide-overflow"),the_dialog=$(".ui-dialog-content"),the_dialog.filter(":data(dialog)").dialog("close"),the_dialog.remove()),$(document.body).hasClass("wym_iframe_body")||(the_body.removeClass("hide-overflow"),the_dialog.filter(":data(dialog)").dialog("close"),the_dialog.remove(),a&&a.preventDefault&&a.preventDefault())},parseURL=function(a){var b={href:a},c=a.replace("//","/").split("/");b.protocol=c[0],b.host=c[1],c[1]=c[1].split(":"),b.hostname=c[1][0],b.port=c[1].length>1?c[1][1]:"",c.splice(0,2),b.pathname=b.href[0]=="/"?"/"+b.host:"",b.pathname+="/"+c.join("/"),b.pathname=b.pathname.split("#"),b.hash=b.pathname.length>1?"#"+b.pathname[1]:"",b.pathname=b.pathname[0],b.pathname=b.pathname.split("?"),b.search=b.pathname.length>1?"?"+b.pathname[1]:"",b.pathname=b.pathname[0];var d=a.split("?")[1];return b.options=d,b},iframed=function(){return parent&&parent.document&&parent.document.location.href!=document.location.href&&$.isFunction(parent.$)};