const hobbie = ["Sports", "Studying"];
const otherHobbies = ["Play Guitar"];

const copyHobbies = [...hobbie];
console.log(copyHobbies);

const copyOtherHobbies = [...otherHobbies];
console.log(copyOtherHobbies);

const mergedHobbies = [...hobbie, ...otherHobbies];
console.log(mergedHobbies);
