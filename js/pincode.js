$(document).ready(function() {
    let enterCode = "";
    enterCode.toString();

    $("#numbers button").click(function() {
        console.log(8)
        $(this).addClass("clicked");
        setTimeout(() => {
            $(this).removeClass("clicked");
        }, 100);
    })

    $("#numbers button:not(.backspace)").click(function() {
        let pin = "1234";
        let clickedNumber = $(this).text().toString();
        enterCode = enterCode + clickedNumber;
        let lengthCode = parseInt(enterCode.length);
        lengthCode--;
        $("#fields .fields-number:eq(" + lengthCode + ")").addClass("active");

        if ($("#fields").hasClass("line-fields")) {
            $("#fields .fields-number:eq(" + lengthCode + ")").text(clickedNumber);
        }

        setTimeout(() => {
            if (lengthCode == 3) {

                // check pin
                if (enterCode == pin) {
                    $("#numbers button").addClass("right");
                } else {
                    clearFields();
                }
            }
        }, 100);
    })

    $("#numbers button.backspace").click(function() {
        if (enterCode.length) {

            enterCode = enterCode.slice(0, -1);
            console.log(enterCode)
            $(".fields-number.active").last().text("").removeClass("active");
        }
    })

    let clearFields = () => {
        $("#fields").addClass("miss");
        enterCode = "";

        if ($("#fields").hasClass("line-fields")) {
            $("#fields .fields-number").text("");
        }

        setTimeout(function() {
            $("#fields .fields-number").removeClass("active");
        }, 200);

        setTimeout(function() {
            $("#fields").removeClass("miss");
        }, 500);
    }
})