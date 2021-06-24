$(document).ready(function() {
    $("#distext").hide()
    $("#design-img").click(function() {
        $("#distext").show(1000);
        $("#design-img").hide(1000);
        $("#distext").click(function() {
            $("#design-img").show(1000)
            $("#distext").hide(1000)
        })

    })

})

$(document).ready(function() {
    $("#dev").hide()
    $("#dev-img").click(function() {
        $("#dev").show(1000);
        $("#dev-img").hide(1000);
        $("#dev").click(function() {
            $("#dev-img").show(1000)
            $("#dev").hide(1000)
        })
    })
})