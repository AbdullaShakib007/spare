!function(){"use strict";function e(e){var t=e.category,n=e.action,a=e.label,i=e.value,o=e.non_interaction,d=void 0!==o&&o;if(window.dataLayer&&window.dataLayer.push){var _={event:"ga.event",ga_event_category:t,ga_event_action:n,ga_event_label:a,ga_event_value:i,ga_event_non_interaction:d};return window.dataLayer.push(_)}return!1}var t=document.getElementById("editExistingAdvertLogin"),n=document.getElementById("editExistingAdvertAccountPage");t&&t.addEventListener("click",(function(){e({category:"ads",action:"ad_options_page_edit_ad_login",label:window._sr.site.loginReturnPath})})),n&&n.addEventListener("click",(function(){e({category:"ads",action:"ad_options_page_edit_ad_view_account_page",label:window._sr.site.loginReturnPath})}))}();
//# sourceMappingURL=choose_section.0fd57664dd5ee593f17c.js.map