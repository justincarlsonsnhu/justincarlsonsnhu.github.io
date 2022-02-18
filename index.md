## Justin Carlson's CS-499 Computer Science Capstone - ePortfolio


# Introduction/Summary
Hello, and welcome to my ePortfolio!   This page is intended to give you an understanding of what I am capable of in the realm of software development.   You will see some "original" code, as well as updated code containing three enhancments: Databases, Algorithms, General Engineering.   This should give you a good idea of my skill-set and what value I could bring to your business.

# Professional Self-Assessment
TODO: JUSTIN: FINISH THIS SECTION!


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


# Conclusion
TODO: JUSTIN: FINISH THIS SECTION!
