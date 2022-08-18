export {}

declare global {
  interface FlickrPhoto {
    title: string
    link: Link[]
    id: string
    published: Date | string
    updated: Date | string
    "flickr:date_taken": Date | string
    "dc:date.Taken": Date | string
    content: Content
    author: Author
    displaycategories: string
    category: CategoryItem[] | CategoryItem
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
    [key: string]: string
  }
}
