CREATE TABLE movie;

CREATE TABLE actor(
    act_id INT NOT NULL AUTO_INCREMENT,
    act_fname CHAR(20),
    act_fname CHAR(20),
    act_gender CHAR(1),
    PRIMARY KEY(act_id)
)

CREATE TABLE director(
    dir_id INT NOT NULL AUTO_INCREMENT,
    dir_fname CHAR(20),
    dir_lname CHAR(20),
    PRIMARY KEY(dir_id)
)

CREATE TABLE movie_direction(
    dir_id INT,
    mov_id INT,
    FOREIGN KEY(dir_id) REFERENCES director(dir_id),
    FOREIGN KEY(mov_id) REFERENCES movie(mov_id)
)

CREATE TABLE rating(
    mov_id INT,
    rev_id INT ,
    rev_stars INT,
    num_o_ratings INT,
    FOREIGN KEY(mov_id) REFERENCES movie(mov_id),
    FOREIGN KEY(rev_id) REFERENCES reviewer(rev_id)
)

CREATE TABLE genres(
    gen_id INT,
    gen_title CHAR(20) ,
    PRIMARY KEY(gen_id)
)

CREATE TABLE movie_genres(
    mov_id INT,
    gen_id CHAR(20),
    FOREIGN KEY(mov_id) REFERENCES movie(mov_id),
    FOREIGN KEY(gen_id) REFERENCES genres(gen_id)
)

CREATE TABLE movie_cost(
    act_id INT,
    mov_id INT,
    role CHAR(30)
    FOREIGN KEY(act_id) REFERENCES actor(act_id),
    FOREIGN KEY(mov_id) REFERENCES movie(mov_id)
)

CREATE TABLE reviewer(
    rev_id INT NOT NULL AUTO_INCREMENT,
    rev_name CHAR(30)
)

CREATE TABLE movie(
    mov_id INT NOT NULL AUTO_INCREMENT,
    mov_title CHAR(30),
    mov_year INTEGER,
    mov_time INTEGER,
    mov_lang CHAR(50),
    mov_dt_rel DATE,
    mov_rel_country CHAR(5),
    PRIMARY KEY(mov_id),
)

DROP TABLE movie;