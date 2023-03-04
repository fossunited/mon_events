function formatDateRange(date1, date2, id){
    start = moment(date1).format("Do MMM YYYY").split(" ")


    if(date1 == date2){
        document.getElementById(id).innerHTML = start[0] + " " + start[1] + " " + start[2]
    }else{
        end = moment(date2).format("Do MMM YYYY").split(" ")

    startdate = start[0]
    enddate = end[0]

    year = ""

    if(start[1] != end[1]){
        startdate += " " + start[1]
        enddate += " " + end[1]
    }else{
        year += " " + start[1]
    }

    if(start[2] != end[2]){
        startdate += " " + start[2]
        enddate += " " + end[2]
    }else{
        year += " " + start[2]
    }

    document.getElementById(id).innerHTML = startdate + " to " + enddate + " " + year
}
}
