cur_lang = "sv";

const all_langs = ["sv", "en", "jp"];

notCurLangs = all_langs.filter(function(x) { return x !== cur_lang; });

const LAST_UPDATED = "2017-06-21"
const LAST_UPDATED_JP = "平成２９年６月２１日"

const ids = [
	"name",
	"blog",
	"courses",
	"cv",
	"intro",
	"foot",
	"write",
	"contact"
]

window.langs = {
	"site_name": "vholmer",
	"sv_name": "Viktor Holmér",
	"sv_intro": "Trevligt att du hittat hit! Jag har studerat till civilingenjör sedan tidernas begynnelse, dvs 2013. Jag hoppas kunna bli klar till 2019 och hinna med en utbytestripp till Japan däremellan någonstans. På den här sidan är det tänkt att du skall kunna hitta lite allmän information om det jag skrivit under intressen här ovanför.",
	"sv_blog": "Blogg",
	"sv_write": "Texter",
	"sv_courses": "Kurser",
	"sv_cv": "CV",
	"sv_contact": "Kontakt",
	"sv_foot": "Senast uppdaterad " + LAST_UPDATED,

	"en_name": "Viktor Holmér",
	"en_intro": "",
	"en_blog": "Blog",
	"en_write": "Texts",
	"en_courses": "Courses",
	"en_cv": "Resumé",
	"en_contact": "Contact",
	"en_foot": "Last updated " + LAST_UPDATED,

	"jp_name": "ホルメール・ビクトル",
	"jp_intro": "僕の自分で作った網処へ歓迎。",
	"jp_blog": "ブログ",
	"jp_courses": "課程",
	"jp_cv": "履歴書",
	"jp_contact": "連絡",
	"jp_foot": "最終更新日　" + LAST_UPDATED_JP,
	"jp_write": "著述",
}

function loadElement(id) {
	document.getElementById(id).innerHTML = window.langs[cur_lang + "_" + id];
}

function loadText() {
	document.getElementById("site_name").innerHTML = window.langs["site_name"];
	for (let item of ids) {
		loadElement(item);
	}
	document.getElementById("lang0").src = "./images/" + notCurLangs[0] + ".png";
	document.getElementById("lang1").src = "./images/" + notCurLangs[1] + ".png";
}

function changeLang(i) {
	cur_lang = notCurLangs[i];
	notCurLangs = all_langs.filter(function(x) { return x !== cur_lang; });
	loadText();
}