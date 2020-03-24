function validacija() {
	var ime = document.getElementById("ime").value;
	var prezime = document.getElementById("prezime").value;
	var greskaObj = {
		Polje: "Ime",
		Tekst: "Niste uneli ime"
	};
	var greskaObj2 = {
		Polje: "Prezime",
		Tekst: "Niste uneli prezime"
	};
	var greskaObj3 = {
		Polje: "Email",
		Tekst: "Niste uneli email"
	};
	var ispisImena = JSON.stringify(greskaObj, null, 4);
	var ispisPrezime = JSON.stringify(greskaObj2, null, 4);
	try {
		if (ime == "") throw ispisImena;
		else if (prezime == "") throw ispisPrezime;
		else alert("Uspesno ste se prijavili");
	} catch (err) {
		alert(err);
	}
}
var inputPolje = document.getElementById("field"),
	sacuvaj = document.getElementById("save"),
	procitaj = document.getElementById("read"),
	izbrisi = document.getElementById("clear");
sacuvaj.addEventListener("click", function (e) {
	window.localStorage["polje"] = inputPolje.value;
});
procitaj.addEventListener("click", function (e) {
	alert(window.localStorage["polje"]);
});
izbrisi.addEventListener("click", function (e) {
	window.localStorage.clear();
});

function ocenaSajta() {
	alert(document.getElementById("nekiTekst").value)
	document.obrazac.nekiTekst.value = "";
}