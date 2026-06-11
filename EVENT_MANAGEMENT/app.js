


class Event {
    static weddingPrice = 500000; // isko class ke help se access kar sakte hai ku ki ye static hai
    static birthdayPrice = 50000;// isko class ke help se access kar sakte hai  ku ki ye static hai
    constructor(name, date, location) {
        this.name = name;
        this.date = date;
        this.location = location
    }
    getDetails() {
        return `${this.name} will take place on ${this.location}.`
    }
    getPrice() {
        if (this.name.toLowerCase() === "wedding") {
            return Event.weddingPrice
        } else if (this.name.toLowerCase() === "birthday") {
            return Event.birthdayPrice
        } else {
            return "Price not available for this event type."
        }
    }
    bookEvent(guest) {
        console.log(`${guest.name} has booked for ${this.name}`);


    }
}
class Person {
    constructor(name, email, phoneNo) {
        this.name = name;
        this.email = email
        this.phoneNo = phoneNo
    }
}
// example of inheritance 
class guest extends Person {
    constructor(name, email, phoneNo, rsvpStatus) {
        //super which helps to call the constructor of parent class
        super(name, email, phoneNo);
        this.rsvpStatus = rsvpStatus
    }
    updatersvpStatus(status) {
        this.rsvpStatus = status;
        console.log(`${this.name} RSVP status updated to : ${this.rsvpStatus}`);

    }
}

class booking {
    constructor(Person) {
        this.Person = Person
        this.booking = []
        this.location = ["kankarbagh", "boring road"]

    }

    addBooking(event, guest) {
        let conflicts = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout,
        });
        if (this.booking.some(b => b.event.date === event.date && b.event.location === event.location)) {

            console.log(`Cannot Book ${event.name} for ${guest.name} due to date and location conflicts`);
            let availableLocations =
                this.location.filter(
                    location => location.toLowerCase() !== event.location.toLowerCase()
                );

            conflicts.question(
                `Location ${event.location} is not available.\nWould you like to shift to ${availableLocations[0]}? (yes/no): `,
                (answer) => {

                    if (answer.toLowerCase() === "yes") {

                        event.location = "Boring Road";

                        this.booking.push({ event, guest });

                        event.bookEvent(guest);

                        console.log(
                            `Booking added : ${guest.name} for ${event.name} at ${event.location}`
                        );

                    } else {
                        console.log(`Booking cancelled by ${guest.name} at ${event.location}.`);
                    }

                    conflicts.close();
                }
            );

            return;
        }
        this.booking.push({ event, guest })
        event.bookEvent(guest)
        console.log(`Booking added : ${guest.name} for ${event.name}`);

    }
}

let weddingEvent = new Event("Wedding", "2026-06-11", "boring Road")
// console.log(weddingEvent);
// console.log(weddingEvent.getDetails());
// console.log(typeof(weddingEvent));
// console.log(weddingEvent instanceof Event); // instancesof batata hai aap jo object banaye ho wo kis class ka hai
let birthdayEvent = new Event("birthday", "2026-06-11", "boring Road")
// console.log(birthdayEvent);
// console.log(birthdayEvent.getDetails());
// console.log(Event.weddingPrice);
// console.log(weddingEvent.getPrice("wedding"));
// console.log(birthdayEvent.getPrice("birthday"));
let client1 = new Person("ishu", "ishu@gmail.com", "228282828")
let client2 = new Person("priya", "priya@gmail.com", "93383838")
let bookings = new booking()
bookings.addBooking(weddingEvent, client1)
bookings.addBooking(birthdayEvent, client2)

// let guest1 = new guest("Ishu", "ishu@gmail.com", "373737373","pending")
// console.log(guest1);

// let guest2 = new guest("rohit", "rohit@gmail.com", "373737373","pending")

// guest1.updatersvpStatus("Accepted")
// guest2.updatersvpStatus("Declined")
// console.log(guest1);
// console.log(guest2);



