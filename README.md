<!-- # ![WebApp](https://iharsh234.github.io/WebApp/images/demo/demo_landing.JPG) -->
# ProjectCatwalk - Example eCommerce product page
<table>
<tr>
<td>
  A webapp that will function as a frontend shopping experience.  This is part of a capstone project.
</td>
</tr>
</table>

## Overview
 Project CatWalk is a fully functional web application that meets the specifications and requirements outlined by project stakeholders. A team of three worked on a single code base by dividing up the work among team members but working collaboratively to produce a single front end application. Each team memeber built key components of a complex whole and integrated those with the rest of the system.

## Table of Contents
  <ol>
    <li>Description</li>
    <li>Installation</li>
    <li>Usage</li>
  </ol>


## Description
   Project Catwalk is a retail portal designed to modernize an eCommerce website and increase sales numbers. Features implemented will be optimized for the user experience and accessibility. Features include :
    - browsing styles of a particular product
    - adding to cart
    - asking questions and seeing relevant answers
    - posting reviews
    - browsing other customer's reviews
   Item detail page will be comprised of distinct modules.  Each module will display information related to the product being displayed. Information is being retrieved from and persisted to a RESTful API. Each module will be described in further detail below:


### Overview -

### Questions and Ansewrs -

### Reviews -
  The ratings and reviews module allows users to view and submit reviews for a product. The entire module is broken down into two collumns. On the left side is the average star rating, star rating bar charts and product characteristics breakdown. The average star is of course, the average of all star ratings recieved from customer's reviews for this particular product. The star rating bar charts includes a bar graph and a number value for the amount of reviews that gave that particular star rating. The bar charts are skewed with a ratio to portray the variation of ratings. The product breakdown categories change based on the product selected. A triangle is shown on the graph showing exactly where this particular product falls on that characteristic. On the right side of the window is the review list and filtering methods. You can sort the list of reviews by relevance, helpfulness, or newest, as well as a search query. Initially, only two reviews are shown. In order to display more (if more reviews exist), you must select the "show more" button at the bottom of the screen. When selected, more reviews populate the window, a scroll bar becomes available and you are able to scroll through the list of shown reviews. Each individual review has the ability to be marked as helpful as well as reported. Lastly, adjacent to the "show more" button is a "Add a review +" button. Selecting this button opens a modal window with inputs for creating your own review. Certain input boxes are mandatory and marked with an *. If a user attempts to submit their review without the mandatory fields, they become red and directions are given at the bottom of the model.
  Currently, the add a review modal accepts images as an input. To provide images, they must be a URL. You may notice images not being shown in reviews that were submitted with images. That is a feature that will be implemented in the future. In the mean time, users are still able to add images to their review so that when the feature allowing images to be seen within a review goes live, the data will already be available.


## Installation
 1) Clone repo from Github via: 'https://github.com/C-Logo/hr-den15-project-catwalk.git'
 2) Navigate to project folder within terminal
 3) Run command *npm install*
 4) Create a Github personal access token with the following scopes:
    - Read:org
    - User
    - Read:user
    - User:email
    - User:follow
 5) Rename config-example.js to config.js
 6) Paste your personal access token into 'API_KEY' variable in config.js
 7) Run command *npm run react-dev* to enable webpack and create bundle.js file
 8) Open a new terminal window, initialize the server with command *npm start*
 9) Open the webapp in the browser at localhost:3000

### Dependencies

- [React]
- [Axios]
- [Express]
- [Jest]
- [Webpack]
- [Babel]


### Charts

## Mobile support
This webapp is compatible with mobile browsers.

## Bug / Feature Request

If you find a bug, then please tell us about it and we would be happy to fix it

For new features we are open to suggestions.  Let us know!

## Team
  Matt Olsen
  Ian Swensson
  Michael Light
