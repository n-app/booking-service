const db = require('../database/index');
const mock = require('./generateData');

const userAccounts = mock.generateFirstName(755);
const ownerAccounts = mock.generateFirstName(100);
const listingInfo = mock.generateAllListingInfo(100);
const allBookings = mock.generateAllBookings(100, 755);
const listingReviews = mock.generateAllReviews(100, 755);

userAccounts.forEach((user) => {
  db.insertMockData(`INSERT INTO users (userName) VALUES ("${user}")`);
});

ownerAccounts.forEach((owner) => {
  db.insertMockData(`INSERT INTO owners (ownerName) VALUES ("${owner}")`);
});

listingInfo.forEach((listing) => {
  db.insertMockData(`INSERT INTO listings (owner_id, maxGuests, price, minStay, cleaningFee, areaTax)
    VALUES (${listing[0]}, ${listing[1]}, ${listing[2]}, ${listing[3]}, ${listing[4]}, ${listing[5]})`);
});

allBookings.forEach((booking) => {
  db.insertMockData(`INSERT INTO bookings (listing_id, user_id, startDate, endDate)
    VALUES (${booking[0]}, ${booking[1]}, "${booking[2]}", "${booking[3]}")`);
});

listingReviews.forEach((review) => {
  db.insertMockData(`INSERT INTO reviews (rating, listing_id)
    VALUES (${review[0]}, ${review[1]})`);
});
