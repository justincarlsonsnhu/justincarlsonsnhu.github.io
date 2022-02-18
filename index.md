## Justin Carlson's CS-499 Computer Science Capstone - ePortfolio


# Introduction/Summary
Hello, and welcome to my ePortfolio!   This page is intended to give you an understanding of what I am capable of in the realm of software development.   You will see some "original" code, as well as updated code containing three enhancments: Databases, Algorithms, General Engineering.   This should give you a good idea of my skill-set and what value I could bring to your business.

# Professional Self-Assessment
TODO: JUSTIN: FINISH THIS SECTION!

~~Include the following in your professional self-assessment:~~

~~A. Discuss how completing your coursework throughout the program and developing the ePortfolio has helped showcased your strengths and
shape your professional goals and values and prepared you to either enter or become more employable in the computer science field. Use
specific examples from your program and include examples outside of the artifacts included in your ePortfolio. Please address following topics:
collaborating in a team environment, communicating to stakeholders, data structures and algorithms, software engineering and database,
and security. Note: This should function as an overall introduction to your skills and you will become more specific relative to the included
artifacts in the next section.~~

~~B. Summarize/introduce how your artifacts fit together and inform the portfolio as a whole; this will help demonstrate the full range of your
computer science talents and abilities? This section should introduce your audience to the technical artifacts that will follow the professional
self-assessment.~~


# Code Review
Prior to doing any work on my desired enhancements, I did a complete code review of the code that I was starting with.  I took this starter code from a previous college course I took.   This [Code Review](https://www.youtube.com/watch?v=vIPiO8ax7vM) is about 40 minutes long, and shows a full walkthrough of the starting code base, as well as my comments on what areas I plan to improve on in order to facilitate my enhancements.


# Enhanced Artifact(s)

To start off this section, I'll give you some links so you can see the before/after code, as well as the live site in action!

- [Original Source Code](https://github.com/justincarlsonsnhu/justincarlsonsnhu.github.io/tree/main/original-source)
- [Final/Updated Source Code](https://github.com/justincarlsonsnhu/justincarlsonsnhu.github.io/tree/main/final-source)
- [Live Site](http://jdc-499-node.eastus.azurecontainer.io:3000/home.html)

The three main enhancements I completed are as follows:

**Enhancement 1 - Software Engineering/Design**

This feature involved moving the application from a static HTML site run locally, to a NodeJS application hosted on Azure Containers and available on the internet.  This involved creating a NodeJS application, building a Linux Docker image, and building a deployment process to get it all into Azure.  While a screenshot doesn't really do this feature justice (as it's mostly backend code), you can see from the URL here that I'm hitting the website on a public, not local, URL:

![enhancement 1](https://i.imgur.com/4nNC9VX.png "Enhancement 1")

**Enhancement 2 - Database**

This one involved modifying the application to store product and transaction details in a database, instead of having it hard-coded in the application.   A NoSQL Hosted database was used (Azure CosmosDB) to implement this, and additional deployment scripts were also created to deploy all test and product data.   The screenshot below shows that the client-side page is calling a backend API to load the products, as well as a quick display of the data in CosmosDB from the Azure portal:

![enhancement 2](https://i.imgur.com/esXnIkz.png "Enhancement 2")

**Enhancement 3 - Algorithms**

This feature was adding some new functionality to the application.  In this one, we implemented an algorithm that would query all transaction data, and for a given product, show the user what other products were commonly purchased with it.   This is very similar to what you may be familiar with on Amazon or other eCommerce sites, usually called "People who bought this also bought...".   The screenshot below shows the output a user would see for this feature:

![enhancement 3](https://i.imgur.com/bGiHmEo.png "Enhancement 3")


# Narrative(s)
TODO: JUSTIN: FINISH THIS SECTION!

~~For each artifact in your ePortfolio, you will provide a narrative to accompany the artifact itself. The narrative that you write for each
artifact should explain why you included the artifact in your ePortfolio and reflect on the process you used to create the artifact. The narrative(s)
should focus less on the actual creation of each artifact and more on the learning that happened through the creation of the artifact. For each artifact,
you should address the following:~~

~~A. Briefly describe the artifact. What is it? When was it created?~~

~~B. Justify the inclusion of the artifact(s) in your ePortfolio. Why did you select this item? What specific components of the artifact showcases your
skills and abilities in software development?~~

~~C. Reflect on the process of enhancing and/or modifying the artifact. What did you learn as you were creating it and improving it? What
challenges did you face? How did you incorporate feedback as you made changes to the artifact? How was the artifact improved?~~


# Conclusion
This enhancement truly shows the breadth and depth of skill I have in the software engineering field.   Hopefully you found this showcase interesting!  Feel free to reach out to me at [justin.carlson@snhu.edu](mailto:justin.carlson@snhu.edu)

P.S.: If you're interested in seeing some other live projects I've put together, feel free to look at these examples:

[Vivid Image Art](https://www.vividimageart.com/#/)

[Talk Cloudly To Me Blog](https://talkcloudlytome.com/)
