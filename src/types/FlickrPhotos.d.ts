export {}

declare global {
  interface FlickrPhoto {
    title: string
    link: Link[]
    id: string
    published: Date
    updated: Date
    "flickr:date_taken": Date
    "dc:date.Taken": Date
    content: Content
    author: Author
    displaycategories: string
    category: CategoryItem[]
  }

  interface Link {
    rel: string
    type: string
    href: string
  }

  interface Content {
    type: string
    "_@attribute": string
  }

  interface Author {
    name: string
    uri: string
    "flickr:nsid": string
    "flickr:buddyicon": string
  }

  interface CategoryItem {
    term: string
    scheme: string
  }
}
