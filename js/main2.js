const API_KEY = '7193a00c8b994a8da934dcf151157b84';
let url = new URL(`https://newsapi.org/v2/top-headlines?country=kr&category=entertainment&pageSize=12&apiKey=${API_KEY}`);



const fetchData = async () => {
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data.articles; // 기사 목록을 반환합니다.
  } catch (error) {
      console.error(error);
  }
};

const newsContainer = document.getElementById("news-container"); // 뉴스 카드를 담을 컨테이너
const prevBtn = document.getElementById("prevBtn"); // 이전 버튼
const nextBtn = document.getElementById("nextBtn"); // 다음 버튼
let currentScreenIndex = 0; // 현재 스크린의 인덱스를 추적합니다. 초기값은 0입니다.
const batchSize = 6; // 한 번에 보여지는 뉴스 카드의 개수를 정의합니다.
const totalCards = 12; // 전체 뉴스 카드의 개수를 정의합니다.
let articles; // articles 변수를 전역 변수로 선언합니다.

// 주어진 뉴스 정보를 이용하여 뉴스 카드를 생성하는 함수입니다.
const createNewsCard = (news) => {
  // 뉴스 카드를 감싸는 열을 생성합니다.
  const cardColumn = document.createElement("div");
  cardColumn.classList.add("col-md-2", "card-column");

  // 카드 요소를 생성합니다.
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  // 이미지 요소를 생성하고 속성을 설정합니다.
  const image = document.createElement("img");
  image.src = news.urlToImage ? news.urlToImage : 'img/noimage.png'; // 이미지 URL 설정
  image.classList.add("card-img-top");
  image.alt = news.title; // 대체 텍스트 설정

  // 이미지가 로드되지 못하는 경우, 대체 텍스트를 출력합니다.
  image.onerror = function() {
    this.src = 'img/noimage.png'; // 이미지가 로드되지 않으면 대체 이미지를 표시합니다.
  };

  // 카드 본문을 생성합니다.
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

// 제목 요소를 생성하고 텍스트를 설정합니다.
  const title = document.createElement("h5");
  title.classList.add("card-title");
  const titleText = news.title.split(/[\/-]/)[0].trim();
  title.textContent = titleText; // 수정된 제목 설정

  // 본문 요소를 생성합니다.
  const content = document.createElement("p");
  content.classList.add("card-text");
  
  // publishedAt에서 날짜 부분만 추출합니다.
  const publishedDate = news.publishedAt.split("T")[0];
  // yyyy-mm-dd 형식의 날짜를 yyyy-mm-dd 형식으로 잘라서 출력합니다.
  const formattedDate = publishedDate.slice(0, 10);
  
  // author가 null이 아닌 경우에만 작성자 정보를 추가합니다.
  if (news.author !== null) {
      content.textContent = `${formattedDate} ${news.author}`;
  } else {
      content.textContent = formattedDate;
  }
  
  

  // 뉴스 기사 링크를 생성하고 속성을 설정합니다.
  const articleLink = document.createElement("a");
  articleLink.href = news.url; // 링크 URL 설정
  articleLink.classList.add("stretched-link");

  // 뉴스 카드를 클릭할 때 해당 기사 페이지로 이동하도록 설정합니다.
  cardDiv.addEventListener("click", () => {
      window.location.href = news.url;
  });

  // 생성된 요소들을 조립합니다.
  cardBody.appendChild(title);
  cardBody.appendChild(content);
  cardDiv.appendChild(image);
  cardDiv.appendChild(cardBody);
  cardDiv.appendChild(articleLink);
  cardColumn.appendChild(cardDiv);
  newsContainer.appendChild(cardColumn);
};

// 주어진 범위의 뉴스 카드를 렌더링하는 함수입니다.
const renderNewsCards = (articles, startIndex, endIndex) => {
  const newsToShow = articles.slice(startIndex, endIndex);
  newsContainer.innerHTML = ""; // newsContainer를 비웁니다.
  newsToShow.forEach(article => {
      createNewsCard(article);
      
  });
};

// 뉴스 카드를 업데이트하고 슬라이드 효과를 적용하는 함수입니다.
const updateNewsCards = (startIndex, endIndex) => {
  renderNewsCards(articles, startIndex, endIndex); // 새로운 범위의 카드를 렌더링합니다.
};

fetchData().then(data => {
  articles = data; // articles 변수에 기사 목록을 저장합니다.
  updateNewsCards(0, batchSize); // 뉴스 카드 업데이트
}).catch(error => {
  console.error(error);
});

// 이전 버튼 클릭 시 호출되는 이벤트 리스너입니다.
prevBtn.addEventListener("click", () => {
  if (currentScreenIndex > 0) {
      currentScreenIndex--; // 현재 스크린 인덱스를 감소시킵니다.
      const startIndex = currentScreenIndex * batchSize; // 시작 인덱스 계산
      const endIndex = startIndex + batchSize; // 종료 인덱스 계산
      updateNewsCards(startIndex, endIndex); // 뉴스 카드 업데이트
  }
});

// 다음 버튼 클릭 시 호출되는 이벤트 리스너입니다.
nextBtn.addEventListener("click", () => {
  if (currentScreenIndex < totalCards / batchSize - 1) {
      currentScreenIndex++; // 현재 스크린 인덱스를 증가시킵니다.
      const startIndex = currentScreenIndex * batchSize; // 시작 인덱스 계산
      const endIndex = startIndex + batchSize; // 종료 인덱스 계산
      updateNewsCards(startIndex, endIndex); // 뉴스 카드 업데이트
  }
});


