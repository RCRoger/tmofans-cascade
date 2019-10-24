var url = location.href;
if(url.includes("paginated")){
	location.href = url.replace("paginated", "cascade");
}