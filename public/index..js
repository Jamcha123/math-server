const arr = ["cover", "form1", "form2", "form3", "form4"]
document.getElementById("cover1").addEventListener("click", () => {
    document.getElementById("cover").style.scale = 1
})
document.getElementById("math1").addEventListener("click", () => {
    arr.forEach((e) => {
        document.getElementById(e).style.scale = 0 
    })
    document.getElementById("form1").style.scale = 1
})
document.getElementById("math2").addEventListener("click", () => {
    arr.forEach((e) => {
        document.getElementById(e).style.scale = 0 
    })
    document.getElementById("form2").style.scale = 1
})
document.getElementById("math3").addEventListener("click", () => {
    arr.forEach((e) => {
        document.getElementById(e).style.scale = 0 
    })
    document.getElementById("form3").style.scale = 1
})
document.getElementById("math4").addEventListener("click", () => {
    arr.forEach((e) => {
        document.getElementById(e).style.scale = 0 
    })
    document.getElementById("form4").style.scale = 1
})