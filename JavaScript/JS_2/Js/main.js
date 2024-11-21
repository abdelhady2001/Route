

// Array of Objects
var quotes = [
    {
        quote: "“Be yourself; everyone else is already taken.”",

        author: " --Oscar Wilde"
    }
    ,
    {
        quote: "“So many books, so little time.”",

        author: " --Frank Zappa"
    }
    ,
    {
        quote: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",

        author: " --Marilyn Monroe"
    }
    ,
    {
        quote: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",

        author: " --Albert Einstein"
    }
    ,
    {
        quote: "“A room without books is like a body without a soul.”",

        author: " --Marcus Tullius Cicero"
    }
    ,
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",

        author: "--Bernard M. Baruch"
    }
    ,
    {
        quote: "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",

        author: "--William W. Purkey"
    }
    ,
    {
        quote: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",

        author: "--Dr. Seuss"
    }
    ,
    {
        quote: "“You only live once, but if you do it right, once is enough.”",

        author: "--Mae West"
    }
    ,
    {
        quote: "“Be the change that you wish to see in the world.”",

        author: "--Mahatma Gandhi"
    }
    ,
    {
        quote: "“In three words I can sum up everything I've learned about life: it goes on.”",

        author: "--Robert Frost"
    }
    ,
    {
        quote: "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",

        author: "--J.K. Rowling"
    }
    ,
    {
        quote: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",

        author: "--Albert Camus"
    }
    ,
    {
        quote: "“If you tell the truth, you don't have to remember anything.”",

        author: "--Mark Twain"
    }
    ,
    {
        quote: "“A friend is someone who knows all about you and still loves you.”",

        author: "--Elbert Hubbard"
    }
    ,
    {
        quote: "“We accept the love we think we deserve.”",

        author: "--Stephen Chbosky"
    }
    ,
    {
        quote: "“Without music, life would be a mistake.”",

        author: "--Friedrich Nietzsche"
    }
    ,
    {
        quote: "“I am so clever that sometimes I don't understand a single word of what I am saying.”",

        author: "--Oscar Wilde"
    }
    ,
    {
        quote: "“It is better to be hated for what you are than to be loved for what you are not.”",

        author: "--Andre Gide"
    }
    ,
    {
        quote: "“It is our choices, Harry, that show what we truly are, far more than our abilities.”",

        author: "--J.K. Rowling"
    }

]
// Function 
function generateQuotes() {
    // Random Number
    var i = Math.floor((Math.random() * 20) + 1);
    document.getElementById("quoteOutput").innerHTML = quotes[i].quote
    document.getElementById("authorOutput").innerHTML = quotes[i].author
}