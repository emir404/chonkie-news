import { NewsArticle, City } from "./types";

export const mockCities: City[] = [
  { code: "LON", name: "London", timezone: "Europe/London" },
  { code: "PAR", name: "Paris", timezone: "Europe/Paris" },
  { code: "TYO", name: "Tokyo", timezone: "Asia/Tokyo" },
  { code: "SYD", name: "Sydney", timezone: "Australia/Sydney" },
  { code: "DXB", name: "Dubai", timezone: "Asia/Dubai" },
  { code: "NYC", name: "New York", timezone: "America/New_York" },
  { code: "SIN", name: "Singapore", timezone: "Asia/Singapore" },
  { code: "BER", name: "Berlin", timezone: "Europe/Berlin" },
];

export const mockArticles: NewsArticle[] = [
  // Featured Article - Left Column
  {
    id: "1",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, nibh sit amet vehicula pretium, felis dui rhoncus est, vel dictum leo ipsum ac ligula.

Nullam non tortor volutpat, eleifend enim id, viverra velit. Curabitur in justo semper, commodo est sed, rutrum justo.

Quisque condimentum vulputate dui. Aenean ullamcorper mi at blandit egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet velit sollicitudin, commodo elit non, aliquet elit. Aenean elit metus, euismod sed ex in, vehicula fringilla erat. Fusce sit amet metus bibendum, aliquam nunc et, tincidunt purus.

Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum.`,
    imageUrl: "/mascot.png",
    city: "LON",
    publishedAt: "2025-01-31T10:00:00Z",
    category: "Technology",
    author: "John Doe",
    readingTime: 5,
    isFeatured: true,
  },
  // Article 2 - Left Column
  {
    id: "2",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum.`,
    city: "PAR",
    publishedAt: "2025-01-31T09:30:00Z",
    category: "Business",
    author: "Jane Smith",
    readingTime: 3,
    isFeatured: false,
  },
  // Article 3 - Left Column (short)
  {
    id: "3",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.`,
    city: "TYO",
    publishedAt: "2025-01-31T09:00:00Z",
    category: "Politics",
    author: "Mike Johnson",
    readingTime: 2,
    isFeatured: false,
  },
  // Article 4 - Left Column
  {
    id: "4",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum. Fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Nullam non tortor volutpat, eleifend enim id, viverra velit. Curabitur in justo semper, commodo est sed, rutrum justo.`,
    city: "SYD",
    publishedAt: "2025-01-31T08:30:00Z",
    category: "Entertainment",
    author: "Sarah Williams",
    readingTime: 4,
    isFeatured: false,
  },
  // Article 5 - Right Column
  {
    id: "5",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum.`,
    city: "DXB",
    publishedAt: "2025-01-31T08:00:00Z",
    category: "Sports",
    author: "Tom Brady",
    readingTime: 3,
    isFeatured: false,
  },
  // Article 6 - Right Column
  {
    id: "6",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum. Fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Nullam non tortor volutpat, eleifend enim id, viverra velit. Curabitur in justo semper, commodo est sed, rutrum justo.`,
    city: "NYC",
    publishedAt: "2025-01-31T07:30:00Z",
    category: "Weather",
    author: "Emily Davis",
    readingTime: 4,
    isFeatured: false,
  },
  // Featured Article - Right Column
  {
    id: "7",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, nibh sit amet vehicula pretium, felis dui rhoncus est, vel dictum leo ipsum ac ligula.

Nullam non tortor volutpat, eleifend enim id, viverra velit. Curabitur in justo semper, commodo est sed, rutrum justo.

Quisque condimentum vulputate dui. Aenean ullamcorper mi at blandit egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sit amet velit sollicitudin, commodo elit non, aliquet elit. Aenean elit metus, euismod sed ex in, vehicula fringilla erat. Fusce sit amet metus bibendum, aliquam nunc et, tincidunt purus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum.`,
    imageUrl: "/mascot.png",
    city: "SIN",
    publishedAt: "2025-01-31T07:00:00Z",
    category: "Science",
    author: "Dr. Alex Chen",
    readingTime: 5,
    isFeatured: true,
  },
  // Article 8 - Right Column
  {
    id: "8",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    content: `Phasellus id diam et tortor tristique molestie quis vel sem. Proin neque augue, lacinia id ultrices eleifend, interdum ut mauris. Duis metus enim, sodales sit amet felis sit amet, fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Quisque purus sapien, rutrum nec lectus ut, dignissim posuere tellus. Sed nec quam condimentum, ullamcorper lacus nec, egestas lectus. Vivamus nec dolor sed metus interdum congue. Cras vitae ipsum arcu. Phasellus pretium, nisl vitae fermentum lacinia, ligula odio commodo mi, ac accumsan orci augue sed ligula. Curabitur faucibus hendrerit elementum. Vestibulum orci urna, dapibus quis lectus facilisis, sagittis consectetur lectus. Phasellus ornare velit sit amet fermentum interdum. Integer faucibus dolor at massa aliquam interdum. Fringilla sagittis quam. Vivamus faucibus aliquam magna nec tempus.

Nullam non tortor volutpat, eleifend enim id, viverra velit. Curabitur in justo semper, commodo est sed, rutrum justo.`,
    city: "BER",
    publishedAt: "2025-01-31T06:30:00Z",
    category: "Health",
    author: "Lisa Martinez",
    readingTime: 4,
    isFeatured: false,
  },
];
