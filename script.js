var taken = 0;

$(".subBut").click(function() {
    var bread = Number($(".ques1").val());
    var happy = $(".ques2").val();
    taken = taken + 1;
    $(".counter").text(taken);
    if (bread >= 5) {
        if (happy === "Yes") {
            $(".kazuma").show();
            $(".reset").show();
            $(".mainimg").hide();
            $(".subBut").hide();
            $("input").hide();
            $("p").hide();
            $("h1").text("You are Kazuma!");
            $(".reset").show();
        }
    }

    if (bread >= 5) {
        if (happy === "No") {
            $(".aqua").show();
            $(".reset").show();
            $(".mainimg").hide();
            $(".subBut").hide();
            $("input").hide();
            $("p").hide();
            $("h1").text("You are Aqua!");
            $(".reset").show();
        }
    }
    if (bread < 5) {
        if (happy === "Yes") {
            $(".darkness").show();
            $(".reset").show();
            $(".mainimg").hide();
            $(".subBut").hide();
            $("input").hide();
            $("p").hide();
            $("h1").text("You are Darkness!");
            $(".reset").show();
        }
    }
    if (bread < 5) {
        if (happy === "No") {
            $(".megumin").show();
            $(".reset").show();
            $(".mainimg").hide();
            $(".subBut").hide();
            $("input").hide();
            $("p").hide();
            $("h1").text("You are Megumin!");
            $(".reset").show();
        }
    }

});
$(".reset").click(function() {
    $(".mainimg").show();
    $(".subBut").show();
    $("input").show();
    $("p").show();
    $(".aqua").hide();
    $(".kazuma").hide();
    $(".megumin").hide();
    $(".darkness").hide();
    $(".reset").hide();
    $("h1").text("Which Konosuba character are you?");
});