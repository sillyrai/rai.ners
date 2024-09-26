window.onload = function(){
    fadeIn()
    iAmA()
}

function fadeIn(){
    console.log("loaded!")
    let container = document.getElementById("container")
    container.classList.remove('opacity-0')
    container.classList.add('opacity-100')
}

function iAmA() {
    let skills = ["Programmētājs", "Grafiskais Dizaineris", "Full-stack programmētjās"];
    let qualification = document.getElementById('qualification');
    let skillIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        let currentSkill = skills[skillIndex];
        
        if (isDeleting) {
            qualification.innerHTML = currentSkill.substring(0, letterIndex);
            letterIndex--;
        } else {
            qualification.innerHTML = currentSkill.substring(0, letterIndex);
            letterIndex++;
        }

        // Control typing speed
        let typingSpeed = isDeleting ? 25 : 50;

        if (!isDeleting && letterIndex === currentSkill.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000); // Pause for 1 second before deleting
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            skillIndex = (skillIndex + 1) % skills.length; // Move to next skill
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}
