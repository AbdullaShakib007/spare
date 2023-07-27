function openwindow(theURL,winName,options){if(options=='speaking')features='height=430,width=550,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,top=0,left=0';if(options=='watchlist')features='height=500,width=600,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,top=0,left=0';if(options=='largead')features='height=440,width=600,menubar=no,resizable=no,scrollbars=yes,status=no,toolbar=no,top=0,left=0';if(!win||win.closed){var win=window.open(theURL,'',features);}
else
if(win.document.URL.indexOf(theURL)!=-1){win.focus();}
else
win.location=theURL;win.focus();}
function changeclass(id,newClass)
{var identity=document.getElementById(id);identity.className=newClass;}
function makeprice(x){return r2(x);}
function r2(n){ans=n*1000
ans=Math.round(ans/10)+""
while(ans.length<3){ans="0"+ans}
len=ans.length
ans=ans.substring(0,len-2)+"."+ans.substring(len-2,len)
return ans}
