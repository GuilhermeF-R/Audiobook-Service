const ButtonPlayPause = document.getElementById('play-pause');
const ButtonSkip = document.getElementById('skip')
const ButtonBack = document.getElementById('back')
const NameChapter = document.getElementById('chapter')
const AudioChapter = document.getElementById('audio-chapter');
const NumberOfChapters = 10;
let ItsPlaying = 0;
let ChapterNumber =1;

function BackOnHover(){
    ButtonBack.classList.add('bi-skip-start-circle-fill');
    ButtonBack.classList.remove('bi-skip-start-circle');
}
function BackOutHover(){
    ButtonBack.classList.add('bi-skip-start-circle');
    ButtonBack.classList.remove('bi-skip-start-circle-fill');
}
function SkipOnHover(){
        ButtonSkip.classList.add('bi-skip-end-circle-fill');
        ButtonSkip.classList.remove('bi-skip-end-circle');
}
function SkipOutHover(){
        ButtonSkip.classList.add('bi-skip-end-circle');
        ButtonSkip.classList.remove('bi-skip-end-circle-fill');
}
function PlayOnHover(){
    if (ItsPlaying === 0){
        ButtonPlayPause.classList.add('bi-play-circle-fill');
        ButtonPlayPause.classList.remove('bi-play-circle');
    }
}
function PlayOutHover(){
    if (ItsPlaying === 0){
        ButtonPlayPause.classList.add('bi-play-circle');
        ButtonPlayPause.classList.remove('bi-play-circle-fill');
    }
}
function PauseOnHover(){
    if (ItsPlaying === 1){
        ButtonPlayPause.classList.add('bi-pause-circle-fill');
        ButtonPlayPause.classList.remove('bi-pause-circle');
    }
}
function PauseOutHover(){
    if (ItsPlaying === 1){
        ButtonPlayPause.classList.add('bi-pause-circle');
        ButtonPlayPause.classList.remove('bi-pause-circle-fill');
    }
}
function PlayAudio() {
    AudioChapter.play();
    ButtonPlayPause.classList.add('bi-pause-circle');
    ButtonPlayPause.classList.remove('bi-play-circle');
    ButtonPlayPause.classList.remove('bi-play-circle-fill');    
}
function PauseAudio(){
    AudioChapter.pause();
    ButtonPlayPause.classList.add('bi-play-circle');
    ButtonPlayPause.classList.remove('bi-pause-circle');  
    ButtonPlayPause.classList.remove('bi-pause-circle-fill');  
}

function PlayPause() {
    if (ItsPlaying === 0){
        PlayAudio();
        ItsPlaying = 1;
    } else {
        PauseAudio();
        ItsPlaying = 0;
    }
}
function ChangeName(){
    if (ChapterNumber === 2){
        NameChapter.innerText = 'Chapter Two';      
    }
    if (ChapterNumber === 3){
        NameChapter.innerText = 'Chapter Three';      
    }
    if (ChapterNumber === 4){
        NameChapter.innerText = 'Chapter Four';      
    }
    if (ChapterNumber === 5){
        NameChapter.innerText = 'Chapter Five';      
    }
    if (ChapterNumber === 6){
        NameChapter.innerText = 'Chapter Six';      
    }
    if (ChapterNumber === 7){
        NameChapter.innerText = 'Chapter Seven';      
    }
    if (ChapterNumber === 8){
        NameChapter.innerText = 'Chapter Eight';      
    }
    if (ChapterNumber === 9){
        NameChapter.innerText = 'Chapter Nine';      
    }
    if (ChapterNumber === 10){
        NameChapter.innerText = 'Chapter Ten';      
    }
    if (ChapterNumber === 1){
        NameChapter.innerText = 'Chapter One'; 
    }
}
function SkipChapter(){
    if (ChapterNumber === NumberOfChapters) {
        ChapterNumber =1;
    } else {
        ChapterNumber = ChapterNumber +1
    }
    AudioChapter.src = "./books/dom-casmurro/" + ChapterNumber + '.mp3';
    PlayAudio();
    ItsPlaying =1;
    ChangeName();
}
function BackChapter(){
    if (ChapterNumber === 1) {
        ChapterNumber = NumberOfChapters;
    } else {
        ChapterNumber = ChapterNumber -1
    }
    AudioChapter.src = "./books/dom-casmurro/" + ChapterNumber + '.mp3';
    PlayAudio();
    ItsPlaying =1;
    ChangeName();
}


ButtonPlayPause.addEventListener('mouseover', PauseOnHover)
ButtonPlayPause.addEventListener('mouseout', PauseOutHover) 
ButtonPlayPause.addEventListener('mouseover', PlayOnHover)
ButtonPlayPause.addEventListener('mouseout', PlayOutHover)

ButtonPlayPause.addEventListener('click', PlayPause)
ButtonSkip.addEventListener('click', SkipChapter)
ButtonBack.addEventListener('click', BackChapter)

ButtonSkip.addEventListener('mouseover', SkipOnHover)
ButtonSkip.addEventListener('mouseout', SkipOutHover)

ButtonBack.addEventListener('mouseover', BackOnHover)
ButtonBack.addEventListener('mouseout', BackOutHover)


///on hover 
