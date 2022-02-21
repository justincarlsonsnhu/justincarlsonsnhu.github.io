## Justin Carlson's CS-499 Computer Science Capstone - ePortfolio


# Introduction/Summary
Hello, and welcome to my ePortfolio!   This page is intended to give you an understanding of what I am capable of in the realm of software development.   You will see some "original" code, as well as updated code containing three enhancments: Databases, Algorithms, and General Engineering.   This should give you a good idea of my skillset and what value I could bring to your business.

# Professional Self-Assessment
In this portfolio, you will see the overall vision and gain an understanding of what I am capable of.  You'll understand how I am able to implement both technical skills, as well as ancillary skills, such as understanding business use cases, working in a team, eliciting and integrating feedback, and much more!

By building out the NodeJS scaffolding and exposing business APIs through my “Software Engineering/Design” artifact, I’ve shown that I have the ability to build a collaborative environment to support decision making.   I built a clean scaffolding for the application and structured the folders/files in an easy to understand way.    Choosing to use industry standard libraries such as NPM and Express show that I understand what is important in the industry and why.    Additionally, creating deployment scripts to deploy my entire application from scratch ensures a repeatable, automated process that anyone can follow to deploy.

Looking at the Databases artifact, we can see my understanding of data structures.  The data models are cleanly implemented in an ORM pattern, using an industry-standard library (Mongoose) to facilitate the mapping.   By building out test scripts to insert data into my database, it allows us to always have a consistent starting point whenever we deploy the application, again lending to consistency which is needed for things like unit tests and integration tests.   Additionally I’ve ensured that my credentials to connect to the database are securely stored as environment variables in my deployed application, and I’ve made sure to encrypt my connection using TLS - these decisions showcase how I am able to put security at the forefront when building an application.

And lastly if we look at the algorithm artifact, that shows a great example of how I can take business needs and transform them into business logic in the form of code.   This shows a skillset beyond just the ability to write a program, but to truly understand a use case and write code that meets that case.  

When you look at all of these enhancements and skills from a high-level "big picture" view, you can see a talented software engineer that is able to take ideas and bring them to reality.   Every application you build is going to require a data storage mechanism and business logic algorithms, and we can clearly see examples here that show I am able to implement them, and implement them well.

In the "Enhanced Artifacts" section below, you will see three separate features that I added or improved to my starting project.   These together showcase a wide array of technical and engineering skills.   The three main enhancements can be grouped into three categories:   General Enginering/Design/Refactoring, Implementation of a Database system, and the creation of an algorithm implementing business logic.   All of these enhancements build upon each other.  For example, in the General Engineering section, I create a NodeJS and expose several APIs, which then in turn call the database, which is also referenced when loading data for my algorithm.  So this portfolio not only showcases a specific technology skillset, but instead shows how I am able to craft together multiple different disciplines to arrive at the end goal of delivering an awesome project!


# Code Review
Prior to doing any work on my desired enhancements, I did a complete code review of the code that I was starting with.  I took this starter code from a previous college course I took.   This [Code Review](https://www.youtube.com/watch?v=vIPiO8ax7vM) is about 40 minutes long, and shows a full walkthrough of the starting code base, as well as my comments on what areas I plan to improve on in order to facilitate my enhancements.


# Enhanced Artifacts

To start off this section, I'll give you some links so you can see the before/after code, as well as the live site in action!

- [Original Source Code](https://github.com/justincarlsonsnhu/justincarlsonsnhu.github.io/tree/main/original-source)
- [Final/Updated Source Code](https://github.com/justincarlsonsnhu/justincarlsonsnhu.github.io/tree/main/final-source)
- [Live Site](http://jdc-499-node.eastus.azurecontainer.io:3000/home.html)

The three main enhancements I completed are as follows:

### Enhancement 1 - Software Engineering/Design

This feature involved moving the application from a static HTML site run locally, to a NodeJS application hosted on Azure Containers and available on the internet.  This involved creating a NodeJS application, building a Linux Docker image, and building a deployment process to get it all into Azure.  

This enhancement involved implementing the following tasks:
- Create a NodeJS application that will serve up the static HTML/CSS/JS/IMG files
- Create an API in the NodeJS application, with two service endpoints
   - LoadAvailableProducts - Replaces hard-coded JSON in the .js file on the front-end
   - PurchaseItems - Handles the user “checking out” with their cart
- Update the UI of the web side
   - Change the product page to call the API to load available products, instead of hard-coding
   - Change the shopping cart page to allow a user to check out their items
- Deploy
- Host it in a Linux Docker container and deploy to a cloud platform (Azure) for global accessibility


While a screenshot doesn't really do this feature justice (as it's mostly backend code), you can see from the URL here that I'm hitting the website on a public, not local, URL:

![enhancement 1](https://i.imgur.com/4nNC9VX.png "Enhancement 1")

### Enhancement 2 - Database

This one involved modifying the application to store product and transaction details in a database, instead of having it hard-coded in the application.   A NoSQL Hosted database was used (Azure CosmosDB) to implement this, and additional deployment scripts were also created to deploy all test and product data.   

This enhancement involved implementing the following tasks:
- Implement an Azure CosmosDB data structure
- Create scripts to import all product data into the data structure (from the hard-coded data)
- Create scripts to import (test data) simulating previous transactions/purchases (i.e., user X bought these products….)
- Update the NodeJS API endpoint that loads product details to query the CosmosDB instance instead of the hard-coded code in the API endpoint
- Ensure security (TLS and Credentials) are implemented for CosmosDB


The screenshot below shows that the client-side page is calling a backend API to load the products, as well as a quick display of the data in CosmosDB from the Azure portal:

![enhancement 2](https://i.imgur.com/esXnIkz.png "Enhancement 2")

### Enhancement 3 - Algorithms

This feature was adding some new functionality to the application.  In this one, we implemented an algorithm that would query all transaction data, and for a given product, show the user what other products were commonly purchased with it.   This is very similar to what you may be familiar with on Amazon or other eCommerce sites, usually called "People who bought this also bought...".   

This enhancement involved implementing the following tasks:

- Build out actual data structures (NodeJS classes) for our domain object types instead of hard-coded JSON structures
- Build an algorithm that loads data from the CosmosDB to get the transactional test data out of there, and build out a “people who purchased product X also purchased products Y and Z” type algorithm (similar to Amazon shopping)
- Create an API endpoint that can be called for a given product to load the details from that algorithm, for that product
- Update the Web UI to show the data found from said algorithm

The screenshot below shows the output a user would see for this feature:

![enhancement 3](https://i.imgur.com/bGiHmEo.png "Enhancement 3")


# Narrative(s)

The following section will describe in a little more detail the background behind each of the enhancements.   Each section will answer the following three questions related to each artifact:

- Brief description of the artifact - what is it and why was it created?
- Justification of the inclusion of the artifact in this ePortfolio - Why was it selected and how does it showcase my abilities and skills?
- Reflection on the enhancement process

### Enhancement 1 - Software Engineering/Design

_Description_

The artifact in question is the deployment of a “local” website into a NodeJS application, implementing some API endpoints, and figuring out a deployment strategy to make the application available over the internet.

This involved some basic scaffolding commands utilizing the “npm” tool (npm init, npm install, etc.) to setup the basic folder structure, and then copying in my existing static HTML/CSS/JS files into the directory.   Additionally, I used the “express” library to serve up both my static files and setup a route for my API endpoints.  And lastly, I setup a complete deployment script using the Bash scripting language and the Azure CLI (az) so I would have a standard, repeatable, one-click process to deploy my application to the cloud.  I didn't really create a “new” codebase, but instead just updated and enhanced what I had to implement the NodeJS/Express implementation.

_Justification_

I selected this item/enhancement as it would be the bare minimum needed to make this a “live” deployable website that people all across the world could access.   Static local websites are fine for proof-of-concept or demo type work, but in the real world, you’re going to almost always need some sort of web server type hosting software (such as NodeJS) to make it ‘real’.

   By building out the NodeJS scaffolding and API endpoints, I’ve accomplished great strides towards “**CS-499-01** (_Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science_)".  The application is now structured in a much cleaner way, making it easier for others to collaborate on the code base.   Additionally, the use of the NPM scaffolding and the Express library show expertise towards "**CS-499-04** (_Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals_)".

_Reflection_

 I have developed NodeJS applications, both professionally at work, and personally for pet projects.   Additionally, I have a few Docker and Kubernetes certifications so the Docker and Azure deployment process was also something I have worked with quite a bit.  Overall, this is the main process I followed when creating this artifact:

- The first thing I did was to create the NodeJS scaffolding and download the necessary npm libraries, using the npm commands (init, install, etc.)
- Once this was in place, I updated my main NodeJS app entry point (app.js) to be able to simply serve up the static resources
- I then tested my app by making sure it would run and load/display my application
- The next step was to take the logic I had in the client-side code to load the available products, and create an API endpoint in NodeJS to house that
- I created that API endpoint, and then updated my client-side JS code to call the endpoint (via jQuery) to load the products
- Additionally, I added a brand new API endpoint (/api/purchase) to handle a user “purchasing” the items in their cart.   This doesn’t do anything (yet) but write a log message with the items purchased, but this will be persisted to a database in my next enhancement.  Once this was done, I updated the UI of my application to call that API endpoint
- Lastly, I built out a bash deployment script, which would build my Docker image, deploy my necessary Azure resources, and deploy my container image

Since most of this was not new to me, I didn’t really run into that many issues.  I did have one problem though.  When I’ve written client-side apps in the past, I usually use a library like Angular or React that abstracts away the AJAX/API calls.  I don’t have one of those in this app, so I had to find a different way.  I ended up using the “ajax” jQuery function ($.ajax), and was running into problems where my function would return before I got the response back from the server.  I handled this by simply setting the “async: false” value on the AJAX call.  In a real world scenario, I would likely look to use something like a JS Promise instead of a synchronous call, but for the purposes of this enhancement, this was enough to make everything work!

### Enhancement 2 - Databases

_Description_

 The artifact in question is the implementation of a NoSQL database structure, along with an ORM deployment in NodeJS.   I chose to use Azure CosmosDB for my NoSQL database, fitting in with my other Azure deployments, and then utilized Mongoose in NodeJS for my ORM/mapping of objects to the database itself.
 
I first determined how to create an Azure CosmosDB instance via the az cli commands, then updated my deployment script to accomplish this.   After that, I added the mongoose library to my NodeJS application, and built out my data structures.   Once this was done, I then created some “maintenance” scripts (NodeJS) that inserted my static product data, and dynamically created some transaction data.   Lastly, I updated my API implementation to read/write to the database instance, instead of just writing data locally.


_Justification_

I selected this item/enhancement as some kind of data storage mechanism (database or otherwise) is a key component in just about any enterprise application.  No matter what industry you go into, when you’re developing an application or system for it you’re going to have a need to store and query data.   By building this out, I’ve shown that I can implement a NoSQL type of database into my application.

By building out the NoSQL database implementation into my application, I’ve accomplished great strides towards “**CS-499-02** (_Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science_).  The application is now structured in a much cleaner way, making it easier for others to collaborate on the code base, and add additional data models as needed to our NoSQL data store.   Additionally, building out my test data insert scripts and pulling in appropriate libraries (Mongoose) shows aptitude towards "**CS-499-04** (_Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals_).  Lastly, by securing my database connection over TLS and requiring credentials to connect, I’ve shown expertise in "**CS-499-05** (_Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resource_). 


_Reflection_

I have used Mongoose before, but CosmosDB was new to me.  So I knew how to work with NoSQL databases (I’ve used MongoDB mostly in the past), but I had to ensure that CosmosDB would work similarly for me.   I had a few snags here where I was being rate-limited by the Azure API.  Essentially I was trying to insert hundreds of my test transactions too fast, and Azure would return a 429 error, which basically means “slow down, you’re sending too many requests”!   After some research in the Azure documentation, I found that my “throughput” on my CosmosDB database was likely too low.  The default was “100” which means 100 requests/second, and I was exceeding that.  I was able to update my deployment scripts to update the throughput to 1200 requests/second (see the deploy_cosmosdb_database function in my deployment script), after which I was able to process my inserts without error.  

Additionally, I had a few minor snags handling async/await processes in NodeJS, as all the Mongoose calls are asynchronous so you have to wait for them to return, even though the code is “executed” immediately.  I just had to read up some examples on how to best do that in Node, and then with some testing and adding of “async”/”await” keywords, I got it all working properly.  Besides those minor issues, everything else went pretty smoothly!


### Enhancement 3 - Algorithms

_Description_

The artifact in question is the creation of an algorithm that will load data out of a database, and determine that, for a given product, what other products were purchased at the same time.   This data will then be showed to a user when they are on a product detail page.  For example, let’s say people commonly bought Product A and Product C, along with Product B.   When they go to the Product B detail page, we should show the user that other commonly purchased products are A and C, and make them linkable to the respective product detail pages.
 
 Although I originally said that I would create the “data models” in this enhancement, it ended up that I needed to create them as part of integrating my ORM (Mongoose) in the Databases enhancement first.   You can see this in the “model” folder, specifically the “product.js” class and the “transaction.js” class.  These are Mongoose data models which define the schema of the two object models, as well as linking them up to the appropriate collection name in the underlying NoSQL database.   With these in place, I was able to write a query to pull the products in, and then use an algorithm to determine what the “related products” were.   I then baked this into one of my existing API calls (/products/productid), changing the JSON response body to include the product details, as well as the product details of the top two related products (if any).  Lastly, I updated the web UI to display these related products as clickable links.


_Justification_

I selected this item/enhancement as I felt it was a good way to show that I understand business logic, in addition to just standard programming skills.   Anyone can learn how to do the technical work, but to be able to understand a business problem and come up with logic to implement it is what separates an average programmer from an outstanding engineer!

By building out this algorithm/logic into my application, I shown value towards “**CS-499-01** (_Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science_).  The application has a clean code base and implementing enhancements (such as this algorithm) are fairly easy to do.  I’ve also worked towards "**CS-499-03** (_Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices_)" too.  Building out the algorithm shows that I understand the problem space and am able to build out logic and translate business requirements to implemented code.  And lastly, aptitude towards "**CS-499-04** (_Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals_)" was reached by showing the best practices that I implemented when coding the algorithm in question. 


_Reflection_

This ended up being a pretty straightforward comparison function.  It did not take me that long to wrap my head around the logic, and then transform that into actual code.   One challenge I could see facing in the future, is the performance of the function.  Right now it’s loading and iterating through every record in the entire “transaction” collection in CosmosDB.  With only 300 records in there, it’s very fast and performance is not a concern.  In a real-life situation, however, there could be thousands or millions of records and the performance of the function could become very poor.   In that case, I would need to consider looking into database indexing or optimizing the functions in question.  However, I’m a pretty firm believer in not over-developing something, so since it’s meeting the needs as defined right now, I am pretty happy with it!



# Conclusion
This enhancement truly shows the breadth and depth of skill I have in the software engineering field.   Hopefully you found this showcase interesting!  Feel free to reach out to me at [justin.carlson@snhu.edu](mailto:justin.carlson@snhu.edu)

P.S.: If you're interested in seeing some other live projects I've put together, feel free to look at these examples:

[Vivid Image Art](https://www.vividimageart.com/#/)

[Talk Cloudly To Me Blog](https://talkcloudlytome.com/)
