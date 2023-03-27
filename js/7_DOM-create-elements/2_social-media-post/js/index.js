console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
// Article Container
const newPost = document.createElement("article");
newPost.classList.add("post");

// Article->Paragraph
const createParagraph = document.createElement("p");
createParagraph.classList.add("post__content");
createParagraph.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

// Article -> Footer
const createFooter = document.createElement("footer");
createFooter.classList.add("post__footer");

// Article -> Footer -> Span
const createSpan = document.createElement("span");
createSpan.classList.add("post__username");
createSpan.textContent = "@username";

// Article -> Footer -> Span
const createButton = document.createElement("button");
createButton.setAttribute("type", "button");
createButton.setAttribute("data-js", "like-button");
createButton.classList.add("post__button");
createButton.textContent = "♥ Like";

// append sequence
document.body.append(newPost);
newPost.append(createParagraph);
newPost.append(createFooter);
createFooter.append(createSpan);
createFooter.append(createButton);

console.log(newPost);
const createNewMediaPost = (content, username) => {
// Article Container
const newPost = document.createElement("article");
newPost.classList.add("post");

// Article->Paragraph
const createParagraph = document.createElement("p");
createParagraph.classList.add("post__content");
createParagraph.textContent =
  `${content}`;

// Article -> Footer
const createFooter = document.createElement("footer");
createFooter.classList.add("post__footer");

// Article -> Footer -> Span
const createSpan = document.createElement("span");
createSpan.classList.add("post__username");
createSpan.textContent = `@${username}`;

// Article -> Footer -> Span
const createButton = document.createElement("button");
createButton.setAttribute("type", "button");
createButton.setAttribute("data-js", "like-button");
createButton.classList.add("post__button");
createButton.textContent = "♥ Like";

// append sequence
document.body.append(newPost);
newPost.append(createParagraph);
newPost.append(createFooter);
createFooter.append(createSpan);
createFooter.append(createButton);
};


