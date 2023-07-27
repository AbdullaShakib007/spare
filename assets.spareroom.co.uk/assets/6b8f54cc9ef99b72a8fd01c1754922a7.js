var SR=(function(module,$){'use strict';var Validator=function(options){this.$form=$(options.form);this.status=[];this.config=options.config||[];if(options.auto){this.enable();}};Validator.prototype.enable=function(){this.$form.on('submit.sr_validator',$.proxy(this,'validateForm'));};Validator.prototype.disable=function(){this.$form.off('submit.sr_validator');};Validator.prototype.validates=function(){var validates=true,l=this.config.length,i=0,result,field,desc,descCustom,trackData;this.status=[];for(;i<l;i++){field=this.config[i].field;desc=this.config[i].desc||field;result=this.validateField(field);validates&=result.validates;if(result.validates){continue;}
if($.type(desc)==='function'){desc=desc.call(field,field.val());}
if($.type(desc)==='object'){for(var item in desc){if(desc.hasOwnProperty(item)&&item==='0'&&typeof desc[item]==='object'){if(desc[item].hasOwnProperty('tagName')&&desc[item].hasOwnProperty('name')){descCustom=desc[item].tagName.toLowerCase()+' field '+desc[item].name;}}}}
trackData={category:'Form error',action:this.$form.attr('name')?this.$form.attr('name')+':'+(descCustom?descCustom:desc):this.$form.attr('class')+':'+(descCustom?descCustom:desc),label:result.message};SR.tracking.trackEvent(trackData.category,trackData.action,trackData.label);this.status.push({field:field,message:result.message});}
return!!validates;};Validator.prototype.validateForm=function(){var validates=this.validates(),l=this.status.length,i=0,input;this.$form.find('.validate_box').removeClass("validate_box");this.$form.find('.form_validation').remove();for(;i<l;i++){this.showMessage(this.status[i].field,this.status[i].message);}
if(!validates){this._doubleCheck();$(this.status[0].field)
.filter(':first')
.focus();}
return validates;};Validator.prototype.validateField=function(field){var result={validates:true},$input=$(field),value=$input.val()||'',config=this.getFieldConfig(field),l=config.length,i=0,message,rule;for(;i<l;i++){rule=config[i].rule;message=config[i].message;if($.type(message)==='undefined')
message=this.messages[rule];if($.type(message)==='function')
message=message.call($input,value);if($.type(rule)==='string')
rule=this.rules[rule];if($.type(rule)!=='function')
throw'Rule required';if(!rule.call($input,value)){result.validates=false;result.message=message;break;}}
return result;};Validator.prototype.getFieldConfig=function(field){var i,match=false;for(i in this.config){if($(this.config[i].field).get(0)===$(field).get(0)){match=true;break;}}
if(!match){this.config.push({field:field,config:[]});i=this.config.length-1;}
return this.config[i].config;};Validator.prototype.addRule=function(field,rule,message){this.getFieldConfig(field).push({rule:rule,message:message});};Validator.prototype.showMessage=function(field,message){$(field).filter(':first')
.parent()
.parent()
.parent()
.addClass('validate_box');$(field)
.filter(':first')
.parent()
.before($('<span/>',{'class':'form_validation','text':message}));};Validator.prototype.reset=function(){this.status=[];this.config=[];return this;};Validator.prototype._doubleCheck=function(){var me=this;if(this._submitted){alert("There are one or more errors on the form.\n"
+'Please check and try again.');setTimeout(function(){me._submitted=false;},2000);}else{this._submitted=true;}};Validator.prototype.rules={required:function(str){return!!str;},email:function(str){return(/^.+@.+\..+$/).test(str);},password:function(str){return(str.length>=4);},date:function(str){return(/^\d{2}\/\d{2}\/\d{4}$/).test(str);},postcodeFirstHalf:function(str){return(/^(\w{1,2}\d{1,2})$/).test(str);},postcode:function(str){return(/^(\w{1,2}\d{1,2})(\w?\s?\d\w{2})$/).test(str);},zipcode:function(str){return(/^(\d{5})(-\d{4})?$/).test(str);}};Validator.prototype.messages={required:function(str){return'This field is required';},email:function(str){return'A valid e-mail address is required';},password:function(str){return'Passwords must be at least 4 characters long';},date:function(str){return'Please enter a date in the format '+SR.l('date_format');},postcodeFirstHalf:function(str){return'Please enter the first half of your postcode';},postcode:function(str){return'Please enter a valid UK postcode';},zipcode:function(str){return'Please enter a valid zipcode';}};module.Validator=Validator;return module;}(SR||{},jQuery));
SR.spareroom=(function(module,$){'use strict';var e={},init=function(){e={$searchForm:$('#location-form'),$locationField:$('#search_by_location_field'),$searchCommuteTime:$('#commute-time-form'),$stationId:$('[name="station_id"]'),$searchTube:$('#tube-line-form'),$tubeLine:$('[name="tube_line"]')}
setUpValidation();},setUpValidation=function(){var validator_searchCommuteTime=new SR.Validator({form:e.$searchCommuteTime,auto:true});validator_searchCommuteTime.addRule(e.$stationId,'required','Please choose a station');var validator=new SR.Validator({form:e.$searchForm,auto:true});validator.addRule(e.$locationField,'required','Please enter a location - e.g. an '+
e.$locationField.attr('placeholder'));var validator_searchTube=new SR.Validator({form:e.$searchTube,auto:true});validator_searchTube.addRule(e.$tubeLine,'required','Please choose a tube station ');};module.london={init:init};return module;}(SR.spareroom||{},jQuery));
