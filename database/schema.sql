DROP DATABASE IF EXISTS booking_service;

CREATE DATABASE booking_service;

use booking_service;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  userName VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
  id INT NOT NULL AUTO_INCREMENT,
  ownerName VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS listings;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT,
  owner_id INT NOT NULL,
  minStay INT NOT NULL,
  maxGuests INT NOT NULL,
  cleaningFee DECIMAL(8, 2) NOT NULL,
  areaTax DECIMAL(8, 2) NOT NULL,
  userViews INT NOT NULL,
  oftenBooked INT NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS days;

CREATE TABLE days (
  id INT NOT NULL AUTO_INCREMENT,
  listing_id INT NOT NULL,
  calendarDate DATE NOT NULL,
  price DECIMAL(8, 2) NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS bookings;

CREATE TABLE bookings (
  id INT NOT NULL AUTO_INCREMENT,
  listing_id INT NOT NULL,
  user_id INT NOT NULL,
  booking_start_date INT NOT NULL,
  booking_end_date INT NOT NULL,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT,
  rating INT NOT NULL,
  user_id INT NOT NULL,
  listing_id INT NOT NULL,
  PRIMARY KEY (id)
);

ALTER TABLE listings ADD FOREIGN KEY (owner_id) REFERENCES owners (id);
ALTER TABLE days ADD FOREIGN KEY (listing_id) REFERENCES listings (id);
ALTER TABLE bookings ADD FOREIGN KEY (listing_id) REFERENCES listings (id);
ALTER TABLE bookings ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE bookings ADD FOREIGN KEY (booking_start_date) REFERENCES days (id);
ALTER TABLE bookings ADD FOREIGN KEY (booking_end_date) REFERENCES days (id);
ALTER TABLE reviews ADD FOREIGN KEY (user_id) REFERENCES users (id);
ALTER TABLE reviews ADD FOREIGN KEY (listing_id) REFERENCES listings (id);

