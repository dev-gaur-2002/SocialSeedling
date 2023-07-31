
# SocialSeedlings
Wannabe instagram clone

```href
https://social-seedlings123.vercel.app/
```


-- data chaching 
-- grid to list view 
-- responsiveness



## Features

Frontend features:
- Access to millions of photos using unsplash API
- Infinite scrolling
- User profile access
- User Gallery in both list and grid view
- Cross platform

## Technologies and Library used
- Next.js
- Unsplash API
- React Query
- image fallback issue


## Navigations
1. By default you arrive at the Feeds section of SocialSeedlings 
2. As you click on any user's profile picture you get directed to its respective profile, where you can see his work in  both field and grid view.




## Configuration

1. There is only one environment variable which contains the access key which is personal to the user and the app using it.

 "NEXT_PUBLIC_ACCESS_KEY"= "MY ACCESS KEY"

2. Later these were moved to the production in vercel.

#### How to Use:

- Just open the link given above and enjoy scrolling.
- To know more about the owner of the photo click on its avatar which redirects you to the 

#### Infinite Scroll

 This feature allows user to give numerous number of scrolls in their feeds so that they are never out of content.   


## API Reference

#### UNSPLASH
```
htTps://unsplash.com/documentation
```

<sup><sub>*Credits to Unsplash*</sub></sup>


## Documentation


### Implementation choices:
#### Framework:

- As directed in the description Next.js is used to develop this webapp. It was also a preferred framework for me because of its features like  automatic code-splitting, pre-fetching data, lazy-loading resources, good folder structure and most important of all its ease of deployment with vercel.

#### Infinite Scrolling:

-For the first render only 10 photos are generated using SSR and as soon as the last photo is visible on the screen, the API is called again giving us more 10 photos and this goes on until the user reaches a threshold or all the images are accessed.    

#### API Security:

- Access Key: unsplash API is scured with access key, secret key and a authorization code. In our case, we required only public data of the users posting the image hence we required only a access key.

### Caching Data

- Used memory-cache to cache the user data, did'nt used it for random aphoto api generation as it would give same response every time the api is called, but we need a different response everytime.



### Challeneges faced:

- Unsplash's access key has a limit to a number of requests per hour (50 req/hr) which was a problem for me because there were many cases when my API was called innumerous times resulting in network clogage and timeout of API. This led to delay in implementing features for the project.

- Implementing infinte scroll feature as it was my first time doing it.**Resolved** After a lot of surfing through blogs and brainstorming it was also solved.


### Improvements I would have made with more time:
- Implement all the brownie points.
