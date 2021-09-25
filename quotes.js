window.addEventListener('load', () => {
    const quotes = [
        {
            quote: 'Hurry hurry has no blessings',
            author: '~Denzel Washington'
        },
        {
            quote: 'Fear is self imposed, you created it you can destroy it.',
            author: '~Billionare Mindset.'
        },
        {
            quote: 'If you cant beat them join them.',
            author: '~Wei Jin.'
        },
        {
            quote: 'NO pain NO gain.',
            author: '~The Mob.'
        },
        {
            quote: 'Losers are not quitters but quitters are losers.',
            author: '~LeBron James.'
        },
        {
            quote: 'As a man thinketh so he is.',
            author: '~Hart Maghanthy.'
        },
        {
            quote: 'Without urgency, Desire is dead',
            author: '~Jim Rohn.'
        },
        {
            quote: 'Mistakes mean that you are trying.',
            author: '~Bruce Lee.'
        },
        {
            quote: 'No man is an Island.',
            author: '~Buju Banton.'
        },
        {
            quote: 'Forwards ever backwards never',
            author: '~Hitler'
        },
    ];

    initializeGenerator();
    const quoteGenerator = document.querySelector('button');

    quoteGenerator.addEventListener('click', () => {
        let randomIndex = Math.round(Math.random() * quotes.length);
        const quoteSection = document.querySelector('.quote');
        const authorSection = document.querySelector('.author');

        quoteSection.textContent = quotes[randomIndex].quote;
        authorSection.textContent = quotes[randomIndex].author;
    });

    function initializeGenerator(){
        let newRandomIndex = Math.round(Math.random() * quotes.length);
        const quoteSection = document.querySelector('.quote');
        const authorSection = document.querySelector('.author');

        quoteSection.textContent = quotes[newRandomIndex].quote;
        authorSection.textContent = quotes[newRandomIndex].author;
    }
    
    setInterval(() => {
        quoteGenerator.click()
    }, 1500);
});