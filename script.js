//your JS code here. If required.
const a=document.getElementById("output");
const arr=[1,2,3,4];

async function fun() {
	let m = await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let ar=arr.filter((val)=>{
				if(val%2==0)
				{
					return val;
				}
			})
			a.innerText=ar;
		    resolve(ar);
		},1000);
		
	});
	await new Promise((resolve,reject)=>{
		setTimeout(()=>{
			let arrr=m.map((val)=>{
				return val*2;
			})
			a.innerText=arrr;
			resolve();
		},3000);
		
	})
	
}
fun();