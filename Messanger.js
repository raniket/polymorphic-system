class Messanger {
    constructor(outputDevice) {
        this.messages = [
            "\nMessage No : 1 - Hey there!",
            "\nMessage No : 2 - I'm doing well, thanks for asking. How about you?",
            "\nMessage No : 3 - Not bad, just busy with work. How's everything on your end?",
            "\nMessage No : 4 - Pretty hectic too, but managing. Hey, did you catch the game last night?",
            "\nMessage No : 5 - Yeah, it was insane! I couldn't believe the final score.",
            "\nMessage No : 6 - Right? That last-minute goal was unbelievable.",
            "\nMessage No : 7 - Totally unexpected. It kept me on the edge of my seat.",
            "\nMessage No : 8 - Definitely. So, any plans for the weekend?",
            "\nMessage No : 9 - Not yet, but I'm thinking of going hiking. How about you?",
            "\nMessage No : 10 - I might catch up on some reading or binge-watch a series.",
            "\nMessage No : 11 - Sounds like a relaxing weekend. Need any book recommendations?",
            "\nMessage No : 12 - Sure, I'm open to suggestions. What have you been reading lately?",
            "\nMessage No : 13 - I just finished a thriller novel that I couldn't put down.",
            "\nMessage No : 14 - Nice! I'm always up for a good thriller. What's the title?",
            "\nMessage No : 15 - It's called 'The Silent Witness.' Gripping plot twists till the end.",
            "\nMessage No : 16 - I'll definitely check it out. Thanks for the recommendation!",
            "\nMessage No : 17 - No problem. Let me know what you think once you've read it.",
            "\nMessage No : 18 - Will do. Hey, did you hear about the new restaurant downtown?",
            "\nMessage No : 19 - Yeah, I heard it's got amazing reviews. We should check it out sometime.",
            "\nMessage No : 20 - Definitely! I'm up for trying out some new cuisines.",
            "\nMessage No : 21- Great! I'll look up the menu and make a reservation.",
            "\nMessage No : 22 - Sounds like a plan. Can't wait to try their food!",
            "\nMessage No : 23 - Me too. It's always exciting to discover new places to eat.",
            "\nMessage No : 24 - Absolutely. So, how's your family doing?",
            "\nMessage No : 25 - They're doing well, thanks for asking. How about yours?",
            "\nMessage No : 27 - Everyone's good, just keeping busy with their own stuff.",
            "\nMessage No : 28 - Glad to hear that. Family time is always important.",
            "\nMessage No : 29 - Indeed. Hey, have you watched any good movies lately?",
            "\nMessage No : 30 - I saw this new sci-fi film that blew my mind. You should watch it!",
            "\nMessage No : 31 - Sounds intriguing! What's the title?",
            "\nMessage No : 32 - It's called 'Parallel Realms.' The visual effects are stunning.",
            "\nMessage No : 33 - I'll add it to my watchlist. Thanks for the recommendation!",
            "\nMessage No : 34 - No worries. Let me know what you think once you've seen it.",
            "\nMessage No : 35 - Absolutely. Hey, I've been meaning to ask you about that project we discussed.",
            "\nMessage No : 36 - Sure, what do you need to know?",
            "\nMessage No : 37 - I wanted to get your input on the timeline. Do you think we can meet the deadline?",
            "\nMessage No : 38 - It'll be tight, but I think with proper planning, we can make it happen.",
            "\nMessage No : 39 - Agreed. Let's schedule a meeting to iron out the details.",
            "\nMessage No : 40 - Sounds like a plan. I'll send out the meeting invite.",
            "\nMessage No : 41 - Perfect. Looking forward to collaborating with you on this.",
            "\nMessage No : 42 - Likewise. Together, we'll knock this project out of the park!",
            "\nMessage No : 43 - Absolutely! Teamwork makes the dream work, right?",
            "\nMessage No : 44 - Couldn't have said it better myself. We've got this!",
            "\nMessage No : 45 - Definitely! Well, I should get back to work now. Talk to you later?",
            "\nMessage No : 46 - Sure thing. Take care and have a productive day!",
            "\nMessage No : 47 - You too! Catch you later.",
            "\nMessage No : 48 - Bye for now!"
        ]       
        
        this.outputDevice = outputDevice
    }

    start() {
        setInterval(() => {
            let message = this.messages.shift()
            this.outputDevice.write(message)
        } , 3000)
    }

    setOutputDevice(outputDevice) {
        this.outputDevice = outputDevice
    }

    getOutputDevice() {
        return this.outputDevice
    }
}

module.exports = Messanger
