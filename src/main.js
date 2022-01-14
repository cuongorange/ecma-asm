import Navigo from "navigo";
import homePage from "./pages/home";
import aboutPage from "./pages/about";
import contactPage from "./pages/contact";
import newsDetailPage from "./pages/newsDetail";
import notFoundPage from "./pages/notFound";
import productPage from "./pages/product";

import AdminNewsPage from "./pages/admin/news";
import SignUp from "./pages/signup";
import NewList from "./components/admin/NewList";
const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
  document.querySelector("#app").innerHTML = content;
}

router.on({
  "/": () => {
    print(homePage.render());
  },
  "/about": () => {
    print(aboutPage.render());
  },
  "/contact": () => {
    print(contactPage.render());
  },
  "/product": () => {
    print(productPage.render());
  },
   "/newsDetail": () => {
    print(newsDetailPage.render());
  },
  "/admin/news/add": () => {
    console.log("12");
    print(AddNewsPage.render());
},
"/Signup": () => {
    print(SignUp.render());
},
"/admin/new/list": () => {
    print(NewList.render());
},

});
router.notFound(() => print(notFoundPage.render()));
router.resolve();