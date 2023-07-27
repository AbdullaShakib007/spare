const labelColours=window._sr.messaging.label_colours;function getRandomColour(){return labelColours[Math.floor(Math.random()*Math.floor(labelColours.length))].rgb;}
function getFontColour(bgColor){return labelColours.find(o=>o.rgb===bgColor)?labelColours.find(o=>o.rgb===bgColor).font:'#FFFFFF';}
function manageLabelNoReturn(appSubDir,args){jQuery.post(`/${appSubDir}/labels.pl`,args);}
