console.log("JS is running.");

var submitButton = document.getElementById('submit-button');
    var submitIt = function() {
        var trump1 = document.trumpForm.trump1.value; // food
        var trump2 = document.trumpForm.trump2.value; // animal
        var trump3 = document.trumpForm.trump3.value; // adjective
        var trump4 = document.trumpForm.trump4.value; // color
        var trump5 = document.trumpForm.trump5.value; // cuisine
        var trump6 = document.trumpForm.trump6.value; // noun
        var trump7 = document.trumpForm.trump7.value; // adverb
        var trump8 = document.trumpForm.trump8.value; // alcohol
        var trump9 = document.trumpForm.trump9.value; // noun
        var trump10 = document.trumpForm.trump10.value; // celebrity
        var result = document.getElementById("speech");
        result.innerHTML = ["TRUMP: So ladies and <strong>" + trump1 + "</strong>…I am officially running for <em><strong>" + trump2 + "</strong></em> of the United States, and we are going to make our country <strong>" + trump3 + "</strong> again. We have losers. We have losers. We have <strong>" + trump4 + "</strong> people that don’t have it. We have people that are morally <strong>" + trump5 + "</strong>. We have people that are selling this country down the drain. I would build a great <strong>" + trump6 + "</strong> on our southern border, and nobody builds <strong>" + trump6 + "s</strong> better than me, believe me, and I’ll build them very <strong>" + trump7 +"</strong>. And I will have Mexico pay for that <strong>" + trump6 + "</strong>. <br /><br /> AUDIENCE MEMBER: We want <strong>" + trump8 + "</strong> now. <br /><br /> TRUMP: I love China. The biggest <strong>" + trump9 + "</strong> in the world is from China. You know where their United States headquarters is located? In this building, in <strong>" + trump2 + " </strong>Tower. I love China. <br /><br /> AUDIENCE MEMBER: We need <strong>" + trump8 + "</strong> now. <br /><br /> TRUMP: I will be the greatest jobs president that <strong>" + trump10 + "</strong> ever created. I'll tell you that."];
        };

        submitButton.addEventListener('click', submitIt);
        
console.log("JS has successfully connected.");