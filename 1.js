async function getAllBooksMock() {
  const books = [
    {
      isbn: "978-0134685991",
      title: "Effective Java",
      author: "Joshua Bloch",
      review: "A must-read for Java developers."
    },
    {
      isbn: "978-0596009205",
      title: "Head First Design Patterns",
      author: "Eric Freeman",
      review: "Fun and easy way to learn design patterns."
    },
    {
      isbn: "978-1617294945",
      title: "Spring in Action",
      author: "Craig Walls",
      review: "Comprehensive guide to Spring framework."
    }
  ];

  console.log('Books available in the shop:');
  console.log(books);
}

getAllBooksMock();
