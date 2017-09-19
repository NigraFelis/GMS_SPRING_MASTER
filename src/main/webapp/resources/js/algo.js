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
		   switchSeries : (s,e)=>{
		      var sum = 0;
		      var i=s-1;
		      var sw = 0;
		      do{
		         i++;
		         if(sw==0){
		            sum+=i;
		            sw=1;
		         }else{
		            sum-=i;
		            sw=0;
		         }
		      }while(i<e);
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
			   alert('확인 -->'+x);
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

