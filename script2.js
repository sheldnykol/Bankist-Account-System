function later(name, later) {
  console.log("I'll call the callback in 2 seconds...");
  setTimeout(() => {
    //console.log(later(name));
    later(name);
  }, 6000);
}

// Χρήση
later("George", function (name) {
  console.log("Hello " + name + "!");
});

// Output:
// I'll call the callback in 2 seconds...
// (after 2 sec) Hello George!

//user id from login
// use id to learn about name email
// from email ask the avatar
// with user id learn about posts followers

// function login(username, callaback) {
//   setTimeout(() => callaback(username), 1000);
// }
// function getUserProfile(userId, callback) {
//   setTimeout(() => callback(userId), 1000);
// }
// function getUserEmail(userEmail, callback) {
//   setTimeout(() => callback(userEmail), 1000);
// }
// function getLatestPost(userEmail, callback) {
//   setTimeout(() => callback(userEmail), 1000);
// }

//parallel
// login("Γιώργος Κολώνας", function (username) {
//   console.log(`Name : ${username}`);
//   getUserProfile("https://gravatar.com/abc123", function (id) {
//     console.log(`Avatar: : ${id}`);
//   });
//   getUserEmail("georgekolonas23@gmail.com", function (email) {
//     console.log(`Email : ${email}`);
//   });
//   getLatestPost(
//     "Today i went to the gym and i i hitted my triceps",
//     function (latestPost) {
//       console.log(`Latest post : ${latestPost}`);
//     },
//   );
// });

// console.log("callaback hell (with no arguments passing to next function) ");
// login("Γιώργος Κολώνας", function (username) {
//   console.log(`Name : ${username}`);
//   getUserProfile("https://gravatar.com/abc123", function (id) {
//     console.log(`Avatar: : ${id}`);
//     getUserEmail("georgekolonas23@gmail.com", function (email) {
//       console.log(`Email : ${email}`);
//       getLatestPost(
//         "Today i went to the gym and i i hitted my triceps",
//         function (latestPost) {
//           console.log(`Latest post : ${latestPost}`);
//         },
//       );
//     });
//   });
// });

/////////////////////////// promises /////////////////////
function login(username) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 123, name: username });
    }, 1000);
  });
}

function getProfile(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ email: "george@example.com", name: "Γιώργος Κολώνας" });
    }, 1000);
  });
}

function getAvatar(email) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("https://gravatar.com/avatar/abc123");
    }, 1000);
  });
}

function getLatestPost(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Σήμερα έφαγα σουβλάκια και ήμουν ευτυχισμένος");
    }, 1000);
  });
}


// console.log("With Promises");
// login("Γιώργος Κολώνας")
//   .then(user => {
//     console.log("Name :", user.name);
//     return getProfile(user.userId);           // επιστρέφουμε το επόμενο Promise
//   })
//   .then(profile => {
//     console.log("Email :", profile.email);
//     return getAvatar(profile.email);
//   })
//   .then(avatar => {
//     console.log("Avatar:", avatar);
//     return getLatestPost(123);                // userId το ξέρουμε ακόμα
//   })
//   .then(post => {
//     console.log("Latest post:", post);
//     console.log("ΤΕΛΟΣ! Όλα έτοιμα!");
//   })
//   .catch(err => console.error("Κάτι έσπασε:", err));



  console.log("With Promises + Promise.all (ΤΟ ΑΛΗΘΙΝΟ ΘΑΥΜΑ)");

login("Γιώργος Κολώνας")
  .then(user => {
    console.log("Name :", user.name);

    // ΕΔΩ ΞΕΚΙΝΑΕΙ Η ΜΑΓΕΙΑ
    return Promise.all([
      getProfile(user.userId),
      getAvatar("george@example.com"),        // μπορεί να ξεκινήσει ΑΜΕΣΩΣ
      getLatestPost(user.userId)              // και αυτό ΑΜΕΣΩΣ
    ]).then(([profile, avatar, post]) => {
      console.log("Email :", profile.email);
      console.log("Avatar:", avatar);
      console.log("Latest post:", post);
      console.log("ΤΕΛΟΣ ΣΕ 2 ΔΕΥΤΕΡΟΛΕΠΤΑ ΜΟΝΟ!");
    });
  })
  .catch(err => console.error("Κάτι έσπασε:", err));


  //async await 
  async function fastProfile() {
  const user = await login("Γιώργος Κολώνας");
  console.log("Name :", user.name);

  const [profile, avatar, post] = await Promise.all([
    getProfile(user.userId),
    getAvatar("george@example.com"),
    getLatestPost(user.userId)
  ]);

  console.log("Email :", profile.email);
  console.log("Avatar:", avatar);
  console.log("Latest post:", post);
  console.log("ΤΕΛΟΣ ΣΕ 2 ΔΕΥΤΕΡΟΛΕΠΤΑ – ΣΑΝ ΕΠΑΓΓΕΛΜΑΤΙΑΣ");
}

fastProfile();