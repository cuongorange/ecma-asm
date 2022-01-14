import banner from "../components/banner";
import newsList from "../components/newsList";

const homePage = {
    render(){
        return/*html*/`
        <div class="banner">
        ${banner.render}
        </div>
        <div class="news">
        ${newsList.render}
        </div>
        `;
    },
};
export default homePage;
