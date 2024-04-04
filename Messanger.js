class Messanger {
    constructor(outputDevice) {
        this.messages = [
            "\nHey there!",
            "\nI'm doing well, thanks for asking. How about you?",
            "\nNot bad, just busy with work. How's everything on your end?",
            "\nPretty hectic too, but managing. Hey, did you catch the game last night?",
            "\nYeah, it was insane! I couldn't believe the final score.",
            "\nRight? That last-minute goal was unbelievable.",
            "\nTotally unexpected. It kept me on the edge of my seat.",
            "\nDefinitely. So, any plans for the weekend?",
            "\nNot yet, but I'm thinking of going hiking. How about you?",
            "\nI might catch up on some reading or binge-watch a series.",
            "\nSounds like a relaxing weekend. Need any book recommendations?",
            "\nSure, I'm open to suggestions. What have you been reading lately?",
            "\nI just finished a thriller novel that I couldn't put down.",
            "\nNice! I'm always up for a good thriller. What's the title?",
            "\nIt's called 'The Silent Witness.' Gripping plot twists till the end.",
            "\nI'll definitely check it out. Thanks for the recommendation!",
            "\nNo problem. Let me know what you think once you've read it.",
            "\nWill do. Hey, did you hear about the new restaurant downtown?",
            "\nYeah, I heard it's got amazing reviews. We should check it out sometime.",
            "\nDefinitely! I'm up for trying out some new cuisines.",
            "\nGreat! I'll look up the menu and make a reservation.",
            "\nSounds like a plan. Can't wait to try their food!",
            "\nMe too. It's always exciting to discover new places to eat.",
            "\nAbsolutely. So, how's your family doing?",
            "\nThey're doing well, thanks for asking. How about yours?",
            "\nEveryone's good, just keeping busy with their own stuff.",
            "\nGlad to hear that. Family time is always important.",
            "\nIndeed. Hey, have you watched any good movies lately?",
            "\nI saw this new sci-fi film that blew my mind. You should watch it!",
            "\nSounds intriguing! What's the title?",
            "\nIt's called 'Parallel Realms.' The visual effects are stunning.",
            "\nI'll add it to my watchlist. Thanks for the recommendation!",
            "\nNo worries. Let me know what you think once you've seen it.",
            "\nAbsolutely. Hey, I've been meaning to ask you about that project we discussed.",
            "\nSure, what do you need to know?",
            "\nI wanted to get your input on the timeline. Do you think we can meet the deadline?",
            "\nIt'll be tight, but I think with proper planning, we can make it happen.",
            "\nAgreed. Let's schedule a meeting to iron out the details.",
            "\nSounds like a plan. I'll send out the meeting invite.",
            "\nPerfect. Looking forward to collaborating with you on this.",
            "\nLikewise. Together, we'll knock this project out of the park!",
            "\nAbsolutely! Teamwork makes the dream work, right?",
            "\nCouldn't have said it better myself. We've got this!",
            "\nDefinitely! Well, I should get back to work now. Talk to you later?",
            "\nSure thing. Take care and have a productive day!",
            "\nYou too! Catch you later.",
            "\nBye for now!"
        ]        

        this.outputDevice = outputDevice
    }

    start() {
        setInterval(() => {
            let message = this.messages.shift()
            this.outputDevice.write(message)
        } , 1000)
    }

    setOutputDevice(outputDevice) {
        this.outputDevice = outputDevice
    }

    getOutputDevice() {
        return this.outputDevice
    }
}

module.exports = Messanger
