const quotes = [
    {
        quote: "귀는 모두에게, 입은 소수에게만 열고 모든 의견을 수용하되 판단은 보류해라 ",
        author: "「햄릿」 - 윌리엄 셰익스피어",
    },
    {
        quote: "전쟁의 가장 끔찍한 특징 가운데 하나는 모든 전쟁 선전물, 모든 악다구니니와 거짓말, 증오가 언제나 싸우지 않는 사람들에게서 나온다는 점이다.",
        author: "「카탈로니아 찬가」 - 조지 오웰",
    },
    {
        quote: "언젠가 그것은 완전히 당신 것이 될 거예요. 당신이 꿈꾼 대로요. 당신이 변함없이 충실하면요.",
        author: "「데미안」 - 헤르만 헤세",
    },
    {
        quote: "사랑이란 부서지기 쉬운 거야. (...) 하지만 어쩌면 부서진 파편은 다시 보관할 수 있지.",
        author: "「피츠제럴드 단편선1」 - F. 스콧 피츠제럴드",
    },
    {
        quote: "가짜로 살지 않았으므로 나는 아름답다.",
        author: "「나는 소망한다 내게 금지된 것을」 - 양귀자",
    },
    {
        quote: "단조로운 삶은 역시 단조로운 행복만을 약속한다.",
        author: "「모순」 - 양귀자",
    },
    {
        quote: "그럼에도 나는 다음 여행을 준비한다. 행복은 바라는 대로 주어지는 게 아니라 노력과 의지로 맺는 열매 같은 것이라는 걸 나는 여행을 통해 알게 되었기 때문이다.",
        author: "「이 지랄맞음이 쌓여 축제가 되겠지」 - 조승리",
    },
    {
        quote: "어서 한 손으로 이 광선을 붙잡아라. 별이 있지 않느냐! 무거운 짐을 버려라. 아무리 가벼운 과거의 짐이라 하더라도 거기에 메이지 말라.",
        author: "「새로운 양식」 - 앙드레 지드",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;