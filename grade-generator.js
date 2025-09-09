const marks = Input;

if (input > 100 && input < 0) {
    return "Marks invalid."
} else if (input >= 79) {
    return "Grade = A "
} else if(input >= 60){
    return " Grade = B"
} else if (input >= 49) {
    return "Grade = C"
} else if (input >= 40) {
    return "Grade = D"
} else {
    return 'Grade = E'
}