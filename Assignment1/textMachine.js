//BELOW IS THE ARRAY OF THE POEM OR PROSE
//IT SHOULD ALWAYS START "textArray = "
//use http://floatingmedia.com/DataClass/arrayMaker.html
//to convert the poem/prose to an array
//then just copy and paste it into here.

//Poem 'Let's take a walk' from https://allpoetry.com/Poem-_Let's-take-a-walk,_ Frank O Hara 
var poem1;
// Poem2 'A Quiet Poem' from https://allpoetry.com/A-Quiet-Poem BY Frank O Hara  
var poem2; 
// Poem3 'My Heart' from https://allpoetry.com/poem/8509929-My-Heart-by-Frank-O-Hara BY Frank O Hara  
var poem3;
// Poem 4 ' You Want a Social Life, with Friends by Kenneth Koch'https://polyarchive.com/you-want-a-social-life-with-friends-kenneth-koch/
var poem4; 
// Poem 5 “Hope” is the thing with feathers by Emiliy Dickenson https://www.poetryfoundation.org/poems/42889/hope-is-the-thing-with-feathers-314
var poem5; 

poem1 = ["Let's take a walk, you","and I in spite of the","weather if it rains hard"," on our toes","","we'll stroll like poodles","and be washed down a","gigantic scenic gutter"," that will be","","exciting! voyages are not","all like this you just put","your toes together then"," maybe blood","","will get meaning and a trick","become slight in our keeping","before we sail the open sea it's"," possible--","","And the landscape will do","us some strange favour when","we look back at each other"," anxiously",""];
poem2 = ["When music is far enough away","the eyelid does not often move","","and objects are still as lavender","without breath or distant rejoinder.","","The cloud is then so subtly dragged","away by the silver flying machine","","that the thought of it alone echoes","unbelievably; the sound of the motor falls","","like a coin toward the ocean's floor","and the eye does not flicker","","as it does when in the loud sun a coin","rises and nicks the near air. Now,","","slowly, the heart breathes to music","while the coins lie in wet yellow sand."];
poem3 = ["I'm not going to cry all the time","nor shall I laugh all the time,","I don't prefer one \"strain\" to another.","I'd have the immediacy of a bad movie,","not just a sleeper, but also the big,","overproduced first-run kind. I want to be","at least as alive as the vulgar. And if","some aficionado of my mess says \"That's","not like Frank!\", all to the good! I","don't wear brown and grey suits all the time,","do I? No. I wear workshirts to the opera,","often. I want my feet to be bare,","I want my face to be shaven, and my heart—","you can't plan on the heart, but","the better part of it, my poetry, is open."];
poem4 = ["You want a social life, with friends.","A passionate love life and as well","To work hard every day. What’s true","Is of these three you may have two","And two can pay you dividends","But never may have three.","","There isn’t time enough, my friends–","Though dawn begins, yet midnight ends–","To find the time to have love, work, and friends.","Michelangelo had feeling","For Vittoria and the Ceiling","But did he go to parties at day’s end?","","Homer nightly went to banquets","Wrote all day but had no lockets","Bright with pictures of his Girl.","I know one who loves and parties","And has done so since his thirties","But writes hardly anything at all."];
poem5 = ["“Hope” is the thing with feathers -","That perches in the soul -","And sings the tune without the words -","And never stops - at all -","","And sweetest - in the Gale - is heard -","And sore must be the storm -","That could abash the little Bird","That kept so many warm -","","I’ve heard it in the chillest land -","And on the strangest Sea -","Yet - never - in Extremity,","It asked a crumb - of me."];

// json formatting 

var poems = {
  "poem1": [
    "Let's take a walk, you",
    "and I in spite of the",
    "weather if it rains hard",
    " on our toes",
    "",
    "we'll stroll like poodles",
    "and be washed down a",
    "gigantic scenic gutter",
    " that will be",
    "",
    "exciting! voyages are not",
    "all like this you just put",
    "your toes together then",
    " maybe blood",
    "",
    "will get meaning and a trick",
    "become slight in our keeping",
    "before we sail the open sea it's",
    " possible--",
    "",
    "And the landscape will do",
    "us some strange favour when",
    "we look back at each other",
    " anxiously",
    ""
  ],
  "poem2": [
    "When music is far enough away",
    "the eyelid does not often move",
    "",
    "and objects are still as lavender",
    "without breath or distant rejoinder.",
    "",
    "The cloud is then so subtly dragged",
    "away by the silver flying machine",
    "",
    "that the thought of it alone echoes",
    "unbelievably; the sound of the motor falls",
    "",
    "like a coin toward the ocean's floor",
    "and the eye does not flicker",
    "",
    "as it does when in the loud sun a coin",
    "rises and nicks the near air. Now,",
    "",
    "slowly, the heart breathes to music",
    "while the coins lie in wet yellow sand."
  ],
  "poem3": [
    "I'm not going to cry all the time",
    "nor shall I laugh all the time,",
    "I don't prefer one \"strain\" to another.",
    "I'd have the immediacy of a bad movie,",
    "not just a sleeper, but also the big,",
    "overproduced first-run kind. I want to be",
    "at least as alive as the vulgar. And if",
    "some aficionado of my mess says \"That's",
    "not like Frank!\", all to the good! I",
    "don't wear brown and grey suits all the time,",
    "do I? No. I wear workshirts to the opera,",
    "often. I want my feet to be bare,",
    "I want my face to be shaven, and my heart—",
    "you can't plan on the heart, but",
    "the better part of it, my poetry, is open."
  ],
  "poem4": [
    "You want a social life, with friends.",
    "A passionate love life and as well",
    "To work hard every day. What’s true",
    "Is of these three you may have two",
    "And two can pay you dividends",
    "But never may have three.",
    "",
    "There isn’t time enough, my friends–",
    "Though dawn begins, yet midnight ends–",
    "To find the time to have love, work, and friends.",
    "Michelangelo had feeling",
    "For Vittoria and the Ceiling",
    "But did he go to parties at day’s end?",
    "",
    "Homer nightly went to banquets",
    "Wrote all day but had no lockets",
    "Bright with pictures of his Girl.",
    "I know one who loves and parties",
    "And has done so since his thirties",
    "But writes hardly anything at all."
  ],
  "poem5": [
    "“Hope” is the thing with feathers -",
    "That perches in the soul -",
    "And sings the tune without the words -",
    "And never stops - at all -",
    "",
    "And sweetest - in the Gale - is heard -",
    "And sore must be the storm -",
    "That could abash the little Bird",
    "That kept so many warm -",
    "",
    "I’ve heard it in the chillest land -",
    "And on the strangest Sea -",
    "Yet - never - in Extremity,",
    "It asked a crumb - of me."
  ]
}

// ******  Poem  *******
    
    // // textArray = ["April is the cruellest month, breeding","Lilacs out of the dead land, mixing ","Memory and desire, stirring ","Dull roots with spring rain. ","Winter kept us warm, covering ","Earth in forgetful snow, feeding ","A little life with dried tubers. ","Summer surprised us, coming over the Starnbergersee ","With a shower of rain; we stopped in the colonnade, ","And went on in sunlight, into the Hofgarten, ","And drank coffee, and talked for an hour. ","Bin gar keine Russin, stamm aus Litauen, echt deutsch. ","And when we were children, staying at the archdukes, ","My cousins, he took me out on a sled, ","And I was frightened. He said, Marie, ","Marie, hold on tight. And down we went. ","In the mountains, there you feel free. ","I read, much of the night, and go south in the winter. ",""," What are the roots that clutch, what branches grow ","Out of this stony rubbish? Son of man, ","You cannot say, or guess, for you know only ","A heap of broken images, where the sun beats, ","And the dead tree gives no shelter, the cricket no relief, ","And the dry stone no sound of water. Only ","There is shadow under this red rock, ","Come in under the shadow of this red rock, ","And I will show you something different from either ","Your shadow at morning striding behind you ","Or your shadow at evening rising to meet you; ","I will show you fear in a handful of dust. "," Frisch weht der Wind "," Der Heimat zu "," Mein Irisch Kind, "," Wo weilest du? ","You gave me hyacinths first a year ago; ","They called me the hyacinth girl.","Yet when we came back, late, from the Hyacinth garden, ","Your arms full, and your hair wet, I could not ","Speak, and my eyes failed, I was neither ","Living nor dead, and I knew nothing, ","Looking into the heart of light, the silence. ","Oed und leer das Meer. ",""," Madame Sosostris, famous clairvoyante, ","Had a bad cold, nevertheless ","Is known to be the wisest woman in Europe, ","With a wicked pack of cards. Here, said she, ","Is your card, the drowned Phoenician Sailor, ","Those are pearls that were his eyes. Look ","Here is Belladonna, the Lady of the Rocks, ","The lady of situations. ","Here is the man with three staves, and here the Wheel, ","And here is the oneeyed merchant, and this card, ","Which is blank, is something he carries on his back, ","Which I am forbidden to see. I do not find ","The Hanged Man. Fear death by water. ","I see crowds of people, walking round in a ring. ","Thank you. If you see dear Mrs. Equitone, ","Tell her I bring the horoscope myself ","One must be so careful these days. ",""," Unreal City, ","Under the brown fog of a winter dawn, ","A crowd flowed over London Bridge, so many, ","I had not thought death had undone so many. ","Sighs, short and infrequent, were exhaled, ","And each man fixed his eyes before his feet. ","Flowed up the hill and down King William Street, ","To where Saint Mary Woolnoth kept the hours ","With a dead sound on the final stroke of nine. ","There I saw one I knew, and stopped him, crying Stetson ","You who were with me in the ships at Mylae ","That corpse you planted last year in your garden, ","Has it begun to sprout? Will it bloom this year? ","Or has the sudden frost disturbed its bed? ","Oh keep the Dog far hence, thats friend to men, ","Or with his nails hell dig it up again ","You hypocrite lecteurmon semblable,mon frre","",""," II. A Game of Chess","","The Chair she sat in, like a burnished throne, ","Glowed on the marble, where the glass ","Held up by standards wrought with fruited vines ","From which a golden Cupidon peeped out ","Another hid his eyes behind his wing ","Doubled the flames of sevenbranched candelabra ","Reflecting light upon the table as ","The glitter of her jewels rose to meet it, ","From satin cases poured in rich profusion; ","In vials of ivory and coloured glass ","Unstoppered, lurked her strange synthetic perfumes, ","Unguent, powdered, or liquidtroubled, confused ","And drowned the sense in odours; stirred by the air ","That freshened from the window, these ascended ","In fattening the prolonged candleflames, ","Flung their smoke into the laquearia, ","Stirring the pattern on the coffered ceiling. ","Huge seawood fed with copper ","Burned green and orange, framed by the coloured stone, ","In which sad light a carvd dolphin swam. ","Above the antique mantel was displayed ","As though a window gave upon the sylvan scene ","The change of Philomel, by the barbarous king ","So rudely forced; yet there the nightingale ","Filled all the desert with inviolable voice ","And still she cried, and still the world pursues, ","Jug Jug to dirty ears. ","And other withered stumps of time ","Were told upon the walls; staring forms ","Leaned out, leaning, hushing the room enclosed. ","Footsteps shuffled on the stair. ","Under the firelight, under the brush, her hair ","Spread out in fiery points ","Glowed into words, then would be savagely still. ",""," My nerves are bad tonight. Yes, bad. Stay with me. ","Speak to me. Why do you never speak. Speak. "," What are you thinking of? What thinking? What? ","I never know what you are thinking. Think.",""," I think we are in rats alley ","Where the dead men lost their bones. ",""," What is that noise?"," The wind under the door. ","What is that noise now? What is the wind doing? "," Nothing again nothing. "," Do ","You know nothing? Do you see nothing? Do you remember ","Nothing?",""," I remember ","Those are pearls that were his eyes. ","Are you alive, or not? Is there nothing in your head? "," "," But ","O O O O that Shakespeherian Rag ","Its so elegant ","So intelligent ","What shall I do now? What shall I do? ","I shall rush out as I am, and walk the street ","With my hair down, so. What shall we do tomorrow? ","What shall we ever do? "," The hot water at ten. ","And if it rains, a closed car at four. ","And we shall play a game of chess, ","Pressing lidless eyes and waiting for a knock upon the door. ",""," When Lils husband got demobbed, I said ","I didnt mince my words, I said to her myself, ","HURRY UP PLEASE ITS TIME ","Now Alberts coming back, make yourself a bit smart. ","Hell want to know what you done with that money he gave you ","To get yourself some teeth. He did, I was there. ","You have them all out, Lil, and get a nice set, ","He said, I swear, I cant bear to look at you. ","And no more cant I, I said, and think of poor Albert, ","Hes been in the army four years, he wants a good time, ","And if you dont give it him, theres others will, I said. ","Oh is there, she said. Something o that, I said. ","Then Ill know who to thank, she said, and give me a straight look. ","HURRY UP PLEASE ITS TIME ","If you dont like it you can get on with it, I said.","Others can pick and choose if you cant. ","But if Albert makes off, it wont be for lack of telling. ","You ought to be ashamed, I said, to look so antique. ","And her only thirtyone. ","I cant help it, she said, pulling a long face, ","Its them pills I took, to bring it off, she said. ","Shes had five already, and nearly died of young George. ","The chemist said it would be all right, but Ive never been the same. ","You are a proper fool, I said. ","Well, if Albert wont leave you alone, there it is, I said, ","What you get married for if you dont want children? ","HURRY UP PLEASE ITS TIME ","Well, that Sunday Albert was home, they had a hot gammon, ","And they asked me in to dinner, to get the beauty of it hot ","HURRY UP PLEASE ITS TIME ","HURRY UP PLEASE ITS TIME ","Goonight Bill. Goonight Lou. Goonight May. Goonight. ","Ta ta. Goonight. Goonight. ","Good night, ladies, good night, sweet ladies, good night, good night. ","",""," III. The Fire Sermon",""," The rivers tent is broken the last fingers of leaf ","Clutch and sink into the wet bank. The wind ","Crosses the brown land, unheard. The nymphs are departed. ","Sweet Thames, run softly, till I end my song. ","The river bears no empty bottles, sandwich papers, ","Silk handkerchiefs, cardboard boxes, cigarette ends ","Or other testimony of summer nights. The nymphs are departed. ","And their friends, the loitering heirs of city directors; ","Departed, have left no addresses. ","By the waters of Leman I sat down and wept . . . ","Sweet Thames, run softly till I end my song, ","Sweet Thames, run softly, for I speak not loud or long. ","But at my back in a cold blast I hear ","The rattle of the bones, and chuckle spread from ear to ear. ","","A rat crept softly through the vegetation ","Dragging its slimy belly on the bank ","While I was fishing in the dull canal ","On a winter evening round behind the gashouse ","Musing upon the king my brothers wreck ","And on the king my fathers death before him. ","White bodies naked on the low damp ground ","And bones cast in a little low dry garret, ","Rattled by the rats foot only, year to year. ","But at my back from time to time I hear ","The sound of horns and motors, which shall bring ","Sweeney to Mrs. Porter in the spring. ","O the moon shone bright on Mrs. Porter ","And on her daughter ","They wash their feet in soda water ","Et O ces voix denfants, chantant dans la coupole ","","Twit twit twit ","Jug jug jug jug jug jug ","So rudely forcd. ","Tereu ","","Unreal City ","Under the brown fog of a winter noon ","Mr. Eugenides, the Smyrna merchant ","Unshaven, with a pocket full of currants ","C.i.f. London documents at sight, ","Asked me in demotic French ","To luncheon at the Cannon Street Hotel ","Followed by a weekend at the Metropole. ","","At the violet hour, when the eyes and back ","Turn upward from the desk, when the human engine waits ","Like a taxi throbbing waiting, ","I Tiresias, though blind, throbbing between two lives, ","Old man with wrinkled female breasts, can see ","At the violet hour, the evening hour that strives ","Homeward, and brings the sailor home from sea, ","The typist home at teatime, clears her breakfast, lights ","Her stove, and lays out food in tins. ","Out of the window perilously spread ","Her drying combinations touched by the suns last rays, ","On the divan are piled at night her bed ","Stockings, slippers, camisoles, and stays. ","I Tiresias, old man with wrinkled dugs ","Perceived the scene, and foretold the rest ","I too awaited the expected guest. ","He, the young man carbuncular, arrives, ","A small house agents clerk, with one bold stare, ","One of the low on whom assurance sits ","As a silk hat on a Bradford millionaire. ","The time is now propitious, as he guesses, ","The meal is ended, she is bored and tired, ","Endeavours to engage her in caresses ","Which still are unreproved, if undesired. ","Flushed and decided, he assaults at once; ","Exploring hands encounter no defence; ","His vanity requires no response, ","And makes a welcome of indifference. ","And I Tiresias have foresuffered all ","Enacted on this same divan or bed; ","I who have sat by Thebes below the wall ","And walked among the lowest of the dead. ","Bestows one final patronising kiss, ","And gropes his way, finding the stairs unlit . . . ","","She turns and looks a moment in the glass, ","Hardly aware of her departed lover; ","Her brain allows one halfformed thought to pass ","Well now thats done and Im glad its over.","When lovely woman stoops to folly and ","Paces about her room again, alone, ","She smoothes her hair with automatic hand, ","And puts a record on the gramophone. ","","This music crept by me upon the waters ","And along the Strand, up Queen Victoria Street. ","O City city, I can sometimes hear ","Beside a public bar in Lower Thames Street, ","The pleasant whining of a mandoline ","And a clatter and a chatter from within ","Where fishmen lounge at noon where the walls ","Of Magnus Martyr hold ","Inexplicable splendour of Ionian white and gold. ",""," The river sweats "," Oil and tar "," The barges drift "," With the turning tide "," Red sails "," Wide "," To leeward, swing on the heavy spar. "," The barges wash "," Drifting logs "," Down Greenwich reach "," Past the Isle of Dogs. "," Weialala leia "," Wallala leialala",""," Elizabeth and Leicester "," Beating oars "," The stern was formed "," A gilded shell "," Red and gold "," The brisk swell "," Rippled both shores "," Southwest wind "," Carried down stream "," The peal of bells "," White towers "," Weialala leia "," Wallala leialala ","","Trams and dusty trees. ","Highbury bore me. Richmond and Kew ","Undid me. By Richmond I raised my knees ","Supine on the floor of a narrow canoe.","","My feet are at Moorgate, and my heart ","Under my feet. After the event ","He wept. He promised a new start. ","I made no comment. What should I resent? ","","On Margate Sands. ","I can connect ","Nothing with nothing. ","The broken fingernails of dirty hands. ","My people humble people who expect ","Nothing. "," la la ","","To Carthage then I came ","","Burning burning burning burning ","O Lord Thou pluckest me out ","O Lord Thou pluckest ","","burning ","",""," IV. Death by Water","","Phlebas the Phoenician, a fortnight dead, ","Forgot the cry of gulls, and the deep sea swell ","And the profit and loss. "," A current under sea ","Picked his bones in whispers. As he rose and fell ","He passed the stages of his age and youth ","Entering the whirlpool. "," Gentile or Jew ","O you who turn the wheel and look to windward, ","Consider Phlebas, who was once handsome and tall as you. ","",""," V. What the Thunder Said",""," After the torchlight red on sweaty faces ","After the frosty silence in the gardens ","After the agony in stony places ","The shouting and the crying ","Prison and palace and reverberation ","Of thunder of spring over distant mountains ","He who was living is now dead ","We who were living are now dying ","With a little patience ","","Here is no water but only rock ","Rock and no water and the sandy road ","The road winding above among the mountains ","Which are mountains of rock without water ","If there were water we should stop and drink ","Amongst the rock one cannot stop or think ","Sweat is dry and feet are in the sand ","If there were only water amongst the rock ","Dead mountain mouth of carious teeth that cannot spit ","Here one can neither stand nor lie nor sit ","There is not even silence in the mountains ","But dry sterile thunder without rain ","There is not even solitude in the mountains ","But red sullen faces sneer and snarl ","From doors of mudcracked houses "," If there were water "," And no rock "," If there were rock "," And also water "," And water "," A spring "," A pool among the rock "," If there were the sound of water only "," Not the cicada "," And dry grass singing "," But sound of water over a rock "," Where the hermitthrush sings in the pine trees "," Drip drop drip drop drop drop drop "," But there is no water ","","Who is the third who walks always beside you? ","When I count, there are only you and I together ","But when I look ahead up the white road ","There is always another one walking beside you ","Gliding wrapt in a brown mantle, hooded ","I do not know whether a man or a woman ","But who is that on the other side of you? ","","What is that sound high in the air ","Murmur of maternal lamentation ","Who are those hooded hordes swarming ","Over endless plains, stumbling in cracked earth ","Ringed by the flat horizon only ","What is the city over the mountains ","Cracks and reforms and bursts in the violet air ","Falling towers ","Jerusalem Athens Alexandria ","Vienna London ","Unreal ","","A woman drew her long black hair out tight ","And fiddled whisper music on those strings ","And bats with baby faces in the violet light ","Whistled, and beat their wings ","And crawled head downward down a blackened wall ","And upside down in air were towers ","Tolling reminiscent bells, that kept the hours ","And voices singing out of empty cisterns and exhausted wells. ","","In this decayed hole among the mountains ","In the faint moonlight, the grass is singing ","Over the tumbled graves, about the chapel ","There is the empty chapel, only the winds home. ","It has no windows, and the door swings, ","Dry bones can harm no one. ","Only a cock stood on the rooftree ","Co co rico co co rico ","In a flash of lightning. Then a damp gust ","Bringing rain ","","Ganga was sunken, and the limp leaves ","Waited for rain, while the black clouds ","Gathered far distant, over Himavant. ","The jungle crouched, humped in silence. ","Then spoke the thunder ","DA ","Datta what have we given? ","My friend, blood shaking my heart ","The awful daring of a moments surrender ","Which an age of prudence can never retract ","By this, and this only, we have existed ","Which is not to be found in our obituaries ","Or in memories draped by the beneficent spider ","Or under seals broken by the lean solicitor ","In our empty rooms","DA ","Dayadhvam I have heard the key ","Turn in the door once and turn once only ","We think of the key, each in his prison ","Thinking of the key, each confirms a prison ","Only at nightfall, aethereal rumours ","Revive for a moment a broken Coriolanus ","DA ","Damyata The boat responded ","Gaily, to the hand expert with sail and oar ","The sea was calm, your heart would have responded ","Gaily, when invited, beating obedient ","To controlling hands "," "," I sat upon the shore ","Fishing, with the arid plain behind me ","Shall I at least set my lands in order? ","London Bridge is falling down falling down falling down ","Poi sascose nel foco che gli affina ","Quando fiam uti chelidonO swallow swallow ","Le Prince dAquitaine  la tour abolie ","These fragments I have shored against my ruins ","Why then Ile fit you. Hieronymos mad againe. ","Datta. Dayadhvam. Damyata."," Shantih shantih shantih"];
    // ///THIS IS THE RANDOM LINE FUNCTION
    // //IT GOES THROUGH THE TEXT ARRAY AS MANY TIMES AS YOU DECIDE
    // //AND PICKS OUT A RANDOM LINE
    // function randomLines(numberLines) {
    // 	changedText += "<font size='5'><B>" + numberLines + " RANDOM LINES</B></font><BR>\n" +"<BR>"
    // 	for (let i = 0; i < numberLines; i++) {
    // 		let rand = Math.floor(Math.random() * (poem1.length - 0)) + 0;
    // 		changedText += poem1[rand] + "<BR>\n";
    
    // 	}
    // }
    
    // //THIS FUNCTION FINDS THE WORD YOU ENTER IN THE CALL 
    // //IT RETURNS A PHRASE WITH THAT WORD AND THE FOLLOWING TWO WORDS
    // //UNLESS THERE ARENT'T ANYMORE WORDS IN THE LINE OR SENTENCE
    // function phasesThatBeginWith(myWord) {
    // changedText += "<BR>"+ "<font size='5'><B>SEVEN WORD PHRASE RESULTS</B></font><BR>\n\n"+"<BR>"
    //  for (i in poem4) {
    //  	if (poem4[i].length > 1) {
    //  		let myLine = poem4[i].split(" ");
    //  		 for (let j = 0; j < myLine.length; j++) {
    //  		 	var regex = new RegExp("\\b" + myWord+"\\b","i");
    //  		 	if (regex.test(myLine[j]) == true) {
    //  		 		if (j < myLine.length-2) {
    //  		 			changedText += myLine[j] + " " + myLine[j+1] + " " + myLine[j+2] + " " + myLine[j+3]+ " " + myLine[j+4] +"<BR>";
    //  		 		}
    
    //  		 	}
    
    //  		 }
    
    // }
    // }
    // }
    
    // let poem_sort = []
    
    // //THIS FUNCTION SORTS ALL OF THE BY LINE LENGTH
    // //SHORTEST OR LONGEST
    // function sortByLineLenght(theOrder) {
    // 	let items = [];
    //  for (i in poem1) {
    //  	if (poem1[i].length > 1) {
    // 	items.push({key: poem1[i], value: poem1[i].length})
    // }
    //  }
    //  if (theOrder == "longest") {
    // items.sort(function (a, b) {
    //   if (a.value < b.value) {
    //     return 1;
    //   }
    //   if (a.value > b.value) {
    //     return -1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // });
    // } else {
    // items.sort(function (a, b) {
    //   if (a.value > b.value) {
    //     return 1;
    //   }
    //   if (a.value < b.value) {
    //     return -1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // });
    
    // }
    // //item.sort();
    // poem_sort = [];
    // for (i in items) {
    // poem_sort.push(items[i].key);
    // }
    
    // }
    
    // ****Edit to sort by first words 
    
    function lastwordAlpha(rhymeWord) {
    	let items = [];
    	
  
     for (i in poem1) {
     	if (poem1[i].length > 1) {
     	let firstWord;
     		   let n = poem1[i].trim().split(" ");
     		   if (rhymeWord) {
     		   firstWord = n[0]; 	
     		   } else {
     		   firstWord = n[n.length - 1]; 	
     		   }
     	items.push({key: poem1[i], value: firstWord.toUpperCase()});
    }
     }
    items.sort(function(a, b){
        if(a.value < b.value) return -1;
        if(a.value > b.value) return 1;
        return 0;
    });
    poem_sort = [];
    for (i in items) {
    poem_sort.push(items[i].key);
    }
    }
    
    function displayLines(numberLines) {
    	if (numberLines == "ALL") {
    		numberLines = poem_sort.length;
    	}
    	
    for (let i = 0; i < numberLines;i++) {
    changedText += poem_sort[i] + "<BR>\n";
    }
    
    }
    
// ****** Final Poem *******
function finalphasesThatBeginWith(myWord) {
    changedText += "<BR>"+ "<font size='5'><B>Final Paragraph</B></font><BR>\n\n"+"<BR>"
     for (i in poem4) {
     	if (poem4[i].length > 1) {
     		let myLine = poem4[i].split(" ");
     		 for (let j = 0; j < myLine.length; j++) {
     		 	var regex = new RegExp("\\b" + myWord+"\\b","i");
     		 	if (regex.test(myLine[j]) == true) {
     		 		if (j < myLine.length-2) {
     		 			changedText += myLine[j] + " " + myLine[j+1] + " " + myLine[j+2] + " " + myLine[j+3]+ " " + myLine[j+4] +"<BR>";
     		 		}
    
     		 	}
    
     		 }
    
    }
    }
    }
    
    