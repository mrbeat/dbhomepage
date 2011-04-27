var _=_?_:{}
_.addclass=_.AC=function(e,c){if(_.HC(e))e.className+=' '+c}
_.index=_.I=function(v,a,i){for(i=a.length;i--&&a[i]!=v;);return i}
_.hasclass=_.HC=function(e,c){return _.I(c,e.className.split(" "))>0}
_.ajax=_.X=function(u,f,d,x){x=new(window.ActiveXObject||XMLHttpRequest)('Microsoft.XMLHTTP')
x.open(d?'POST':'GET',u,1);x.setRequestHeader('Content-type','application/x-www-form-urlencoded');x.onreadystatechange=function(){x.readyState>3&&f&&f(x.responseText,x)};x.send(d)}
_.array=_.Y=function(a,b){for(b=a.length,c=[];b--;)c.push(a[b]);return c}
_.bind=_.B=function(f,s){return function(){return f.apply(s,_.Y(arguments))}}
_.cls=_.C=function(n,d,y,k,h){y=(d?d:_.d).getElementsByTagName("*");h=[];for(k=y.length;k--;)
_.I(n,y[k].className.split(" "))>0&&h.push(y[k]);return h}
_.d=document
_.clone=_.O=function(j,c){if(c)return _.S(_.S(j),1);function p(){};p.prototype=j;return new p()}
_.json=_.S=function(j,d,t){if(d)return eval('('+j+')');if(!j)return j+'';t=[];if(j.pop){for(x in j)t.push(_.S(j[x]));j='['+t.join(',')+']'}else if(typeof j=='object'){for(x in j)t.push(x+':'+_.S(j[x]));j='{'+t.join(',')+'}'}else if(j.split)j="'"+j.replace(/\'/g,"\\'")+"'";return j}
_.on=_.E=function(e,t,f,r){if(e.attachEvent?(r?e.detachEvent('on'+t,e[t+f]):1):(r?e.removeEventListener(t,f,0):e.addEventListener(t,f,0))){e['e'+t+f]=f;e[t+f]=function(){e['e'+t+f](window.event)};e.attachEvent('on'+t,e[t+f])}}
_.extend=_.T=function(o,a,y){for(y in a)o[y]=a[y];return o}
_.id=_.G=function(e){return e.style?e:_.d.getElementById(e)}
_.entity=_.H=function(s,d,t){t=_.d.createElement('textarea');t.innerHTML=s;return d?t.value:t.innerHTML}
_.include=_.IN=function(s,e){e=_.d.createElement('script');e.src=s;_.d.body.appendChild(e)}
_.ns=_.N=function(n,p,r){p=n.split('.');r=window;for(i in p){if(!r[p[i]])r[p[i]]={};r=r[p[i]]}return r}
_.query=_.Q=function(j,y,x){y='';for(x in j)y+='&'+x+'='+encodeURIComponent(j[x]);return y.slice(1)}
_.remove=_.V=function(e,o,x){x=_.I(e,o);x>0?o.splice(x,1):0}
_.unique=function(a,b){for(b=a.length,c=[];b--;)_.I(a[b],c)>0?0:c.push(a[b]);return c}
