function temizle() {
    document.getElementById("myForm").reset();
}

function checkCheckBoxes(form) {
    if (!form.check.checked)
    {
        alert ('Lütfen verilerin gönderilmesini onaylayın');
        return false;
    } else {
        return true;
    }
}

function checkIsEmpty(form) {
    var mesaj = form.mesaj.value;
    var isim = form.isim.value;
    var email = form.email.value;

    if (
        mesaj == null || mesaj == "" ||
        isim == null || isim == "" ||
        email == null && email == ""
    )

    {
        alert("Lütfen eksik yerleri doldurunuz.");
        return false;
    }
    else{
        return  true;
    }
}