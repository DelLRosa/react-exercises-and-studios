export default function BookList() {
   let pageTitle = "Books I want to read";
   let book1 = "https://miblart.com/wp-content/uploads/2020/12/new-cover-mibl-2.jpeg";
   let book2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQezFuKYrdptVPcuhK7-eaWjIz7-TQ1bFdz3v3dhtnRL4zYwP3OgBkGvvz_ap7Up3KyekM&usqp=CAU";
   let book3 = "https://www.grapheine.com/wp-content/uploads/2017/04/1840-11.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="a book" />
         <img src={book2} alt="Nothing here!" />
         <img src={book3} alt="Nothing here!" />
      </div>      
   );
}