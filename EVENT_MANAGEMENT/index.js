const readline = require("readline");
const conflicts = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Event {
    static weddingPrice = 500000; 
    static birthdayPrice = 50000;
    static seminarPrice = 20000;

    constructor(name, date, location) {
        this.name = name;
        this.date = date;
        this.location = location;
    }

    getPrice() {
        if (this.name.toLowerCase() === "wedding") return Event.weddingPrice;
        else if (this.name.toLowerCase() === "birthday") return Event.birthdayPrice;
        else if (this.name.toLowerCase() === "seminar") return Event.seminarPrice;
        else return "Price not available";
    }

    // Jo method aapne abhi pichle task mein banaya tha (with syntax fix)
    applyDiscount(percentage) {
        let originalPrice = this.getPrice(); 
        if (typeof originalPrice === "string") return originalPrice; 

        let discountAmount = (originalPrice * percentage) / 100;
        return originalPrice - discountAmount;
    }

    bookEvent(guest) {
        console.log(`${guest.name} has booked for ${this.name}`);
    }
}

class Person {
    constructor(name, email, phoneNo) {
        this.name = name;
        this.email = email;
        this.phoneNo = phoneNo;
    }
}

class booking {
    constructor() {
        this.booking = [];
        this.location = ["kankarbagh", "boring road"];
    }

    // 1. Yahan teesra parameter jod diya 'discountPercentage' (by default 0 rakha hai)
    addBooking(event, guest, discountPercentage = 0) {
        
        // 2. Event class ka method call karke is guest ke liye discounted price nikala
        let finalBill = event.applyDiscount(discountPercentage);

        let hasConflict = this.booking.some(
            b => b.event.date === event.date && 
            b.event.location.toLowerCase() === event.location.toLowerCase()
        );

        if (hasConflict) {
            console.log(`Cannot Book ${event.name} for ${guest.name} due to conflicts.`);
            let availableLocations = this.location.filter(loc => loc.toLowerCase() !== event.location.toLowerCase());

            conflicts.question(
                `Location ${event.location} is not available. Shift to ${availableLocations[0]}? (yes/no): `,
                (answer) => {
                    if (answer.toLowerCase() === "yes") {
                        event.location = availableLocations[0];
                        this.booking.push({ event, guest, bill: finalBill });
                        event.bookEvent(guest);
                        // 3. Yahan discount ke sath success message print kiya
                        console.log(`Booking added: ${guest.name} for ${event.name} at ${event.location}. Total Bill (after ${discountPercentage}% discount): ₹${finalBill}\n`);
                    } else {
                        console.log(`Booking cancelled by ${guest.name}.\n`);
                    }
                    conflicts.close();
                }
            );
            return;
        }

        // Normal Flow (No conflict)
        this.booking.push({ event, guest, bill: finalBill });
        event.bookEvent(guest);
        // 3. Yahan bhi discount ke sath print kiya
        console.log(`Booking added: ${guest.name} for ${event.name}. Total Bill (after ${discountPercentage}% discount): ₹${finalBill}\n`);
    }
}

// --- EXECUTION (ISHAAN/ISHU PE APPLY KARTE HAIN) ---

let weddingEvent = new Event("Wedding", "2026-06-11", "boring road");
let birthdayEvent = new Event("birthday", "2026-06-11", "boring road");

let client1 = new Person("ishu", "ishu@gmail.com", "228282828");
let client2 = new Person("priya", "priya@gmail.com", "93383838");

let bookings = new booking();

// Ishu ko hum 10% ka discount de rahe hain booking ke waqt
console.log("--- Executing Ishu's Booking ---");
bookings.addBooking(weddingEvent, client1, 10); 

// Priya ko koi discount nahi de rahe (0% chalega automatic)
console.log("--- Executing Priya's Booking ---");
bookings.addBooking(birthdayEvent, client2);
