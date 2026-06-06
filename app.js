// 1. KRIPTO PAROL GENERATOR
function yaratParol() {
    const ism = document.getElementById("parolIsm").value.trim();
    const yil = document.getElementById("parolYil").value;
    const natija = document.getElementById("parolNatija");

    if (!ism || !yil) {
        ko'rsatNatija(natija, "lose", "Iltimos, ism va yilni kiriting!");
        return;
    }

    // Parol logikasi: Ismning bosh harfi (Katta) + oxirgi ikki harfi + yilning teskarisi + maxsus belgi
    const boshHarf = ism.charAt(0).toUpperCase();
    const oxirgiIkki = ism.slice(-2).toLowerCase();
    const yilTeskari = yil.toString().split('').reverse().join('');
    const simvollar = ["$", "@", "!", "#", "*", "&"];
    const tasodifiySimvol = simvollar[Math.floor(Math.random() * simvollar.length)];

    const kuchliParol = `${boshHarf}${oxirgiIkki}${tasodifiySimvol}${yilTeskari}`;
    ko'rsatNatija(natija, "win", `Siz uchun xavfsiz parol: ${kuchliParol}`);
}

// 2. TOSH, QAYCHI, QOG'OZ O'YINI
function boshlaOyin() {
    const userTanlov = document.getElementById("oyinTanlov").value;
    const natija = document.getElementById("oyinNatija");

    if (!userTanlov) {
        ko'rsatNatija(natija, "lose", "Avval biror amalni tanlang!");
        return;
    }

    const variantlar = ["tosh", "qaychi", "qogoz"];
    // Bot tasodifiy bittasini tanlaydi
    const botTanlov = variantlar[Math.floor(Math.random() * 3)];

    const sarguzasht = `Siz: ${userTanlov.toUpperCase()} | Bot: ${botTanlov.toUpperCase()}.\n`;

    if (userTanlov === botTanlov) {
        ko'rsatNatija(natija, "draw", `${sarguzasht} Durrang! Do'stlik g'alaba qozondi 🤝`);
    } else if (
        (userTanlov === "tosh" && botTanlov === "qaychi") ||
        (userTanlov === "qaychi" && botTanlov === "qogoz") ||
        (userTanlov === "qogoz" && botTanlov === "tosh")
    ) {
        ko'rsatNatija(natija, "win", `${sarguzasht} G'alaba! Bot taslim bo'ldi 🎉`);
    } else {
        ko'rsatNatija(natija, "lose", `${sarguzasht} Afsus, bot sizni yutib qo'ydi 🤖`);
    }
}

// 3. SEHRLI SHAR (MAGIC 8-BALL)
function savolBer() {
    const savol = document.getElementById("savolInput").value.trim();
    const natija = document.getElementById("sharNatija");

    if (savol === "") {
        ko'rsatNatija(natija, "lose", "Shardan so'rash uchun savol yozing!");
        return;
    }

    const javoblar = [
        "Shubhasiz, shunday bo'ladi! ✅",
        "Bunga hozircha ishonchim komil emas... 🌐",
        "Yaxshisi buni keyinroq so'raganing ma'qul ⏳",
        "Mening javobim: YO'Q, aslo bunday qilma 🛑",
        "Yulduzlar senga muvaffaqiyat va'da qilmoqda ✨",
        "Ehtimoli juda juda kam 📉"
    ];

    // Tasodifiy ravishda bitta javobni tanlash
    const tasodifiyIndeks = Math.floor(Math.random() * javoblar.length);
    const yakuniyJavob = javoblar[tasodifiyIndeks];

    // Bu qismda rangni javob turiga qarab moslaymiz
    if (tasodifiyIndeks === 0 || tasodifiyIndeks === 4) {
        ko'rsatNatija(natija, "win", yakuniyJavob);
    } else if (tasodifiyIndeks === 1 || tasodifiyIndeks === 2) {
        ko'rsatNatija(natija, "draw", yakuniyJavob);
    } else {
        ko'rsatNatija(natija, "lose", yakuniyJavob);
    }
}

// Yordamchi vizual funksiya
function ko'rsatNatija(element, statusClass, matn) {
    element.style.display = "block";
    element.className = "result " + statusClass;
    element.innerText = matn;
}
