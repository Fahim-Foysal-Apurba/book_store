import { faker } from '@faker-js/faker';

const generateBook = ({ language, region, seed }) => {
  faker.seed(seed); // Use the provided seed for consistent results
  return {
    title: faker.lorem.sentence(),
    author: `${faker.person.firstName()} ${faker.person.lastName()}`,
    publisher: faker.company.name(),
    isbn: faker.string.uuid(),
  };
};

export const generateBooks = ({ region, language, seed, likes, reviews, page }) => {
  const books = [];
  // For the first batch, generate 20 books; then 10 per subsequent batch
  const batchSize = page === 0 ? 20 : 10;
  for (let i = 0; i < batchSize; i++) {
    // Adjust the seed with the page and index so that each record is unique yet reproducible
    const book = generateBook({ language, region, seed: seed + (page * batchSize) + i });
    books.push({
      ...book,
      likes: Math.round(likes * Math.random()),
      reviews: Math.round(reviews * Math.random()),
    });
  }
  return books;
};



