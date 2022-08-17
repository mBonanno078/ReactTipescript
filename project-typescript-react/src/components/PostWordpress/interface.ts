
export interface Pokedex {
    id:                         number;
    date:                       Date;
    slug:                       string;
    type:                       string;
    link:                       string;
    title:                      Title;
    excerpt:                    Excerpt;
    author:                     number;
    featured_media:             number;
    jetpack_featured_media_url: string;
    parsely:                    Parsely;
    shortlink:                  string;
    rapidData:                  RapidData;
    premiumContent:             boolean;
    premiumCutoffPercent:       number;
    featured:                   boolean;
    subtitle:                   string;
    seoTitle:                   string;
    editorialContentProvider:   string;
    seoDescription:             string;
    tc_cb_mapping:              any[];
    associatedEvent:            null;
    event:                      null;
    authors:                    number[];
    hide_featured_image:        boolean;
    canonical_url:              string;
    _links:                     Links;
  }
  
  export interface Links {
    self:                          About[];
    collection:                    About[];
    about:                         About[];
    replies:                       ReplyElement[];
    "version-history":             VersionHistory[];
    "predecessor-version":         PredecessorVersion[];
    authors:                       ReplyElement[];
    author:                        ReplyElement[];
    "wp:featuredmedia":            ReplyElement[];
    "wp:attachment":               About[];
    "wp:term":                     WpTerm[];
    curies:                        Cury[];
  }
  
  export interface About {
    href: string;
  }
  
  export interface ReplyElement {
    embeddable: boolean;
    href:       string;
  }
  
  export interface Cury {
    name:      string;
    href:      string;
    templated: boolean;
  }
  
  export interface PredecessorVersion {
    id:   number;
    href: string;
  }
  
  export interface VersionHistory {
    count: number;
    href:  string;
  }
  
  export interface WpTerm {
    taxonomy:   string;
    embeddable: boolean;
    href:       string;
  }
  
  export interface Excerpt {
    rendered:  string;
    protected: boolean;
  }
  
  export interface Parsely {
    version:  string;
    meta:     Meta;
    rendered: string;
  }
  
  export interface Meta {
    "@context":       string;
    "@type":          string;
    mainEntityOfPage: MainEntityOfPage;
    headline:         string;
    url:              string;
    thumbnailUrl:     string;
    image:            Image;
    dateCreated:      Date;
    datePublished:    Date;
    dateModified:     Date;
    articleSection:   string;
    author:           MetaAuthor[];
    creator:          string[];
    publisher:        Publisher;
    keywords:         string[];
  }
  
  export interface MetaAuthor {
    "@type": string;
    name:    string;
  }
  
  export interface Image {
    "@type": string;
    url:     string;
  }
  
  export interface MainEntityOfPage {
    "@type": string;
    "@id":   string;
  }
  
  export interface Publisher {
    "@type": string;
    name:    string;
    logo:    Logo;
  }
  
  export interface Logo {
    "@type": string;
    url:     string;
    width:   string;
    height:  string;
  }
  
  export interface RapidData {
    pt:  string;
    pct: string;
  }
  
  export interface Title {
    rendered: string;
  }
  