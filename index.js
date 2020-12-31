let str = ""

function values(val) {


    str += val

    document.getElementById("display").innerHTML = str
}
function calc() {

    ans = eval(str)

    document.getElementById("display").innerHTML = ans

    str = ""

}
function clearall() {

    str = ""
    document.getElementById("display").innerHTML = "CALCULATOR"
}


function clear1() {


    if (str.length) {

        str = str.substring(0, str.length - 1)
    }

    if (str == "") {

        str = "CALCULATOR"
    }


    document.getElementById("display").innerHTML = str

    if (str == "CALCULATOR")
        str = ""


}