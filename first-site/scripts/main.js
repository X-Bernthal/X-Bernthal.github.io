let myImage=document.querySelector('img');

myImage.onclick=function() {
	let mySrc=myImage.getAttribute('src');
	if (mySrc=='images/3.jpg') {
		myImage.setAttribute('src','images/2.jpg');
	}else{
		myImage.setAttribute('src','images/3.jpg');
	}

}



let Button=document.querySelector('button');
let Head=document.querySelector('h1');


function setUserName(){
	let Name=prompt('请输入您的姓名');
	if (!Name || Name==null) {
		setUserName();
	}else{
		localStorage.setItem('name',Name);
		Head.textContent='Learning Something,'+Name;
	}
	
}

//每次刷新页面的初始化模块
if (!localStorage.getItem('name')) {
	setUserName();
}else{
	let storedName=localStorage.getItem('name');
	Head.textContent='Learning Something,'+storedName;
}


Button.onclick=function(){
	setUserName();
}