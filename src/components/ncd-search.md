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

## Configure a new category or AI field

### Determine what you want to search

The NCD organises Categories and Additional Information (AI) fields with a 1-4 digit number. So to create a widget to search these category or AI topics, you first need to find what their numbers are in the NCD. 

By selecting a category or AI field in the Directory you can see these numbers in the URL. 

For example, if you select the category of "Childcare", you will see "CategoryID=73" in the URL. 

https://communitydirectory.norfolk.gov.uk/Search?CategoryId=73&SM=ServiceSearch&UDG=True&SME=True

Or, for the AI field "Funded places: 2 year old funded places", the URL shows

AI%5b0%5d=130

https://communitydirectory.norfolk.gov.uk/Search?AI%5b0%5d=130&UDG=True&OrderBy=Relevance&SM=ServiceSearch&SME=True