# Tech Myrmidons

## About Us
Too many technological developments and innovations occurring at rocket speed! Many of us do not even dare catch up with this, being already convinced that we cannot stay abreast of the current and latest buzz. If at all you do, you find yourself so lost in the sea of knowledge you just stepped in. Here is where Techmyrmidons come to help you get wet without drowning!

Techmyrmidon is a virtual technology icon who keeps itself updated with current technologies, changes its tools to match the trends, follows right experts, and, the best blogs on a particular field of interest. To taste the latest tech trends and rightly pick your associates and mentors in technology, all you need to do is to follow the Techmyrmidon of your area of expertise. Here at Techmyrmidons, you will get to know where you stand and help you keep updated with relevant tools as well as collaborate with interesting and informed people in the domain.

At this open source platform, all of us are participants in a sort of giant, crowd-sourced focus group that helps filter and propagate useful technology in our day-to-day routines. Challenge yourself to meet the Techmyrmidons, face their tech weapons, follow their grooming methods and become a Techmyrmidon yourself. You'll be surprised to see what's waiting just around the corner!

## How to Contribute 

### New Technology 
- Fork this repository to your own account.
- Inside the `src/data` there are folders which are named corresponding to the technology for which they contain the data.
- For Eg. the folder `/src/data/web` has `{year}.json`, `years.json`, `blog.json` and `follow.json`.
- If in the 2025 there is new technology. First you will be creating `2025.json` following the format of the previous years.
- Then you will be updating `years.json` 
     ```
     {
      "year": "2025",
      "url": "/data/web/2025.json"
    },
     ```
- To add the new technology update the `{year}.json` with reqired data in the given format.
    ```
    {
   "2025": [
      {
        "title": "technology name",
        "description":"technology description",
        "url": "link to landing of that technology"
        "morelink": ""
      },
    ]
    }
    ```
    
### New Blogs
- Fork this repository to your own account.
- Inside the `src/data` there are folders which are named corresponding to the technology for which they contain the data.
- Inside each folder there are files named `blog.json`
- Update it with all the required informations.
    ```
     {
    "blog": "blog link",
    "author": "blog author"
  },
    ```
### New People
- Fork this repository to your own account.
- Inside the `src/data` there are folders which are named corresponding to the technology for which they contain the data.
- Inside each folder there are files named `follow.json`
- Update it with all the required informations.
    ```
     {
      "followLink":"https://twitter.com/brad_frost",
      "photo":"BradFrost.jpg",
      "name":"Brad Frost"
    },
    ```
- Do upload the photo of the person in the folder named Images in `/src/data/{technology}/images`

### Once Completed
- After you are done, raise a Pull Request to our repository
- If you find any discrepancies in the data, feel free to open an issue. Or even raise an updation PR. It's ideal to have supporting docs, in case you are changing some core information..

## Guideilines
- Try to avoid duplicates.
- Please try to make sure that all the link and images are legit as well as working before raising the pull request.
