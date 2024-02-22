
let seatsLeft = 8;
var seatsCount = 0;
function addSeatInfo(name) {
    console.log(seatsCount);
    if (seatsCount === 4) {
        console.log("Hello");
    }

    else {
        console.log(seatsCount);
        const addTextContainer = document.getElementById('add-text');
        let li = document.createElement('li');
        li.style.listStyle = "none";
        li.style.display = 'flex';
        li.style.gap = '5rem';
        li.style.margin = '1.1rem';
        const p1 = document.createElement('p');
        p1.innerText = name;

        const p2 = document.createElement('p');
        p2.innerText = "Economy";

        const p3 = document.createElement('p');
        p3.innerText = 550;

        li.appendChild(p1);
        li.appendChild(p2);
        li.appendChild(p3);

        addTextContainer.appendChild(li);
    }
}
    document.getElementById('seat-1').addEventListener('click', function () {
    addSeatInfo("A1")
    console.log('Hey');
    })
    document.getElementById('seat-2').addEventListener('click', function () {
    addSeatInfo("A2")
    console.log('Hey');
    })
    document.getElementById('seat-3').addEventListener('click', function () {
    addSeatInfo("A3")
    console.log('Hey');
    })
    document.getElementById('seat-4').addEventListener('click', function () {
    addSeatInfo("A4")
    console.log('Hey');
    })
    document.getElementById('seat-5').addEventListener('click', function () {
    addSeatInfo("B1")
    console.log('Hey');
    })
    document.getElementById('seat-6').addEventListener('click', function () {
    addSeatInfo("B2")
    console.log('Hey');
    })
    document.getElementById('seat-7').addEventListener('click', function () {
    addSeatInfo("B3")
    console.log('Hey');
    })
    document.getElementById('seat-8').addEventListener('click', function () {
    addSeatInfo("B4")
    console.log('Hey');
    })


    let seatPrice = 0;
    let grandTotal = 0;
    const allBtn = document.getElementsByClassName('seat-name');
    for (const btn of allBtn) {
    btn.addEventListener("click", function () {

        if (seatsCount === 4) {
            alert('Sorry, You can select 4 seats only.');
        }
        else {
            btn.style.backgroundColor = "#1DD100";
            btn.style.color = "white";
            seatsLeft -= 1;
            seatsCount += 1;
            document.getElementById('seat-left').innerText = seatsLeft;
            document.getElementById('seats-count').innerText = seatsCount;
            btn.disabled = true;

            seatPrice += 550;
            document.getElementById('total-price').innerText = seatPrice;
            grandTotal += 550;
            document.getElementById('grand-total').innerText = grandTotal;

            updateGrandTotal();
        }

    })
}


function updateGrandTotal(status) {
    if (status === undefined) {
      document.getElementById("grand-total").innerText = seatPrice;
    } else {
      const couponCode = document.getElementById("apply-btn").value;
      let discounted = 0;
      console.log(couponCode);
      if (couponCode === "Couple 20") {
        discounted = seatPrice * 0.2;
        console.log(discounted);
      } else if (couponCode === "NEW15") {
        discounted = seatPrice * 0.15;
      } 
      else {
        alert("Please enter a valid coupon code");
      }
  
      const grandTotal = seatPrice - discounted;
      console.log("Discounted amount:", discounted);
      document.getElementById("grand-total").innerText = grandTotal;
    }
  }







