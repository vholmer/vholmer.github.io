cur_lang = "sv";

all_langs = ["sv", "en", "jp"];

LAST_UPDATED = "2017-06-21"

window.langs = {
	"site_name": "vholmer",
	"sv_name": "Viktor Holmér",
	"sv_intro": "Trevligt att du hittat hit! Jag har studerat till civilingenjör sedan tidernas begynnelse, dvs 2013. Jag hoppas kunna bli klar till 2018 och hinna med en utbytestripp till Japan däremellan någonstans. På den här sidan är det tänkt att du skall kunna hitta lite allmän information om det jag skrivit under intressen här ovanför.",
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

	"jp_name": "ビクトル・ホルメール",
	"jp_intro": "",
	"jp_blog": "",
	"jp_courses": "",
	"jp_cv": "",
	"jp_foot": "",
	"jp_write": "",
}

function loadName() {
	document.getElementById("header").innerHTML = window.langs[cur_lang + "_name"];
}

function loadBlog() {
	document.getElementById("blog").innerHTML = window.langs[cur_lang + "_blog"];
}

function loadCourses() {
	document.getElementById("courses").innerHTML = window.langs[cur_lang + "_courses"];
}

function loadCV() {
	document.getElementById("cv").innerHTML = window.langs[cur_lang + "_cv"];
}

function loadIntro() {
	document.getElementById("intro").innerHTML = window.langs[cur_lang + "_intro"];
}

function loadFoot() {
	document.getElementById("foot").innerHTML = window.langs[cur_lang + "_foot"];
}

function loadWrite() {
	document.getElementById("write").innerHTML = window.langs[cur_lang + "_write"];
}

function loadContact() {
	document.getElementById("contact").innerHTML = window.langs[cur_lang + "_contact"];
}

function loadLang() {
	document.getElementById("title").innerHTML = window.langs["site_name"];
	loadName();
	loadBlog();
	loadCourses();
	loadCV();
	loadIntro();
	loadFoot();
	loadWrite();
	loadContact();
}