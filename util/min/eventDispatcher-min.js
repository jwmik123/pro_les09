eventDispatcher={eventSubscriptions:{},addListener:function(i,t){var s=this.eventSubscriptions[i];void 0===s&&(this.eventSubscriptions[i]=[],s=this.eventSubscriptions[i]),s.push(t)},dispatch:function(i){var t=this.eventSubscriptions[i],s;if(void 0!==t){s=t.length;for(var n=0;s>n;n++)t[n]()}}};