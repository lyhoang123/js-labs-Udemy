function run(physics, chemistry, biology, mathematics, computer){
	var percentage = (physics + chemistry + biology + mathematics + computer) / 5;
	var sz_grade = "Grade A";
	
    if(percentage < 4){
        sz_grade = "Grade F";
    }
    else if(percentage < 6){
        sz_grade = "Grade E";
    }
    else if(percentage < 7){
        sz_grade = "Grade D";
    }
    else if(percentage < 8){
        sz_grade = "Grade C";
    }
    else if(percentage < 9){
        sz_grade = "Grade B";
    }
	console.log(sz_grade);
}
run(4,10,10,9,4);