function ageCalculate() {

    var birthDate = document.getElementById('birth_date').value;
    //Getting DateOfBrith of User   
    // alert(birthDate);  

    var d = new Date(birthDate);

    // alert(d);  



    var mdate = birthDate.toString();
    var yearThen = parseInt(mdate.substring(0, 4));
    var monthThen = parseInt(mdate.substring(5, 7));
    var dayThen = parseInt(mdate.substring(8, 10));

    //alert(mdate);  
    // alert (yearThen);
    // alert (monthThen);
    // alert (dayThen);

    var today = new Date();

    // alert (today);  

    var birthday = new Date(yearThen, monthThen - 1, dayThen);

    //   alert(birthday);
    // alert(today.valueOf() + " " + birthday.valueOf());
    var differenceInMilisecond = today.valueOf() - birthday.valueOf();
    //alert(differenceInMilisecond);


    // 31536000000 is equal to 1 year || 12 months || 365
    var year_age = Math.floor(differenceInMilisecond / 31536000000);

    // alert(year_age);

    //86400000 is equal to 1000 days

    var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);

    //alert(day_age);


    if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
        alert("Happy B'day!!!");
    }


    var month_age = Math.floor(day_age / 30);

    // alert(month_age);

    day_age = day_age % 30;

    //  alert(day_age);


    var tMnt = (month_age + (year_age * 12));
    var tDays = (tMnt * 30) + day_age;

    //alert(tMnt);
    // alert(tDays);

    if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
        document.getElementById("age").innerHTML = ("Invalid birthday - Please try again!");
    } else {
        document.getElementById("age").innerHTML = year_age + " Years " + month_age + " Months " + day_age + " Days" +
            "<br/> or <br/> " +
            tMnt + " Months " + day_age + " Days" +
            "<br/> or <br/>" +
            tDays + " Days" +
            "<br/> or <br/>" +
            tDays * 24 + " Hours" +
            "<br/> or <br/>" +
            tDays * 24 * 3600 + " Seconds" +
            "<br/> or <br/>" +
            tDays * 24 * 3600 * 1000 + " Miliseconds";
    }

    var datee = diff / 1000 / 60 / 60 / 24;
}