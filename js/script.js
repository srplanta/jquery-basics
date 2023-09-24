// $(document).ready(function () {
//     let isHidden = false;
//     $('#btn_show_hide').click(function () {
//         // debugger
//         if (isHidden) {
//             $("p").show(1000);
//             isHidden = false;
//         } else {
//             $('p').hide();
//             isHidden = true;
//         }
//     });
// })

// $(function () ** is equivalent to ** $(document).ready(function ()
// above first approach is not recommended as it doesn't show intension
// $(function () {
//     let isHidden = false;
//     $('#btn_show_hide').click(function () {
//         // debugger
//         if (isHidden) {
//             $("p").show();
//             isHidden = false;
//         } else {
//             $('p').hide();
//             isHidden = true;
//         }
//     });
// })


$(document).ready(function () {
    // ****************************************************
    //          SELECTING HTML ELEMENTS
    // ****************************************************
    // 1۔ selection on the basis of tag/element name
    //     let isHidden = false;
    //     $('#btn_show_hide').click(function () {
    //         // debugger
    //         if (isHidden) {
    //             $("p").show(1000);
    //             isHidden = false;
    //         } else {
    //             $('p').hide();
    //             isHidden = true;
    //         }
    //     });
    // ----------------------------------------------------

    // 2۔ selection on the basis of tag/element child
    // let isHidden = false;
    // $("#btn_show_hide").click(function () {
    //     if (isHidden) {
    //         $("ul li:first-child").show();
    //         isHidden = false;
    //     } else {
    //         $("ul li:first-child").hide();
    //         isHidden = true;
    //     }
    // })
    // ----------------------------------------------------

    // 3۔ selection on the basis of tag/element attribute
    // let isHidden = false;
    // $("#btn_show_hide").click(function () {
    //     if (isHidden) {
    //         $("a[target='_blank']").show();
    //         isHidden = false;
    //     } else {
    //         $("a[target='_blank']").hide();
    //         isHidden = true;
    //     }
    // })
    // ----------------------------------------------------

    // 4۔ selection on the basis of input field type
    // let isHidden = false;
    // $("#btn_show_hide").click(function () {
    //     if (isHidden) {
    //         $(":text").show();
    //         isHidden = false;
    //     } else {
    //         $(":text").hide();
    //         isHidden = true;
    //     }
    // })
    // ----------------------------------------------------

    // ****************************************************
    //          MANIPULATING HTML CONTENTS IN JQUERY
    // ****************************************************

    // $("#btn_show_hide").click(function () {
    //     // $("h1").html("h1 text is changed!");
    //     $(":text").val("value is added in text box!");
    //     // $("p").empty();     //paragraph still occupy its space
    //     $("p").remove();        //paragraph doesn't occupy its space
    // })

    // ****************************************************
    //          MANIPULATING CSS STYLES IN JQUERY
    // ****************************************************

    // $("#btn_show_hide").click(function () {
    //     $("h1").addClass("heading");
    //     $("h1").removeClass("heading");
    //     $("p").css({ "color": "white", "background-color": "orange" });
    //     $("tr:odd").css("background-color", "orange");
    // })

    $("ul#list li:first").css({ "color": "red" });
    $("ul#list li:last").css({ "color": "orange" });
    $("ul#list li:even").css({ "background-color": "blue" });
    $("ul#list li:odd").css({ "background-color": "yellow" });
    $("ul#list li:nth-child(3n)").css({ "list-style": "none" });

    // ****************************************************
    //          HANDLING EVENTS IN JQUERY
    // ****************************************************
    // $("#btn_show_hide").click(function () {
    //     alert("button is clicked!");
    // });

    // $("#btn_show_hide").mouseenter(function () {
    //     alert("mouse entered in the button area!");
    // });

    // $("input").blur(function () {
    //     $(this).css({ "background-color": "blue" });
    // });

    // $("p").on({
    //     click: function () {
    //         $("p").css({ "font-size": "25px" });
    //     },
    //     mouseleave: function () {
    //         $("p").css({ "font-size": "20px" })
    //     }
    // });

    // $("#btn_show_hide").click(function () {
    //     // $("p").hide(1000);
    //     // $("p").show(3000);
    //     $("p").toggle(1000);
    // });

    // $("#btn_show_hide").click(function (e) {
    //     document.write(e.currentTarget.id);
    // });

    // $("#btn_show_hide").click(function (e) {
    //     document.write(e.currentTarget.innerHTML);
    // });

    // $("#btn_show_hide").mousemove(function (e) {
    //     document.write(`X, Y Coordinates: (${e.clientX}, ${e.clientY})`);
    // });

    // $(document).mousemove(function (e) {
    //     $("#coords").html(`X&Y Coords: (${e.clientX}, ${e.clientY})`);
    // });

    $("input").focus(function () {
        $(this).css({ "background-color": "gray" });
    });

    $("input").blur(function () {
        $(this).css({ "background-color": "white" });
    });

    $("input").keyup(function (e) {
        $("#display").html(e.target.value);
    });
})
