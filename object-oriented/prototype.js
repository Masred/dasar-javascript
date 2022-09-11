function Mail() {
  this.from = "pengirim@dicoding.com";
}

Mail.prototype.sendMessage = function (msg, to) {
  console.log(`you send: ${msg} to ${to} from ${this.from}`);
};

// pemanggilan

const mail1 = new Mail();
mail1.sendMessage("hallo", "penerima@dicoding.com");

/**
output:
you send: hallo to penerima@dicoding.com from pengirim@dicoding.com
**/
