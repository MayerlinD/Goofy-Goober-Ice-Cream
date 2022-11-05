# Goofy Goober Ice Cream

A CRUD web app that let's you browse through the ice cream flavors of Bikini Bottom's best ice cream parlor.

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* MongoDB
* Mongoose
* Express
* Google Fonts

## Completed Project Screenshots

![](Screen%20Shot%202022-11-02%20at%2011.20.40%20PM.png)

![](Screen%20Shot%202022-11-02%20at%2011.20.08%20PM.png)

## Trello
![](Screen%20Shot%202022-11-05%20at%2010.11.41%20AM.png)

## ERD
![](Screen%20Shot%202022-11-04%20at%2010.30.25%20PM.png)

## Next Steps

This is not the desired finished product. In the future, I would:

* Add description to flavors
* Add authentication
* Develop a 'shopping' feature with option for customers to add ice creams into their cart and 'checkout'.
* Update CSS

## RESTful Route Table

|    Url          |  HTTP Verb    |   Action    |   Method               | View |
| --------------- | ------------- | ------------|-------------           | --------------|
| /goober/        |    GET        |  Index      |  Goober.find            |    Index.jsx  |
|/goober/new      |    GET        |   New       |  none                  |    New.jsx    |
| /goober/:id     |    Delete     |  Destroy    |Goober.findByIdAndRemove |    none       |
| /goober/:id     |   PATCH/PUT   |  Update     |Goober.findByIdAnddUpdate|    none       |
| /goober         |   POST        |  Create     |Goober.create            |    none       |
| /goober/:id/edit|   GET         |  Edit       |Goober.findOne           |    Edit.jsx   |
| /goober/:id     |   GET         |  Show       |Fruit.findOne           |    Show.jsx   |