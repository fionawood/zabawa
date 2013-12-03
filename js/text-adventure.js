// text-adventure game script
var stages = {
    box: {
        action: "You are in a cramped box. You barely fit inside.",
        commands: ["crawl", "escape", "pinhole"],
        defaults: "You struggle, but it seems that you can only crawl." },
    start: {
        action: "You are in a cramped box. You barely fit inside.",
        commands: ["crawl", "escape", "pinhole"],
        defaults: "You struggle, but it seems that you can only crawl." },
    restart: {
        action: "You are in a cramped box. You barely fit inside.",
        commands: ["crawl", "escape", "pinhole"],
        defaults: "You struggle, but it seems that you can only crawl." },
    yes: {
        action: "You are in a cramped box. You barely fit inside.",
        commands: ["crawl", "escape", "pinhole"],
        defaults: "You struggle, but it seems that you can only crawl." },
    crawl: {
        action: "You crawl around, sides brushing against the box. It seems that there's a tiny pinhole that you can escape through.",
        commands: ["escape", "pinhole"],
        defaults: "The pinhole seems like the only hope of escaping this box." },
    escape: {
        action: "You crawl to the pinhole and just barely fit your body through. Now you can finally see the world if you lift your eyes.",
        commands: ["world", "eyes", "lift", "outside"],
        defaults: "You've wanted to see the outside for so long..." ,
        incentive: 1},
    pinhole: {
        action: "You crawl to the pinhole and just barely fit your body through. Now you can finally see the world if you lift your eyes.",
        commands: ["world", "eyes", "lift", "outside"],
        defaults: "You've wanted to see the outside for so long..." ,
        incentive: 1},
    lift: {
        action: "You see the sky for the first time. The world outside is so beautiful and big, but you are so small...and so hungry.",
        commands: ["food", "search", "hungry"],
        defaults: "You try, but you're so ravenous...all you have strength for is searching for food." },
    world: {
        action: "You see the sky for the first time. The world outside is so beautiful and big, but you are so small...and so hungry.",
        commands: ["food", "search", "hungry"],
        defaults: "You try, but you're so ravenous...all you have strength for is searching for food." },
    eyes: {
        action: "You see the sky for the first time. The world outside is so beautiful and big, but you are so small...and so hungry.",
        commands: ["food", "search", "hungry"],
        defaults: "You try, but you're so ravenous...all you have strength for is searching for food." },
    outside: {
        action: "You see the sky for the first time. The world outside is so beautiful and big, but you are so small...and so hungry.",
        commands: ["food", "search", "hungry"],
        defaults: "You try, but you're so ravenous...all you have strength for is searching for food." },
    food: {
        action: "You glance around the box, searching for food. An ant crawls across its shiny surface.",
        commands: ["eat", "ant", "consume"],
        defaults: "Maybe the ant will provide sustenance?" },
    search: {
        action: "You glance around the box, searching for food. An ant crawls across its shiny surface.",
        commands: ["eat", "ant", "consume"],
        defaults: "Maybe the ant will provide sustenance?" },
    hungry: {
        action: "You glance around the box, searching for food. An ant crawls across its shiny surface.",
        commands: ["eat", "ant", "consume"],
        defaults: "Maybe the ant will provide sustenance?" },
    eat: {
        action: "You eat the ant and immediately feel stronger. Your body almost seems to grow...it's doubtful that you'd be able to fit back into that box. Now you're just strong enough to explore your surroundings...",
        commands: ["explore", "look", "around", "surroundings"],
        defaults: "It's such an interesting, limitless world...",
        incentive: 2},
    ant: {
        action: "You eat the ant and immediately feel stronger. Your body almost seems to grow...it's doubtful that you'd be able to fit back into that box. Now you're just strong enough to explore your surroundings...",
        commands: ["explore", "look", "around", "surroundings"],
        defaults: "It's such an interesting, limitless world...",
        incentive: 2},
    consume: {
        action: "You eat the ant and immediately feel stronger. Your body almost seems to grow...it's doubtful that you'd be able to fit back into that box. Now you're just strong enough to explore your surroundings...",
        commands: ["explore", "look", "around", "surroundings"],
        defaults: "It's such an interesting, limitless world...",
        incentive: 2},
    explore: {
        action: "You crawl away from your box, admiring the softness of the grass. A bush near you rustles.",
        commands: ["investigate", "bush", "rustle", "ignore"],
        defaults: "...but the bush continues rustling...maybe you should just ignore it...." },
    look: {
        action: "You crawl away from your box, admiring the softness of the grass. A bush near you rustles.",
        commands: ["investigate", "bush", "rustle", "ignore"],
        defaults: "...but the bush continues rustling...maybe you should just ignore it...." },
    around: {
        action: "You crawl away from your box, admiring the softness of the grass. A bush near you rustles.",
        commands: ["investigate", "bush", "rustle", "ignore"],
        defaults: "...but the bush continues rustling...maybe you should just ignore it...." },
    surroundings: {
        action: "You crawl away from your box, admiring the softness of the grass. A bush near you rustles.",
        commands: ["investigate", "bush", "rustle", "ignore"],
        defaults: "...but the bush continues rustling...maybe you should just ignore it...." },
    investigate: {
        action: "A human man was the one disturbing the bush. He is bending over to tie his shoe, and you can just barely crawl onto his leg.",
        commands: ["leg", "human", "man"],
        defaults: "Hurry, he'll get up and leave soon..." },
    rustle: {
        action: "A human man was the one disturbing the bush. He is bending over to tie his shoe, and you can just barely crawl onto his leg.",
        commands: ["leg", "human", "man"],
        defaults: "Hurry, he'll get up and leave soon..." },
    bush: {
        action: "A human man was the one disturbing the bush. He is bending over to tie his shoe, and you can just barely crawl onto his leg.",
        commands: ["leg", "human", "man"],
        defaults: "Hurry, he'll get up and leave soon..." },
    leg: {
        action: "There's a tiny hole in his pant leg that you can squeeze through.",
        commands: ["hole", "pant", "squeeze"],
        defaults: "He's starting to walk and it's hard to hold on...you'll be safer if you crawl through that hole in the fabric." },
    man: {
        action: "There's a tiny hole in his pant leg that you can squeeze through.",
        commands: ["hole", "pant", "squeeze"],
        defaults: "He's starting to walk and it's hard to hold on...you'll be safer if you crawl through that hole in the fabric." },
    human: {
        action: "There's a tiny hole in his pant leg that you can squeeze through.",
        commands: ["hole", "pant", "squeeze"],
        defaults: "He's starting to walk and it's hard to hold on...you'll be safer if you crawl through that hole in the fabric." },
    pant: {
        action: "Your body adheres well and you crawl forward. You detect a tiny cut on his shin, but can move past it with some effort.",
        commands: ["cut", "inspect", "shin", "move", "past"],
        defaults: "Such a tough decision..."},
    hole: {
        action: "Your body adheres well and you crawl forward. You detect a tiny cut on his shin, but can move past it with some effort.",
        commands: ["cut", "inspect", "shin", "move", "past"],
        defaults: "Such a tough decision..."},
    squeeze: {
        action: "Your body adheres well and you crawl forward. You detect a tiny cut on his shin, but can move past it with some effort.",
        commands: ["cut", "inspect", "shin", "move", "past"],
        defaults: "Such a tough decision..."},
    move: {
        action: "You slowly pull yourself past the cut and continue on your journey forward. You pass the man's ribs and neck and find yourself by his face. There's a lot of movement here and the wind outside is quite strong, you'll need to take refuge somewhere on his face quickly...",
        commands: ["ear", "nose", "eye", "hair"],
        defaults: "Entering the ear or the nose would probably defend you form the wind." },        
     past: {
        action: "You slowly pull yourself past the cut and continue on your journey forward. You pass the man's ribs and neck and find yourself by his face. There's a lot of movement here and the wind outside is quite strong, you'll need to take refuge somewhere on his face quickly...",
        commands: ["ear", "nose", "eye", "hair"],
        defaults: "Entering the ear or the nose would probably defend you form the wind." },        
    ear: {
        action: "You enter the man's ear. It is dark in here, but safe. If you keep moving forward, you will get to the brain...that's like the human control system?",
        commands: ["brain"],
        defaults: "There aren't many choices now, you can't go back into that wind."},  //GOES TO BRAIN
    nose: {
        action: "You attempt to take refuge in the man's nose, but in that moment he exhales. You are buffeted by the wind and land on a blade of grass, disoriented and scared, until a rat-like creature consumes you.",
        commands: ["throat", "down"],
        defaults: "You are in the mouth of a rat. It is chewing slowly and making slight squeeking sounds, but will not open its long teeth. It looks like the only direction you can go down is its throat." }, //GOES TO RAT
    hair: {
        action: "You crawl slowly into the man's hair, believing that it might offer you some respite from this wind. But you're not alone on this scalp: a louse has detected your presence and proceeds to devour you.",
        commands: ["restart", "start", "yes"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?",
        incentive: 4}, //GOES TO DEATH 
    cut: {
        action: "The cut is fresh, and as you move closer you fall in. The man doesn't notice, but now you are in his bloodstream: you can move anywhere through the capillary network.",
        commands: ["heart", "brain", "kidney", "lung", "stomach"],
        defaults: "Well, the brain is the human control center, right? But maybe the heart is more interesting...",
        incentive: 3},
    inspect: {
        action: "The cut is fresh, and as you move closer you fall in. The man doesn't notice, but now you are in his bloodstream: you can move anywhere through the capillary network.",
        commands: ["heart", "brain", "kidney", "lung", "stomach"],
        defaults: "Well, the brain is the human control center, right? But maybe the heart is more interesting...",
        incentive: 3},
    shin: {
        action: "The cut is fresh, and as you move closer you fall in. The man doesn't notice, but now you are in his bloodstream: you can move anywhere through the capillary network.",
        commands: ["heart", "brain", "kidney", "lung", "stomach"],
        defaults: "Well, the brain is the human control center, right? But maybe the heart is more interesting...",
        incentive: 3},
    heart: {
        action: "You swim with the current of platelets and eventually reach the man's heart. Nested in the aorta is another one of you kind. Do you approach it? But maybe you should just retreat...",
        commands: ["approach", "aorta", "retreat"],
        defaults: "It doesn't look violent, but maybe it still means you harm." },
    retreat: {
        action: "You follow the bloodstream back to the entrance of the cut, but the man's platelets are now blocking the entrance. You can move anywhere in his body through the capillary network.",
        commands: ["heart", "brain", "kidney", "lung", "stomach"],
        defaults: "Well, the brain is the human control center, right? But maybe the heart is more interesting..."}, //BACK TO ORGAN CHOICES
    aorta: {
        action: "As you move closer to the other being, the debris of the man's bloodstream forces you to collide. Your thin external membranes are compromised and your bodies merge together. If you obtain enough materials from the man's body, you will contain enough ingredients to make more of you.",
        commands: ["obtain", "materials", "ingredients", "lymph"],
        defaults: "Maybe the lymph nodes are a good place to start?",
        incentive: 5},      
    approach: {
        action: "As you move closer to the other being, the debris of the man's bloodstream forces you to collide. Your thin external membranes are compromised and your bodies merge together. If you obtain enough materials from the man's body, you will contain enough ingredients to make more of you.",
        commands: ["obtain", "materials", "ingredients", "lymph"],
        defaults: "Maybe the lymph nodes are a good place to start?",
        incentive: 5}, 
    lymph: {
        action: "Your merged body casts around for the right ingredients until it enters the man's lymphatic system. It is dangerous for you here, you must choose whether to proceed to the spleen or the tonsils before the immune system detects you.",
        commands: ["spleen", "tonsils"],
        defaults: "It seems like the white blood cells are beginning to concentrate around where you are..." },
    obtain: {
        action: "Your merged body casts around for the right ingredients until it enters the man's lymphatic system. It is dangerous for you here, you must choose whether to proceed to the spleen or the tonsils before the immune system detects you.",
        commands: ["spleen", "tonsils"],
        defaults: "It seems like the white blood cells are beginning to concentrate around where you are..." },
    materials: {
        action: "Your merged body casts around for the right ingredients until it enters the man's lymphatic system. It is dangerous for you here, you must choose whether to proceed to the spleen or the tonsils before the immune system detects you.",
        commands: ["spleen", "tonsils"],
        defaults: "It seems like the white blood cells are beginning to concentrate around where you are..." },
    ingredients: {
        action: "Your merged body casts around for the right ingredients until it enters the man's lymphatic system. It is dangerous for you here, you must choose whether to proceed to the spleen or the tonsils before the immune system detects you.",
        commands: ["spleen", "tonsils"],
        defaults: "It seems like the white blood cells are beginning to concentrate around where you are..." },
    spleen: {
        action: "You navigate through the twisted network of vessels in an attempt to find the spleen, but the body's defense system easily detects your enlarged form. You are surrounded my macrophages and dissolved.",
        commands: ["start", "restart"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?", 
        incentive: 4},
    tonsils: {
        action: "You follow the flow of lymph to the man's tonsils. They are full of partially-dissolved debris that you can use. Do you want to begin reproducing yourself here? It's warm, dark, and wet...but maybe the brain will provide a more stable environment.",
        commands: ["begin", "reproduce", "brain"],
        defaults: "There's plenty of nutrition available to reproduce here, but there's the constant threat of the immune system." },
    reproduce: {
        action: "It's as good a place to have children as any. Despite the hostile environment, you manage to create four clones with the debris that you find in the man's tonsils. They follow you unquestioningly. You can change your location or continue reproducing, but keep in mind that you and your new creations are now extremely visible targets.",
        commands: ["change", "stay"],
        defaults: "It'll be a difficult journey from here on out..." },      
    begin: {
        action: "It's as good a place to have children as any. Despite the hostile environment, you manage to create four clones with the debris that you find in the man's tonsils. They follow you unquestioningly. You can change your location or continue reproducing, but keep in mind that you and your new creations are now extremely visible targets.",
        commands: ["change", "stay"],
        defaults: "It'll be a difficult journey from here on out..." },      
    stay: {
        action: "You and you clones decide to stay inside the man's tonsils. Your reproductive rate accelerates until you and your children overwhelm the man's immune system. You have free reign over his body, and use the resources available to continue multiplying. As the man's body runs out of materials for you, you and your children go your separate ways, one to each of the man's other human companions. You mourn their absence, but are satisfied with the knowledge that you've created a large and robust family.",
        commands: ["restart", "start", "yes"],
        defaults: "You have become virulently infectious. Your offspring are successful beyond measure. Restart from the beginning?",
        incentive: 6 }, //INFECTION WIN
    change: {
        action: "You attempt to exit the tonsils, but the man sneezes violently and you and your children are ejected from his body. You are buffeted by the wind and land on a blade of grass, with none of your clones in sight. Before you can mourn, their loss, a rat-like creature consumes you.",
        commands: ["throat", "down"],
        defaults: "You are in the mouth of a rat. It is chewing slowly and making slight squeeking sounds, but will not open its long teeth. It looks like the only direction you can go down is its throat." }, //GOES TO RAT
    brain: {
        action: "You reach the man's brain. From here, you can control all of his actions, thoughts, and feelings...but maybe you should create more creatures like yourself first.",
        commands: ["create", "more", "control"],
        defaults: "Such a tough decision..." },
    create: {
        action: "There are many materials here that you can use to generate clones, and you soon have a large contingent of creatures like yourself to lead. The man's brain controls everything he does...maybe you can get inside through the optic nerve.",
        commands: ["optic", "nerve", "inside"],
        defaults: "If you can just follow the optic nerve inside the cerbellum you can begin replicating inside..." },  
    more: {
        action: "There are many materials here that you can use to generate clones, and you soon have a large contingent of creatures like yourself to lead. The man's brain controls everything he does...maybe you can get inside through the optic nerve.",
        commands: ["optic", "nerve", "inside"],
        defaults: "If you can just follow the optic nerve inside the cerbellum you can begin replicating inside..." },  
    eye: {
        action: "You make the perilious journey across the man's optic nerve. Immune activity around the eye is particularly strong and many of your fellow creatures are obliterated, but you and several others succesfully lodge in the man's brain. You can travel into the depths of the cortex now...but maybe it would be best to replenish your forces first.",
        commands: ["cortex", "replenish", "force"],
        defaults: "There aren't that many of you now, but perhaps that will make your journey into the cortex easier." },  
    optic: {
        action: "You make the perilious journey across the man's optic nerve. Immune activity around the eye is particularly strong and many of your fellow creatures are obliterated, but you and several others succesfully lodge in the man's brain. You can travel into the depths of the cortex now...but maybe it would be best to replenish your forces first.",
        commands: ["cortex", "replenish", "force"],
        defaults: "There aren't that many of you now, but perhaps that will make your journey into the cortex easier." },  
    nerve: {
        action: "You make the perilious journey across the man's optic nerve. Immune activity around the eye is particularly strong and many of your fellow creatures are obliterated, but you and several others succesfully lodge in the man's brain. You can travel into the depths of the cortex now...but maybe it would be best to replenish your forces first.",
        commands: ["cortex", "replenish", "force"],
        defaults: "There aren't that many of you now, but perhaps that will make your journey into the cortex easier." },      
    inside: {
        action: "You make the perilious journey across the man's optic nerve. Immune activity around the eye is particularly strong and many of your fellow creatures are obliterated, but you and several others succesfully lodge in the man's brain. You can travel into the depths of the cortex now...but maybe it would be best to replenish your forces first.",
        commands: ["cortex", "replenish", "force"],
        defaults: "There aren't that many of you now, but perhaps that will make your journey into the cortex easier." },  
    replenish: {
        action: "You attempt to clone yourself from materials you find in the cerebrospinal environment, but this proves futile. In this time, the man's immune system has learned to recognize your kind, and a conglomerate of macrophages eventually absorbs you and the rest of your kind.",
        commands: ["restart", "start", "yes"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?",
        incentive: 4},  
    force: {
        action: "You attempt to clone yourself from materials you find in the cerebrospinal environment, but this proves futile. In this time, the man's immune system has learned to recognize your kind, and a conglomerate of macrophages eventually absorbs you and the rest of your kind.",
        commands: ["restart", "start", "yes"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?",
        incentive: 4},  
    cortex: {
        action: "You and the remains of your kind proceed into the man's cortex. It is an extremely favorable environment for growth, and you soon recruit the proteins around you to your cause. The man's behavior becomes increasingly erratic due to your influence, and you are sure that many of your children are being spread further due to his actions.",
        commands: ["restart", "start", "yes"],
        defaults: "You have become the patriarch of a long line of robust, highly contagious prions. Restart from the beginning?",
        incentive: 7},  //PRION WIN
    control: {
        action: "Making clones would probably just draw the attention of the immune system anyway. You slip through a fissure in the cerbellum. You can access the hypothalamus and the frontal lobe from here.",
        commands: ["hypothalamus", "frontal", "lobe"],
        defaults: "Both of them would probably allow you to control his behavior..." }, 
    hypothalamus: {
        action: "You enter the man's hypothalamus but do some structural damage on your way inside. His temperature control system has been broken, and his fever quickly makes his body uninhabitable to you. The heat denatures the components of your thin external membrane and you are dissolved into sundry proteins.",
        commands: ["restart", "start", "yes"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?",
        incentive: 4}, //GOES TO DEATH
    frontal: {
        action: "You crawl, alone, through the gyri of the man's brain and onto his prefrontal cortex, where you soon begin to understand and manipulate the neuronal structure. The man's neurons are fatty and rich with nutrients, and you soon produce a large family of creatures like you. You control many of the man's actions and feast on the resources that his brain provides.",
        commands: ["restart", "start", "yes"],
        defaults: "You have become a potent and highly versatile brain parasite. Scientists are unable to extract you or your progeny without guaranteed host fatality. Restart from the beginning?",
        incentive: 8}, //PARASITE WIN
    lobe: {
        action: "You crawl, alone, through the gyri of the man's brain and onto his prefrontal cortex, where you soon begin to understand and manipulate the neuronal structure. The man's neurons are fatty and rich with nutrients, and you soon produce a large family of creatures like you. You control many of the man's actions and feast on the resources that his brain provides.",
        commands: ["restart", "start", "yes"],
        defaults: "You have become a potent and highly versatile brain parasite. Scientists are unable to extract you or your progeny without guaranteed host fatality. Restart from the beginning?",
        incentive: 8}, //PARASITE WIN
    kidney: {
        action: "You swim towards the kidneys but get routed to the liver. Bile begins to erode your thin skin, and you are ultimately disintegrated with all of the other toxins.",
        commands: ["restart", "start", "yes"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?",
        incentive: 4}, //GOES TO DEATH
    lung: {
        action: "You enter the pulmonary artery and pass through the thin membrane of the left lung. Suddenly, the man begins coughing violently and you are expelled from his body. You land on a blade of grass, disoriented and scared, until a rat-like creature consumes you and the blade of grass that was your refuge.",
        commands: ["throat", "down"],
        defaults: "You are in the mouth of a rat. It is chewing slowly and making slight squeeking sounds, but will not open its long teeth. It looks like the only direction you can go down is its throat." }, //GOES TO RAT
    stomach: {
        action: "The man's bloodsteam takes you towards his stomach. Before you can orient yourself, you are caught in a glut of digestive enzymes and are disintegrated along with the man's previous meal.",
        commands: ["restart", "start", "yes"],
        defaults: "Your body has been broken down into chemicals. Restart from the beginning?",
        incentive: 4}, //GOES TO DEATH
    ignore: {
        action: "It probably wasn't anything too interesting anyway. A rat-like creature skitters towards you and you begin to feel strangely attracted to it.",
        commands: ["rat", "creature"],
        defaults: "You can't tear your attention away from the rat." },
    rat: {
        action: "You approach the rat creature. Its whiskers twitch. You can enter its mouth if you make a leap.",
        commands: ["mouth", "leap"],
        defaults: "Leaping into the rat's mouth just seems like the natural thing to do. Strange..." },
    creature: {
        action: "You approach the rat creature. Its whiskers twitch. You can enter its mouth if you make a leap.",
        commands: ["mouth", "leap"],
        defaults: "Leaping into the rat's mouth just seems like the natural thing to do. Strange..." },
    mouth: {
        action: "You are in the mouth of a rat. It is chewing slowly and making slight squeeking sounds, but will not open its long teeth. It looks like the only direction you can go down is its throat.",
        commands: ["throat", "down"],
        defaults: "It's getting difficult to resist the stream of saliva and grass sliding down the rat's espophagus. Maybe you should just leap down yourself." },
    leap: {
        action: "You are in the mouth of a rat. It is chewing slowly and making slight squeeking sounds, but will not open its long teeth. It looks like the only direction you can go down is its throat.",
        commands: ["throat", "down"],
        defaults: "It's getting difficult to resist the stream of saliva and grass sliding down the rat's espophagus. Maybe you should just leap down yourself." },
    throat: {
        action: "You slide down the rat creature's throat and are rapidly absorbed into its digestive system. There is enough debris here to begin growing larger, or you can exit through the rat's intestines...but that means going back into the world...",
        commands: ["grow", "larger", "debris", "intestine", "exit"],
        defaults: "It's not the best place to make a home..." }, 
    down: {
        action: "You slide down the rat creature's throat and are rapidly absorbed into its digestive system. There is enough debris here to begin growing larger, or you can exit through the rat's intestines...but that means going back into the world...",
        commands: ["grow", "larger", "debris", "intestine", "exit"],
        defaults: "It's not the best place to make a home..." }, 
    grow: {
        action: "It's not spacious, but the rat's stomach has enough resources for you to absorb several smaller creatures of your kind. You now contain the machinery to clone more beings like yourself.",
        commands: ["clone"],
        defaults: "It's been so lonely here, maybe it's time to make friends." },     
    larger: {
        action: "It's not spacious, but the rat's stomach has enough resources for you to absorb several smaller creatures of your kind. You now contain the machinery to clone more beings like yourself.",
        commands: ["clone"],
        defaults: "It's been so lonely here, maybe it's time to make friends." },     
    debris: {
        action: "It's not spacious, but the rat's stomach has enough resources for you to absorb several smaller creatures of your kind. You now contain the machinery to clone more beings like yourself.",
        commands: ["clone"],
        defaults: "It's been so lonely here, maybe it's time to make friends." },    
    clone: {
        action: "It may not be entirely comfortable, but the rat's stomach has enough materials for you to make a small army of creatures using your own body as a template. They replicate themselves in turn, and the rat soon becomes very ill. You may not be able to live here for much longer...but there may also be value in staying.",
        commands: ["stay", "leave"],
        defaults: "You may even be able to make your escape when the rat dies. What's the harm in staying for a while longer?" },      
    stay: {
        action: "You take shelter in the rat for a while longer, and are expelled with several of your children when it bites a passing human. The human's skin is rich in nutrients, and you and your remaining cohort become fat and numerous from the resources. Several of you are shed with every movement, and you are content in knowing that your offspring with prosper far and wide.",
        commands: ["start", "restart", "yes"],
        defaults: "You have become a highly virulent and fatal bacterial infection, almost on par with the Bubonic Plague. The future success of you and your progeny is almost guaranteed. Restart from the beginning?",
        incentive: 9 }, //PLAGUE WIN     
    intestine: {
        action: "You're excreted in the rat's droppings, but before you can evaluate your surroundings a human man steps onto your body. You save yourself from destruction by crawling into his shoe, but it would be safer if you could get higher up...maybe onto his leg?",
        commands: ["leg", "human", "man"],
        defaults: "He's walking briskly. You don't know how much longer you can hold on." }, //GOES TO HUMAN 
    exit: {
        action: "You're excreted in the rat's droppings, but before you can evaluate your surroundings a human man steps onto your body. You save yourself from destruction by crawling into his shoe, but it would be safer if you could get higher up...maybe onto his leg?",
        commands: ["leg", "human", "man"],
        defaults: "He's walking briskly. You don't know how much longer you can hold on." }, //GOES TO HUMAN     
    leave: {
        action: "You're excreted in the rat's droppings, but before you can evaluate your surroundings a human man steps onto your body. You save yourself from destruction by crawling into his shoe, but it would be safer if you could get higher up...maybe onto his leg?",
        commands: ["leg", "human", "man"],
        defaults: "He's walking briskly. You don't know how much longer you can hold on." }, //GOES TO HUMAN    
}; // end stages var

var current_stage = stages.box;

// sends user input to appropriate function

$("#input-form").submit(function( event ) {
    event.preventDefault();
    user_input = $("#input-form input").val();
    process_input(user_input);
});

var process_input = function(cmd_text) {
    var command_found = false;

    for (var i=0;i<current_stage.commands.length;i++)
    {
        var regex = new RegExp((current_stage.commands[i]), "gi");
        if (cmd_text.match(regex) !== null) {
            object_string = "stages." + current_stage.commands[i];
            current_stage = eval(object_string);
            command_found = true;

            if (current_stage.incentive !== undefined && incentive_mode == "badges") {
                assign_badge(current_stage.incentive);
            }
            else if (current_stage.incentive !== undefined && incentive_mode == "leader") {
                assign_leader(current_stage.incentive);
            }
            else if (current_stage.incentive !== undefined && incentive_mode == "levels") {
                assign_level(current_stage.incentive);
            }

            print_text(current_stage.action);
        }
    }

    if (command_found === false) {
        print_text(current_stage.defaults);
    }

    command_found = false;

};

// prints adventure text to screen

var print_text = function(text) {
    $("#output" ).append( "<p class='action'> " + $("#input-form input").val() +"</p>" );
    $("#output" ).append( "<p> " + text +"</p>" );
    $('#output').scrollTop($('#output')[0].scrollHeight);
    $("#input-form input[type=text]").val("");
};
