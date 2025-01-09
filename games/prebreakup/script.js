
document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const questionField = document.getElementById("question");
    const doneButton = document.getElementById("done-btn");
    const homeContainer = document.getElementById("home");
    const questionPage = document.getElementById("question-page");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    const communication = [1, 'How do you feel our communication has changed over time?', 'Do you feel heard and understood in our conversations?', 'What can I do to improve how I listen to you?', "Are there things you feel you can't talk to me about?", 'How do we handle disagreements, and can we improve this?', 'Do you feel comfortable expressing your needs and emotions to me?', 'What communication habits do we have that might be harmful?', 'How can we better resolve conflicts in the future?', 'Do you think we need help from a counselor to improve our communication?', 'Are there unresolved issues that we need to talk about?', 'How do you feel after we have an argument?', 'What are your thoughts on the way we apologize to each other?', 'Do you feel I understand your perspective during conflicts?', 'How can we make our conversations more meaningful and less superficial?', 'Do you think we listen to each other without judgment?', 'Are there communication issues that make you feel disconnected?', 'How do we usually handle criticism from each other?', 'Do you feel safe and supported when discussing sensitive topics?', 'What communication patterns should we change to strengthen our relationship?', 'Do you feel we communicate enough about our daily lives and feelings?', 'How do you feel our communication styles complement or clash with each other?', 'What steps can we take together to ensure our communication continues to grow and improve?']
    const feelingsneeds = [1, 'Do you feel fulfilled and happy in our relationship?', 'What needs of yours do you feel are not being met?', 'How have your feelings towards me changed since we started dating?', 'Do you feel you can be your true self with me?', "What do you need from me that you feel you're not getting?", 'Are there aspects of our relationship that make you unhappy or uncomfortable?', 'How do you see your individual growth within our relationship?', 'Do you feel pressured to change aspects of yourself for our relationship?', 'What personal goals do you feel are hindered by our relationship?', 'How do you cope with feelings of sadness or frustration in our relationship?', 'Do you feel emotionally supported by me?', 'What aspects of our relationship bring you the most joy?', 'Are there any fears or anxieties you have about our relationship?', 'How do you feel about the balance of giving and receiving in our relationship?', 'Do you feel your individuality is respected and valued?', 'How do you feel about the intimacy in our relationship?', 'Are there unaddressed issues that affect your personal well-being?', "Do you feel we understand each other's emotional needs?", 'What changes would you like to see in how we support each other emotionally?', 'Do you feel your voice and opinions are valued in our decision-making?', 'What boundaries do you feel need to be set or respected more in our relationship?', 'How can we better align our personal needs with our shared goals and dreams?']
    const relationship = [1, 'How do you feel about the current state of our relationship?', 'What were your initial expectations, and how have they changed?', 'Do you feel that our relationship is growing or stagnating?', 'What are the strengths and weaknesses of our relationship?', 'How do you see our relationship compared to when it first started?', "Are there recurring issues that we haven't been able to resolve?", 'How do you feel about the trust between us?', 'Do you feel that we are compatible in the long term?', 'What aspects of our relationship are most important to you?', "Are there any deal-breakers in our relationship that we haven't addressed?", 'How do you feel about our level of commitment to each other?', 'Do you think we have a healthy balance of independence and togetherness?', 'How do you feel about the way we handle stress and challenges together?', 'Do you feel that our relationship is equal and fair?', 'What have been the happiest moments in our relationship?', 'Are there any unresolved feelings or issues from the past affecting us now?', "How do you feel about the way we support each other's dreams and ambitions?", 'Do you think we have a healthy approach to compromise and negotiation?', 'How do you feel about the way we celebrate and appreciate each other?', 'Do you feel that we are moving in the same direction in life?', 'How do you feel about our ability to adapt to changes and grow together?', 'What future challenges do you foresee for us, and how can we prepare for them?']
    const friendsFamily = [1, "How do you feel about the way we interact with each other's families?", 'Do you think our families positively or negatively impact our relationship?', 'How do you feel about the time we spend with our friends?', 'Are there issues with friends or family that we need to address?', 'Do you feel supported by our families and friends in our relationship?', 'How do you think our relationship is perceived by others?', 'Are there external pressures from family or friends affecting us?', 'How do you feel about the boundaries we have set with our families?', 'Do you think our friends and family respect our relationship?', 'How do we handle differences in family values and traditions?', 'Do you feel that our social lives are balanced with our relationships?', 'Are there conflicts with friends or family that concern you?', 'How do you feel about the influence of our friends on our relationship?', 'Do you think we prioritize our relationship over external relationships appropriately?', 'How do you feel about the way we handle family obligations?', 'Are there family dynamics that you find challenging or stressful?', 'How do you think our relationship affects our friendships?', 'Do you feel that we have enough privacy from our families and friends?', 'How do you feel about the support we receive during conflicts with family or friends?', 'Do you think our relationship has changed our relationships with others?', 'How do you feel about the way we handle conflicts involving family and friends?', 'What can we do to strengthen our relationship despite external influences from family and friends?']
    const future = [1, 'How do you envision our future together?', 'Do you have concerns about our long-term compatibility?', 'What are your personal goals for the next five years?', 'How do you see our relationship evolving in the future?', 'Are there aspects of our future together that worry you?', 'How do you feel about the idea of marriage or long-term commitment with me?', 'What are your thoughts on starting or expanding a family?', 'Do you think we are moving towards common goals?', 'How do you feel about the sacrifices we may need to make for our future?', 'Are there future plans that you feel uncertain about?', 'How do you feel about our financial planning for the future?', 'Do you think we have similar values and life goals?', 'How do you feel about the balance between our individual aspirations and our relationship?', 'Are there any changes you would like to see in our future together?', 'How do you feel about growing old together?', "Do you have any fears about our future that we haven't discussed?", 'How do you feel about the way we handle discussions about the future?', "Are there aspects of your personal future that you feel I don't support?", 'How do you feel about the compromises we might have to make for our future?', 'Do you think we are prepared to face future challenges together?', 'How do you feel about our readiness to handle potential life changes together?', "What steps can we take to ensure our future plans align and support each other's growth?"]
    const closure = [1, 'How do you feel about the decision to stay together or break up?', 'Do you think we have tried everything to save our relationship?', 'What are your biggest fears about ending our relationship?', 'How do you think we should approach this decision-making process?', 'Do you feel that breaking up is the only solution left?', 'How do you envision your life without me?', 'Are there any final efforts or changes we should try before making a decision?', 'How do you feel about the possibility of regret if we break up?', 'Do you think we are making this decision for the right reasons?', 'How do you feel about seeking professional help before making a decision?', 'Are there any unresolved feelings or issues that we should address before deciding?', 'How do you think we should handle the aftermath of our decision?', 'Do you feel prepared to handle the emotional impact of a breakup?', 'How do you think we should communicate our decision to others?', "Do you think there's a chance we could reconcile in the future?", 'How do you feel about the way we have handled difficult decisions in the past?', 'Are there any final words or actions you need for closure?', 'How do you think we should handle shared responsibilities or assets if we break up?', 'Do you think we can maintain a friendship or contact after a breakup?', 'How do you feel about the overall journey of our relationship and its potential end?', 'What lessons do you think we can learn from our relationship, regardless of the outcome?', 'How do you feel about giving ourselves a set period to reflect and reevaluate before making a final decision?', 'How do you feel about the impact our relationship has had on our personal growth and well-being?'];

    let category = 'communication';

    function displayQuestion() {

        if (category == 'communication') {
            if (communication[0] <= communication.length - 1) {
                questionField.innerHTML = communication[communication[0]];
            }
            
        } else if (category == 'feelingsneeds') {
            if (feelingsneeds[0] <= feelingsneeds.length - 1) {
                questionField.innerHTML = feelingsneeds[feelingsneeds[0]];
            }
        } else if (category == 'relationship') {
            if (relationship[0] <= relationship.length - 1) {
                questionField.innerHTML = relationship[relationship[0]];
            }
        } else if (category == 'friendsFamily') {
            if (friendsFamily[0] <= friendsFamily.length - 1) {
                questionField.innerHTML = friendsFamily[friendsFamily[0]];
            }
        } else if (category == 'future') {
            if (future[0] < future.length - 1) {
                questionField.innerHTML = future[future[0]];
            }
        } else if (category == 'closure') {
            if (closure[0] < closure.length - 1) {
                questionField.innerHTML = closure[closure[0]];
            }
        } else {
            questionField.innerHTML = "Something went wrong";
        } 
    }


    // Show question page and hide category buttons
    function showQuestionPage() {
        homeContainer.classList.add("hidden");
        questionPage.classList.remove("hidden");
        questionField.classList.remove("hidden");
        doneButton.classList.remove("hidden");
        nextButton.classList.remove("hidden");
        displayQuestion();
    }

    function nextQuestion() {
        if (category == 'communication') {
            if (communication[0] < communication.length) {
                communication[0]++;
                prevButton.classList.remove("hidden");
            }
            if (communication[0] >= communication.length - 1) {
                nextButton.classList.add("hidden");
            } 
        } else if (category == 'feelingsneeds') {
            if (feelingsneeds[0] < feelingsneeds.length) {
                feelingsneeds[0]++;
                prevButton.classList.remove("hidden");
            }
            if (feelingsneeds[0] >= communication.length - 1) {
                nextButton.classList.add("hidden");
            } 
 
        } else if (category == 'relationship') {
            if (relationship[0] < relationship.length) {
                relationship[0]++;
                prevButton.classList.remove("hidden");
            }
            if (relationship[0] >= communication.length - 1) {
                nextButton.classList.add("hidden");
            } 

        } else if (category == 'friendsFamily') {
            if (friendsFamily[0] < friendsFamily.length) {
                friendsFamily[0]++;
                prevButton.classList.remove("hidden");
            }
            if (friendsFamily[0] >= communication.length - 1) {
                nextButton.classList.add("hidden");
            } 

        } else if (category == 'future') {
            if (future[0] < future.length) {
                future[0]++;
                prevButton.classList.remove("hidden");
            }
            if (future[0] >= communication.length - 1) {
                nextButton.classList.add("hidden");
            } 

        } else if (category == 'closure') {
            if (closure[0] < closure.length) {
                closure[0]++;
                prevButton.classList.remove("hidden");
            }
            if (closure[0] >= communication.length - 1) {
                nextButton.classList.add("hidden");
            } 
        }
        
        displayQuestion();
    }

    function prevQuestion() {
        if (category == 'communication') {
            if (communication[0] > 1) {
                communication[0] -= 1;
                nextButton.classList.remove("hidden");
            }
            if (communication[0] == 1) {
                prevButton.classList.add("hidden");
            } 
            
        } else if (category == 'feelingsneeds') {
            if (feelingsneeds[0] > 1) {
                feelingsneeds[0] -= 1;
                nextButton.classList.remove("hidden");
            }
            if (feelingsneeds[0] == 1) {
                prevButton.classList.add("hidden");
            } 
 
        } else if (category == 'relationship') {
            if (relationship[0] > 1) {
                relationship[0] -= 1;
                nextButton.classList.remove("hidden");
            }
            if (relationship[0] == 1) {
                prevButton.classList.add("hidden");
            } 

        } else if (category == 'friendsFamily') {
            if (friendsFamily[0] > 1) {
                friendsFamily[0] -= 1;
                nextButton.classList.remove("hidden");
            }
            if (friendsFamily[0] == 1) {
                prevButton.classList.add("hidden");
            } 

        } else if (category == 'future') {
            if (future[0] > 1) {
                future[0] -= 1;
                nextButton.classList.remove("hidden");
            }
            if (future[0] == 1) {
                prevButton.classList.add("hidden");
            } 

        } else if (category == 'closure') {
            if (closure[0] > 1) {
                closure[0] -= 1;
                nextButton.classList.remove("hidden");
            }
            if (closure[0] == 1) {
                prevButton.classList.add("hidden");
            } 
        }

        displayQuestion();
    }


    // Reset questions and allow them to be asked again
    function resetQuestions() {
        communication[0] = 1;
        feelingsneeds[0] = 1;
        relationship[0] = 1;
        friendsFamily[0] = 1;
        future[0] = 1;
        closure[0] = 1;
        questionField.innerHTML = "";
    }

    // Exit function to leave the game
    function exitGame() {
        resetQuestions();
        questionField.innerHTML = "";
    }

    // Event listeners for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener("click", () => {
            category = button.id;
            showQuestionPage();
        });
    });

    prevButton.addEventListener('click', prevQuestion);


    nextButton.addEventListener('click', nextQuestion);

    // Event listener for the Done button
    doneButton.addEventListener("click", () => {
        questionPage.classList.add("hidden");
        questionField.classList.add("hidden");
        doneButton.classList.add("hidden");
        prevButton.classList.add("hidden");
        nextButton.classList.add("hidden");
        homeContainer.classList.remove("hidden");
        resetQuestions();
    });

});