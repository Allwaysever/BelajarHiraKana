const kanaData = [
    // Dasar
    { h: "あ", k: "ア", r: "a" }, { h: "い", k: "イ", r: "i" }, { h: "う", k: "ウ", r: "u" }, { h: "え", k: "エ", r: "e" }, { h: "お", k: "オ", r: "o" },
    { h: "か", k: "カ", r: "ka" }, { h: "き", k: "キ", r: "ki" }, { h: "く", k: "ク", r: "ku" }, { h: "け", k: "ケ", r: "ke" }, { h: "こ", k: "コ", r: "ko" },
    { h: "さ", k: "サ", r: "sa" }, { h: "し", k: "シ", r: "shi" }, { h: "す", k: "ス", r: "su" }, { h: "せ", k: "セ", r: "se" }, { h: "そ", k: "ソ", r: "so" },
    { h: "た", k: "タ", r: "ta" }, { h: "ち", k: "チ", r: "chi" }, { h: "つ", k: "ツ", r: "tsu" }, { h: "て", k: "テ", r: "te" }, { h: "と", k: "ト", r: "to" },
    { h: "な", k: "ナ", r: "na" }, { h: "に", k: "ニ", r: "ni" }, { h: "ぬ", k: "ヌ", r: "nu" }, { h: "ね", k: "ネ", r: "ne" }, { h: "の", k: "ノ", r: "no" },
    { h: "は", k: "ハ", r: "ha" }, { h: "ひ", k: "ヒ", r: "hi" }, { h: "ふ", k: "フ", r: "fu" }, { h: "へ", k: "ヘ", r: "he" }, { h: "ほ", k: "ホ", r: "ho" },
    { h: "ま", k: "マ", r: "ma" }, { h: "み", k: "ミ", r: "mi" }, { h: "む", k: "ム", r: "mu" }, { h: "め", k: "メ", r: "me" }, { h: "も", k: "モ", r: "mo" },
    { h: "や", k: "ヤ", r: "ya" }, { h: "ゆ", k: "ユ", r: "yu" }, { h: "よ", k: "ヨ", r: "yo" },
    { h: "ら", k: "ラ", r: "ra" }, { h: "り", k: "リ", r: "ri" }, { h: "る", k: "ル", r: "ru" }, { h: "れ", k: "レ", r: "re" }, { h: "ろ", k: "ロ", r: "ro" },
    { h: "わ", k: "ワ", r: "wa" }, { h: "を", k: "ヲ", r: "o/wo" }, { h: "ん", k: "ン", r: "n" },
    // Dakuten (ten-ten)
    { h: "が", k: "ガ", r: "ga" }, { h: "ぎ", k: "ギ", r: "gi" }, { h: "ぐ", k: "グ", r: "gu" }, { h: "げ", k: "ゲ", r: "ge" }, { h: "ご", k: "ゴ", r: "go" },
    { h: "ざ", k: "ザ", r: "za" }, { h: "じ", k: "ジ", r: "ji" }, { h: "ず", k: "ズ", r: "zu" }, { h: "ぜ", k: "ゼ", r: "ze" }, { h: "ぞ", k: "ゾ", r: "zo" },
    { h: "だ", k: "ダ", r: "da" }, { h: "ぢ", k: "ヂ", r: "ji" }, { h: "づ", k: "ヅ", r: "zu" }, { h: "で", k: "デ", r: "de" }, { h: "ど", k: "ド", r: "do" },
    { h: "ば", k: "バ", r: "ba" }, { h: "び", k: "ビ", r: "bi" }, { h: "ぶ", k: "ブ", r: "bu" }, { h: "べ", k: "ベ", r: "be" }, { h: "ぼ", k: "ボ", r: "bo" },
    // Handakuten (maru)
    { h: "ぱ", k: "パ", r: "pa" }, { h: "ぴ", k: "ピ", r: "pi" }, { h: "ぷ", k: "プ", r: "pu" }, { h: "ぺ", k: "ペ", r: "pe" }, { h: "ぽ", k: "ポ", r: "po" },
    // Yōon (Kombinasi Kecil)
    { h: "きゃ", k: "キャ", r: "kya" }, { h: "きゅ", k: "キュ", r: "kyu" }, { h: "きょ", k: "キョ", r: "kyo" },
    { h: "しゃ", k: "シャ", r: "sha" }, { h: "しゅ", k: "シュ", r: "shu" }, { h: "しょ", k: "ショ", r: "sho" },
    { h: "ちゃ", k: "チャ", r: "cha" }, { h: "ちゅ", k: "チュ", r: "chu" }, { h: "ちょ", k: "チョ", r: "cho" },
    { h: "にゃ", k: "ニャ", r: "nya" }, { h: "にゅ", k: "ニュ", r: "nyu" }, { h: "にょ", k: "ニョ", r: "nyo" },
    { h: "ひゃ", k: "ヒャ", r: "hya" }, { h: "ひゅ", k: "ヒュ", r: "hyu" }, { h: "ひょ", k: "ヒョ", r: "hyo" },
    { h: "みゃ", k: "ミャ", r: "mya" }, { h: "みゅ", k: "ミュ", r: "myu" }, { h: "みょ", k: "ミョ", r: "myo" },
    { h: "りゃ", k: "リャ", r: "rya" }, { h: "りゅ", k: "リュ", r: "ryu" }, { h: "りょ", k: "リョ", r: "ryo" },
    { h: "ぎゃ", k: "ギャ", r: "gya" }, { h: "ぎゅ", k: "ギュ", r: "gyu" }, { h: "ぎょ", k: "ギョ", r: "gyo" },
    { h: "じゃ", k: "ジャ", r: "ja" }, { h: "じゅ", k: "ジュ", r: "ju" }, { h: "じょ", k: "ジョ", r: "jo" },
    { h: "びゃ", k: "ビャ", r: "bya" }, { h: "びゅ", k: "ビュ", r: "byu" }, { h: "びょ", k: "ビョ", r: "byo" },
    { h: "ぴゃ", k: "ピャ", r: "pya" }, { h: "ぴゅ", k: "ピュ", r: "pyu" }, { h: "ぴょ", k: "ピョ", r: "pyo" }
];

const exampleSentences = [
    { sentence: "わたしはにほんごがすきです", meaning: "Saya suka bahasa Jepang." },
    { sentence: "おはようございます", meaning: "Selamat pagi." },
    { sentence: "げんきですか", meaning: "Apa kabar?" },
    { sentence: "がっこうへいきます", meaning: "Pergi ke sekolah." },
    { sentence: "どうぞよろしくおねがいします", meaning: "Senang bertemu dengan Anda." },
    { sentence: "おちゃをのみます", meaning: "Saya minum teh." },
    { sentence: "きょうはたのしかったです", meaning: "Hari ini menyenangkan." },
    { sentence: "しゃしんをとります", meaning: "Saya mengambil foto." },
    { sentence: "でんしゃはなんじですか", meaning: "Jam berapa kereta?" },
    { sentence: "ぎゅうにゅうをのみます", meaning: "Saya minum susu." },
    { sentence: "コンピュータはとてもべんりです", meaning: "Komputer sangat nyaman." }
];

// Elemen Flashcard & Kuis
const flashcardSection = document.getElementById('flashcard-section');
const displayCard = document.getElementById('display-card');
const hiraganaText = document.getElementById('hiragana-text');
const romajiText = document.getElementById('romaji-text');
const katakanaText = document.getElementById('katakana-text');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const startQuizBtn = document.getElementById('startQuizBtn');

const quizSection = document.getElementById('quiz-section');
const questionNumberDisplay = document.getElementById('quiz-question-number');
const questionDisplay = document.getElementById('question-display');
const answerButtonsContainer = document.getElementById('answer-buttons');
const quizFeedback = document.getElementById('quiz-feedback');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const restartQuizBtn = document.getElementById('restartQuizBtn');

// Elemen Contoh Kalimat
const exampleSection = document.getElementById('example-section');
const sentenceDisplay = document.getElementById('sentence-display');
const meaningDisplay = document.getElementById('meaning-display');
const romajiInfoDisplay = document.getElementById('romaji-info');
const nextExampleBtn = document.getElementById('nextExampleBtn');

let currentIndex = 0;
const QUIZ_LENGTH = 10;
let quizData = [];
let currentQuizIndex = 0;
let score = 0;
let currentExampleIndex = 0;

// --- FUNGSI TAMPILAN KARTU ---
function displayCardContent(index) {
    const currentKana = kanaData[index];
    hiraganaText.textContent = currentKana.h;
    romajiText.textContent = currentKana.r;
    katakanaText.textContent = currentKana.k;
}

function goToNextCard() {
    currentIndex = (currentIndex + 1) % kanaData.length;
    displayCardContent(currentIndex);
}
function goToPrevCard() {
    currentIndex = (currentIndex - 1 + kanaData.length) % kanaData.length;
    displayCardContent(currentIndex);
}
function goToRandomCard() {
    let newIndex;
    do { newIndex = Math.floor(Math.random() * kanaData.length); } while (newIndex === currentIndex);
    currentIndex = newIndex;
    displayCardContent(currentIndex);
}

// --- FUNGSI CONTOH KALIMAT ---
function displayExample() {
    sentenceDisplay.innerHTML = '';
    romajiInfoDisplay.textContent = '';

    const example = exampleSentences[currentExampleIndex];
    meaningDisplay.textContent = example.meaning;

    let sentenceChars = example.sentence.split('');
    let combinedChars = [];
    for (let i = 0; i < sentenceChars.length; i++) {
        // Menggabungkan karakter kecil
        if (i > 0 && sentenceChars[i].match(/[ゃゅょぁぃぅぇぉ]/)) {
            combinedChars[combinedChars.length - 1] += sentenceChars[i];
        } else {
            combinedChars.push(sentenceChars[i]);
        }
    }

    // Sekarang, semua karakter akan menjadi tombol
    for (const char of combinedChars) {
        const span = document.createElement('span');
        span.textContent = char;
        span.classList.add('sentence-char');
        span.addEventListener('click', () => showCharInfo(char));
        sentenceDisplay.appendChild(span);
    }
}

function showCharInfo(char) {
    const kanaInfo = kanaData.find(item => item.h === char || item.k === char);
    if (!kanaInfo) {
        romajiInfoDisplay.textContent = '';
        return;
    }
    romajiInfoDisplay.textContent = `${kanaInfo.h} - ${kanaInfo.r} - ${kanaInfo.k}`;
}

function goToNextExample() {
    currentExampleIndex = (currentExampleIndex + 1) % exampleSentences.length;
    displayExample();
}

// --- FUNGSI KUIS ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    flashcardSection.classList.add('hidden');
    exampleSection.classList.add('hidden');
    quizSection.classList.remove('hidden');

    score = 0;
    currentQuizIndex = 0;
    quizData = shuffleArray([...kanaData]).slice(0, QUIZ_LENGTH);
    
    showQuestion();
}

function showQuestion() {
    answerButtonsContainer.innerHTML = '';
    quizFeedback.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    
    if (currentQuizIndex >= quizData.length) {
        showQuizResults();
        return;
    }

    questionNumberDisplay.textContent = `Pertanyaan ${currentQuizIndex + 1} dari ${QUIZ_LENGTH}`;
    
    const currentQuestion = quizData[currentQuizIndex];
    const isHiragana = Math.random() > 0.5;
    const character = isHiragana ? currentQuestion.h : currentQuestion.k;
    const correctAnswer = currentQuestion.r;
    
    questionDisplay.textContent = character;

    let choices = [correctAnswer];
    let incorrectAnswers = shuffleArray(kanaData.filter(item => item.r !== correctAnswer));
    for (let i = 0; i < 3; i++) {
        choices.push(incorrectAnswers[i].r);
    }
    choices = shuffleArray(choices);

    choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('answer-btn');
        button.addEventListener('click', () => selectAnswer(choice, correctAnswer));
        answerButtonsContainer.appendChild(button);
    });
}

function selectAnswer(selectedAnswer, correctAnswer) {
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedAnswer) {
            button.classList.add('wrong');
        }
    });

    if (selectedAnswer === correctAnswer) {
        quizFeedback.textContent = 'Benar!';
        score++;
    } else {
        quizFeedback.textContent = `Salah. Jawaban yang benar adalah "${correctAnswer}".`;
    }
    
    nextQuestionBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuizIndex++;
    showQuestion();
}

function showQuizResults() {
    questionNumberDisplay.textContent = 'Kuis Selesai!';
    questionDisplay.textContent = `Skor kamu: ${score} dari ${QUIZ_LENGTH}`;
    answerButtonsContainer.innerHTML = '';
    quizFeedback.textContent = '';
    nextQuestionBtn.classList.add('hidden');
    restartQuizBtn.classList.remove('hidden');
}

function restartQuiz() {
    startQuiz();
    restartQuizBtn.classList.add('hidden');
}

// --- Event Listeners ---
prevBtn.addEventListener('click', goToPrevCard);
nextBtn.addEventListener('click', goToNextCard);
randomBtn.addEventListener('click', goToRandomCard);
startQuizBtn.addEventListener('click', startQuiz);
nextQuestionBtn.addEventListener('click', nextQuestion);
restartQuizBtn.addEventListener('click', restartQuiz);
nextExampleBtn.addEventListener('click', goToNextExample);

// Tampilkan kartu pertama dan contoh kalimat pertama saat halaman dimuat
displayCardContent(currentIndex);
displayExample();
