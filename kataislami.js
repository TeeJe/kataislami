/* MM clone module
 * Module: kataislami
 *
 * Original By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

Module.register("kataislami",{

	// Module config defaults.
	defaults: {
		compliments: {
			morning: [
				"Sebaiknya shalat Duha dilakukan antara jam 08.00- 11.00",
				"Non Aktifkan HP anda",
				"Lurus dan rapatkan Saf anda",
				"Berfikir sesaat sungguh lebih mengesankan ketimbang mengerjakan shalat sepanjang malam. (Hasan Bashri)",
				"Orang yang bijak tidak akan terpeleset oleh harta, dan meski terpeleset, ia akan tetap mendapatkan pegangan. (Abdullah bin Abbas)",
				"Wahai Ali! Ketahuilah olehmu bahwa ada 2 golongan yang celaka di hadapanmu. Yang terlalu cinta kepadamu dan yg terlalu benci kepadamu. (Nabi MUHAMMAD SAW)",
				"Apabila secara kebetulan kamu menjadi orang yg dekat dengan penguasa, maka berhati-hatilah kamu seolah-olah sedang berdiri di atas pedang yg tajam sekali. (Imam Ghozali)",
				"Amal yang paling dicintai oleh Allah adalah yg terus menerus meski hanya sedikit. (Nabi Muhammad SAW)",
				"Jangan sampai ayam jantan lebih pandai darimu. Ia berkokok di waktu subuh, sedang kamu tetap lelap dalam tidur. (Lukman Hakim).",
				"Maka ingatlah nikmat-nikmat Allah supaya kamu mendapat keberuntungan. (QS.7:69)",
				"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. (QS.2:286)",
				"Cintamu kpd sesuatu menjadikan kamu buta dan tuli (HR.Abu Dawud & Ahmad)",
				"Tiada makanan yg lebih baik daripada hasil usaha tangan sendiri. (HR.Bukhari)"
			],
			afternoon: [
				"Jadikanlah sabar & shalat sbg penolongmu. Sesungguhnya yg demikian itu sungguh berat, kecuali bagi orang2 yg khusyu,(QS.2:45)",
				"Lurus dan rapatkan Saf anda",
				"Non Aktifkan HP anda",
				"Barang siapa tidak mencintai untuk agama dan membenci untuk agama, maka ketahuilah bahwa sesungguhnya ia tidak memiliki agama. (Abu Abdilah al- Shdiq)",
				"Fikiran merupakan sumber dari ilmu, sedang ilmu itu sendiri merupakan sumber amal. (Wahb)",
				"Dalam shalatku selama 40 tahun, aku tak pernah lupa mendo’akan guruku yg bernama Imam Syafi’i. Itu kulakukan karena memperoleh ilmu dari Allah lewat beliau. (Yahya bin Said al-Qathan)",
				"Sifat rendah hati, yaitu taat dalam mengerjakan kebenaran dan menerima kebenaran itu yang datangnya dari siapapun. (Fudlail bin Iyadl)",
				"Andaikata seseorang mau memikirkan kebesaran Allah, maka ia takkan sampai hati untuk melakukan perbuatan perbuatan dosa. (Bisyir)",
				"Allah telah memberikan petunjuk kepadaku sehinga aku bisa mengenali diriku sendiri dengan segala kelemahan dan kehinaanku. (Ali BinAbu Thalib)",
				"Ya Tuhan kami, limpahkanlah kesabaran & wafatkanlah kami dlm keadaan berserah diri (QS.7:126)",
				"Barangsiapa mengutamakan kecintaan Allah atas kecintaan manusia maka Allah akan melindunginya dr beban gangguan manusia. (HR. Ad-Dailami)",
				"Kewajiban lebih banyak daripada waktu, maka bantulah saudaramu menggunakan waktu sebaik-baiknya (Hasan al-Banna)",
				"Tiada makanan yang lebih baik daripada hasil usaha tangan sendiri. (HR.Bukhari)"
			],
			evening: [
				"Mohonlah pertolongan dengan shabar dan shalat",
				"Lurus dan rapatkan Saf anda",
				"Non Aktifkan HP anda",
				"Bagi orang berilmu yang ingin meraih kebahagiaan di dunia maupun di akhirat, maka kuncinya hendaklah ia mengamalkan ilmunya kepada orang-orang. (Syaikh Abdul Qodir Jailani)",
				"Dan jika kamu menghitung-hitung nikmat Allah, niscaya kamu tak dapat menentukan jumlahnya. Sesungguhnya Allah benar-benar Maha Pengampun lagi Maha Penyayang. (QS.16:18)",
				"Sungguh akan Kami berikan cobaan kepadamu, dengan sedikit ketakutan, kelaparan, kekurangan harta, jiwa & buah-buahan.Dan berikanlah berita gembira kepada orang2 yg sabar. (QS.2:155)",
				"Hai orang-orang yang beriman, jadikanlah sabar dan shalat sebagai penolongmu, sesungguhnya Allah beserta orang-orang yang sabar. (QS.2:153)",
				"Karena itu,ingatlah kamu kepada-Ku niscaya Aku ingat (pula) kepadamu, dan bersyukurlah kepada-Ku, dan janganlah kamu mengingkari (nikmat)-Ku. (QS.2:152)",
				"Hendaklah kamu tetap berbuat baik kepada orang yang berbuat jelek kepadamu. (Lukman Hakim)",
				"Dan bahwasanya seorang manusia tiada memperoleh selain apa yg telah diusahakannya. (Qs An Najm:39)",
				"Hati-hatilah terhadap orang yg teraniaya, karena doanya akan terangkat sampai ke langit",
				"Orang yang suka menghina orang lain, dia akan dihina. (Umar bin Khattab)",
				"Tanda2 orang bijaksana antara lain adalah lidahnya selalu basah dgn dzikrullah. (Utsman bin Affan)"
			]
		},
		updateInterval: 40000,
		fadeSpeed: 10000
	},

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define start sequence.
	start: function() {
		Log.info("Starting module: " + this.name);

		this.lastComplimentIndex = -1;

		// Schedule update timer.
		var self = this;
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
	},

	/* randomIndex(kata islami)
	 * Generate a random index for a list of kata islami.
	 *
	 * argument compliments Array<String> - Array with compliments.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * compliments.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex = complimentIndex;

		return complimentIndex;
	},

	/* complimentArray()
	 * Retrieve an array of kata islami for the time of the day.
	 *
	 * return compliments Array<String> - Array with kata islami for the time of the day.
	 */
	complimentArray: function() {
		var hour = moment().hour();

		if (hour >= 3 && hour < 12) {
			return this.config.compliments.morning;
		} else if (hour >= 12 && hour < 17) {
			return this.config.compliments.afternoon;
		} else {
			return this.config.compliments.evening;
		}
	},

	/* complimentArray()
	 * Retrieve a random kata islami.
	 *
	 * return compliment string - A kata islami.
	 */
	randomCompliment: function() {
		var compliments = this.complimentArray();
		var index = this.randomIndex(compliments);

		return compliments[index];
	},

	// Override dom generator.
	getDom: function() {
		var complimentText = this.randomCompliment();

		var compliment = document.createTextNode(complimentText);
		var wrapper = document.createElement("div");
		wrapper.className = "thin medlar3 bright";
		wrapper.style.color = "coral";
		wrapper.appendChild(compliment);

		return wrapper;
	}

});
