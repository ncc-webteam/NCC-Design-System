---
layout: _sources/_components/ncd-search.njk
title: NCD search widget
---
## When to use

On pages that discuss services available on the NCD and it makes sense to give customers a guided search. 

## Where it appears

The right hand column looks good, but it will stretch to wider containers (not recommended).

It links customers directly to the search results page in the Norfolk Community Directory based on the valued entered by the customer. 

The search widget can be generic (offering keyword and location search fields) 

or customised around a topic (offering a particular category or additional information (AI) field).  

![](/NCC-Design-System/public/img/ncd-1.jpg)

## Configure a new category or AI field

### Determine what you want to search

The NCD organises Categories and Additional Information (AI) fields with a 1-4 digit number. So to create a widget to search these category or AI topics, you first need to find what their numbers are in the NCD. 

By selecting a category or AI field in the Directory you can see these numbers in the URL. 

For example, if you select the category of "Childcare", you will see "CategoryID=73" in the URL. 

https://communitydirectory.norfolk.gov.uk/Search?CategoryId=73&SM=ServiceSearch&UDG=True&SME=True

![](/NCC-Design-System/public/img/ncd-2.jpg)

Or, for the AI field "Funded places: 2 year old funded places", the URL shows

AI%5b0%5d=130

https://communitydirectory.norfolk.gov.uk/Search?AI%5b0%5d=130&UDG=True&OrderBy=Relevance&SM=ServiceSearch&SME=True

![](/NCC-Design-System/public/img/ncd-3.jpg)

### Create a new category or AI setting in SItecore

In the Content Editor go to Content/Norfolk/Settings/Norfolk Community Directory/ and then choose either "Additional Info" or "Content". 

In this example we will create a new AI field for '2 year old funded places'

Right click on the "Additional Info" settings folder, and choose, Insert/Data

![](/NCC-Design-System/public/img/ncd-4.jpg)

A pop up asking you to name the new AI data. Give it a plain English name that makes sense.  Click OK. 

![](/NCC-Design-System/public/img/ncd-5.jpg)

The new AI data will be created. Note, the 'Value' just copies the name. 

![](/NCC-Design-System/public/img/ncd-6.jpg)

You must overwrite the Value filed with the appropriate AI number found in the NCD Url. This number lets the widget find the AI or category your want to search for. 

![](/NCC-Design-System/public/img/ncd-7.jpg)

![](/NCC-Design-System/public/img/ncd-8.jpg)

Save your work. Then you can see the new AI data in the Setting folders. 

### Create and Configure your new widget

#### Create

In Content/Norfolk/Shared Folder/Norfolk Community Directory right click to Insert a new "Norfolk Community Directory" component.

![](/NCC-Design-System/public/img/ncd-9.jpg)

Enter a name for the new widget

![](/NCC-Design-System/public/img/ncd-10.jpg)

#### Configure

Title: This is the text that shows on the Widget. It may be helpful to start the title with "Find local..."

Keyword search: This used for a generic search (no defined AI or Category number). For a basic location search, un-tick "keyword search"

![](/NCC-Design-System/public/img/ncd-11.jpg)

The Category and Additional Information drop downs contain the data values that are created in Settings. For this example, we choose, 2 year old funded childcare. 

![](/NCC-Design-System/public/img/ncd-12.jpg)

Save your work. You can now see the new component in under the Norfolk Community Directory folder. 

![](/NCC-Design-System/public/img/ncd-13.jpg)

### Add the component to a page

In Experience Editor, add a component to the right hand side bar. Choose the Norfolk Community Directory (one with the green logo)

![](/NCC-Design-System/public/img/ncd-14.jpg)

Select the component that you created from the list of all Directory widgets. 

![](/NCC-Design-System/public/img/ncd-15.jpg)

Note: The widget will not work from the experience editor. To test the widget, choose 'Versions/Other/Preview' and test if from this screen. 

![](/NCC-Design-System/public/img/ncd-16.jpg)

Save your work, submit/approve to publish. 
