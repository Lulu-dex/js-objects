function InstagramPost(authorHandle, content, imageLink, views, likes) {
    this.authorHandle = authorHandle;
    this.content = content;
    this.imageLink = imageLink;
    this.views = views;
    this.likes = likes;
  }
  //question 1
{
const post1 = new InstagramPost('Lulu_chan', 'I would love to become a president ', 'https://example.com/photo2.jpg', 5000, 200);
const post2 = new InstagramPost('Lulu_chan', 'I would love to become a president ', 'https://example.com/photo2.jpg', 5000, 200);

}
// question 2

{
    function createPerson(name, age, location) {
        return {
          name: name,
          age: age,
          location: location
        };
      }
      const musa = createPerson('Musa Dawodu', 19, 'Lekki, Lagos State');
      console.log(musa.name); // Output: 'Musa Dawodu'
      console.log(musa.age); // Output: 19
      console.log(musa.location); // Output: 'Lekki, Lagos State'      
}
// question 3A
{
    function createJambScores(eng, govt, lit, crk) {
        return {
          ENG: eng,
          GOVT: govt,
          LIT: lit,
          CRK: crk
        };
      }
      const musaScores = createJambScores(70, 85, 82, 94);
      musa.scores = musaScores;
      console.log(musa.scores); // Output: { ENG: 70, GOVT: 85, LIT: 82, CRK: 94 }

}
//question 3B

//  Using the spread operator (...)
{
    const originalObj = { foo: 1, bar: 2 };
const clonedObj = { ...originalObj };

}
//Using Object.assign()
{
    const originalObj = { foo: 1, bar: 2 };
const clonedObj = Object.assign({}, originalObj);

}
//Using JSON.parse() and JSON.stringify()
{
    const originalObj = { foo: 1, bar: 2 };
const clonedObj = JSON.parse(JSON.stringify(originalObj));

}
// question 4


{
    for (let party in presidentialCandidates) {
        console.log(`${presidentialCandidates[party]} is the presidential candidate of ${party}`);
      }
      
}
//question 5