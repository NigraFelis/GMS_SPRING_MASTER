var series={
		arithmetic : (s,e) =>{
		      var sum = 0;
		      var start = s * 1;
		      var end = e * 1;
		      for (var i = start; i <= end; i++) {
		         sum += i;
		      }
		      return sum;
		   },
		   switchSeries : ()=>{
				var sum=0;
				var i=0;
				var sw=0;
				do{
					i++;
					if(sw==0){
						sum += i;
						sw = 1;
						
					}else{
						sum -= i;
						sw = 0;
					}
				}while(i<100);
				return sum;
				
			},
		   diffSeries : () =>{
				var i=0; 
				var j=1;
				var k=1;
				do {
					i++;
					j+=i;
					k+=j;
				}while(i<19);
				return k;
		   },
		   factorial : () =>{
				var i=1;
				var j=1;
				var r=1;
				do {
					i++;
					j*=i;
					r+=j;
				}while(i<10);
				return r;
		  },
		   fibonacci : x =>{
				var a = 1; 
				var b = 1;
				var y = 2;
				var n = 20;
				
				for(var k=3; k<=n; k++) {
					c = a + b;
					y += c;
					a = b;
					b = c;
				}
				return y;
		 }
		
}
var sort = {
		selection : x=>{
			console.log('start'+x);
			var i,j,temp;
			for (i=0;i<x.length;i++) {
				for (j=i;j<x.length;j++) {
	               if (x[i]*1 > x[j+1]*1){      
	                  temp=x[i];
	                  x[i]=x[j+1];
	                  x[j+1]=temp;
	               }
				}
			}
			console.log('end'+x);
			return x;
		},
		bubble : x=>{
			 console.log('start'+x);
	         var i,j,temp=0;
	         for (i=0;i<x.length;i++) {
	            for (j=0;j<x.length;j++) {
	               if (x[j]*1 > x[j+1]*1){      
	                  temp=x[j];
	                  x[j]=x[j+1];
	                  x[j+1]=temp;
	               }
	            }
	         }
	         console.log('end'+x);
	         return x;
		},
		insertion : x=>{
			 console.log('start'+x);
			 var i=0,j=0,k=0;
	         	for(i=0;i<x.length;i++){
	         		for(j=0;j<x.length;j++){
	         			if(x[i]*1<x[j]*1){
	         				k=x[i];
	         				x[i]=x[j];
	         				x[j]=k;
	         			}
	         		}
	         	}
	         console.log('end'+x);
	         return x;
		},
		ranking : x=>{
			 console.log('start'+x);
			 var a = x;
			 var b = new Array(a.length);
			 var rank = 1;
			 for (var i=0; i<a.length; i++) {
			     rank = 1;
			     for (var j=0; j<a.length; j++) {
			         if (a[i] > a[j]) rank++;
			     }
			     for (var j=0; j<b.length; j++) {
			         if (b[j] == rank) rank++;
			     }
			     
			     b[i] = rank;
			 }
	         console.log('end'+x);
	         return x;
		}
	      
}
