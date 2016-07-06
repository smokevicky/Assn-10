
    $(document).ready(function () {

        var pwdValidated = 0;
        var isFormValidated = 0;

        $("#fname").focus();

   //Custom Event Created---

        $("#fname,#lname,#dob,#email,#email2,#popover,#pwd,#pwdc,#add1,#add2,#city,#zip,#ph1,#ph2,#10th,#12th,#grad,#degree").on("validate", function (event, param1) {
            var id = this.id;

            //alert(this.id);

            if(param1 == 0){                                                // 0 - Error                
                $("#" + id + "-Grp").removeClass("has-success");
                $("#" + id + "-Glyph").removeClass("glyphicon-ok");
                $("#" + id + "-Val").removeClass("success");
                $("#" + id + "-Grp").addClass("has-error");
                $("#" + id + "-Glyph").addClass("glyphicon-remove");
                $("#" + id + "-Val").addClass("error");                
            }

            else if(param1 == 1){                                           // 1 - Success
                $("#" + id + "-Grp").removeClass("has-error");
                $("#" + id + "-Glyph").removeClass("glyphicon-remove");
                $("#" + id + "-Val").removeClass("error");
                $("#" + id + "-Grp").addClass("has-success");
                $("#" + id + "-Glyph").addClass("glyphicon-ok");
                $("#" + id + "-Val").addClass("success");
            }
        });        

   //Inbuilt Events---

        $("#fname").keyup(function () {            
            var fname = $("#fname").val();
            if (fname == "")
            {
                $(this).trigger("validate", [0]);
                $("#fname-Val").html("Required Value");
                isFormValidated = 0;
            }
            else
            {
                $(this).trigger("validate", [1]);
                $("#fname-Val").html("Correct");
                isFormValidated++;
            }
        });

        $("#lname").keyup(function () {
            var lname = $("#lname").val();
            if (lname == "") {
                $(this).trigger("validate", [0]);
                $("#lname-Val").html("Required Value");
                isFormValidated = 0;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#lname-Val").html("Correct");
                isFormValidated++;
            }
        });

        $("#dob").keyup(function () {
            var dob = $("#dob").val();
            var year = Number(dob.substr(0, 4));
            if (dob == "") {
                $(this).trigger("validate", [0]);
                $("#dob-Val").html("Required Value");
                isFormValidated = 0;
            }
            else {
                if ((year >= 1950) && (year <= 2010)) {
                    $(this).trigger("validate", [1]);
                    $("#dob-Val").html("Correct");
                    isFormValidated++;
                }
                else {
                    $(this).trigger("validate", [0]);
                    $("#dob-Val").html("Input a date between 1950 and 2010");
                }
            }
        });

        $("#dob").change(function () {
            var dob = $("#dob").val();
            var year = Number(dob.substr(0, 4));  
            if (dob == "") {
                $(this).trigger("validate", [0]);
                $("#dob-Val").html("Required Value");
                isFormValidated = 0;
            }
            else {
                if ((year >= 1950) && (year <= 2010)) {
                    $(this).trigger("validate", [1]);
                    $("#dob-Val").html("Correct");
                    isFormValidated++;
                }
                else {
                    $(this).trigger("validate", [0]);
                    $("#dob-Val").html("Input a date between 1950 and 2010");
                }
            }
        });

        $("div[name^='genderDiv']").click(function () {
            $("#gender-Grp").removeClass("has-error");
            $("#gender-Glyph").removeClass("glyphicon-remove");
            $("#gender-Val").removeClass("error");
            $("#gender-Grp").addClass("has-success");
            $("#gender-Glyph").addClass("glyphicon-ok");
            $("#gender-Val").addClass("success");
            $("#gender-Val").html("Correct");
            isFormValidated++;
        });

        $("#email").keyup(function () {
            var email = $("#email").val();
            var lastChar = email[email.length - 1]; 
            var restString;
            if (email == "")
            {
                $(this).trigger("validate", [0]);
                $("#email-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if(lastChar == '@')
            {
                restString = email.substr(0, email.length - 1);
                if (restString == "")
                {
                    $(this).trigger("validate", [0]);
                    $("#email-Val").html("First Part Required");
                    $("#email").focus();
                    isFormValidated = 0;
                }
                else {
                    $(this).trigger("validate", [1]);
                    $("#email").val(restString);
                    $("#email2").focus();
                    isFormValidated = 0;
                }                    
                return;
            }
            else
            {
                $(this).trigger("validate", [1]);
                isFormValidated++;
            }
        });

        $("#email").blur(function () {
            var email = $("#email").val();
            var lastChar = email[email.length - 1];
            var restString;
            if (email == "") {
                $(this).trigger("validate", [0]);
                $("#email-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if (lastChar == '@') {
                restString = email.substr(0, email.length - 1);
                if (restString == "") {
                    $(this).trigger("validate", [0]);
                    $("#email-Val").html("First Part Required");
                    $("#email").focus();
                    isFormValidated = 0;
                }
                else {
                    $(this).trigger("validate", [1]);
                    $("#email").val(restString);
                    $("#email2").focus();
                    isFormValidated = 0;
                }
                return;
            }
            else {
                $(this).trigger("validate", [1]);
                isFormValidated++;
            }
        });

        $("#email2").keyup(function () {
            var email2 = $("#email2").val();
            var filter = /^[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
            if (email2 == "") {
                $(this).trigger("validate", [0]);
                $("#email-Val").removeClass("success");
                $("#email-Val").addClass("error");
                $("#email-Val").html("Required Value");
                isFormValidated = 0;

            }
            else if (filter.test(email2)) {
                $(this).trigger("validate", [1]);
                $("#email-Val").removeClass("error");
                $("#email-Val").addClass("success");
                $("#email-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [0]);
                $("#email-Val").removeClass("success");
                $("#email-Val").addClass("error");
                $("#email-Val").html("Enter email in proper abc@xyz.com format");
                isFormValidated++;
            }

        });

        $("#popover").popover({
                
            html: true,
            content: function () {
                return $("#popover-content").html();
            },
            title: function () {
                return $("#popover-title").html();
            }
                
        });

        $("#pwd").focus(function () {
            $('#popover').popover('show');
        });

        $("#pwd").blur(function () {
            $('#popover').popover('hide');
        });

        $("#popover").hover(function () {
            $("#popover").click();
        });

        $("#pwd").keyup(function () {
            var pwd = $("#pwd").val();                
            if (pwd != "") {
                re = /[0-9]/;
                if (!re.test(pwd)) {
                    $(this).trigger("validate", [0]);
                    $("#pwd-Val").html("Password doesn't meet minimum requirements. Please refer to instructions.");
                    $("#pwd").focus();
                    pwdValidated = 0;
                    isFormValidated = 0;
                    return;
                }

                re = /[a-z]/;
                if (!re.test(pwd)) {
                    $(this).trigger("validate", [0]);
                    $("#pwd-Val").html("Password doesn't meet minimum requirements. Please refer to instructions.");
                    $("#pwd").focus();
                    pwdValidated = 0;
                    isFormValidated = 0;
                    return;
                }

                re = /[A-Z]/;
                if (!re.test(pwd)) {
                    $(this).trigger("validate", [0]);
                    $("#pwd-Val").html("Password doesn't meet minimum requirements. Please refer to instructions.");
                    $("#pwd").focus();
                    isFormValidated = 0;
                    pwdValidated = 0;
                    return;
                }

                re = /[@,#,$,&,!]/;
                if (!re.test(pwd)) {
                    $(this).trigger("validate", [0]);
                    $("#pwd-Val").html("Password doesn't meet minimum requirements. Please refer to instructions.");
                    $("#pwd").focus();
                    pwdValidated = 0;
                    isFormValidated = 0;
                    return;
                }

                if (pwd.length < 8) {
                    $(this).trigger("validate", [0]);
                    $("#pwd-Val").html("Password doesn't meet minimum requirements. Please refer to instructions.");
                    $("#pwd").focus();
                    pwdValidated = 0;
                    isFormValidated = 0;
                    return;
                }

                else {
                    $(this).trigger("validate", [1]);
                    $("#pwd-Val").html("Correct");
                    pwdValidated = 1;
                    isFormValidated++;
                    return;
                }
            }
            else {
                $(this).trigger("validate", [0]);
                $("#pwd-Val").html("Required Value");
                $("#pwd").focus();
                pwdValidated = 0;
                isFormValidated = 0;
            }

        });

        $("#pwdc").keyup(function () {
            var pwd = $("#pwd").val();
            var pwdc = $("#pwdc").val();
            if (pwdc == "") {
                $(this).trigger("validate", [0]);
                $("#pwdc-Val").html("Required Value");
                //$("#pwdc").focus(); 
                isFormValidated = 0;
                return;
            }
                
            if(pwdValidated == 1)
            {
                if(pwd == pwdc)
                {
                    $(this).trigger("validate", [1]);
                    $("#pwdc-Val").html("Correct");
                    isFormValidated++;
                }
                else
                {
                    $(this).trigger("validate", [0]);
                    $("#pwdc-Val").html("Passwords don't match");
                    isFormValidated = 0;
                }
            }
            else
            {
                $(this).trigger("validate", [0]);
                $("#pwdc-Val").html("Please enter correct password in the previous field first");
                $("#pwdc").html("");
                $("#pwd").focus();
                isFormValidated = 0;
            }

        });

        $("#add1").keyup(function () {
            var add1 = $("#add1").val();
            if (add1 == "") {
                $(this).trigger("validate", [0]);
                isFormValidated = 0;
            }
            else {
                $(this).trigger("validate", [1]);
                isFormValidated++;
            }
        });

        $("#add2").keyup(function () {
            var add2 = $("#add2").val();
            if (add2 == "") {
                $("#add2-Grp").removeClass("has-success");
                $("#add2-Glyph").removeClass("glyphicon-ok");
                $("#add2-Grp").removeClass("has-error");
                $("#add2-Glyph").removeClass("glyphicon-remove");
            }
            else {
                $("#add2-Grp").removeClass("has-error");
                $("#add2-Glyph").removeClass("glyphicon-remove");
                $("#add2-Grp").addClass("has-success");
                $("#add2-Glyph").addClass("glyphicon-ok");
            }
        });          

        $("#country").change(function () {
            var countryId = $("#country").val();
            if (countryId == "") {
                $("#country-Grp").removeClass("has-success");
                $("#country-Glyph").removeClass("glyphicon-ok");
                $("#country-Grp").addClass("has-error");
                $("#country-Glyph").addClass("glyphicon-remove");
                isFormValidated = 0;
            }
            else {
                $("#country-Grp").removeClass("has-error");
                $("#country-Glyph").removeClass("glyphicon-remove");
                $("#country-Grp").addClass("has-success");
                $("#country-Glyph").addClass("glyphicon-ok");
                isFormValidated++;
            }
                
        });

        $("#country").click(function () {
            var countryId = $("#country").val();
            if (countryId == "") {
                $("#country-Grp").removeClass("has-success");
                $("#country-Glyph").removeClass("glyphicon-ok");
                $("#country-Grp").addClass("has-error");
                $("#country-Glyph").addClass("glyphicon-remove");
                isFormValidated = 0;
            }
            else {
                $("#country-Grp").removeClass("has-error");
                $("#country-Glyph").removeClass("glyphicon-remove");
                $("#country-Grp").addClass("has-success");
                $("#country-Glyph").addClass("glyphicon-ok");
                isFormValidated++;
            }

        });

        $("#state").change(function () {
            var stateId = $("#state").val();
            if (stateId == "") {
                $("#state-Grp").removeClass("has-success");
                $("#state-Glyph").removeClass("glyphicon-ok");
                $("#state-Grp").addClass("has-error");
                $("#state-Glyph").addClass("glyphicon-remove");
                isFormValidated = 0;
            }
            else {
                $("#state-Grp").removeClass("has-error");
                $("#state-Glyph").removeClass("glyphicon-remove");
                $("#state-Grp").addClass("has-success");
                $("#state-Glyph").addClass("glyphicon-ok");
                isFormValidated++;
            }
        });

        $("#state").click(function () {
            var stateId = $("#state").val();
            if (stateId == "") {
                $("#state-Grp").removeClass("has-success");
                $("#state-Glyph").removeClass("glyphicon-ok");
                $("#state-Grp").addClass("has-error");
                $("#state-Glyph").addClass("glyphicon-remove");
                isFormValidated = 0;
            }
            else {
                $("#state-Grp").removeClass("has-error");
                $("#state-Glyph").removeClass("glyphicon-remove");
                $("#state-Grp").addClass("has-success");
                $("#state-Glyph").addClass("glyphicon-ok");
                isFormValidated++;
            }
        });

        $("#city").change(function () {
            var cityId = $("#city").val();
            if (cityId == "") {
                $(this).trigger("validate", [0]);
                $("#city-Val").html("Required Value");
                isFormValidated = 0;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#city-Val").html("Correct");
                isFormValidated++;
            }
        });

        $("#city").click(function () {
            var cityId = $("#city").val();
            if (cityId == "") {
                $(this).trigger("validate", [0]);
                $("#city-Val").html("Required Value");
                isFormValidated = 0;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#city-Val").html("Correct");
                isFormValidated++;
            }
        });

        $("#zip").keyup(function () {
            var zip = $("#zip").val();
            if (zip == ""){
                $(this).trigger("validate", [0]);
                $("#zip-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if (zip.length < 6) {
                $(this).trigger("validate", [0]);
                $("#zip-Val").html("Incorrect Zip");
                isFormValidated = 0;                
            }
            else if (zip.length > 6) {
                zip = zip.substr(0, 6);
                $("#zip").val(zip);
                $(this).trigger("validate", [1]);
                $("#zip-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#zip-Val").html("Correct");
                isFormValidated++;
            }
        });

        $("#ph1").keyup(function () {
            var ph1 = $("#ph1").val();
            if (ph1 == "") {
                $(this).trigger("validate", [0]);
                $("#ph1-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if (ph1.length == 10) {
                $(this).trigger("validate", [1]);
                $("#ph1-Val").html("Correct");
                isFormValidated++;
            }
            else if (ph1.length > 10) {
                $(this).trigger("validate", [1]);
                $("#ph1-Val").html("Correct");
                isFormValidated++;
                isFormValidated = 0;
                ph1 = ph1.substr(0, 10);
                $("#ph1").val(ph1);
            }
            else {
                $(this).trigger("validate", [0]);
                $("#ph1-Val").html("Incorrect Phone Number");
                isFormValidated = 0;
            }
        });

        $("#ph2").keyup(function () {
            var ph2 = $("#ph2").val();
            if (ph2 == "") {
                $(this).trigger("validate", [0]);
                $("#ph2-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if (ph2.length == 10) {
                $(this).trigger("validate", [1]);
                $("#ph2-Val").html("Correct");
                isFormValidated++;
            }
            else if (ph2.length > 10) {
                $(this).trigger("validate", [1]);
                $("#ph2-Val").html("Correct");
                isFormValidated++;
                isFormValidated = 0;
                ph2 = ph2.substr(0, 10);
                $("#ph2").val(ph2);
            }
            else {
                $(this).trigger("validate", [0]);
                $("#ph2-Val").html("Incorrect Phone Number");
                isFormValidated = 0;
            }
        });

        $("#10th").keyup(function () {
            var ten = $("#10th").val();
            if (ten == "") {
                $(this).trigger("validate", [0]);
                $("#10th-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((ten < 10) && (ten >= 0)){
                $(this).trigger("validate", [1]);
                $("#10th-Val").html("Correct");
                isFormValidated++;
            }
            else
            {
                $(this).trigger("validate", [1]);
                $("#10th-Val").html("Correct. CGPA must lie between 0 and 10");
                ten = ten.substr(0, 1);
                $("#10th").val(ten);
                isFormValidated++;
            }
        });

        $("#10th").blur(function () {
            var ten = $("#10th").val();
            if (ten == "") {
                $(this).trigger("validate", [0]);
                $("#10th-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((ten < 10) && (ten >= 0)) {
                $(this).trigger("validate", [1]);
                $("#10th-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#10th-Val").html("Correct. CGPA must lie between 0 and 10");
                ten = ten.substr(0, 1);
                $("#10th").val(ten);
                isFormValidated++;
            }
        });

        $("#12th").keyup(function () {
            var t12 = $("#12th").val();
            if (t12 == "") {
                $(this).trigger("validate", [0]);
                $("#12th-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((t12 < 100) && (t12 >= 0)) {
                $(this).trigger("validate", [1]);
                $("#12th-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#12th-Val").html("Correct. Marks must lie between 0 and 100");
                t12 = t12.substr(0, 2);
                $("#12th").val(t12);
                isFormValidated++;
            }
        });

        $("#12th").blur(function () {
            var t12 = $("#12th").val();
            if (t12 == "") {
                $(this).trigger("validate", [0]);
                $("#12th-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((t12 < 100) && (t12 >= 0)) {
                $(this).trigger("validate", [1]);
                $("#12th-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#12th-Val").html("Correct. Marks must lie between 0 and 100");
                t12 = t12.substr(0, 2);
                $("#12th").val(t12);
                isFormValidated++;
            }
        });

        $("#grad").keyup(function () {
            var grad = $("#grad").val();
            if (grad == "") {
                $(this).trigger("validate", [0]);
                $("#grad-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((grad < 10) && (grad > 0)) {
                $(this).trigger("validate", [1]);
                $("#grad-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#grad-Val").html("Correct. CGPA must lie between 0 and 10");
                grad = grad.substr(0, 1);
                $("#grad").val(grad);
                isFormValidated++;
            }
        });

        $("#grad").blur(function () {
            var grad = $("#grad").val();
            if (grad == "") {
                $(this).trigger("validate", [0]);
                $("#grad-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((grad < 10) && (grad > 0)) {
                $(this).trigger("validate", [1]);
                $("#grad-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#grad-Val").html("Correct. CGPA must lie between 0 and 10");
                grad = grad.substr(0, 1);
                $("#grad").val(grad);
                isFormValidated++;
            }
        });

        $("#degree").keyup(function () {
            var degree = $("#degree").val();
            if (degree == "") {
                $(this).trigger("validate", [0]);
                $("#degree-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((degree < 10) && (degree >= 0)) {
                $(this).trigger("validate", [1]);
                $("#degree-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#degree-Val").html("Correct. CGPA must lie between 0 and 10");
                degree = degree.substr(0, 1);
                $("#degree").val(degree);
                isFormValidated++;
            }
        });

        $("#degree").blur(function () {
            var degree = $("#degree").val();
            if (degree == "") {
                $(this).trigger("validate", [0]);
                $("#degree-Val").html("Required Value");
                isFormValidated = 0;
            }
            else if ((degree < 10) && (degree >= 0)) {
                $(this).trigger("validate", [1]);
                $("#degree-Val").html("Correct");
                isFormValidated++;
            }
            else {
                $(this).trigger("validate", [1]);
                $("#degree-Val").html("Correct. CGPA must lie between 0 and 10");
                degree = degree.substr(0, 1);
                $("#degree").val(degree);
                isFormValidated++;
            }
        });

        $("#submitForm").click(function () {
            //frm.checkValidity();

            isFormValidated = 0;

            $("#fname").keyup();
            $("#lname").keyup();
            $("#dob").keyup();
            $("#email").blur();
            $("#email2").keyup();
            $("#pwd").keyup();
            $("#pwdc").keyup();
            $("#add1").keyup();
            $("#country").click();
            $("#state").click();
            $("#city").click();
            $("#zip").keyup();
            $("#ph1").keyup();
            $("#ph2").keyup();
            $("#10th").blur();
            $("#12th").blur();
            $("#grad").blur();
            $("#degree").blur();

            //isFormValidated = 18;

            if (isFormValidated == 18) {

                $(".panel-footer").removeClass("hidden");
                //$(".panel-body").addClass("hidden");

                $("#name-Text").html($("#fname").val() + " " + $("#lname").val());
                $("#dob-Text").html($("#dob").val());

                var gender = $("input[name='gender']:checked").val();
                if (!gender) {
                    $("#gender-Text").html("Gender not mentioned");
                }
                else {
                    $("#gender-Text").html(gender);
                }               

                $("#email-Text").html($("#email").val() + "@" + $("#email2").val());
                $("#add-Text").html($("#add1").val() + ", " + $("#add2").val() + " PIN - " + $("#zip").val());
                $("#loc-Text").html($("#city").val() + ", " + $("#state").val() + ", " + $("#country").val());
                $("#ph-Text").html($("#ph1").val() + "(Primary), " + $("#ph2").val()+"(Secondary)");
                $("#10th-Text").html($("#10th").val());
                $("#12th-Text").html($("#12th").val()+"%");
                $("#degree-Text").html($("#degree").val());
                $("#grad-Text").html($("#grad").val());
            }
            else {
                $(".panel-footer").addClass("hidden");
            }

            return false;
        });

        $("#submitForm").click(function () {
            if (isFormValidated == 18)
            {
                $('html,body').animate({
                    scrollTop: $("#footer").offset().top
                },
                'slow');
            }
        });

        $("#resetForm").click(function () {
            if (confirm('Do you really want to reset? All your data will be lost.')) {
                location.reload();
            }
        });
                    
    });

