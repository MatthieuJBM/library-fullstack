class BookModel {
  id: number;
  title: string;
  author?: string;
  description?: string;
  copies?: number;
  copiesAvailable?: number;
  category?: string;
  img?: string;

  constructor(
    id: number,
    title: string,
    author: string,
    description: string,
    copies: number,
    copiesAvailable: number,
    category: string,
    img: string
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
    this.copies = copies;
    this.copiesAvailable = copiesAvailable;
    this.category = category;
    this.img = img;
  }
}

export default BookModel;

// CREATE TABLE `book` (
//     `id` BIGINT(20) NOT NULL AUTO_INCREMENT,
//     `title` varchar(45) DEFAULT NULL,
//     `author` varchar(45) DEFAULT NULL,
//     `description` text DEFAULT NULL,
//     `copies` int(11) DEFAULT NULL,
//     `copies_available` int(11) DEFAULT NULL,
//     `category` varchar(11) DEFAULT NULL,
//     `img` MEDIUMBLOB  DEFAULT NULL,
//     PRIMARY KEY (`id`)
//   ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
