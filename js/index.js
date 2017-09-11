// 在数组的后边添加任意数组元素
var arr=[1,2,3,4,5,6,7,8,9];
push(arr,'a','b','c')
function push(arr){
   for(var i=1;i<arguments.length;i++){
   	arr[arr.length]=arguments[i];
   }
   console.log(arr);
}



// 数组升降序  带有默认值的参数一般放在最后
var arr=[51,23,37,6,87,14,32,69];
arrpaixu(arr);

function arrpaixu(arr,type='<'){
	// 第1种方式
	// if(type==undefined){
	// 	type='>';
	// }
	// 第二种方式
	// type=type==undefined?'>':type=type;
	// 第三种方式
    // type=type || '>';
    // 第四种方式  直接将默认值写在形参后
	if(type==">"){
        maxpaixu(arr);
	}else if(type=="<"){
		minpaixu(arr);
	}
}
// maxpaixu(arr);
function maxpaixu(arr){
for(var i=0;i<arr.length;i++){
	for(var j=i+1;j<arr.length;j++){
		if(arr[i]<arr[j]){
			var temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
		}
	}
}
console.log(arr);
}
// minpaixu(arr);
function minpaixu(arr){
for(var i=0;i<arr.length;i++){
	for(var j=i+1;j<arr.length;j++){
		if(arr[i]>arr[j]){
			var temp=arr[j];
			arr[j]=arr[i];
			arr[i]=temp;
		}
	}
}
console.log(arr);
}

// 剩余参数rest
var arr=[1,2,3,4,5,6,7,8,9];
push(arr,'a','b','c');
function push(arr,...rest){
	for(var i=0;i<rest.length;i++){
		arr[arr.length]=rest[i]
	}
	console.log(arr);
}


// 判断数组中存在某一个特定的值，存在返回true，不存在false

var result=exist(arr,5);
console.log(result);
function exist(arr,value){
	if(!(typeof arr=='object' && arguments.length>1)){
		return '输入有误！';
	}
	for(var i=0;i<arr.length;i++){
		if(arr[i]==value){
	      return true;

		}
	}
	return false;
}



// 数组转换为字符串
var cx=join(arr,'-')
console.log(cx);
function join (arr,str){
str=str==undefined? '-' : str;
var newstr='';
 for(var i=0;i<arr.length;i++){
 	if (i<arr.length-1) {
 		newstr+=arr[i]+str;
 	}else{
 		newstr+=arr[i];
 	}
 	
 }
 return newstr;
}



//回调函数 
//filter();  过滤 、筛选
//把数组里面偶数的元素筛选出来 
//把符合条件的放在新数组中
// filter(arr);
// function filter(arr){
// 	var newarr=[];
// 	for(var i=0;i<arr.length;i++){
// 		if(arr[i]%2==0){
//         newarr[newarr.length]=arr[i]
// 		}
// 	}
// 	console.log(newarr);

// }



//返回值
function aa(num1,num2){
	return num1*3-num2;
}
function bb(num1,num2){
	return num1-num2;
}
function cc(num1,num2){
	return num1+num2*2;
}

function math(num1,num2,fn){
	return fn(num1,num2)
}

console.log(math(2,3,aa));
console.log(math(2,3,bb));
console.log(math(2,3,cc));


// 用join方法实现数组转为字符串
// console.log(arr.join('-'));


// 映射  数组中的每个元素*2
var result=map(arr,function(value){
	return value*2;
})
console.log(result); 
function map(arr,fn){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
       newarr[newarr.length]=fn(arr[i]);
	}
	return newarr;
}


// 是否存在某一个元素，并且找到其首次出现的位置  找不到返回-1
var arr=[-2,5,9,7,4,2,6,7,-3,2,8];
var result=indexOf(arr,10);
console.log(result);
function indexOf(arr,value){ 
   for(var i=0;i<arr.length;i++){
        if(arr[i]==value){
            return i;
        }
   }
   return -1;
}
// 是否存在某一个元素，并且找到其最后出现的位置  找不到返回-1
var result=lastindexOf(arr,7);
console.log(result);
function lastindexOf(arr,value){ 
   for(var i=arr.length-1;i>=0;i--){
        if(arr[i]==value){
            return i;
        }
   }
   return -1;
}

// 反转  reverse
console.log(reverse(arr));
function reverse(arr){
	var  newarr=[];
	for(var i=arr.length-1;i>=0;i--){
		push(newarr,arr[i]);
	}
	return newarr;
}
function push(arr,...rest){
    for(var i=0;i<rest.length;i++){
    	arr[arr.length]=rest[i];
    }
}


// 万能的删除 splice
console.log(spliceCancel(arr,2,3));
function spliceCancel(arr, pos, num){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(i>=pos && i<pos+num){
			continue;
		}
	    newarr[newarr.length]=arr[i];
	}
	return newarr;
}

// 万能的添加 
// 分3步
// 1.把pos之前的放进新数组
// 2.把要添加的...rest中的元素放进新数组
// 3.把数组arr中其他的元素放进new数组中，pos位置不变
console.log(spliceAdd(arr,2,'a','b'));
function spliceAdd(arr, pos,...rest){
	var newarr=[];
	for(var i=0;i<pos;i++){
		newarr[newarr.length]=arr[i];
		}
    for(var i=0;i<rest.length;i++){
		newarr[newarr.length]=rest[i];
		}
	for(var i=pos;i<arr.length;i++){
		newarr[newarr.length]=arr[i];
		}
	 	
	return newarr;
}

// 万能的添加与删除
// 不管添加或删除，先删除一遍，再进行添加
console.log(splice(arr,2,2,'a','b'));
function splice(arr,pos,num,...rest){
	// var newarr=[];
    var newarr=spliceCancel(arr,pos,num);
	if(rest.length>0){
	newarr=spliceAdd(arr,pos,...rest);
	}
	// ...rest 将数组解封
	return newarr;
}


var result = filter(arr,function(value){
	 return value>0;
	});
console.log(result);
function filter(arr,fn){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
        newarr[newarr.length]=arr[i];
		}
	}
	return newarr;
}


// some   只要有一个大于0，就为true；
function some(arr,fn){
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
		return true;
	    }
	}
	return false;
}
// every   只要有一个小于0，就为false；
function every(arr,fn){
	for(var i=0;i<arr.length;i++){
		if(!fn(arr[i])){
		return false;
	    }
	}
	return true;
}


// 递归函数  一定要有一个出口，条件 ，否则会出错    
// 递归不是循环
// 当函数实现的功能一样，但参数不一样时使用。
// 输出时是反着的
// fn(1); 
// function fn(num){
// 	if(num<5){
// 		fn(++num)
// 	}
// 	alert(num);
// }


var arr=[1,2,3,4,5,6,7,8];
var arr1=arr;
// 地址(浅拷贝)  
// 其中一个数组中的值改变，两个数组都改变
arr[1]="a";
arr1[3]="b";
console.log(arr);
console.log(arr1);



var arr1=[];
for(var i=0;i<arr.length;i++){
	arr1[i]=arr[i];
}
// 传值(深拷贝)  
arr[1]="a";
arr1[3]="b";
console.log(arr);
console.log(arr1);


var arr=[1,2,3,4,5,['6','7','8']];
var arr1=copy(arr);
arr[5][0]='a';
arr1[5][0]='a';
console.log(arr1);
function copy(arr){
	var newarr=[];
	for(var i=0;i<arr.length;i++){
     if(typeof arr[i]=='object'){
     	newarr[i]=copy(arr[i]);
     }else{
     	newarr[i]=arr[i];
     }
	}
	return newarr;
}
