function hitung(){
	var myForm = document.pemesanan;
	var a=eval(myForm.a.value);
	var b=eval(myForm.b.value);
	var c=eval(myForm.c.value);
	var d=eval(myForm.d.value);
	
	if(a == null)
		a = 0;
	if(b == null)
		b = 0;
	if(c == null)
		c = 0;
	if(d == null)
		d = 0;
	
	var a120 = 20000;
	var b220 = 26000;
	var c330 = 30000;
	var d600 = 36000;
	
	var hasil = (a120 * a) + (b220 * b) + (c330 * c) + (d600 * d);
	var kata = "Jumlah : ";
		
	myForm.jum.value = kata + hasil;
}