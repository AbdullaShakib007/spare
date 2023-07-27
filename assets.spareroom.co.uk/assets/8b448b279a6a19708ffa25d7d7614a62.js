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
SR.spareroom=(function(module,$){'use strict';var $liveInLandlord,$findHowMuch,$earnHowMuch,$postcode,validator,init=function(){$liveInLandlord=$('#maincontent');$findHowMuch=$('#find_how_much');$earnHowMuch=$('#earn_how_much');$postcode=$('#postcode');setUpValidation();addEvents();$findHowMuch.trigger('submit');},addEvents=function(){$findHowMuch.submit(refreshView);},setUpValidation=function(){validator=new SR.Validator({form:$findHowMuch,auto:false,config:[{field:$postcode,config:[{rule:'postcode'}]}]});},refreshView=function(){var postcode=$postcode.val().toUpperCase();if(postcode&&validator.validateForm()){changePostcode(postcode);updateEarn(postcode);}
return false;},changePostcode=function(postcode){$liveInLandlord.find('.postcode:input').val(postcode);$liveInLandlord.find('.postcode:not(:input)').text(postcode);$liveInLandlord.find('.postcode.in').text('in '+postcode);},updateEarn=function(postcode){$earnHowMuch
.text('Loading...')
.load(SR.url.app('rentchecker.pl')+' #earn_how_much div.js',{action:'earn_how_much',postcode:postcode,ajax:true},function(){$(SR.spareroom.liveInLandlord).trigger('updatedEarnings');});};module.liveInLandlord={init:init};return module;}(SR.spareroom||{},jQuery));
