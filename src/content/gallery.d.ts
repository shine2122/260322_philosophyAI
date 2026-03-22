declare module '*/gallery.json' {
  interface GalleryItem {
    id: string
    title: string
    tag: string
    image: string
  }
  interface GalleryData {
    items: GalleryItem[]
  }
  const data: GalleryData
  export default data
}
