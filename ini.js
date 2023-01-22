function getCountry(){
    const x = Math.floor(Math.random() * (countries.length + 1))
    renderCountry(x)
    document.getElementById( 'new' ).scrollIntoView();
}

function renderCountry(numRandom){
    const sect = document.querySelector(".showCountry")
    sect.getElementsByClassName('country').length != 0 ? changeStyle(sect) : ''; 
    
    const textCreated = document.createElement('p');
    
    //get country from array
    textCreated.textContent = countries[numRandom].name + " | " + countries[numRandom].capital + " | " + countries[numRandom].continent ;
    textCreated.classList.add('country')
    textCreated.setAttribute('id','new')

    const linkPlaylist = document.createElement('a');

    linkPlaylist.textContent = " 🎶 "
    linkPlaylist.href = buildUrlMusicSearch(countries[numRandom].name)
    linkPlaylist.target = "_blank"

    const linkVideos = document.createElement('a');    
    linkVideos.textContent = " 📽️ "
    linkVideos.href = buildUrlVideosSearch(countries[numRandom].name)
    linkVideos.target = "_blank"
    
    const linkInformations = document.createElement('a');    
    linkInformations.textContent = " 📰 "
    linkInformations.href = buildUrlInformations(countries[numRandom].name)
    linkInformations.target = "_blank"
    
    const linkFligths = document.createElement('a');    
    linkFligths.textContent = " ✈️ "
    linkFligths.href = buildUrFlights(countries[numRandom].name)
    linkFligths.target = "_blank"

    textCreated.append(document.createElement('br'))
    textCreated.append(document.createElement('br'))
    textCreated.append(linkPlaylist)
    textCreated.append(linkVideos)
    textCreated.append(linkInformations)
    textCreated.append(linkFligths)
    sect.appendChild(textCreated)

}
function changeStyle(dom){
    let test = dom.querySelectorAll('[id=new]')
    for(i=0; i< test.length;i++){
        test[i].classList = 'old'
        test[i].setAttribute('id','old')
    }
}

function buildUrlMusicSearch(country){
    // https://open.spotify.com/search/North%20Macedonia/playlists
    const encondedCountry = encodeURI(country)
    const completeUrl = 'https://open.spotify.com/search/' + encondedCountry + '/playlists';
    return completeUrl

}
function buildUrlVideosSearch(country){
    // https://www.youtube.com/results?search_query=travel+brunei
    const encondedExpression = encodeURI('tips for traveling to ' + country)
    const completeUrl = 'https://www.youtube.com/results?search_query=' + encondedExpression;
    return completeUrl
}

function buildUrlInformations(country){
    // https://www.atlasobscura.com/things-to-do/mexico
    let completeUrl = 'https://www.atlasobscura.com/things-to-do/' + toNormalForm(country.toLowerCase());
    completeUrl = completeUrl.replaceAll(' ','-')
    return completeUrl
}

function buildUrFlights(country){
    // https://www.google.com/search?q=flights+nicaragua    
    let completeUrl = 'https://www.google.com/search?q=flights+' + toNormalForm(country.toLowerCase());
    completeUrl = completeUrl.replaceAll(' ','+')
    return completeUrl
}

function toNormalForm(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// All countries length 252
const countries = [
    {name: "Afghanistan",code: "AF",id: 1,capital: "Kabul",currency: "AFN",continent: "Asia"},
    {name: "Åland Islands",code: "AX",id: 2,capital: "Mariehamn",currency: "EUR",continent: "Europe"},
    {name: "Albania",code: "AL",id: 3,capital: "Tirana",currency: "ALL",continent: "Europe"},
    {name: "Algeria",code: "DZ",id: 4,capital: "Algiers",currency: "DZD",continent: "Africa"},
    {name: "American Samoa",code: "AS",id: 5,capital: "Pago Pago",currency: "USD",continent: "Oceania"},
    {name: "Andorra",code: "AD",id: 6,capital: "Andorra la Vella",currency: "EUR",continent: "Europe"},
    {name: "Angola",code: "AO",id: 7,capital: "Luanda",currency: "AOA",continent: "Africa"},
    {name: "Anguilla",code: "AI",id: 8,capital: "The Valley",currency: "XCD",continent: "North America"},
    {name: "Antarctica",code: "AQ",id: 9,capital: "Antarctica",currency: "AAD",continent: "Antarctica"},
    {name: "Antigua & Barbuda",code: "AG",id: 10,capital: "St. John's",currency: "XCD",continent: "North America"},
    {name: "Argentina",code: "AR",id: 11,capital: "Buenos Aires",currency: "ARS",continent: "South America"},
    {name: "Armenia",code: "AM",id: 12,capital: "Yerevan",currency: "AMD",continent: "Asia"},
    {name: "Aruba",code: "AW",id: 13,capital: "Oranjestad",currency: "AWG",continent: "North America"},
    {name: "Australia",code: "AU",id: 14,capital: "Canberra",currency: "AUD",continent: "Oceania"},
    {name: "Austria",code: "AT",id: 15,capital: "Vienna",currency: "EUR",continent: "Europe"},
    {name: "Azerbaijan",code: "AZ",id: 16,capital: "Baku",currency: "AZN",continent: "Asia"},
    {name: "Bahamas",code: "BS",id: 17,capital: "Nassau",currency: "BSD",continent: "North America"},
    {name: "Bahrain",code: "BH",id: 18,capital: "Manama",currency: "BHD",continent: "Asia"},
    {name: "Bangladesh",code: "BD",id: 19,capital: "Dhaka",currency: "BDT",continent: "Asia"},
    {name: "Barbados",code: "BB",id: 20,capital: "Bridgetown",currency: "BBD",continent: "North America"},
    {name: "Belarus",code: "BY",id: 21,capital: "Minsk",currency: "BYN",continent: "Europe"},
    {name: "Belgium",code: "BE",id: 22,capital: "Brussels",currency: "EUR",continent: "Europe"},
    {name: "Belize",code: "BZ",id: 23,capital: "Belmopan",currency: "BZD",continent: "North America"},
    {name: "Benin",code: "BJ",id: 24,capital: "Porto-Novo",currency: "XOF",continent: "Africa"},
    {name: "Bermuda",code: "BM",id: 25,capital: "Hamilton",currency: "BMD",continent: "North America"},
    {name: "Bhutan",code: "BT",id: 26,capital: "Thimphu",currency: "BTN",continent: "Asia"},
    {name: "Bolivia",code: "BO",id: 27,capital: "Sucre",currency: "BOB",continent: "South America"},
    {name: "Caribbean Netherlands",code: "BQ",id: 28,capital: "Kralendijk",currency: "USD",continent: "North America"},
    {name: "Bosnia & Herzegovina",code: "BA",id: 29,capital: "Sarajevo",currency: "BAM",continent: "Europe"},
    {name: "Botswana",code: "BW",id: 30,capital: "Gaborone",currency: "BWP",continent: "Africa"},
    {name: "Bouvet Island",code: "BV",id: 31,capital: "",currency: "NOK",continent: "Antarctica"},
    {name: "Brazil",code: "BR",id: 32,capital: "Brasilia",currency: "BRL",continent: "South America"},
    {name: "British Indian Ocean Territory",code: "IO",id: 33,capital: "Diego Garcia",currency: "USD",continent: "Asia"},
    {name: "Brunei",code: "BN",id: 34,capital: "Bandar Seri Begawan",currency: "BND",continent: "Asia"},
    {name: "Bulgaria",code: "BG",id: 35,capital: "Sofia",currency: "BGN",continent: "Europe"},
    {name: "Burkina Faso",code: "BF",id: 36,capital: "Ouagadougou",currency: "XOF",continent: "Africa"},
    {name: "Burundi",code: "BI",id: 37,capital: "Bujumbura",currency: "BIF",continent: "Africa"},
    {name: "Cambodia",code: "KH",id: 38,capital: "Phnom Penh",currency: "KHR",continent: "Asia"},
    {name: "Cameroon",code: "CM",id: 39,capital: "Yaounde",currency: "XAF",continent: "Africa"},
    {name: "Canada",code: "CA",id: 40,capital: "Ottawa",currency: "CAD",continent: "North America"},
    {name: "Cape Verde",code: "CV",id: 41,capital: "Praia",currency: "CVE",continent: "Africa"},
    {name: "Cayman Islands",code: "KY",id: 42,capital: "George Town",currency: "KYD",continent: "North America"},
    {name: "Central African Republic",code: "CF",id: 43,capital: "Bangui",currency: "XAF",continent: "Africa"},
    {name: "Chad",code: "TD",id: 44,capital: "N'Djamena",currency: "XAF",continent: "Africa"},
    {name: "Chile",code: "CL",id: 45,capital: "Santiago",currency: "CLP",continent: "South America"},
    {name: "China",code: "CN",id: 46,capital: "Beijing",currency: "CNY",continent: "Asia"},
    {name: "Christmas Island",code: "CX",id: 47,capital: "Flying Fish Cove",currency: "AUD",continent: "Asia"},
    {name: "Cocos (Keeling) Islands",code: "CC",id: 48,capital: "West Island",currency: "AUD",continent: "Asia"},
    {name: "Colombia",code: "CO",id: 49,capital: "Bogota",currency: "COP",continent: "South America"},
    {name: "Comoros",code: "KM",id: 50,capital: "Moroni",currency: "KMF",continent: "Africa"},
    {name: "Congo - Brazzaville",code: "CG",id: 51,capital: "Brazzaville",currency: "XAF",continent: "Africa"},
    {name: "Congo - Kinshasa",code: "CD",id: 52,capital: "Kinshasa",currency: "CDF",continent: "Africa"},
    {name: "Cook Islands",code: "CK",id: 53,capital: "Avarua",currency: "NZD",continent: "Oceania"},
    {name: "Costa Rica",code: "CR",id: 54,capital: "San Jose",currency: "CRC",continent: "North America"},
    {name: "Côte d’Ivoire",code: "CI",id: 55,capital: "Yamoussoukro",currency: "XOF",continent: "Africa"},
    {name: "Croatia",code: "HR",id: 56,capital: "Zagreb",currency: "HRK",continent: "Europe"},
    {name: "Cuba",code: "CU",id: 57,capital: "Havana",currency: "CUP",continent: "North America"},
    {name: "Curaçao",code: "CW",id: 58,capital: "Willemstad",currency: "ANG",continent: "North America"},
    {name: "Cyprus",code: "CY",id: 59,capital: "Nicosia",currency: "EUR",continent: "Asia"},
    {name: "Czechia",code: "CZ",id: 60,capital: "Prague",currency: "CZK",continent: "Europe"},
    {name: "Denmark",code: "DK",id: 61,capital: "Copenhagen",currency: "DKK",continent: "Europe"},
    {name: "Djibouti",code: "DJ",id: 62,capital: "Djibouti",currency: "DJF",continent: "Africa"},
    {name: "Dominica",code: "DM",id: 63,capital: "Roseau",currency: "XCD",continent: "North America"},
    {name: "Dominican Republic",code: "DO",id: 64,capital: "Santo Domingo",currency: "DOP",continent: "North America"},
    {name: "Ecuador",code: "EC",id: 65,capital: "Quito",currency: "USD",continent: "South America"},
    {name: "Egypt",code: "EG",id: 66,capital: "Cairo",currency: "EGP",continent: "Africa"},
    {name: "El Salvador",code: "SV",id: 67,capital: "San Salvador",currency: "USD",continent: "North America"},
    {name: "Equatorial Guinea",code: "GQ",id: 68,capital: "Malabo",currency: "XAF",continent: "Africa"},
    {name: "Eritrea",code: "ER",id: 69,capital: "Asmara",currency: "ERN",continent: "Africa"},
    {name: "Estonia",code: "EE",id: 70,capital: "Tallinn",currency: "EUR",continent: "Europe"},
    {name: "Ethiopia",code: "ET",id: 71,capital: "Addis Ababa",currency: "ETB",continent: "Africa"},
    {name: "Falkland Islands (Islas Malvinas)",code: "FK",id: 72,capital: "Stanley",currency: "FKP",continent: "South America"},
    {name: "Faroe Islands",code: "FO",id: 73,capital: "Torshavn",currency: "DKK",continent: "Europe"},
    {name: "Fiji",code: "FJ",id: 74,capital: "Suva",currency: "FJD",continent: "Oceania"},
    {name: "Finland",code: "FI",id: 75,capital: "Helsinki",currency: "EUR",continent: "Europe"},
    {name: "France",code: "FR",id: 76,capital: "Paris",currency: "EUR",continent: "Europe"},
    {name: "French Guiana",code: "GF",id: 77,capital: "Cayenne",currency: "EUR",continent: "South America"},
    {name: "French Polynesia",code: "PF",id: 78,capital: "Papeete",currency: "XPF",continent: "Oceania"},
    {name: "French Southern Territories",code: "TF",id: 79,capital: "Port-aux-Francais",currency: "EUR",continent: "Antarctica"},
    {name: "Gabon",code: "GA",id: 80,capital: "Libreville",currency: "XAF",continent: "Africa"},
    {name: "Gambia",code: "GM",id: 81,capital: "Banjul",currency: "GMD",continent: "Africa"},
    {name: "Georgia",code: "GE",id: 82,capital: "Tbilisi",currency: "GEL",continent: "Asia"},
    {name: "Germany",code: "DE",id: 83,capital: "Berlin",currency: "EUR",continent: "Europe"},
    {name: "Ghana",code: "GH",id: 84,capital: "Accra",currency: "GHS",continent: "Africa"},
    {name: "Gibraltar",code: "GI",id: 85,capital: "Gibraltar",currency: "GIP",continent: "Europe"},
    {name: "Greece",code: "GR",id: 86,capital: "Athens",currency: "EUR",continent: "Europe"},
    {name: "Greenland",code: "GL",id: 87,capital: "Nuuk",currency: "DKK",continent: "North America"},
    {name: "Grenada",code: "GD",id: 88,capital: "St. George's",currency: "XCD",continent: "North America"},
    {name: "Guadeloupe",code: "GP",id: 89,capital: "Basse-Terre",currency: "EUR",continent: "North America"},
    {name: "Guam",code: "GU",id: 90,capital: "Hagatna",currency: "USD",continent: "Oceania"},
    {name: "Guatemala",code: "GT",id: 91,capital: "Guatemala City",currency: "GTQ",continent: "North America"},
    {name: "Guernsey",code: "GG",id: 92,capital: "St Peter Port",currency: "GBP",continent: "Europe"},
    {name: "Guinea",code: "GN",id: 93,capital: "Conakry",currency: "GNF",continent: "Africa"},
    {name: "Guinea-Bissau",code: "GW",id: 94,capital: "Bissau",currency: "XOF",continent: "Africa"},
    {name: "Guyana",code: "GY",id: 95,capital: "Georgetown",currency: "GYD",continent: "South America"},
    {name: "Haiti",code: "HT",id: 96,capital: "Port-au-Prince",currency: "HTG",continent: "North America"},
    {name: "Heard & McDonald Islands",code: "HM",id: 97,capital: "",currency: "AUD",continent: "Antarctica"},
    {name: "Vatican City",code: "VA",id: 98,capital: "Vatican City",currency: "EUR",continent: "Europe"},
    {name: "Honduras",code: "HN",id: 99,capital: "Tegucigalpa",currency: "HNL",continent: "North America"},
    {name: "Hong Kong",code: "HK",id: 100,capital: "Hong Kong",currency: "HKD",continent: "Asia"},
    {name: "Hungary",code: "HU",id: 101,capital: "Budapest",currency: "HUF",continent: "Europe"},
    {name: "Iceland",code: "IS",id: 102,capital: "Reykjavik",currency: "ISK",continent: "Europe"},
    {name: "India",code: "IN",id: 103,capital: "New Delhi",currency: "INR",continent: "Asia"},
    {name: "Indonesia",code: "ID",id: 104,capital: "Jakarta",currency: "IDR",continent: "Asia"},
    {name: "Iran",code: "IR",id: 105,capital: "Tehran",currency: "IRR",continent: "Asia"},
    {name: "Iraq",code: "IQ",id: 106,capital: "Baghdad",currency: "IQD",continent: "Asia"},
    {name: "Ireland",code: "IE",id: 107,capital: "Dublin",currency: "EUR",continent: "Europe"},
    {name: "Isle of Man",code: "IM",id: 108,capital: "Douglas, Isle of Man",currency: "GBP",continent: "Europe"},
    {name: "Israel",code: "IL",id: 109,capital: "Jerusalem",currency: "ILS",continent: "Asia"},
    {name: "Italy",code: "IT",id: 110,capital: "Rome",currency: "EUR",continent: "Europe"},
    {name: "Jamaica",code: "JM",id: 111,capital: "Kingston",currency: "JMD",continent: "North America"},
    {name: "Japan",code: "JP",id: 112,capital: "Tokyo",currency: "JPY",continent: "Asia"},
    {name: "Jersey",code: "JE",id: 113,capital: "Saint Helier",currency: "GBP",continent: "Europe"},
    {name: "Jordan",code: "JO",id: 114,capital: "Amman",currency: "JOD",continent: "Asia"},
    {name: "Kazakhstan",code: "KZ",id: 115,capital: "Astana",currency: "KZT",continent: "Asia"},
    {name: "Kenya",code: "KE",id: 116,capital: "Nairobi",currency: "KES",continent: "Africa"},
    {name: "Kiribati",code: "KI",id: 117,capital: "Tarawa",currency: "AUD",continent: "Oceania"},
    {name: "North Korea",code: "KP",id: 118,capital: "Pyongyang",currency: "KPW",continent: "Asia"},
    {name: "South Korea",code: "KR",id: 119,capital: "Seoul",currency: "KRW",continent: "Asia"},
    {name: "Kosovo",code: "XK",id: 120,capital: "Pristina",currency: "EUR",continent: "Europe"},
    {name: "Kuwait",code: "KW",id: 121,capital: "Kuwait City",currency: "KWD",continent: "Asia"},
    {name: "Kyrgyzstan",code: "KG",id: 122,capital: "Bishkek",currency: "KGS",continent: "Asia"},
    {name: "Laos",code: "LA",id: 123,capital: "Vientiane",currency: "LAK",continent: "Asia"},
    {name: "Latvia",code: "LV",id: 124,capital: "Riga",currency: "EUR",continent: "Europe"},
    {name: "Lebanon",code: "LB",id: 125,capital: "Beirut",currency: "LBP",continent: "Asia"},
    {name: "Lesotho",code: "LS",id: 126,capital: "Maseru",currency: "LSL",continent: "Africa"},
    {name: "Liberia",code: "LR",id: 127,capital: "Monrovia",currency: "LRD",continent: "Africa"},
    {name: "Libya",code: "LY",id: 128,capital: "Tripolis",currency: "LYD",continent: "Africa"},
    {name: "Liechtenstein",code: "LI",id: 129,capital: "Vaduz",currency: "CHF",continent: "Europe"},
    {name: "Lithuania",code: "LT",id: 130,capital: "Vilnius",currency: "EUR",continent: "Europe"},
    {name: "Luxembourg",code: "LU",id: 131,capital: "Luxembourg",currency: "EUR",continent: "Europe"},
    {name: "Macao",code: "MO",id: 132,capital: "Macao",currency: "MOP",continent: "Asia"},
    {name: "North Macedonia",code: "MK",id: 133,capital: "Skopje",currency: "MKD",continent: "Europe"},
    {name: "Madagascar",code: "MG",id: 134,capital: "Antananarivo",currency: "MGA",continent: "Africa"},
    {name: "Malawi",code: "MW",id: 135,capital: "Lilongwe",currency: "MWK",continent: "Africa"},
    {name: "Malaysia",code: "MY",id: 136,capital: "Kuala Lumpur",currency: "MYR",continent: "Asia"},
    {name: "Maldives",code: "MV",id: 137,capital: "Male",currency: "MVR",continent: "Asia"},
    {name: "Mali",code: "ML",id: 138,capital: "Bamako",currency: "XOF",continent: "Africa"},
    {name: "Malta",code: "MT",id: 139,capital: "Valletta",currency: "EUR",continent: "Europe"},
    {name: "Marshall Islands",code: "MH",id: 140,capital: "Majuro",currency: "USD",continent: "Oceania"},
    {name: "Martinique",code: "MQ",id: 141,capital: "Fort-de-France",currency: "EUR",continent: "North America"},
    {name: "Mauritania",code: "MR",id: 142,capital: "Nouakchott",currency: "MRO",continent: "Africa"},
    {name: "Mauritius",code: "MU",id: 143,capital: "Port Louis",currency: "MUR",continent: "Africa"},
    {name: "Mayotte",code: "YT",id: 144,capital: "Mamoudzou",currency: "EUR",continent: "Africa"},
    {name: "Mexico",code: "MX",id: 145,capital: "Mexico City",currency: "MXN",continent: "North America"},
    {name: "Micronesia",code: "FM",id: 146,capital: "Palikir",currency: "USD",continent: "Oceania"},
    {name: "Moldova",code: "MD",id: 147,capital: "Chisinau",currency: "MDL",continent: "Europe"},
    {name: "Monaco",code: "MC",id: 148,capital: "Monaco",currency: "EUR",continent: "Europe"},
    {name: "Mongolia",code: "MN",id: 149,capital: "Ulan Bator",currency: "MNT",continent: "Asia"},
    {name: "Montenegro",code: "ME",id: 150,capital: "Podgorica",currency: "EUR",continent: "Europe"},
    {name: "Montserrat",code: "MS",id: 151,capital: "Plymouth",currency: "XCD",continent: "North America"},
    {name: "Morocco",code: "MA",id: 152,capital: "Rabat",currency: "MAD",continent: "Africa"},
    {name: "Mozambique",code: "MZ",id: 153,capital: "Maputo",currency: "MZN",continent: "Africa"},
    {name: "Myanmar (Burma)",code: "MM",id: 154,capital: "Nay Pyi Taw",currency: "MMK",continent: "Asia"},
    {name: "Namibia",code: "NA",id: 155,capital: "Windhoek",currency: "NAD",continent: "Africa"},
    {name: "Nauru",code: "NR",id: 156,capital: "Yaren",currency: "AUD",continent: "Oceania"},
    {name: "Nepal",code: "NP",id: 157,capital: "Kathmandu",currency: "NPR",continent: "Asia"},
    {name: "Netherlands",code: "NL",id: 158,capital: "Amsterdam",currency: "EUR",continent: "Europe"},
    {name: "Curaçao",code: "AN",id: 159,capital: "Willemstad",currency: "ANG",continent: "North America"},
    {name: "New Caledonia",code: "NC",id: 160,capital: "Noumea",currency: "XPF",continent: "Oceania"},
    {name: "New Zealand",code: "NZ",id: 161,capital: "Wellington",currency: "NZD",continent: "Oceania"},
    {name: "Nicaragua",code: "NI",id: 162,capital: "Managua",currency: "NIO",continent: "North America"},
    {name: "Niger",code: "NE",id: 163,capital: "Niamey",currency: "XOF",continent: "Africa"},
    {name: "Nigeria",code: "NG",id: 164,capital: "Abuja",currency: "NGN",continent: "Africa"},
    {name: "Niue",code: "NU",id: 165,capital: "Alofi",currency: "NZD",continent: "Oceania"},
    {name: "Norfolk Island",code: "NF",id: 166,capital: "Kingston",currency: "AUD",continent: "Oceania"},
    {name: "Northern Mariana Islands",code: "MP",id: 167,capital: "Saipan",currency: "USD",continent: "Oceania"},
    {name: "Norway",code: "NO",id: 168,capital: "Oslo",currency: "NOK",continent: "Europe"},
    {name: "Oman",code: "OM",id: 169,capital: "Muscat",currency: "OMR",continent: "Asia"},
    {name: "Pakistan",code: "PK",id: 170,capital: "Islamabad",currency: "PKR",continent: "Asia"},
    {name: "Palau",code: "PW",id: 171,capital: "Melekeok",currency: "USD",continent: "Oceania"},
    {name: "Palestine",code: "PS",id: 172,capital: "East Jerusalem",currency: "ILS",continent: "Asia"},
    {name: "Panama",code: "PA",id: 173,capital: "Panama City",currency: "PAB",continent: "North America"},
    {name: "Papua New Guinea",code: "PG",id: 174,capital: "Port Moresby",currency: "PGK",continent: "Oceania"},
    {name: "Paraguay",code: "PY",id: 175,capital: "Asuncion",currency: "PYG",continent: "South America"},
    {name: "Peru",code: "PE",id: 176,capital: "Lima",currency: "PEN",continent: "South America"},
    {name: "Philippines",code: "PH",id: 177,capital: "Manila",currency: "PHP",continent: "Asia"},
    {name: "Pitcairn Islands",code: "PN",id: 178,capital: "Adamstown",currency: "NZD",continent: "Oceania"},
    {name: "Poland",code: "PL",id: 179,capital: "Warsaw",currency: "PLN",continent: "Europe"},
    {name: "Portugal",code: "PT",id: 180,capital: "Lisbon",currency: "EUR",continent: "Europe"},
    {name: "Puerto Rico",code: "PR",id: 181,capital: "San Juan",currency: "USD",continent: "North America"},
    {name: "Qatar",code: "QA",id: 182,capital: "Doha",currency: "QAR",continent: "Asia"},
    {name: "Réunion",code: "RE",id: 183,capital: "Saint-Denis",currency: "EUR",continent: "Africa"},
    {name: "Romania",code: "RO",id: 184,capital: "Bucharest",currency: "RON",continent: "Europe"},
    {name: "Russia",code: "RU",id: 185,capital: "Moscow",currency: "RUB",continent: "Asia"},
    {name: "Rwanda",code: "RW",id: 186,capital: "Kigali",currency: "RWF",continent: "Africa"},
    {name: "St. Barthélemy",code: "BL",id: 187,capital: "Gustavia",currency: "EUR",continent: "North America"},
    {name: "St. Helena",code: "SH",id: 188,capital: "Jamestown",currency: "SHP",continent: "Africa"},
    {name: "St. Kitts & Nevis",code: "KN",id: 189,capital: "Basseterre",currency: "XCD",continent: "North America"},
    {name: "St. Lucia",code: "LC",id: 190,capital: "Castries",currency: "XCD",continent: "North America"},
    {name: "St. Martin",code: "MF",id: 191,capital: "Marigot",currency: "EUR",continent: "North America"},
    {name: "St. Pierre & Miquelon",code: "PM",id: 192,capital: "Saint-Pierre",currency: "EUR",continent: "North America"},
    {name: "St. Vincent & Grenadines",code: "VC",id: 193,capital: "Kingstown",currency: "XCD",continent: "North America"},
    {name: "Samoa",code: "WS",id: 194,capital: "Apia",currency: "WST",continent: "Oceania"},
    {name: "San Marino",code: "SM",id: 195,capital: "San Marino",currency: "EUR",continent: "Europe"},
    {name: "São Tomé & Príncipe",code: "ST",id: 196,capital: "Sao Tome",currency: "STD",continent: "Africa"},
    {name: "Saudi Arabia",code: "SA",id: 197,capital: "Riyadh",currency: "SAR",continent: "Asia"},
    {name: "Senegal",code: "SN",id: 198,capital: "Dakar",currency: "XOF",continent: "Africa"},
    {name: "Serbia",code: "RS",id: 199,capital: "Belgrade",currency: "RSD",continent: "Europe"},
    {name: "Serbia",code: "CS",id: 200,capital: "Belgrade",currency: "RSD",continent: "Europe"},
    {name: "Seychelles",code: "SC",id: 201,capital: "Victoria",currency: "SCR",continent: "Africa"},
    {name: "Sierra Leone",code: "SL",id: 202,capital: "Freetown",currency: "SLL",continent: "Africa"},
    {name: "Singapore",code: "SG",id: 203,capital: "Singapur",currency: "SGD",continent: "Asia"},
    {name: "Sint Maarten",code: "SX",id: 204,capital: "Philipsburg",currency: "ANG",continent: "North America"},
    {name: "Slovakia",code: "SK",id: 205,capital: "Bratislava",currency: "EUR",continent: "Europe"},
    {name: "Slovenia",code: "SI",id: 206,capital: "Ljubljana",currency: "EUR",continent: "Europe"},
    {name: "Solomon Islands",code: "SB",id: 207,capital: "Honiara",currency: "SBD",continent: "Oceania"},
    {name: "Somalia",code: "SO",id: 208,capital: "Mogadishu",currency: "SOS",continent: "Africa"},
    {name: "South Africa",code: "ZA",id: 209,capital: "Pretoria",currency: "ZAR",continent: "Africa"},
    {name: "South Georgia & South Sandwich Islands",code: "GS",id: 210,capital: "Grytviken",currency: "GBP",continent: "Antarctica"},
    {name: "South Sudan",code: "SS",id: 211,capital: "Juba",currency: "SSP",continent: "Africa"},
    {name: "Spain",code: "ES",id: 212,capital: "Madrid",currency: "EUR",continent: "Europe"},
    {name: "Sri Lanka",code: "LK",id: 213,capital: "Colombo",currency: "LKR",continent: "Asia"},
    {name: "Sudan",code: "SD",id: 214,capital: "Khartoum",currency: "SDG",continent: "Africa"},
    {name: "Suriname",code: "SR",id: 215,capital: "Paramaribo",currency: "SRD",continent: "South America"},
    {name: "Svalbard & Jan Mayen",code: "SJ",id: 216,capital: "Longyearbyen",currency: "NOK",continent: "Europe"},
    {name: "Eswatini",code: "SZ",id: 217,capital: "Mbabane",currency: "SZL",continent: "Africa"},
    {name: "Sweden",code: "SE",id: 218,capital: "Stockholm",currency: "SEK",continent: "Europe"},
    {name: "Switzerland",code: "CH",id: 219,capital: "Berne",currency: "CHF",continent: "Europe"},
    {name: "Syria",code: "SY",id: 220,capital: "Damascus",currency: "SYP",continent: "Asia"},
    {name: "Taiwan",code: "TW",id: 221,capital: "Taipei",currency: "TWD",continent: "Asia"},
    {name: "Tajikistan",code: "TJ",id: 222,capital: "Dushanbe",currency: "TJS",continent: "Asia"},
    {name: "Tanzania",code: "TZ",id: 223,capital: "Dodoma",currency: "TZS",continent: "Africa"},
    {name: "Thailand",code: "TH",id: 224,capital: "Bangkok",currency: "THB",continent: "Asia"},
    {name: "Timor-Leste",code: "TL",id: 225,capital: "Dili",currency: "USD",continent: "Asia"},
    {name: "Togo",code: "TG",id: 226,capital: "Lome",currency: "XOF",continent: "Africa"},
    {name: "Tokelau",code: "TK",id: 227,capital: "",currency: "NZD",continent: "Oceania"},
    {name: "Tonga",code: "TO",id: 228,capital: "Nuku'alofa",currency: "TOP",continent: "Oceania"},
    {name: "Trinidad & Tobago",code: "TT",id: 229,capital: "Port of Spain",currency: "TTD",continent: "North America"},
    {name: "Tunisia",code: "TN",id: 230,capital: "Tunis",currency: "TND",continent: "Africa"},
    {name: "Turkey",code: "TR",id: 231,capital: "Ankara",currency: "TRY",continent: "Asia"},
    {name: "Turkmenistan",code: "TM",id: 232,capital: "Ashgabat",currency: "TMT",continent: "Asia"},
    {name: "Turks & Caicos Islands",code: "TC",id: 233,capital: "Cockburn Town",currency: "USD",continent: "North America"},
    {name: "Tuvalu",code: "TV",id: 234,capital: "Funafuti",currency: "AUD",continent: "Oceania"},
    {name: "Uganda",code: "UG",id: 235,capital: "Kampala",currency: "UGX",continent: "Africa"},
    {name: "Ukraine",code: "UA",id: 236,capital: "Kiev",currency: "UAH",continent: "Europe"},
    {name: "United Arab Emirates",code: "AE",id: 237,capital: "Abu Dhabi",currency: "AED",continent: "Asia"},
    {name: "United Kingdom",code: "GB",id: 238,capital: "London",currency: "GBP",continent: "Europe"},
    {name: "United States",code: "US",id: 239,capital: "Washington",currency: "USD",continent: "North America"},
    {name: "U.S. Outlying Islands",code: "UM",id: 240,capital: "",currency: "USD",continent: "North America"},
    {name: "Uruguay",code: "UY",id: 241,capital: "Montevideo",currency: "UYU",continent: "South America"},
    {name: "Uzbekistan",code: "UZ",id: 242,capital: "Tashkent",currency: "UZS",continent: "Asia"},
    {name: "Vanuatu",code: "VU",id: 243,capital: "Port Vila",currency: "VUV",continent: "Oceania"},
    {name: "Venezuela",code: "VE",id: 244,capital: "Caracas",currency: "VEF",continent: "South America"},
    {name: "Vietnam",code: "VN",id: 245,capital: "Hanoi",currency: "VND",continent: "Asia"},
    {name: "British Virgin Islands",code: "VG",id: 246,capital: "Road Town",currency: "USD",continent: "North America"},
    {name: "U.S. Virgin Islands",code: "VI",id: 247,capital: "Charlotte Amalie",currency: "USD",continent: "North America"},
    {name: "Wallis & Futuna",code: "WF",id: 248,capital: "Mata Utu",currency: "XPF",continent: "Oceania"},
    {name: "Western Sahara",code: "EH",id: 249,capital: "El-Aaiun",currency: "MAD",continent: "Africa"},
    {name: "Yemen",code: "YE",id: 250,capital: "Sanaa",currency: "YER",continent: "Asia"},
    {name: "Zambia",code: "ZM",id: 251,capital: "Lusaka",currency: "ZMW",continent: "Africa"},
    {name: "Zimbabwe",code: "ZW",id: 252,capital: "Harare",currency: "ZWL",continent: "Africa"}
];