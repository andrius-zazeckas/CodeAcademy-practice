// ToDo: apsibrezti vartotojus (vardas, sutikimo versija).
// Masyvas - Vartotojai sutike su x versija ir masyvas - vartotojai nesutike su x versija,
// masyvas - vartotojai visiskai nesutike su privatumo politika.

const getConsumers = (consumerCount = 0) => {
  const consumers = [];

  function Consumer(firstName, agreedPrivacyPolicyVersion = null) {
    this.firstName = firstName;
    this.agreedPrivacyPolicyVersion = agreedPrivacyPolicyVersion;
  }

  const getRandomName = (randomNumber) => {
    switch (randomNumber) {
      case 0:
        return "Tomas";
      case 1:
        return "Jonas";
      case 2:
        return "Andrius";
      case 3:
        return "Kamile";
      case 4:
        return "Simona";
      case 5:
        return "Irma";
      default:
        return null;
    }
  };

  for (let index = 0; index < consumerCount; index++) {
    const randomNumber = Math.round(Math.random() * 5);
    const firstName = getRandomName(randomNumber);
    const agreedPrivacyPolicyVersion =
      randomNumber <= 0.1 ? null : randomNumber + 0.1;
    const consumer = new Consumer(firstName, agreedPrivacyPolicyVersion);

    consumers.push(consumer);
  }
  return consumers;
};

const consumers = getConsumers(50);
const consumersAgreedToPrivacyPolicyVersionX = [];
const consumersNotAgreedToPrivacyPolicyVersionX = [];
const consumersNotAgreedToPrivacyPolicy = [];

consumers.forEach((consumer) => {
  //   if (consumer.agreedPrivacyPolicyVersion > 3) {
  //     consumersAgreedToPrivacyPolicyVersionX.push(consumer);
  //   } else if (consumer.agreedPrivacyPolicyVersion === null) {
  //     consumersNotAgreedToPrivacyPolicy.push(consumer);
  //   } else {
  //     consumersNotAgreedToPrivacyPolicyVersionX.push(consumer);
  //   }
  if (consumer.agreedPrivacyPolicyVersion > 3) {
    consumersAgreedToPrivacyPolicyVersionX.push(consumer);
    return;
  }
  if (consumer.agreedPrivacyPolicyVersion === null) {
    consumersNotAgreedToPrivacyPolicy.push(consumer);
    return;
  }
  consumersNotAgreedToPrivacyPolicyVersionX.push(consumer);
});

console.log({
  consumersAgreedToPrivacyPolicyVersionX,
  consumersNotAgreedToPrivacyPolicyVersionX,
  consumersNotAgreedToPrivacyPolicy,
});
