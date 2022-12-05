function KatakanHallo(name) {
    setTimeout(function() {
        console.log("halo", name)
    }, 500)
}

function tanyaKabar(name) {
    console.log("Apa Kabar", name)
}

KatakanHallo("Guntur")
tanyaKabar("Gun")


function asyncDivision(divinded, divisor, cb) {
    setTimeout(function(){
        if( isNaN(divinded) && isNaN(division)) {
            cb("erorrr nih", null)
        }

        if( divisor == '0') {
            cb("Cannot divided by 0", null)
        }

        cb(null, divinded/divisor)
    }, 500)
}

asyncDivision(5, 10, (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    console.log("Result : ", result)
})
