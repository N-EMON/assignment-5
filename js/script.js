

// for heart icon
const hearts = document.getElementsByClassName('heart-icon');
for(const heart of hearts){
    heart.addEventListener('click', function(e){
        e.preventDefault();
        const heartNumber = parseInt(document.getElementById('heart-count').innerText);
        const heartNumberTotal = heartNumber + 1;
        document.getElementById('heart-count').innerText = heartNumberTotal;
    })
}


// For Call Button 
const callBtns = document.getElementsByClassName('call-btn');
for(const callBtn of callBtns){ 
    callBtn.addEventListener('click', function(event){ 
        event.preventDefault();
        const parent = event.target.parentNode.parentNode;
        const serviceName = parent.querySelector('.service-name').innerText;
        const serviceNumber = parent.querySelector('.service-number').innerText;

        const coinCount = Number(document.getElementById('coin-count').innerText);
        if(coinCount < 20){
            alert("❌ You don't have enough coins. Need at least 20 coins to make a call.");
            return;
        }
        alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

        
        const availeableCoin = coinCount - 20;
        document.getElementById('coin-count').innerText = availeableCoin;
        
        const historyContainer = document.getElementById('history-container');
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="flex justify-between bg-[#fafafa] p-4 mb-4 rounded-lg">
                        <div>
                            <h2 class="service-name text-lg  font-semibold text-[#111111] poppins">${serviceName}</h2>
                            <h3 class="service-number text-lg   text-[#111111] roboto">${serviceNumber}</h3>
                        </div>
                        <p>${new Date().toLocaleTimeString()}</p>
                    </div>
        `
        historyContainer.prepend(div);
    })

}


// For Copy Button 
const copybtns = document.getElementsByClassName('copy-btn');
for(const copybtn of copybtns){ 
    copybtn.addEventListener('click',function(event){ 
        event.preventDefault()
        const mainParent = event.target.parentNode.parentNode;
        const serviceNumber = mainParent.querySelector('.service-number').innerText;
        navigator.clipboard.writeText(serviceNumber);
        alert(`copied the number ${serviceNumber}`);

        const copycounted = Number(document.getElementById('copy-count').innerText);
        const copycountedTotal = copycounted + 1;
        document.getElementById('copy-count').innerText = copycountedTotal;
    })


// for Clear Button 
const historyClearBtn = document.getElementById('history-clear-btn');
historyClearBtn.addEventListener('click',function(event){ 
    event.preventDefault();
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = '';
    })
}