let balance = 50000; 
let balanceBox = document.getElementById("balanceBox");

document.getElementById("confirmTransfer").addEventListener("click", () => {
    let amountInput = document.getElementById("receiversAmount");
    let amount = parseFloat(amountInput.value);
    let receiversNameInput = document.getElementById("receiversName");
    let receiversName = receiversNameInput.value.trim();
    let amountError = document.getElementById("amountError");
    let receiverError = document.getElementById("receiverError");

    // check if amount is is empty
    if (isNaN(amount) || amount <= 0) {
        amountError.textContent = "Enter fundings please !" ;
        return;
    }

    // check if the amount is more than the balance
    if (amount > balance) {
        amountError.textContent = "Oga u sef forget say ur fundz no reach 😂😂😂!" ;
        return;
    }

    // check if the receiver name is empty
    if (!receiversName) {
        receiverError.textContent = "Please enter the receiver's name!"
        return;
    }

    // transfer with amount and receiver's name
    let confirmFundind = confirm(`Are you sure you want to transfer ${amount}€ to ${receiversName}?`);

    if (!confirmFundind) {
        return; 
    }

    // then transfer substarct from amount input from balance
    balance -= amount;
    balanceBox.textContent = balance + "€"; 


    balanceBox.classList.add("text-red-500", "scale-110");
    setTimeout(() => {
        balanceBox.classList.remove("text-red-500", "scale-110");
    }, 500);

    // set all values and textcentent to empty
    amountInput.value = "";
    receiversNameInput.value = ""; 
    receiverError.textContent = "";
    amountError.textContent = "" ;

});

let transferButtons = document.querySelectorAll('#transferBtn');
let transferContainer = document.getElementById('transferContainer');
let transferBox = document.getElementById('transferBox');
let closeModalButton = document.getElementById('closeModal');

// Function to show modal with smooth transition
let showTransferContainer = () => {
    transferContainer.classList.remove('hidden');
    setTimeout(() => {
        transferBox.classList.remove('opacity-0', 'scale-y-0'); 
    }, 10); // Small delay for smooth effect
};

// Function to close modal smoothly
let closeTransferContainer = () => {
    transferBox.classList.add('opacity-0', 'scale-y-0'); // Animate out
    setTimeout(() => {
        transferContainer.classList.add('hidden'); // Hide overlay after animation
    }, 300);
};

transferButtons.forEach(button => {
    button.addEventListener('click', showTransferContainer);
});

// Close transferContainer on cancel button click
closeModalButton.addEventListener('click', closeTransferContainer);

// Alert to confirm log out and clear local storage
document.getElementById("logout")?.addEventListener("click", () => 
    confirm("Are you sure you want to log out?") && (localStorage.clear(),
     window.location.href = "sign-up.html")
);

// Declare variables
let hideAbout = document.getElementById("hideAbout");
let showAbout = document.getElementById("showAbout");
let hideCard = document.getElementById('hideCard');
let showCard = document.getElementById('showCard');
let about = document.getElementById("about");
let aboutBtn = document.getElementById("aboutBtn");
let aboutDiv = document.getElementById("aboutDiv");
let more = document.getElementById("more");
let moreBtn = document.getElementById("moreBtn");
let imgDiv = document.getElementById("imgDiv");
let freeCards = document.getElementById("freeCards");
let hidden = document.getElementById("hidden");
let viewText = document.getElementById("viewText");
let show = document.getElementById("show");

document.getElementById("hideBtn").addEventListener('click', () => {
// Display and hide more cards
if (balanceBox.textContent === "*****") {
        balanceBox.textContent = balance + " " + "€";
        hidden.style.display = "block";
        show.style.display = "none";
        viewText.innerHTML = "Hide";
    } else {
        balanceBox.textContent = "*****";
        hidden.style.display = "none";
        show.style.display = "block";
        viewText.innerHTML = "View";
    }
});

// Display and hide more cards
moreBtn.addEventListener("click", () => {
    if (imgDiv.classList.contains("max-h-0")) {
        imgDiv.classList.remove("max-h-0");
        imgDiv.classList.add("max-h-[300px]");
        hideCard.style.display = "block";
        showCard.style.display = "none";
    } else {
        imgDiv.classList.remove("max-h-[300px]");
        imgDiv.classList.add("max-h-0");
        hideCard.style.display = "none";
        showCard.style.display = "block";
    }
});

// Display and hide about us
aboutBtn.addEventListener('click', () => {
    if (aboutDiv.classList.contains("max-h-0")) {
        aboutDiv.classList.remove("max-h-0");
        aboutDiv.classList.add("max-h-[300px]");
        hideAbout.style.display = "block";
        showAbout.style.display = "none";
    } else {
        aboutDiv.classList.remove("max-h-[300px]");
        aboutDiv.classList.add("max-h-0");
        hideAbout.style.display = "none";
        showAbout.style.display = "block";
    }
});
