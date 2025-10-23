import React from 'react';
import { ContentTopic, UserProfile, Badge, BadgeId, QuizQuestion } from './types';

// Expanded Topics
export const HISTORY_TOPICS: ContentTopic[] = [
  { title: "The Benin Empire", description: "Discover the powerful kingdom of Benin, famous for its art and military.", emoji: "🏰" },
  { title: "The Sokoto Caliphate", description: "Learn about one of the largest empires in Africa during the 19th century.", emoji: "🕌" },
  { title: "Queen Amina of Zazzau", description: "The story of a legendary warrior queen.", emoji: "👑" },
  { title: "The Nok Civilization", description: "Explore one of Africa's earliest known cultures.", emoji: "🗿" },
  { title: "Nigeria's Independence", description: "The journey to becoming a sovereign nation in 1960.", emoji: "🇳🇬" },
  { title: "The Aba Women's War", description: "A major anti-colonial revolt led by women in 1929.", emoji: "✊" },
  { title: "Kingdom of Nri", description: "An ancient Igbo kingdom known for its spiritual authority.", emoji: "🕊️" },
  { title: "The Nigerian Civil War", description: "Understanding the conflict and its impact on the nation.", emoji: "💔" },
  { title: "The Oyo Empire", description: "Learn about the powerful Yoruba empire and its cavalry.", emoji: "🐎" },
  { title: "The Kanem-Bornu Empire", description: "Explore an empire that lasted for over 1,000 years near Lake Chad.", emoji: "⏳" },
  { title: "Lagos, from Colony to Megacity", description: "The history of Nigeria's largest city.", emoji: "🏙️" },
  { title: "Herbert Macaulay", description: "The story of a founding father of Nigerian nationalism.", emoji: "👓" },
  { title: "Funmilayo Ransome-Kuti", description: "Discover the life of a fearless women's rights activist.", emoji: "🦸‍♀️" },
  { title: "The Discovery of Oil", description: "How oil was found in Oloibiri and changed Nigeria.", emoji: "🛢️" },
  { title: "Pre-Colonial Trade Routes", description: "How ancient Nigerians traded goods across the Sahara.", emoji: "🐫" },
  { title: "The Trans-Atlantic Slave Trade", description: "Its devastating impact on the people of Nigeria.", emoji: "⛓️" },
  { title: "The First Nigerian Republic", description: "The period right after independence from 1963 to 1966.", emoji: "📜" },
  { title: "Military Rule in Nigeria", description: "Understanding the era of military leadership.", emoji: "🎖️" },
  { title: "Return to Democracy in 1999", description: "The celebration of a new democratic era.", emoji: "🗳️" },
  { title: "The Royal Niger Company", description: "The British company that controlled trade on the Niger River.", emoji: "🇬🇧" },
];

export const CULTURE_TOPICS: ContentTopic[] = [
  { title: "Yoruba Wedding Traditions", description: "Experience the vibrant colors and ceremonies of a Yoruba wedding.", emoji: "🎉" },
  { title: "Igbo Masquerades", description: "Uncover the spiritual and cultural significance of Mmanwu.", emoji: "🎭" },
  { title: "Nigerian Jollof Rice", description: "Learn about the famous West African dish and its cultural importance.", emoji: "🍚" },
  { title: "Nollywood Cinema", description: "The story of Nigeria's booming film industry.", emoji: "🎬" },
  { title: "Adire Fabric Making", description: "Discover the art of indigo-dyed cloth from the Yoruba people.", emoji: "🎨" },
  { title: "Eyo Festival", description: "Lagos' most famous festival with its iconic white-clad masquerades.", emoji: "🤍" },
  { title: "Argungu Fishing Festival", description: "An annual four-day festival in Kebbi State.", emoji: "🐟" },
  { title: "Nigerian Pidgin English", description: "A look into the unofficial lingua franca of Nigeria.", emoji: "🗣️" },
  { title: "The Talking Drum", description: "How the Yoruba people use drums to speak.", emoji: "🥁" },
  { title: "Gele Head Wraps", description: "The art of tying beautiful and elaborate head wraps.", emoji: "🧣" },
  { title: "New Yam Festival", description: "Celebrating the harvest season in Igbo communities.", emoji: "🍠" },
  { title: "Hausa Architecture", description: "Explore the unique buildings of Northern Nigeria.", emoji: "🏛️" },
  { title: "Nigerian Proverbs", description: "Learn the wisdom hidden in short, wise sayings.", emoji: "🦉" },
  { title: "The Durbar Festival", description: "A spectacular parade of horsemen in Northern Nigeria.", emoji: "🏇" },
  { title: "Traditional Rulers", description: "The roles of Obas, Emirs, and Obis in modern Nigeria.", emoji: "👑" },
  { title: "Ife Bronze Heads", description: "The stunningly realistic bronze sculptures from the ancient city of Ife.", emoji: "🗿" },
  { title: "Agbada and Buba", description: "Exploring traditional Nigerian men's and women's fashion.", emoji: "👕" },
  { title: "Ayo Olopon Game", description: "Learn to play a traditional Yoruba board game of strategy.", emoji: "🎲" },
  { title: "Nigerian Naming Ceremonies", description: "The cultural significance of how children are named.", emoji: "👶" },
  { title: "Suya Spice and Street Food", description: "A delicious look at Nigeria's popular grilled meat and snacks.", emoji: "🍢" },
];

export const STORY_TOPICS: ContentTopic[] = [
  { title: "The Tortoise and the Wisdom Pot", description: "A classic folktale about cunning and wisdom.", emoji: "🐢" },
  { title: "Anansi the Spider", description: "Tales of the famous trickster god of stories.", emoji: "🕷️" },
  { title: "The Queen of the Sea", description: "A mythical story about a powerful water goddess.", emoji: "🧜‍♀️" },
  { title: "Why the Sun and Moon Live in the Sky", description: "An ancient story explaining the cosmos.", emoji: "☀️" },
  { title: "The Story of Moremi Ajasoro", description: "The tale of a courageous Yoruba queen who saved her people.", emoji: "🦸‍♀️" },
  { title: "The Hunter and the Magical Bird", description: "A story about greed and its consequences.", emoji: "🐦" },
  { title: "How the Tortoise Got Its Cracked Shell", description: "A famous tale about a great feast in the sky.", emoji: "🐢" },
  { title: "The Cunning Jackal", description: "Stories of a clever jackal who outsmarts other animals.", emoji: "🦊" },
  { title: "The Girl Who Married a Ghost", description: "A cautionary tale about judging by appearances.", emoji: "👻" },
  { title: "The King's Magic Drum", description: "A drum that produces endless food, but with a catch.", emoji: "🥁" },
  { title: "Why the Bat Flies at Night", description: "A folktale explaining the bat's nocturnal habits.", emoji: "🦇" },
  { title: "The Talking Yam", description: "What happens when a yam starts speaking to the farmer who dug it up.", emoji: "🍠" },
  { title: "Anansi and the Moss-Covered Rock", description: "Another tale of the spider trickster and a magical rock.", emoji: "🪨" },
  { title: "The Python's Sacred Egg", description: "A story about respecting nature and ancient spirits.", emoji: "🐍" },
  { title: "The Woman with Two Skins", description: "A mystical tale of a beautiful woman with a secret identity.", emoji: "✨" },
  { title: "The Greedy Fisherman", description: "A lesson about being content with what you have.", emoji: "🎣" },
  { title: "The Lion, the Hare, and the Hyena", description: "A tale of wit and bravery in the animal kingdom.", emoji: "🦁" },
  { title: "The Children Who Followed the Rainbow", description: "An adventure into a magical world.", emoji: "🌈" },
  { title: "Sango, the God of Thunder", description: "The legendary story of the powerful Yoruba deity.", emoji: "⚡" },
  { title: "The Legend of the River Niger", description: "The mythical origin of West Africa's great river.", emoji: "🏞️" },
];

export const CONTENT_TYPE_DETAILS: { [key: string]: { title: string; subtitle: string; color: string } } = {
  history: { title: "Explore History", subtitle: "Journey through Nigeria's incredible past", color: "blue" },
  culture: { title: "Discover Cultures", subtitle: "Dive into the vibrant traditions of Nigeria", color: "yellow" },
  stories: { title: "Story Time", subtitle: "Listen to timeless Nigerian folktales", color: "purple" },
};

// Avatars
const Avatar1 = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 100 100" {...props}><circle cx="50" cy="50" r="45" fill="#fca5a5"/><circle cx="35" cy="40" r="5" fill="#000"/><circle cx="65" cy="40" r="5" fill="#000"/><path d="M30 65 Q 50 80 70 65" stroke="#000" strokeWidth="3" fill="none"/></svg>;
const Avatar2 = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 100 100" {...props}><circle cx="50" cy="50" r="45" fill="#86efac"/><rect x="30" y="35" width="10" height="10" fill="#000"/><rect x="60" y="35" width="10" height="10" fill="#000"/><rect x="30" y="65" width="40" height="5" fill="#000"/></svg>;
const Avatar3 = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 100 100" {...props}><circle cx="50" cy="50" r="45" fill="#93c5fd"/><path d="M35 35 L 45 45 M 35 45 L 45 35" stroke="#000" strokeWidth="5"/><path d="M55 35 L 65 45 M 55 45 L 65 35" stroke="#000" strokeWidth="5"/><path d="M30 70 A 20 20 0 0 0 70 70" stroke="#000" strokeWidth="3" fill="none"/></svg>;
const Avatar4 = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 100 100" {...props}><circle cx="50" cy="50" r="45" fill="#fcd34d"/><polygon points="50,20 60,40 80,45 65,60 70,80 50,70 30,80 35,60 20,45 40,40" fill="#fff"/><circle cx="50" cy="50" r="10" fill="#000"/></svg>;

export const AVATARS = [Avatar1, Avatar2, Avatar3, Avatar4];

// Fun facts and jokes for loading screens
export const FUN_FACTS_AND_JOKES: string[] = [
  "Nigeria is home to over 250 ethnic groups!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "The city of Lagos is built on a series of islands.",
  "What do you call a fake noodle? An Impasta!",
  "Nigeria has the largest economy in Africa.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "The Niger River is the third-longest river in Africa.",
  "What do you get when you cross a snowman and a vampire? Frostbite!",
  "Nollywood is bigger than Hollywood - it produces more films per year!",
  "Why was the math book sad? Because it had too many problems."
];

// Badges
const HistoryBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"/></svg>;
const CultureBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 5.232l-2.334 4.73L4.82 10.5l3.542 3.45-.836 4.882L12 16.262l4.474 2.57-.836-4.882L19.18 10.5l-4.846-.538z"/><path d="M19.18 10.5h-5.914l-1.266-2.564L9.434 10.5H3.52l3.86 3.75-1.09 6.37L12 17.76l5.71 3.86-1.09-6.37L20.48 10.5h-1.3z" opacity=".3"/></svg>;
const StoryBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M19 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM5 20V4h14l.002 16H5z"/><path d="M7 6h10v2H7zm0 4h10v2H7z"/></svg>;
const QuizBadgeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>;

export const BADGES: Badge[] = [
    { id: 'HISTORY_BUFF', name: 'History Buff', description: 'Read all history articles.', icon: HistoryBadgeIcon, criteria: (p) => HISTORY_TOPICS.every(t => p.completedTopics.includes(t.title))},
    { id: 'CULTURE_VULTURE', name: 'Culture Vulture', description: 'Read all culture articles.', icon: CultureBadgeIcon, criteria: (p) => CULTURE_TOPICS.every(t => p.completedTopics.includes(t.title))},
    { id: 'STORY_SAGE', name: 'Story Sage', description: 'Read all folktales.', icon: StoryBadgeIcon, criteria: (p) => STORY_TOPICS.every(t => p.completedTopics.includes(t.title))},
    { id: 'QUIZ_MASTER_1', name: 'Quiz Master', description: 'Score 100% on a quiz.', icon: QuizBadgeIcon, criteria: (p, payload) => payload?.isPerfectScore === true },
];

export const AfricanPattern = () => (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
          <circle id="pattern-circle" cx="20" cy="20" r="2" fill="currentColor" className="text-green-200"></circle>
        </pattern>
        <pattern id="pattern-lines" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 0 5 l 20 0" stroke="currentColor" strokeWidth="0.5" className="text-yellow-200"/>
          <path d="M 10 0 l 0 20" stroke="currentColor" strokeWidth="0.5" className="text-yellow-200"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern-lines)"></rect>
      <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
    </svg>
);

// Static Quiz for Offline Mode
export const STATIC_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "What is the capital city of Nigeria?",
    options: ["Lagos", "Kano", "Abuja", "Ibadan"],
    correctAnswer: "Abuja",
  },
  {
    question: "Which of these is a major ethnic group in Nigeria?",
    options: ["Zulu", "Berber", "Yoruba", "Ashanti"],
    correctAnswer: "Yoruba",
  },
  {
    question: "What does the green on the Nigerian flag represent?",
    options: ["Peace", "The Niger River", "Natural Wealth", "The Sun"],
    correctAnswer: "Natural Wealth",
  },
  {
    question: "Nigeria's film industry is popularly known as what?",
    options: ["Afriwood", "Nollywood", "Lagoswood", "Kannywood"],
    correctAnswer: "Nollywood",
  },
  {
    question: "When did Nigeria gain independence from Britain?",
    options: ["1950", "1960", "1970", "1980"],
    correctAnswer: "1960",
  },
  {
    question: "The ancient Nok civilization was famous for its what?",
    options: ["Bronze sculptures", "Pyramids", "Terracotta sculptures", "Cave paintings"],
    correctAnswer: "Terracotta sculptures",
  },
  {
    question: "Which of these is a famous Nigerian food?",
    options: ["Sushi", "Jollof Rice", "Pizza", "Tacos"],
    correctAnswer: "Jollof Rice",
  },
  {
    question: "Queen Amina was a legendary warrior queen of which kingdom?",
    options: ["Oyo", "Benin", "Zazzau", "Nri"],
    correctAnswer: "Zazzau",
  },
  {
    question: "What is the longest river in Nigeria?",
    options: ["River Benue", "River Niger", "River Ogun", "River Osun"],
    correctAnswer: "River Niger",
  },
  {
    question: "The Eyo Festival is famously celebrated in which city?",
    options: ["Kano", "Port Harcourt", "Lagos", "Enugu"],
    correctAnswer: "Lagos",
  },
  {
    question: "Who was the first President of Nigeria?",
    options: ["Nnamdi Azikiwe", "Abubakar Tafawa Balewa", "Olusegun Obasanjo", "Wole Soyinka"],
    correctAnswer: "Nnamdi Azikiwe",
  },
  {
    question: "What is the main ingredient in 'Egusi' soup?",
    options: ["Yam", "Cassava", "Melon seeds", "Plantain"],
    correctAnswer: "Melon seeds",
  },
  {
    question: "Which Nobel Prize winner is from Nigeria?",
    options: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Ngozi Adichie", "Fela Kuti"],
    correctAnswer: "Wole Soyinka",
  },
  {
    question: "The Durbar festival, a spectacular parade of horsemen, is famously celebrated in which part of Nigeria?",
    options: ["South-East", "South-West", "North", "South-South"],
    correctAnswer: "North",
  },
  {
    question: "What does the white on the Nigerian flag represent?",
    options: ["Agriculture", "The Niger River", "Strength", "Peace"],
    correctAnswer: "Peace",
  },
  {
    question: "The Benin Empire was particularly famous for its intricate work with what material?",
    options: ["Gold", "Bronze", "Iron", "Wood"],
    correctAnswer: "Bronze",
  },
  {
    question: "Which Nigerian musician is considered the pioneer of the Afrobeat music genre?",
    options: ["King Sunny Adé", "Wizkid", "Fela Kuti", "Burna Boy"],
    correctAnswer: "Fela Kuti",
  },
  {
    question: "What is the name of the traditional Yoruba board game of strategy?",
    options: ["Ludo", "Chess", "Dara", "Ayo Olopon"],
    correctAnswer: "Ayo Olopon",
  },
  {
    question: "What is Nigeria's official currency?",
    options: ["Cedi", "Dollar", "Naira", "Franc"],
    correctAnswer: "Naira",
  },
  {
    question: "The famous Zuma Rock is located near which Nigerian city?",
    options: ["Lagos", "Kano", "Abuja", "Calabar"],
    correctAnswer: "Abuja",
  },
  {
    question: "The New Yam Festival is a major annual celebration for which ethnic group?",
    options: ["Hausa", "Yoruba", "Igbo", "Fulani"],
    correctAnswer: "Igbo",
  },
  {
    question: "Who wrote the famous novel 'Things Fall Apart'?",
    options: ["Wole Soyinka", "Ben Okri", "Chimamanda Ngozi Adichie", "Chinua Achebe"],
    correctAnswer: "Chinua Achebe",
  },
  {
    question: "What is 'Suya' in Nigerian cuisine?",
    options: ["A type of soup", "A spicy grilled meat skewer", "A traditional fabric", "A musical instrument"],
    correctAnswer: "A spicy grilled meat skewer",
  },
  {
    question: "The Argungu Fishing Festival involves participants trying to catch the largest fish using what?",
    options: ["Fishing rods", "Nets", "Bare hands and gourds", "Spears"],
    correctAnswer: "Bare hands and gourds",
  },
  {
    question: "What animal is featured on Nigeria's coat of arms?",
    options: ["Lion", "Eagle", "Elephant", "Horse"],
    correctAnswer: "Eagle",
  },
  {
    question: "Adire is a special type of indigo-dyed cloth made by which ethnic group?",
    options: ["Igbo", "Hausa", "Tiv", "Yoruba"],
    correctAnswer: "Yoruba",
  },
  {
    question: "Herbert Macaulay is considered one of the founding fathers of Nigerian what?",
    options: ["Cinema", "Nationalism", "Music", "Medicine"],
    correctAnswer: "Nationalism",
  },
  {
    question: "Which two major rivers meet at Lokoja, forming a 'Y' shape?",
    options: ["Niger and Benue", "Sokoto and Kaduna", "Ogun and Osun", "Cross and Imo"],
    correctAnswer: "Niger and Benue",
  },
  {
    question: "What is the name for the elaborate head wraps worn by Nigerian women?",
    options: ["Fila", "Agbada", "Gele", "Iro"],
    correctAnswer: "Gele",
  },
  {
    question: "The city of Calabar is famous for what colourful annual event?",
    options: ["The Durbar Festival", "The Calabar Carnival", "The Eyo Festival", "The New Yam Festival"],
    correctAnswer: "The Calabar Carnival",
  }
];