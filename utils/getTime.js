export const getTime =  () => {
	var a = new Date();
	var y=a.getFullYear();
	var m=a.getMonth()+1;
	m = m<10? "0"+m:m;
	var d=a.getDate();
	d = d<10? "0"+d:d;
	
	return  {
    year: y,
    month:m,
    day : d
  }
}
