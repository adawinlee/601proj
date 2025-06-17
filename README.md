# CS601 Term Project 

This is a portfolio about me. It includes the following pages:
- About: a short introduction about me and the website
- Resume: a page for displaying my resume
- Interests: some interests and hobbies I enjoy
- Gallery: a photo gallery for some of my travel photos
- Contact: a form that can be filled out

The website is hosted on the internet at https://adawinlee.github.io/601proj/,
using Github Pages. It is a single-page React application that uses Vite.

## File Structure

The public folder contains all of the images used on the website, except for the
images for the book covers on the Interests page, as those images use links from
the internet.

The src folder contains all of the code. Main.jsx and App.jsx contain the code
for the React application that is then sent to index.html. In the pages folder,
the 5 pages are written as React functional components. The components folder
contains the additional components used, ImageDisplay and BookList. The models
folder contains some JSON files that are used in the components, and the css
folder contains CSS files for the site.

Link to my video walkthrough of this project: https://youtu.be/ChnwQUqCRSg

## Pages

### About

The about page serves as the home page, and includes a self-biography, as well
as a short description of the each of the pages on the website, to give the user
an idea of what each page contains.

### Resume

The resume page displays my resume, both as an embedded PDF and in plaintext
form. There is also a button to download the resume as a PDF. If the embedded
PDF is unable to display correctly, it leads to another download link.

### Interests

The interests page lists two of my interests, art and reading. The page uses the
two components ImageDisplay, to display some examples of things I have designed,
and BookList, to display some books that I have read recently and what I thought
about them.

#### BookList Component

The BookList Component takes information from the books.json file, which
contains information about the book title, author, and my review and rating of
the book. It then renders each JSON object into a div, and displays those divs
in a grid, styled by CSS. This allows for each book to be put into the grid
without having to rewrite a lot of code, and more books can be added to the list
easily by adding onto the JSON file.

If the screen size is small, the component uses CSS to change the grid layout to
a Flex column layout.

### Gallery

The gallery page is shows pictures I have taken at different places I have been
to. The pictures are displays using the ImageDisplay Component, also used in the
interests page.

#### ImageDisplay Component

The ImageDisplay component takes JSON data with the properties of the photo ID,
an image source link, and a caption describing what is in the picture. The state
of the component contains the entire list of image objects, the source link and
caption for the first image in the JSON file, and a string containing the page
name of the parent component. 

First, the component renders the big, main image on top with the source link of
the first image in the file, along with the caption. Then, it renders all of the
images in the list underneath the main image using mapping. When one of the
smaller images are clicked, the component changes state so that the main image
on top changes its source link and caption to that of the image that was
clicked. 

This component uses CSS to change how it looks on desktop and on mobile. On
desktop, the captions of all the smaller images underneath the main one are
hidden. On mobile, the main image and its caption are hidden, and all of the
images and captions in the list are displayed in a Flex column. 

Using the page name stored in the state, this component can be styled
differently depending on the page. It appends the page name to the class name of
the image and caption elements, so the sizes and styling of the images can be
changed using CSS. 

### Contact

The contact form has 4 input fields for the user to type their information into
and send a message. It is a React controlled form. This page includes the
validation for the 4 fields. The fields are the text inputs for first name and
last name, an email input, and a textarea for the message. There are two states
for this component, formData and errors, and they are managed by the useState
hook. 

The fields use the handleChange function to change their values as the user
types in them. The validation function is used to display any errors in input
underneath the input fields. The names and email are validated using regex, and
the message is checked for whitespace. 

When the submit button is clicked, an alert will pop up. If all of the inputs
are valid, it will display a success message, then clear the form. If there are
invalid inputs, the alert will ask the user to fix the errors. The form does not
actually submit the information anywhere.

## React Router

This application uses React Router to link to the different pages of the site,
without causing a page reload. In order to host it on Github Pages, I used the
HashRouter component for client-side routing, in /src/main.jsx. To run this
application locally, the HashRouter component needs to be changed to the
BrowserRouter component, and then type "npm run dev" into the terminal. 

## CSS Responsive Layout

The layout of this site changes based on the window and screen size. On desktop,
the website uses Flex Grid to put the website title at the top left, the
navigation bar on the left, the main page content on the right, and the footer
at the bottom. On mobile, the layout changes to a Flex column layout, with the
header at the top, then the navigation bar, then the main content and the
footer. The images also change sizes to fit the screen.
