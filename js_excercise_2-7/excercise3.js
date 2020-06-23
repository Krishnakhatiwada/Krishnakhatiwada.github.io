var bio = {
  name: "krishna khatiwada",
  address: "jorpati kathmandu",
  email: "krishna123khati@gmail.com",
  interest: "football",
  education: [
    {
      name: "Naami",
      date: 2018,
    },
    {
      name: "Bajra",
      date: 2016,
    },
  ],
};
bio.education.forEach(showEducation);
function showEducation(value) {
  console.log("Name:" + value.name + "," + "Date:" + value.date);
}
