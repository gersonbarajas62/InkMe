DROP DATABASE IF EXISTS inkMe;

CREATE DATABASE inkMe;

USE inkMe;

CREATE TABLE styles (
  id int NOT NULL AUTO_INCREMENT,
  style varchar(60) NOT NULL,
  info  LONGTEXT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE images (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(32) NOT NULL,
  styleID int,
  FOREIGN KEY (styleID) REFERENCES styles(id),
  PRIMARY KEY (id)
);

CREATE TABLE studios (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(60) NOT NULL,
  address varchar(150) NOT NULL,
  styleID int,
  FOREIGN KEY (styleID) REFERENCES styles(id),
  PRIMARY KEY (id)
);

CREATE TABLE users (
id int AUTO_INCREMENT PRIMARY KEY,
email varchar(300),
name varchar(200),
provider varchar(50),
provider_id varchar(200),
provider_pic varchar(200),
token varchar(500))
;

CREATE TABLE appointments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  clientName VARCHAR(20),
  apptDate DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  email varchar(60),
  bodyPart varchar(20),
  studio VARCHAR(60)
);

/*
CREATE TABLE appointments (
  id int NOT NULL AUTO_INCREMENT,
  bodyPart varchar(60),
  apptDate DATE,
  studio int,
  FOREIGN KEY (studio) REFERENCES studios(id),
  PRIMARY KEY (ID),
  name int,
  FOREIGN KEY (name) REFERENCES users(id)
);
*/


INSERT INTO styles (style,info) VALUES ("Traditional","The traditional style is known for its bold lines, bright colors, and iconic designs like roses, anchors, and gorgeous lady heads. With heavy hitters in the history of Traditional like Sailor Jerry, Don Ed Hardy, Bert Grimm, and Lyle Tuttle, this style of tattooing is one of the most well-known and beloved aesthetics within the tattoo community. They're gorgeous from the get go, age beautifully, and are filled with the history of tattooing. You can't really go wrong with a piece in this genre!
");

INSERT INTO styles (style,info) VALUES ("Realism ","Though classic realism has been a part of the fine art since as far back as the Renaissance, it only found its way to the world of tattoos recently, cropping up around the latter half of the 20th century. Since then, the style has become increasingly refined and extremely popular. As it now stands, you can find jaw-dropping color and black and grey portraits of pretty much any celebrity you can think of as well as realistic depictions of nature and just about anything else imaginable, even the surreal.
");

INSERT INTO styles (style,info) VALUES ("Watercolor","The watercolor style is currently in vogue. It's in extremely high demand by the most recent generation of tattoo enthusiasts, who seem to be looking for something new to match the new millennium. It looks like what it sounds like, as if rendered with a brush dabbled in watery pastels. However, looks can be deceiving, while it's easy to create this aesthetic when working with actual watercolors on paper or canvas, doing it with ink on the human body is no simple feat. Still, artists make all sorts of whimsical and poetic pieces using this innovative approach to tattooing.");

INSERT INTO styles (style,info) VALUES ("BlackWork","Blackwork is a style of tattooing that utilizes one distinctive color (take a wild guess at which one) to combine shading and line work into graphic designs. Subjects range super widely from animals to flowers to anatomical pieces to inanimate objects to skulls, mandalas, and really anything else you can think of. Blackwork has been around for centuries. People have been utilizing this particular style for years to convey a sense of uniqueness and individuality with varying degrees of light and dark space combined together into art. Due to the unlimited amount of subjects and variables, variety is one of the staples of blackwork tattoos.
");

INSERT INTO styles (style,info) VALUES ("Tribal ","Tribal tattoos — i.e. indigenous body art — are the oldest in the world, dating back thousands of years. This style should actually be thought of as multiple styles or more so different traditions of tattooing from aboriginal communities all around the globe. These diverse and beautiful styles are frequently referred to under the umbrella term "tribal," but to the trained eye, Polynesian body art is distinctive from Marquesan just like tattoos on Inupiaq matriarchs' faces are different from those found on Berber women. Though these styles are all unique, they are somewhat similar— almost always done in black with elaborate patterns.");

INSERT INTO styles (style,info) VALUES ("New School","Don't let the name fool you, new school isn't really all that new anymore. It rose to prominence in the weirdness that was the late '80s and early '90s, but lately it has waned in popularity. This is probably because it was very much a product of its time, featuring a highly animated aesthetic that takes after popular entertainment from that period in American history. The style is cartoonish and wacky, featuring caricatures and other exaggerated figures. If you're the sort of person who likes their body art injected with the spirit of Ren and Stimpy, then this comic style is for you.");

INSERT INTO styles (style,info) VALUES ("Neo Traditional","Neo-traditional, as the name implies, is an evolution of the traditional style. It features the core properties of its predecessor, like pronounced linework and extremely vibrant colors but it also has a illustrative quality to it. This is because Neo-traditional artists are highly influenced by Art Nouveau and Art Deco aesthetics. Pieces done in this style are known for their lush, decorative details as well as the use of natural imagery such as florals and animals.");

INSERT INTO styles (style,info) VALUES ("Japanese","The traditional Japanese style, aka Irezumi, originated during the Edo period (1603-1868) alongside ukiyo-e — woodblock prints that were hugely popular among the merchant class at the time. Because of this, the icons found in this time-tested genre of body art come from the country's age-old folklore, featuring tattooed heroes from the Suikoden and mythological creatures like dragons, kirins, and phoenixes. In short, every tattoo done in this style tells a story about Japans rich past, and beyond their dramatic smoke and wave filled appearance, this is what makes Irezumi masterpieces so powerful. ");

INSERT INTO styles (style,info) VALUES ("BlackWork","Blackworkuniqueness and individuality with varying degrees of light and dark space combined together into art. Due to the unlimited amount of subjects and variables, variety is one of the staples of blackwork tattoos.
");

INSERT INTO styles (style,info) VALUES ("Illustrative","A large variety of work can be called Illustrative, and that is because there are so many techniques and art movements that inspired it! From etching and engraving, to abstract expressionism, and even fine line calligraphy, this style is extremely versatile. Many artists who work in this style will blend their own aesthetic with it to create a whole new style of their own...but as long as their tattoos look like they could belong on a piece of paper or a canvas hanging up in gallery, you know it's Illustrative!");

INSERT INTO styles (style,info) VALUES ("Illustrative","A large variety of work can be called Illustrative, and that is because there are so many techniques and art movements that inspired it! From etching and engraving, to abstract expressionism, and even fine line calligraphy, this style is extremely versatile. Many artists who work in this style will blend their own aesthetic with it to create a whole new style of their own...but as long as their tattoos look like they could belong on a piece of paper or a canvas hanging up in gallery, you know it's Illustrative!");

INSERT INTO styles (style,info) VALUES ("Chicano Style","The Chicano style has so much cultural influence that it has gone on to influence other styles as well. Steeped in the history of things such as the Mexican Revolution, Los Angeles low-riders and Pachuco culture. Born behind bars, the aesthetic evolved from artists in prison who used what few materials they had to beautifully capture what they loved and missed on the outside. Usually fine line, black and grey, and wrapped up in the Chicano culture, this genre of tattooing is absolutely enthralling. ");


INSERT INTO images (url, styleID) VALUES ("EBNnB8rm.jpg", 3);
INSERT INTO images (url, styleID) VALUES ("uRYRjSwm.jpg", 3);
INSERT INTO images (url, styleID) VALUES ("1RRp4Vsm.jpg", 3);
INSERT INTO images (url, styleID) VAlUES ("MZhs2w7m.jpg", 3);

INSERT INTO images (url, styleID) VAlUES ("qSEZIyCm.jpg", 1);
INSERT INTO images (url, styleID) VALUES ("ukW8TbOm.jpg", 1);
INSERT INTO images (url, styleID) VALUES ("xA98eCfm.jpg", 1);
INSERT INTO images (url, styleID) VALUES ("tNifkG2m.jpg", 1);

INSERT INTO images (url, styleID) VALUES ("TN8I14Gm.jpg", 2);
INSERT INTO images (url, styleID) VALUES ("5yAu48Fm.jpg", 2);
INSERT INTO images (url, styleID) VALUES ("SSLxOuWm.jpg", 2);
INSERT INTO images (url, styleID) VALUES ("vgp4KEvm.jpg", 2);

INSERT INTO images (url, styleID) VALUES ("Ore4QuLm.jpg", 4);
INSERT INTO images (url, styleID) VALUES ("OHzNnJSm.jpg", 4);
INSERT INTO images (url, styleID) VALUES ("psfnPnFm.jpg", 4);
INSERT INTO images (url, styleID) VALUES ("cZeurNVm.jpg", 4);

INSERT INTO studios (name, address, styleID) VALUES ("studio onix","Londres 28. Mexico City", 1);

INSERT INTO studios (name, address, styleID) VALUES ("north tattoo", "DIVISION DEL NORTE 3411 Col. EL ROSARIO, COYOACAN", 2);

INSERT INTO studios (name, address, styleID) VALUES ("daggamx", "Orizaba 203 col. Roma, Mexico city", 3);

INSERT INTO studios (name, address, styleID) VALUES ("nauyaca_mx", "Nauyaca, Avenida 5 de Mayo 29", 4);

INSERT INTO appointments (clientName, email, bodyPart, studio) VALUES ("Yidah", "waitingoutthewinter22012@yahoo.com", "Lower Arm", "studio onix");