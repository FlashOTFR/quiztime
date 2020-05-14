(this.webpackJsonpquiztime=this.webpackJsonpquiztime||[]).push([[0],{28:function(e){e.exports=JSON.parse('[{"question":"What temperature does water boil at?","optionA":"50 degrees Celcius","optionB":"25 degrees Celcius","optionC":"100 degrees Celcius","optionD":"150 degrees Celcius","answer":"100 degrees Celcius"},{"question":"Who wrote Julius Caesar, Macbeth and Hamlet?","optionA":"Wole Soyinka","optionB":"William Shakespeare","optionC":"Ngozi Chimamanda Adichie","optionD":"Dan Brown","answer":"William Shakespeare"},{"question":"What did the crocodile swallow in Peter Pan?","optionA":"A Book","optionB":"A Computer","optionC":"A pair of shoes","optionD":"Alarm Clock","answer":"Alarm Clock"},{"question":"Which is the only mammal that can\u2019t jump?","optionA":"Dog","optionB":"Elephant","optionC":"Goat","optionD":"Lion","answer":"Elephant"},{"question":"Who lived at 221B, Baker Street, London?","optionA":"Tony Stark","optionB":"Morgan Freeman","optionC":"Sherlock Holmes","optionD":"Samuel L. Jackson","answer":"Sherlock Holmes"},{"question":"What colour is a panda?","optionA":"Green and Yellow","optionB":"Blue and Red","optionC":"Green and White","optionD":"Black and White","answer":"Black and White"},{"question":"Where is the smallest bone in the human body?","optionA":"The Chest","optionB":"The Ear","optionC":"The Legs","optionD":"The Hands","answer":"The Ear"},{"question":"What does the roman numeral C represent?","optionA":"100","optionB":"10","optionC":"10,000","optionD":"1,000,000","answer":"100"},{"question":"What takes place in Hong Kong\'s Happy Valley?","optionA":"Chicken Wrestling","optionB":"Horse racing","optionC":"Street Racing","optionD":"Arm Wrestling","answer":"Horse racing"},{"question":"Who painted the Mona Lisa?","optionA":"Alexander Graham Bell","optionB":"Sir Isaac Newton","optionC":"Leonardo Da Vinci","optionD":"Albert Einstein","answer":"Leonardo Da Vinci"},{"question":"What\u2019s the most important book in the Moslem religion?","optionA":"The Koran","optionB":"The Dictionary","optionC":"The Bible","optionD":"The Chemistry text Book","answer":"The Koran"},{"question":"What\u2019s the capital of Ethiopia?","optionA":"Cape Town","optionB":"San Francisco","optionC":"Abuja","optionD":"Syndey","answer":"Addis Ababa"},{"question":"How many squares are there on a chess board?","optionA":"128","optionB":"64","optionC":"32","optionD":"256","answer":"64"},{"question":"Who invented the electric light bulb?","optionA":"Tom Cruise","optionB":"Barack Obama","optionC":"Wole Soyinka","optionD":"Thomas Edison","answer":"Thomas Edison"},{"question":"What are the first three words of the bible?","optionA":"be with everyone","optionB":"Again Jesus asked","optionC":"In the beginning","optionD":"At that time","answer":"In the beginning"}]')},29:function(e,t,n){e.exports=n(44)},33:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(18),s=n.n(r),i=(n(33),n(3)),l=n(12),c=n(6),u=n(7),m=n(9),p=n(8),h=n(11),d=(n(36),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("title",null,"Quiz - Instructions")),o.a.createElement("div",{id:"instructions"},o.a.createElement("section",null,o.a.createElement("h1",null,"How To Play!"),o.a.createElement("p",{className:"explain"},"The game is simple!  You will be asked a series of questions, and offered 4 possible answers.  Click the button of the answer that makes the most sense to you.  Try to answer all the questions before the time limit is up!"),o.a.createElement("div",{className:"ready-or-not"},o.a.createElement("button",{className:"btn btn-outline-primary",id:"bigboy"},o.a.createElement(i.b,{to:"/"},"Back To Home")),o.a.createElement("button",{className:"btn btn-outline-primary",id:"bigboy"},o.a.createElement(i.b,{to:"/play/quiz"},"Let's Play!"))))))}}]),n}(a.Component)),b=(n(39),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("title",null,"Quiz - Home")),o.a.createElement("div",{id:"home"},o.a.createElement("section",null,o.a.createElement("div",null,o.a.createElement("span",{className:"mid mid-cube-outline"})),o.a.createElement("h1",null,"Quiz App"),o.a.createElement("div",{className:"play-button-container"},o.a.createElement("ul",null,o.a.createElement("button",{className:"btn btn-outline-primary",id:"bigboy"},o.a.createElement(i.b,{to:"/play/instructions"},"Play")))),o.a.createElement("div",{className:"auth-container"},o.a.createElement(i.b,{to:"/highscores"},"High Scores!")))))}}]),n}(a.Component)),E=n(15),w=n(28),f=function(e){return void 0===e||null==e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},g=n(21),v=n.n(g),A=(n(40),n(41),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).displayQuestions=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.state.questions,t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0,r=a.state.currentQuestionIndex;if(!f(a.state.questions)){t=(e=a.state.questions)[r],n=e[r+1],o=e[r-1];var s=t.answer;a.setState({currentQuestion:t,nextQuestion:n,previousQuestion:o,answer:s})}},a.handleOptionClick=function(e){e.target.innerHTML.toLowerCase()===a.state.answer.toLowerCase()?a.correctAnswer():a.wrongAnswer()},a.correctAnswer=function(){v.a.toast({html:"Correct Answer!",classes:"toast-valid",displayLength:1500}),a.setState((function(e){return{score:e.score+1,correctAnswers:e.correctAnswers+1,currentQuestionIndex:e.currentQuestionIndex+1,numberOfAnsweredQuestions:e.numberOfAnsweredQuestions+1}}),(function(){void 0===a.state.nextQuestion?a.endGame():a.displayQuestions(a.state.questions,a.state.currentQuestion,a.state.nextQuestion,a.state.previousQuestion)}))},a.wrongAnswer=function(){v.a.toast({html:"Wrong Answer!",classes:"toast-invalid",displayLength:1500}),a.setState((function(e){return{wrongAnswers:e.wrongAnswers+1,currentQuestionIndex:e.currentQuestionIndex+1,numberOfAnsweredQuestions:e.numberOfAnsweredQuestions+1}}),(function(){void 0===a.state.nextQuestion?a.endGame():a.displayQuestions(a.state.questions,a.state.currentQuestion,a.state.nextQuestion,a.state.previousQuestion)}))},a.startTimer=function(){var e=Date.now()+18e4;a.interval=setInterval((function(){var t=new Date,n=e-t,o=Math.floor(n%36e5/6e4),r=Math.floor(n%6e4/1e3);n<0?(clearInterval(a.interval),a.setState({time:{minutes:0,seconds:0}},(function(){a.endGame()}))):a.setState({time:{minutes:o,seconds:r,distance:n}})}),1e3)},a.endGame=function(){alert("Quiz has ended!");var e=Object(E.a)(a).state,t={score:e.score,numberOfQuestions:e.numberOfQuestions,numberOfAnsweredQuestions:e.correctAnswers+e.wrongAnswers,correctAnswers:e.correctAnswers,wrongAnswers:e.wrongAnswers};console.log(t),setTimeout((function(){a.props.history.push("/play/quizSummary",t)}),1e3)},a.state={questions:w,currentQuestion:{},nextQuestion:{},previousQuestion:{},answer:"",numberOfQuestions:0,numberOfAnsweredQuestions:0,currentQuestionIndex:0,score:0,correctAnswers:0,wrongAnswers:0,time:{}},a.interval=null,a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.state,t=e.questions,n=e.currentQuestion,a=e.nextQuestion,o=e.previousQuestion;this.displayQuestions(t,n,a,o),this.startTimer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.currentQuestion,n=e.currentQuestionIndex,r=(e.numberOfQuestions,e.time),s=e.score;return o.a.createElement(a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("title",null,"Quiz Time!")),o.a.createElement("div",{className:"questions"},o.a.createElement("div",{className:"question-number"},"Question Number: ",n+1," of 15"),o.a.createElement("div",{className:"timer"},"Time Remaining: ",r.minutes," : ",r.seconds),o.a.createElement("div",{className:"score"},"Score: ",s),o.a.createElement("h5",null,t.question),o.a.createElement("div",{className:"options-container"},o.a.createElement("p",{onClick:this.handleOptionClick,className:"option"},t.optionA),o.a.createElement("p",{onClick:this.handleOptionClick,className:"option"},t.optionB)),o.a.createElement("div",{className:"options-container"},o.a.createElement("p",{onClick:this.handleOptionClick,className:"option"},t.optionC),o.a.createElement("p",{onClick:this.handleOptionClick,className:"option"},t.optionD)),o.a.createElement("div",{className:"button-container"},o.a.createElement("button",null,o.a.createElement(i.b,{to:"/"},"Quit")))))}}]),n}(a.Component)),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={score:0,numberOfQuestions:0,numberOfAnsweredQuestions:0,correctAnswers:0,wrongAnswers:0},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.state;e&&this.setState({score:e.score,numberOfQuestions:e.numberOfQuestions,numberOfAnsweredQuestions:e.numberOfAnsweredQuestions,correctAnswers:e.correctAnswers,wrongAnswers:e.wrongAnswers})}},{key:"render",value:function(){var e,t,n=this.props.location.state,r=this.state.score;return t=r<=4?"You need more practice!":r>5&&r<=8?"Better luck next time!":r<=8&&r>10?"You can do better!":r>=11&&r<=14?"You did great!":"You're an absolute genius!",e=void 0!==n?o.a.createElement(a.Fragment,null,o.a.createElement("div",{style:{textAlign:"center"}},o.a.createElement("span",{className:"mdi mdi-check-circle-outline success-icon"})),o.a.createElement("h1",null,"Quiz has ended"),o.a.createElement("div",{className:"container stats"},o.a.createElement("h4",null,t),o.a.createElement("h2",null,"Your Score: ",this.state.score," / 15"),o.a.createElement("span",{className:"stat left"},"Number of attempted questions: "),o.a.createElement("span",{className:"right"},this.state.numberOfAnsweredQuestions),o.a.createElement("br",null),o.a.createElement("span",{className:"stat left"},"Number of Correct Answers: "),o.a.createElement("span",{className:"right"},this.state.correctAnswers)," ",o.a.createElement("br",null),o.a.createElement("span",{className:"stat left"},"Number of Wrong Answers: "),o.a.createElement("span",{className:"right"},this.state.wrongAnswers),o.a.createElement("br",null)),o.a.createElement("section",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.b,{to:"/play/quiz"},"Play Again")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/"},"Back to Home")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/highscores"},"High Scores"))))):o.a.createElement("section",null,o.a.createElement("h1",{className:"no-stats"},"No Statistics Available"),o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(i.b,{to:"/play/quiz"},"Take a Quiz")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/"},"Back to Home")),o.a.createElement("li",null,o.a.createElement(i.b,{to:"/highscores"},"High Scores")))),o.a.createElement(a.Fragment,null,o.a.createElement(h.a,null,o.a.createElement("title",null,"Quiz App - Summary")),o.a.createElement("div",{className:"quiz-summary"},e))}}]),n}(a.Component),Q=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement(a.Fragment,null,o.a.createElement("h1",null,"SCORES GO HERE"),o.a.createElement("ul",null,o.a.createElement("li",null,"Player Name: Score")))}}]),n}(a.Component);var C=function(){return o.a.createElement(i.a,null,o.a.createElement(l.a,{exact:!0,path:"/",component:b}),o.a.createElement(l.a,{exact:!0,path:"/play/instructions",component:d}),o.a.createElement(l.a,{exact:!0,path:"/play/quiz",component:A}),o.a.createElement(l.a,{exact:!0,path:"/play/quizSummary",component:y}),o.a.createElement(l.a,{exact:!0,path:"/highscores",component:Q}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.5c944e37.chunk.js.map