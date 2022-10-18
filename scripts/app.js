const champions = ["aatrox", "ahri", "akali", "akshan", "alistar", "amumu", "anivia", "annie", "aphelios", "ashe", "aurelion sol", "azir", "bard", "bel'Veth", "blitzcrank", "brand", "braum", "caitlyn", "camille", "cassiopeia", "cho'gath", "corki", "darius", "diana", "dr mundo", "draven", "ekko", "elise", "evelynn", "ezreal", "fiddlesticks", "fiora", "fizz", "galio", "gangplank", "garen", "gnar", "gragas", "graves", "gwen", "hecarim", "heimerdinger", "illaoi", "irelia", "ivern", "janna", "jarvan iv", "jax", "jayce", "jhin", "jinx", "kai'sa", "kalista", "karma", "karthus", "kassadin", "katarina", "kayle", "kayn", "kennen", "kha'zix", "kindred", "kled", "kog'maw", "leblanc", "lee sin", "leona", "lillia", "lissandra", "lucian", "lulu", "lux", "malphite", "malzahar", "maokai", "master yi", "miss fortune", "mordekaiser", "morgana", "nami", "nasus", "nautilus", "neeko", "nidalee", "nilah", "nocturne", "nunu and willump", "olaf", "orianna", "ornn", "pantheon", "poppy", "pyke", "qiyana", "quinn", "rakan", "rammus", "rek'Sai", "rell", "renata glasc", "renekton", "rengar", "riven", "rumble", "ryze", "samira", "sejuani", "senna", "seraphine", "sett", "shaco", "shen", "shyvana", "singed", "sion", "sivir", "skarner", "sona", "soraka", "swain", "sylas", "syndra", "tahm kench", "taliyah", "talon", "taric", "teemo", "thresh", "tristana", "trundle", "tryndamere", "twisted fate", "twitch", "udyr", "urgot", "varus", "vayne", "veigar", "vel'koz", "vex", "vi", "viego", "viktor", "vladimir", "volibear", "warwick", "wukong", "xayah", "xerath", "xin zhao", "yasuo", "yone", "yorick", "yuumi", "zac", "zed", "zeri", "ziggs", "zilean", "zoe", "zyra"];
let score = 0;

setInterval(checkScore, 1000);
setInterval(search, 1);

$("#champion-name").keypress(function (event) {
    if (event.keyCode === 13) {
        $("#btn").click();
    }
});

$("#btn").click(function search() {
    let postacInput = document.getElementById('champion-name').value;
    let postac = postacInput.toLowerCase();

    for (var i = 0; i <= 161; i++) {
        if (postac == champions[i] && champions[i] !== "finded") {
            let licznik = i + 1;
            $('.app-window>div:nth-child(' + licznik + ')').addClass('solved').removeClass('champ-cover');
            $('.app-window>div:nth-child(' + licznik + ')').addClass('new' + licznik)
            score = score + 1;
            document.getElementById("actual-score").innerHTML = score;
            champions.splice(i, 1, "finded");
            $('#champion-name').val('');
            $('body, html').animate({
                scrollTop: $(".new" + licznik).offset().top
            }, 500)
        }
        else {
        }
    }
});

function search() {
    let postacInput = document.getElementById('champion-name').value;
    let postac = postacInput.toLowerCase();

    for (var i = 0; i <= 161; i++) {
        if (postac == champions[i] && champions[i] !== "finded") {
            let licznik = i + 1;
            $('.app-window>div:nth-child(' + licznik + ')').addClass('solved').removeClass('champ-cover');
            $('.app-window>div:nth-child(' + licznik + ')').addClass('new' + licznik)
            score = score + 1;
            document.getElementById("actual-score").innerHTML = score;
            champions.splice(i, 1, "finded");
            $('#champion-name').val('');
            $('body, html').animate({
                scrollTop: $(".new" + licznik).offset().top
            }, 500)
        } else { }
    }
}

function checkScore() {
    if (score === 161) {
        for (let i = 0; i <= 161; i++) {
            if (champions[i] === "finded") {
                let licznik = i + 1;
                $('.app-window>div:nth-child(' + licznik + ')').addClass('success').removeClass('solved');
                champions.splice(i, 1, "success");
                $('.input-bar').addClass('hidden');
                $('.bgc').addClass('hidden');
                $('#timer').addClass('hidden');
            }
            else { }

        }
    }
}

window.onbeforeunload = function () {
    return "Data will be lost if you leave the page, are you sure?";
};










