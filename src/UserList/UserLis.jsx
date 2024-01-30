import "./userlist.scss";
import { User } from "../User/User";

const data = [{
  "id": 1,
  "first_name": "Lusa",
  "last_name": "Martinon",
  "email": "lmartinon0@marriott.com",
  "gender": "Female",
  "avatar": "https://robohash.org/veniamvoluptatumipsum.png?size=50x50&set=set1",
  "city": "Tembongraja",
  "job": "Community Outreach Specialist"
}, {
  "id": 2,
  "first_name": "Dacia",
  "last_name": "Essam",
  "email": "dessam1@hexun.com",
  "gender": "Female",
  "avatar": "https://robohash.org/molestiaeinnam.png?size=50x50&set=set1",
  "city": "Novi Sad",
  "job": "Desktop Support Technician"
}, {
  "id": 3,
  "first_name": "Jens",
  "last_name": "Kopfer",
  "email": "jkopfer2@independent.co.uk",
  "gender": "Male",
  "avatar": "https://robohash.org/quisquamculpadoloribus.png?size=50x50&set=set1",
  "city": "Barreiro",
  "job": "Account Representative IV"
}, {
  "id": 4,
  "first_name": "Palmer",
  "last_name": "Bumford",
  "email": "pbumford3@twitter.com",
  "gender": "Male",
  "avatar": "https://robohash.org/laboreplaceatsoluta.png?size=50x50&set=set1",
  "city": "Al Maḩjal",
  "job": "Software Engineer II"
}, {
  "id": 5,
  "first_name": "Mab",
  "last_name": "Cosham",
  "email": "mcosham4@shinystat.com",
  "gender": "Female",
  "avatar": "https://robohash.org/utatlabore.png?size=50x50&set=set1",
  "city": "Jaguaruana",
  "job": "Accounting Assistant II"
}, {
  "id": 6,
  "first_name": "Minta",
  "last_name": "Hefforde",
  "email": "mhefforde5@about.me",
  "gender": "Female",
  "avatar": "https://robohash.org/consecteturimpeditexplicabo.png?size=50x50&set=set1",
  "city": "Svay Rieng",
  "job": "Quality Control Specialist"
}, {
  "id": 7,
  "first_name": "Kris",
  "last_name": "Bamblett",
  "email": "kbamblett6@livejournal.com",
  "gender": "Agender",
  "avatar": "https://robohash.org/etvitaesunt.png?size=50x50&set=set1",
  "city": "Santa Cecilia",
  "job": "Geological Engineer"
}, {
  "id": 8,
  "first_name": "Nikolia",
  "last_name": "Maddison",
  "email": "nmaddison7@themeforest.net",
  "gender": "Female",
  "avatar": "https://robohash.org/etautmollitia.png?size=50x50&set=set1",
  "city": "Pattani",
  "job": "Compensation Analyst"
}, {
  "id": 9,
  "first_name": "Dorothea",
  "last_name": "McBean",
  "email": "dmcbean8@theglobeandmail.com",
  "gender": "Female",
  "avatar": "https://robohash.org/quodeligendineque.png?size=50x50&set=set1",
  "city": "Chekmagush",
  "job": "Pharmacist"
}, {
  "id": 10,
  "first_name": "Ned",
  "last_name": "Gecks",
  "email": "ngecks9@51.la",
  "gender": "Male",
  "avatar": "https://robohash.org/quisquamquiquam.png?size=50x50&set=set1",
  "city": "General Conesa",
  "job": "Software Test Engineer I"
}, {
  "id": 11,
  "first_name": "Ezekiel",
  "last_name": "Sieur",
  "email": "esieura@japanpost.jp",
  "gender": "Male",
  "avatar": "https://robohash.org/ametreprehenderitaut.png?size=50x50&set=set1",
  "city": "Quetta",
  "job": "Associate Professor"
}, {
  "id": 12,
  "first_name": "Lil",
  "last_name": "Borman",
  "email": "lbormanb@guardian.co.uk",
  "gender": "Genderqueer",
  "avatar": "https://robohash.org/nonsintin.png?size=50x50&set=set1",
  "city": "Los Angeles",
  "job": "Administrative Assistant IV"
}, {
  "id": 13,
  "first_name": "Kippie",
  "last_name": "Gioan",
  "email": "kgioanc@webeden.co.uk",
  "gender": "Female",
  "avatar": "https://robohash.org/quisquosneque.png?size=50x50&set=set1",
  "city": "Ambovombe",
  "job": "Editor"
}, {
  "id": 14,
  "first_name": "Reinold",
  "last_name": "Chittey",
  "email": "rchitteyd@pinterest.com",
  "gender": "Male",
  "avatar": "https://robohash.org/sitaccusantiumvoluptatem.png?size=50x50&set=set1",
  "city": "Centurion",
  "job": "Administrative Assistant III"
}, {
  "id": 15,
  "first_name": "Morganica",
  "last_name": "Sinkings",
  "email": "msinkingse@smh.com.au",
  "gender": "Female",
  "avatar": "https://robohash.org/sitquisuscipit.png?size=50x50&set=set1",
  "city": "Kunčina",
  "job": "Database Administrator IV"
}, 
{
  "id": 16,
  "first_name": "Warde",
  "last_name": "Ormston",
  "email": "wormstonf@phoca.cz",
  "gender": "Male",
  "avatar": "https://robohash.org/oditaspernatureos.png?size=50x50&set=set1",
  "city": "Shigongqiao",
  "job": "Software Test Engineer I"
}, {
  "id": 17,
  "first_name": "Wilfrid",
  "last_name": "Didball",
  "email": "wdidballg@timesonline.co.uk",
  "gender": "Male",
  "avatar": "https://robohash.org/autasperioresfugiat.png?size=50x50&set=set1",
  "city": "El Hamma",
  "job": "Help Desk Technician"
}, {
  "id": 18,
  "first_name": "Jared",
  "last_name": "Luthwood",
  "email": "jluthwoodh@ted.com",
  "gender": "Bigender",
  "avatar": "https://robohash.org/perspiciatislaboresed.png?size=50x50&set=set1",
  "city": "Candelaria",
  "job": "Tax Accountant"
}, {
  "id": 19,
  "first_name": "Ignatius",
  "last_name": "Dines",
  "email": "idinesi@yellowpages.com",
  "gender": "Agender",
  "avatar": "https://robohash.org/voluptatibusdistinctioqui.png?size=50x50&set=set1",
  "city": "Jinping",
  "job": "Desktop Support Technician"
}, {
  "id": 20,
  "first_name": "Tamiko",
  "last_name": "Earngy",
  "email": "tearngyj@newsvine.com",
  "gender": "Female",
  "avatar": "https://robohash.org/eligendiutimpedit.png?size=50x50&set=set1",
  "city": "Dalheim",
  "job": "Payment Adjustment Coordinator"
}]

export const UserList= ()=>{
  return(
    <>
    <ul>
      {data.map(item=> <User
      img={item.avatar}
      first_name={item.first_name}
      last_name={item.last_name}
      city={item.city}
      gender={item.gender}
      email={item.email}
      />)}
    </ul>
    </>
  )
}