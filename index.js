$(".selfDescription").click(function() {
    alert("Sorry, I don't have an Pornhub or OnlyFans account... 😈 my IG is shown in the footer section, that might tingle your senses.");
});

// $("#profileImage").click(function(),{
//     $(this).toggleClass(".card");
// });

function changeImage() {
    if (document.getElementById("profileImage").src == "images/ProfilePicture.png") {
        document.getElementById("profileImage").src = "images/elements/DivineCard.png";
    } else {
        document.getElementById("profileImage").src = "images/ProfilePicture.png";
    }
}
