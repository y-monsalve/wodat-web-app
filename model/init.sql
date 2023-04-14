
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS safe_places;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    password VARCHAR(200) NOT NULL,
    user_pic VARCHAR(1000) NOT NULL
);

CREATE TABLE safe_places (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  sp_name VARCHAR(50) NOT NULL,
  location ENUM('lugagge', 'box', 'bag', 'other') NOT NULL, 
  location_description VARCHAR(500) NOT NULL,
  location_pic VARCHAR(1000) NOT NULL,
  sp_tags VARCHAR(1000) NOT NULL,
  user_id INT NOT NULL DEFAULT 0 UNIQUE,
  FOREIGN KEY (user_id) REFERENCES users(id)

);

CREATE TABLE items (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  item_name VARCHAR(300) NOT NULL,
  quantity INT NOT NULL DEFAULT 0,
  item_pic VARCHAR(1000) NOT NULL,
  sp_id INT NOT NULL DEFAULT 0 UNIQUE,
  FOREIGN KEY (sp_id) REFERENCES safe_places(id)
);




