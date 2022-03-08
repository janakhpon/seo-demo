import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const memberData = [
  {
    name: "Monkey D. Luffy",
    name_jp: "モンキー・Dディー・ルフィ",
    image: "luffy.jpeg",
    origin: "East Blue",
    age: "19",
    position: "Captain",
    devilfruit: "Gum-Gum Fruit",
    summary:
      'Monkey D. Luffy, also known as " Straw Hat Luffy" and commonly as "Straw Hat",[7] is the main protagonist of the manga and anime, One Piece. He is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as one of its top fighters.[24] His lifelong dream is to become the Pirate King by finding the legendary treasure left behind by the late Gol D. Roger.[25] He believes that being the Pirate King means having the most freedom in the world.[26]  Born in Foosha Village, Luffy accidentally ate the Gomu Gomu no Mi at age 7, which turned his body into rubber.[27] He met "Red-Haired" Shanks, who gave Luffy the very Straw Hat that has become Luffy\'s signature accessory, having gifted it to the boy as part of a promise for them to meet again someday. Luffy is the son of the Revolutionary leader Monkey D. Dragon,[28] the grandson of the Marine hero Monkey D. Garp,[29] the sworn brother of the late "Fire Fist" Portgas D. Ace and Revolutionary Chief-of-Staff Sabo, and the foster son of Curly Dadan. He is one of the few people in the world who carries the Will of D.',
  },
  {
    name: "Nami",
    name_jp: "ナミ",
    image: "nami.jpeg",
    origin: "East Blue",
    age: "20",
    position: "Navigator",
    devilfruit: "None",
    summary:
      '"Cat Burglar" Nami[6] is the navigator of the Straw Hat Pirates. She is the third member of the crew and the second to join, doing so during the Orange Town Arc.[20] She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère.  She was formerly a member of the Arlong Pirates and initially joined the Straw Hats so that she could rob them in order to buy back her village from Arlong. However, she legitimately joined the Straw Hats after they rebelled against and defeated Arlong. Her dream is to make a map of the entire world.[21]',
  },
  {
    name: "Roronoa Zoro",
    name_jp: "ロロノア・ゾロ",
    image: "zoro.jpeg",
    origin: "East Blue",
    age: "21",
    position: "Vice-Captain",
    devilfruit: "None",
    summary:
      'Roronoa Zoro,[1] also known as "Pirate Hunter" Zoro,[7] is the combatant of the Straw Hat Pirates, and one of their two swordsmen. Formerly a bounty hunter,[5] he is the second member of Luffy\'s crew and the first to join it, doing so in the Romance Dawn Arc.[3]  As a master of Three Sword Style, a swordsmanship style which he created during his childhood training in Shimotsuki Village, Zoro is among the three most powerful combatants of the Straw Hats, alongside Luffy and Sanji.[19][20] His dream is to become the greatest swordsman in the world, in order to honor a promise he made to his deceased childhood friend Kuina.[21] In addition to his infamy as one of the Straw Hats and as a former bounty hunter, Zoro is also regarded as one of twelve pirates who are referred to as the "Worst Generation".[22]',
  },
  {
    name: "Sanji",
    name_jp: "サンジ",
    image: "sanji.jpeg",
    origin: "North Blue",
    age: "21",
    position: "cook",
    devilfruit: "None",
    summary:
      '"Black Leg" Sanji,[6] born as Vinsmoke Sanji,[25][26][27] is the cook of the Straw Hat Pirates. He is the fifth member of the crew and the fourth to join, doing so at the end of the Baratie Arc.  Born as the third son and fourth child of the Vinsmoke Family[28] (thus making him a former prince of the Germa Kingdom), he disowned his family twice, once in his youth and again after reuniting with them as an adult.[29] After fleeing the Vinsmokes as a child, he eventually entered the care of Zeff as the sous chef of the Baratie, where he would remain until he met Monkey D. Luffy, who convinced him to join his crew.  His dream is to find the rumored chef\'s paradise, All Blue, which is where East Blue, West Blue, North Blue, and South Blue meet, along with their wildlife. He is one of the top three fighters of the Straw Hats, alongside Luffy and Zoro.  He currently has a bounty of Beli.png330,000,000, the third-highest in the crew after Luffy and Jinbe.[30] Despite renouncing his surname Vinsmoke,[26] the World Government labels it as part of his name on his wanted poster.[27]',
  },
  {
    name: "Usopp",
    name_jp: "ウソップ",
    image: "usopp.jpeg",
    origin: "East Blue",
    age: "19",
    position: "Sniper",
    devilfruit: "None",
    summary:
      '"God" Usopp is the sniper of the Straw Hat Pirates. He is the fourth member of the crew and the third to join, doing so at the end of the Syrup Village Arc. Although he left the crew during the Water 7 Arc, he rejoined at the end of the Post-Enies Lobby Arc.[17]  Usopp is the son of Yasopp and Banchina. He was born and raised in Syrup Village, serving as "captain" of the Usopp Pirates and being Kaya\'s close friend. After working with the Straw Hats to defeat Kuro and the Black Cat Pirates, he was invited to join the crew. Despite his usual cowardice, Usopp dreams of becoming a brave warrior of the sea just like his father and lives every day in pursuit of living up to this dream.  He currently has a bounty of Beli.png200,000,000.[15]',
  },
];

async function main() {
  console.log(`\n Start seeding ...`);
  for (const u of memberData) {
    const member = await prisma.member.create({
      data: u,
    });
    console.log(`Created member: ${member.name}`);
  }
  console.log(`\n Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
