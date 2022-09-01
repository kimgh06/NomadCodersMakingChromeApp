const quotes = [
    {
        quote: "세상에 스파게티와 민트초코뿐만 있다면 나는 민트초코스파게티를 선택할 것이다.",
        author: "하늘을 나는 스파게티 괴물",
    },
    {
        quote: "자바스크립트는 세상에 현존하는 가장 좋은 스크립트 언어이다.",
        author: "뇌피셜",
    },
    {
        quote: "나는 차였어.",
        author: "옵티머스 프라임",
    },
    {
        quote: "지금 내가 가장 하고 싶은 행동은 바로 집에 가서 잠에 드는 것이다.",
        author: "나다",
    },
    {
        quote: "기호 1번 정모씨!!!",
        author: "정모씨",
    },
    {
        quote: "나는 커서 AI개발자가 될 래요!",
        author: "허모씨",
    },
    {
        quote: "아 응애에요.",
        author: "김흥국",
    },
    {
        quote: "노는게 제일 좋아 친구들 모여라.",
        author: "뽀로로",
    },
    {
        quote: "두 유노 뷔티에스?",
        author: "어느 기자",
    },
    {
        quote: "I am Ironman.",
        author: "Tony Stark",
    },
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
